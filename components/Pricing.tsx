"use client";

import { Section, Reveal } from "@/lib/motion";
import { ArrowDownRight } from "lucide-react";

export default function Pricing() {
  return (
    <Section id="precios" className="py-28 md:py-40 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-20">
          <Reveal direction="left">
            <p className="text-[13px] font-500 text-[var(--color-lime)] tracking-[0.08em] uppercase">
              Precios
            </p>
          </Reveal>
          <Reveal>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4.5vw,3.8rem)] font-800 leading-[0.95] tracking-[-0.03em] max-w-[520px]">
              Cada proyecto es diferente.
              <br />
              <span className="text-[var(--color-text-3)]">Tu presupuesto también.</span>
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="border border-[var(--color-border)] rounded-lg overflow-hidden">
            {/* Stats row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[var(--color-border)]">
              {[
                { val: "48h", label: "Propuesta lista" },
                { val: "100%", label: "Precio cerrado" },
                { val: "0€", label: "Consulta inicial" },
              ].map((stat) => (
                <div key={stat.val} className="p-8 md:p-10 text-center">
                  <p className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-800 tracking-[-0.04em] text-[var(--color-text)]">
                    {stat.val}
                  </p>
                  <p className="mt-1 text-[13px] text-[var(--color-text-3)] font-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA area */}
            <div className="border-t border-[var(--color-border)] bg-[var(--color-surface)] p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <p className="text-[15px] text-[var(--color-text-2)] leading-[1.7] max-w-[440px]">
                No tenemos paquetes cerrados porque cada negocio necesita algo
                distinto. Cuéntanos qué necesitas y en 48 horas tienes una
                propuesta detallada con precio cerrado. Sin compromiso.
              </p>
              <a
                href="https://calendly.com/atomatica/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-[var(--color-lime)] text-[var(--color-bg)] text-[14px] font-600 px-6 py-3 rounded-lg hover:bg-[var(--color-lime)]/90 transition-colors whitespace-nowrap flex-shrink-0"
              >
                Pide tu presupuesto gratis
                <ArrowDownRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
