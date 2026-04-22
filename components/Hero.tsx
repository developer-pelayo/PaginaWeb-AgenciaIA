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
            Automatización con IA para clínicas
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.8rem,7.5vw,6.5rem)] font-800 leading-[0.92] tracking-[-0.04em] max-w-[900px]">
            Tus pacientes escriben
            <br />
            a las 10 de la noche.
            <br />
            <span className="text-[var(--color-lime)]">¿Quién responde?</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
            <p className="text-[16px] md:text-[18px] text-[var(--color-text-2)] leading-[1.65] max-w-[420px]">
              Ponemos un recepcionista con IA en el WhatsApp de tu clínica.
              Atiende 24/7, agenda citas y resuelve dudas. Sin que tu equipo
              tenga que hacer nada.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://calendly.com/atomatica/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-[var(--color-lime)] text-[var(--color-bg)] text-[14px] font-600 px-6 py-3 rounded-lg hover:bg-[var(--color-lime)]/90 transition-colors"
              >
                Cuéntanos tu clínica
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
      </div>
    </Section>
  );
}
