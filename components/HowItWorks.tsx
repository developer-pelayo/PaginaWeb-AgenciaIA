"use client";

import { Section, Reveal } from "@/lib/motion";

const steps = [
  {
    num: "01",
    title: "Nos cuentas qué necesitas",
    text: "Una llamada de 15 minutos donde entendemos tu negocio, tus problemas y lo que quieres conseguir.",
  },
  {
    num: "02",
    title: "Diseñamos la solución",
    text: "Te proponemos exactamente qué vamos a construir, cómo funciona y cuánto cuesta. Sin sorpresas.",
  },
  {
    num: "03",
    title: "Lo construimos todo",
    text: "Nos encargamos de todo: desarrollo, configuración, integraciones. Tú no tocas nada técnico.",
  },
  {
    num: "04",
    title: "Te lo entregamos funcionando",
    text: "Lo probamos juntos, ajustamos lo que haga falta, y te damos soporte continuo.",
  },
];

export default function HowItWorks() {
  return (
    <Section id="como-funciona" className="py-28 md:py-40 px-6 md:px-10 relative overflow-hidden">
      {/* Large watermark */}
      <div className="absolute bottom-[-5%] left-[-5%] watermark opacity-30">
        PROCESO
      </div>

      <div className="max-w-[1200px] mx-auto relative">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-20">
          <Reveal direction="left">
            <p className="text-[13px] font-500 text-[var(--color-lime)] tracking-[0.08em] uppercase">
              El proceso
            </p>
          </Reveal>
          <Reveal>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4.5vw,3.8rem)] font-800 leading-[0.95] tracking-[-0.03em] max-w-[480px]">
              Así trabajamos contigo
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-[var(--color-border)] border border-[var(--color-border)]">
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.08}>
              <div className="bg-[var(--color-bg)] p-8 md:p-7 h-full group hover:bg-[var(--color-surface)] transition-colors duration-300">
                <span className="font-[family-name:var(--font-display)] text-[40px] md:text-[48px] font-800 text-[var(--color-surface-2)] leading-none group-hover:text-[var(--color-lime-dim)] transition-colors duration-300 block mb-6">
                  {s.num}
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-[17px] font-700 leading-[1.2] tracking-[-0.01em] mb-3">
                  {s.title}
                </h3>
                <p className="text-[14px] text-[var(--color-text-2)] leading-[1.65]">
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
