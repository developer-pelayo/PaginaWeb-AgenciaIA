"use client";

import { Section, Reveal } from "@/lib/motion";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  return (
    <Section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col justify-end px-6 md:px-10 pb-16 md:pb-24 pt-32 overflow-hidden"
    >
      {/* Large background watermark */}
      <div className="absolute top-[15%] right-[-5%] watermark opacity-40">
        IA
      </div>

      {/* Accent line — top left */}
      <div className="absolute top-0 left-6 md:left-10 w-px h-32 bg-gradient-to-b from-[var(--color-lime)] to-transparent" />

      <div className="relative z-10 max-w-[1200px] mx-auto w-full">
        <Reveal>
          <p className="text-[13px] font-500 text-[var(--color-lime)] tracking-[0.08em] uppercase mb-8">
            Agencia de automatización con IA
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.8rem,7.5vw,6.5rem)] font-800 leading-[0.92] tracking-[-0.04em] max-w-[900px]">
            Automatizamos
            <br />
            tu negocio con
            <br />
            <span className="text-[var(--color-lime)]">inteligencia artificial.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
            <p className="text-[16px] md:text-[18px] text-[var(--color-text-2)] leading-[1.65] max-w-[420px]">
              Da igual tu sector. Si hay un proceso manual que te roba tiempo,
              nosotros lo automatizamos. Desde páginas web hasta asistentes de
              voz con IA.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://calendly.com/atomatica/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-[var(--color-lime)] text-[var(--color-bg)] text-[14px] font-600 px-6 py-3 rounded-lg hover:bg-[var(--color-lime)]/90 transition-colors"
              >
                Cuéntanos tu proyecto
                <ArrowDownRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>
              <a
                href="#servicios"
                className="text-[14px] font-500 text-[var(--color-text-2)] hover:text-[var(--color-text)] border border-[var(--color-border)] px-6 py-3 rounded-lg transition-colors hover:border-[var(--color-border-light)]"
              >
                Ver servicios
              </a>
            </div>
          </div>
        </Reveal>

        {/* Sector marquee */}
        <Reveal delay={0.3}>
          <div className="mt-20 md:mt-28 overflow-hidden border-t border-[var(--color-border)] pt-6">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...Array(2)].map((_, dupeIdx) => (
                <div key={dupeIdx} className="flex items-center gap-8 mr-8">
                  {[
                    "Ecommerce",
                    "Salud",
                    "Hostelería",
                    "Inmobiliaria",
                    "Legal",
                    "Educación",
                    "Retail",
                    "Finanzas",
                    "Logística",
                    "SaaS",
                  ].map((sector) => (
                    <span
                      key={`${dupeIdx}-${sector}`}
                      className="text-[13px] text-[var(--color-text-3)] font-500 uppercase tracking-[0.08em] flex items-center gap-8"
                    >
                      {sector}
                      <span className="w-1 h-1 rounded-full bg-[var(--color-border-light)]" />
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
