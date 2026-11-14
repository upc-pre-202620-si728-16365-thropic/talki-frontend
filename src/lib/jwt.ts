/**
 * Decodificación (sin verificación) del JWT emitido por identity-service.
 * La verificación de firma la hacen los backends; aquí solo leemos claims.
 * Claims relevantes: `sub` = email, `userId` = id del usuario, `exp`.
 */

export interface TalkiJwtPayload {
  sub?: string; // email
  userId?: string;
  exp?: number; // epoch seconds
  iat?: number;
}

function base64UrlDecode(input: string): string {
  const padded = input.replace(/-/g, "+").replace(/_/g, "/");
  const pad = padded.length % 4 === 0 ? "" : "=".repeat(4 - (padded.length % 4));
  const b64 = padded + pad;
  // Edge-safe: usa atob, disponible en runtime edge y node moderno.
  const binary = atob(b64);
  const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

export function decodeJwt(token: string): TalkiJwtPayload | null {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return null;
    return JSON.parse(base64UrlDecode(parts[1])) as TalkiJwtPayload;
  } catch {
    return null;
  }
}

export function isExpired(payload: TalkiJwtPayload, skewSeconds = 0): boolean {
  if (!payload.exp) return false;
  return payload.exp * 1000 <= Date.now() - skewSeconds * 1000;
}

export interface TalkiUser {
  userId: string;
  email: string;
}

export function userFromToken(token: string): TalkiUser | null {
  const payload = decodeJwt(token);
  if (!payload?.userId || !payload.sub) return null;
  if (isExpired(payload)) return null;
  return { userId: payload.userId, email: payload.sub };
}

/**
 * identity-service responde `accessToken` (+ `refreshToken`) desde SB1-02;
 * se acepta `token` por compatibilidad con la versión anterior del contrato.
 */
export function accessTokenFrom(data: { accessToken?: string; token?: string } | null): string | null {
  return data?.accessToken ?? data?.token ?? null;
}

/** Vida de la cookie alineada con el `exp` del access token (mínimo 60 s). */
export function cookieMaxAgeFor(token: string, fallbackSeconds = 15 * 60): number {
  const exp = decodeJwt(token)?.exp;
  if (!exp) return fallbackSeconds;
  return Math.max(60, Math.floor(exp - Date.now() / 1000));
}
