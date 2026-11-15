import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import {
  ArrowRight,
  Briefcase,
  ChartLine,
  Flame,
  GraduationCap,
  Mic,
  Presentation,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { getCurrentUser } from "@/lib/auth";
import { TalkiLogo } from "@/components/landing/talki-logo";
import { ProductVideo } from "@/components/landing/product-video";

export const metadata: Metadata = {
  title: "Talki · Tu coach de oratoria con inteligencia artificial",
  description:
    "Practica exposiciones, entrevistas y sustentaciones con un coach que te escucha en tiempo real y te da feedback sobre ritmo, muletillas y fluidez.",
};

const STEPS = [
  {
    icon: Mic,
    title: "Elige y empieza a hablar",
    text: "Escoge el modo de práctica y habla. Talki te escucha en tiempo real y transcribe cada palabra.",
  },
  {
    icon: Sparkles,
    title: "Conversa con tu coach",
    text: "El coach responde como lo haría una persona: te pregunta, te repregunta y te señala cuándo hacer una pausa.",
  },
  {
    icon: ChartLine,
    title: "Mejora con cada intento",
    text: "Recibe un puntaje con tu ritmo, muletillas y fluidez, y un consejo concreto para tu siguiente práctica.",
  },
];

const MODES = [
  { icon: Zap, title: "Exposición", text: "Ensaya tu presentación de clase en minutos." },
  { icon: Briefcase, title: "Entrevista", text: "Responde con seguridad bajo presión." },
  { icon: GraduationCap, title: "Defensa de tesis", text: "Sustenta frente a un jurado exigente." },
  { icon: Presentation, title: "Escenario", text: "Cualquier situación, a tu medida." },
];

const WAVE = [38, 70, 52, 64, 46, 80, 58, 34, 72, 50, 66, 40, 84, 56, 44, 76, 60, 36, 68, 48, 74, 54, 42, 78, 62, 30, 70, 50];

export default async function Home() {
  const user = await getCurrentUser();
  if (user) redirect("/dashboard");

  return (
    <div className="min-h-screen bg-[#F7F8FC] text-slate-900">
      {/* Navegación */}
      <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-[#F7F8FC]/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <TalkiLogo size={34} />
            <span className="hidden text-xl font-bold tracking-tight min-[400px]:inline">Talki</span>
          </Link>
          <div className="ml-auto hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
            <a href="#video" className="hover:text-slate-900">Video</a>
            <a href="#como-funciona" className="hover:text-slate-900">Cómo funciona</a>
            <a href="#modos" className="hover:text-slate-900">Modos</a>
          </div>
          <div className="ml-auto flex items-center gap-2 md:ml-0">
            <Link href="/login" className="whitespace-nowrap rounded-lg px-2.5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200/60 sm:px-3">
              Iniciar sesión
            </Link>
            <Link href="/register" className="whitespace-nowrap rounded-lg bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 sm:px-4">
              Crear cuenta
            </Link>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute -top-40 right-[-10%] size-[560px] rounded-full bg-orange-300/30 blur-[120px]" />
          <div className="pointer-events-none absolute -left-40 top-40 size-[480px] rounded-full bg-violet-300/30 blur-[120px]" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-orange-600">
                <Sparkles className="size-3.5" /> Coach de oratoria con IA
              </p>
              <h1 className="mt-6 text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                Ensaya tus ideas.
                <br />
                <span className="bg-gradient-to-r from-violet-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                  Hazlas escuchar.
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
                Practica exposiciones, entrevistas y sustentaciones con un coach que te escucha en tiempo real y te dice
                exactamente qué mejorar: ritmo, muletillas y fluidez.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:-translate-y-0.5 hover:bg-orange-600"
                >
                  Empezar a practicar <ArrowRight className="size-4" />
                </Link>
                <a
                  href="#video"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-base font-semibold text-slate-800 transition hover:border-slate-300"
                >
                  Ver el video
                </a>
              </div>
              <p className="mt-6 text-sm text-slate-500">En español · Web y móvil · Tú controlas tus datos</p>
            </div>

            {/* Tarjeta de reporte */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-violet-500/20 via-pink-500/20 to-orange-500/20 blur-2xl" />
              <div className="relative rounded-3xl border border-slate-200 bg-white p-7 shadow-2xl shadow-slate-900/10">
                <div className="flex items-center justify-between">
                  <p className="font-semibold">Defensa de tesis</p>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">Reporte de ejemplo</span>
                </div>
                <div className="mt-5 flex items-end gap-2">
                  <span className="bg-gradient-to-br from-violet-600 via-pink-500 to-orange-500 bg-clip-text text-7xl font-extrabold tracking-tight text-transparent">
                    86
                  </span>
                  <span className="mb-3 text-lg font-semibold text-slate-400">/100</span>
                  <span className="mb-3 ml-auto rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">+9 vs. promedio</span>
                </div>
                <div className="mt-6 flex h-20 items-center gap-[5px]" aria-hidden>
                  {WAVE.map((h, i) => (
                    <span
                      key={i}
                      className="w-full rounded-full bg-gradient-to-t from-pink-500 to-orange-400"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <dl className="mt-6 grid grid-cols-3 gap-3 text-center">
                  {[
                    ["Ritmo", "142", "ppm"],
                    ["Muletillas", "3", "en 4 min"],
                    ["Fluidez", "88", "%"],
                  ].map(([k, v, u]) => (
                    <div key={k} className="rounded-2xl bg-slate-50 px-2 py-3">
                      <dt className="text-xs text-slate-500">{k}</dt>
                      <dd className="mt-1 text-2xl font-bold tracking-tight">
                        {v} <span className="text-xs font-medium text-slate-400">{u}</span>
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-5 rounded-2xl bg-gradient-to-r from-violet-500 via-pink-500 to-orange-500 p-px">
                  <div className="rounded-[15px] bg-white px-4 py-3">
                    <p className="flex items-center gap-1.5 text-sm font-semibold text-pink-600">
                      <Sparkles className="size-4" /> Coach IA
                    </p>
                    <p className="mt-1 text-sm text-slate-700">Haz una pausa breve antes de presentar tu hipótesis: le dará más peso.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video */}
        <section id="video" className="scroll-mt-16 bg-[#07070B] py-24 text-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-400">Conoce Talki</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Tu próxima exposición, en 71 segundos</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
                Mira cómo Talki te escucha, analiza tu discurso y te acompaña sesión a sesión.
              </p>
            </div>
            <div className="mt-12">
              <ProductVideo />
            </div>
          </div>
        </section>

        {/* Cómo funciona */}
        <section id="como-funciona" className="scroll-mt-16 py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="max-w-2xl text-4xl font-bold tracking-tight">Ensayar solo no te dice qué falla. Talki sí.</h2>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {STEPS.map((s, i) => (
                <div key={s.title} className="rounded-3xl border border-slate-200 bg-white p-7">
                  <div className="flex items-center justify-between">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 via-pink-500 to-orange-500 text-white">
                      <s.icon className="size-6" />
                    </span>
                    <span className="text-sm font-semibold text-slate-300">0{i + 1}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-600">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modos */}
        <section id="modos" className="scroll-mt-16 pb-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-4xl font-bold tracking-tight">Para cada momento que importa</h2>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {MODES.map((m) => (
                <div key={m.title} className="group rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5">
                  <m.icon className="size-7 text-orange-500" />
                  <h3 className="mt-10 text-xl font-semibold">{m.title}</h3>
                  <p className="mt-2 text-slate-600">{m.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-8">
                <p className="text-sm font-semibold text-orange-600">Primeros ciclos</p>
                <h3 className="mt-2 text-2xl font-semibold">Exposiciones de clase con más seguridad</h3>
                <p className="mt-3 text-slate-600">Ensayos guiados, lenguaje claro y recomendaciones breves que puedes aplicar en tu siguiente intento.</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-8">
                <p className="text-sm font-semibold text-violet-600">Ciclos avanzados</p>
                <h3 className="mt-2 text-2xl font-semibold">Entrevistas y sustentaciones bajo presión</h3>
                <p className="mt-3 text-slate-600">Simulaciones contextualizadas con preguntas y repreguntas para preparar tus argumentos.</p>
              </div>
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-3">
              {[
                { icon: Flame, title: "Rachas y logros", text: "Mantén el hábito de practicar cada semana." },
                { icon: ChartLine, title: "Progreso visible", text: "Sigue cómo sube tu puntaje sesión a sesión." },
                { icon: ShieldCheck, title: "Tus datos, tu decisión", text: "Consentimiento de voz y control sobre tus grabaciones." },
              ].map((f) => (
                <div key={f.title} className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-6">
                  <f.icon className="mt-0.5 size-6 shrink-0 text-pink-500" />
                  <div>
                    <h3 className="font-semibold">{f.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Llamado final */}
        <section className="px-4 pb-24 sm:px-6">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[36px] bg-gradient-to-br from-violet-600 via-pink-500 to-orange-500 px-8 py-16 text-center text-white sm:px-16">
            <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-white/20 blur-3xl" />
            <TalkiLogo size={64} className="mx-auto rounded-2xl shadow-2xl ring-4 ring-white/30" />
            <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">Habla con confianza.</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">Crea tu cuenta y haz tu primera práctica hoy.</p>
            <Link
              href="/register"
              className="mt-9 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-base font-semibold text-slate-900 shadow-xl transition hover:-translate-y-0.5"
            >
              Empezar a practicar <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-slate-500 sm:flex-row sm:px-6">
          <div className="flex items-center gap-2">
            <TalkiLogo size={22} />
            <span>Thropic · Talki · Práctica de comunicación oral en español</span>
          </div>
          <div className="flex gap-6">
            <Link href="/login" className="hover:text-slate-900">Iniciar sesión</Link>
            <Link href="/register" className="hover:text-slate-900">Crear cuenta</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
