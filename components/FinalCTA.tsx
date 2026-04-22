"use client";

import { Section, Reveal } from "@/lib/motion";
import { ArrowDownRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <Section className="py-28 md:py-40 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="border border-[var(--color-border)] rounded-lg bg-[var(--color-surface)] p-10 md:p-16 lg:p-20 relative overflow-hidden">
            {/* Accent corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-lime)] opacity-[0.04] blur-[60px]" />
            <div className="absolute top-0 right-0 w-px h-24 bg-gradient-to-b from-[var(--color-lime-muted)] to-transparent" />
            <div className="absolute top-0 right-0 h-px w-24 bg-gradient-to-l from-[var(--color-lime-muted)] to-transparent" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
              <div className="max-w-[540px]">
                <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4.5vw,3.2rem)] font-800 leading-[0.95] tracking-[-0.03em]">
                  Tu competencia ya se está automatizando.
                  <br />
                  <span className="text-[var(--color-lime)]">¿Y tú?</span>
                </h2>
                <p className="mt-6 text-[16px] text-[var(--color-text-2)] leading-[1.7]">
                  Cuéntanos qué necesitas en 15 minutos. Te decimos exactamente
                  cómo la IA puede transformar tu negocio.
                </p>
              </div>

              <div className="flex flex-col items-start lg:items-end gap-3">
                <a
                  href="https://calendly.com/atomatica/demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 bg-[var(--color-lime)] text-[var(--color-bg)] text-[15px] font-600 px-7 py-3.5 rounded-lg hover:bg-[var(--color-lime)]/90 transition-colors"
                >
                  Agenda tu consulta gratuita
                  <ArrowDownRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  />
                </a>
                <p className="text-[13px] text-[var(--color-text-3)]">
                  Sin compromiso. Sin tarjeta. Solo 15 minutos.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
