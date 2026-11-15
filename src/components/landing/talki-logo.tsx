import { useId } from "react";

/** Logo de Talki en vector: degradado de marca, persona con audífonos y globo de diálogo. */
export function TalkiLogo({ size = 36, className }: { size?: number; className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="Talki"
    >
      <defs>
        <linearGradient id={`bg${id}`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#8B5CF6" />
          <stop offset="0.5" stopColor="#EC4899" />
          <stop offset="1" stopColor="#F97316" />
        </linearGradient>
        <radialGradient id={`hl${id}`} cx="0.3" cy="0.15" r="0.8">
          <stop offset="0" stopColor="#fff" stopOpacity="0.28" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="100" height="100" rx="24" fill={`url(#bg${id})`} />
      <rect width="100" height="100" rx="24" fill={`url(#hl${id})`} />
      <circle cx="40" cy="45.5" r="9.6" fill="#fff" />
      <path d="M21 77 C21 63 29 58.5 40 58.5 C51 58.5 59 63 59 77 Z" fill="#fff" />
      <path d="M25.5 47.5 A14.5 14.5 0 0 1 54.5 47.5" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" />
      <rect x="22.5" y="44.5" width="6" height="10" rx="3" fill="#fff" />
      <path d="M25.5 54.5 Q26.5 61 34 60.5" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M62 22 H78 A8 8 0 0 1 86 30 V36 A8 8 0 0 1 78 44 H66 L59 49 L61 43 A8 8 0 0 1 54 36 V30 A8 8 0 0 1 62 22 Z" fill="#fff" />
      {[62.5, 70, 77.5].map((x) => (
        <circle key={x} cx={x} cy="33" r="2.1" fill="#EC4899" />
      ))}
    </svg>
  );
}
