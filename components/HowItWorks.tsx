"use client";

import { Section, Reveal } from "@/lib/motion";

const steps = [
  {
    num: "01",
    title: "Nos cuentas cómo funciona tu clínica",
    text: "15 minutos. Nos explicas cómo gestionas las citas, qué preguntan tus pacientes y qué quieres automatizar.",
    duration: "15 min",
  },
  {
    num: "02",
    title: "Configuramos el agente con tus datos",
    text: "Cargamos tus tratamientos, precios, horarios y política de cancelaciones. El agente aprende tu clínica, no una genérica.",
    duration: "2–3 días",
  },
  {
    num: "03",
    title: "Lo probamos juntos antes de activarlo",
    text: "Antes de que lo vea un solo paciente, lo testamos contigo. Ajustamos lo que haga falta hasta que funcione exactamente como quieres.",
    duration: "1 semana",
  },
  {
    num: "04",
    title: "Lo activamos y tú te olvidas",
    text: "Funciona solo. Nosotros lo monitorizamos y ajustamos cuando hace falta. Tú solo ves los resultados.",
    duration: "Para siempre",
  },
];

export default function HowItWorks() {
  return (
    <Section id="como-funciona" className="py-20 md:py-28 px-6 md:px-10 bg-[var(--color-surface)]">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-14 pb-8 border-b border-[var(--color-border)]">
          <Reveal>
            <h2 className="font-[family-name:var(--font-display)] font-800 tracking-[-0.03em] leading-[0.97]"
              style={{ fontSize: "clamp(1.9rem,3.8vw,3.2rem)" }}>
              Así trabajamos contigo
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-[12px] font-600 text-[var(--color-text-3)] tracking-[0.1em] uppercase hidden md:block">
              El proceso
            </p>
          </Reveal>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.07}>
              <div className={`relative p-7 md:p-8 h-full ${i < steps.length - 1 ? "md:border-r border-[var(--color-border)]" : ""} border-b md:border-b-0 border-[var(--color-border)]`}>

                {/* Step connector dots — desktop */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute right-0 top-[52px] translate-x-1/2 z-10">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-border)]" />
                  </div>
                )}

                {/* Duration badge */}
                <div className="inline-flex items-center gap-1.5 mb-6">
                  <span className="w-1 h-1 rounded-full bg-[var(--color-lime)]" />
                  <span className="text-[10px] font-600 text-[var(--color-lime)] tracking-[0.08em] uppercase">{s.duration}</span>
                </div>

                <span className="font-[family-name:var(--font-display)] text-[11px] font-700 text-[var(--color-text-3)] tracking-[0.08em] block mb-3">
                  {s.num}
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-[16px] md:text-[17px] font-700 leading-[1.25] tracking-[-0.01em] mb-3">
                  {s.title}
                </h3>
                <p className="text-[13px] text-[var(--color-text-2)] leading-[1.65]">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </Section>
  );
}
