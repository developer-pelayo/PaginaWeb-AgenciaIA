"use client";

import { Section, Reveal } from "@/lib/motion";

export default function Pricing() {
  return (
    <Section id="precios" className="py-20 md:py-28 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto">

        <div className="flex items-end justify-between mb-14 pb-8 border-b border-[var(--color-border)]">
          <Reveal>
            <h2 className="font-[family-name:var(--font-display)] font-800 tracking-[-0.03em] leading-[0.97]"
              style={{ fontSize: "clamp(1.9rem,3.8vw,3.2rem)" }}>
              Precio a medida.
              <br />
              <span className="text-[var(--color-text-3)]">Sin sorpresas.</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-[12px] font-600 text-[var(--color-text-3)] tracking-[0.1em] uppercase hidden md:block">
              Precios
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — explanation */}
          <Reveal delay={0.05}>
            <p className="text-[16px] text-[var(--color-text-2)] leading-[1.75] mb-8">
              Cada clínica es diferente — el volumen de pacientes, la complejidad de la agenda y los servicios que necesitas automatizar varían. Por eso no tenemos paquetes cerrados.
            </p>
            <p className="text-[16px] text-[var(--color-text-2)] leading-[1.75]">
              Cuéntanos tu situación y en <strong className="text-[var(--color-text)] font-600">48 horas</strong> te mandamos una propuesta detallada con precio cerrado — setup y mensualidad incluidos. Sin costes ocultos.
            </p>

            <div className="mt-10">
              <a
                href="https://calendly.com/atomatica/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 bg-[var(--color-lime)] text-white text-[14px] font-600 px-7 py-3.5 rounded-xl hover:shadow-[0_8px_24px_rgba(37,99,235,0.3)] transition-all duration-200"
              >
                Pide tu presupuesto gratis
                <svg className="transition-transform group-hover:translate-x-0.5" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 12L12 2M12 2H5M12 2v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <p className="mt-3 text-[12px] text-[var(--color-text-3)]">Sin compromiso · Sin tarjeta</p>
            </div>
          </Reveal>

          {/* Right — three facts */}
          <Reveal delay={0.12}>
            <div className="grid grid-cols-1 divide-y divide-[var(--color-border)] border border-[var(--color-border)] rounded-2xl overflow-hidden">
              {[
                {
                  val: "48h",
                  label: "Propuesta lista",
                  sub: "Con precio cerrado y desglose detallado",
                },
                {
                  val: "0 €",
                  label: "Consulta inicial",
                  sub: "La llamada de diagnóstico es completamente gratuita",
                },
                {
                  val: "Sin",
                  label: "Permanencia",
                  sub: "Puedes cancelar cuando quieras, sin letra pequeña",
                },
              ].map((s) => (
                <div key={s.val} className="flex items-center gap-6 px-7 py-5 bg-[var(--color-surface)] hover:bg-[var(--color-surface-2)] transition-colors duration-200">
                  <p className="font-[family-name:var(--font-display)] text-[28px] font-800 tracking-[-0.04em] text-[var(--color-lime)] leading-none flex-shrink-0 w-16">
                    {s.val}
                  </p>
                  <div>
                    <p className="font-[family-name:var(--font-display)] text-[15px] font-700 tracking-[-0.01em] text-[var(--color-text)]">{s.label}</p>
                    <p className="text-[12px] text-[var(--color-text-3)] mt-0.5 leading-snug">{s.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

      </div>
    </Section>
  );
}
