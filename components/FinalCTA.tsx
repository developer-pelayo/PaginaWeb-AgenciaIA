"use client";

import { Section, Reveal } from "@/lib/motion";

export default function FinalCTA() {
  return (
    <Section className="px-6 md:px-10 py-0">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          {/* Dark inverted block */}
          <div
            className="relative overflow-hidden rounded-2xl px-10 py-16 md:px-16 md:py-20"
            style={{ background: "var(--color-text)" }}
          >
            {/* Background texture */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
            {/* Blue glow */}
            <div
              className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 65%)" }}
            />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
              <div className="max-w-[520px]">
                <p className="text-[11px] font-600 tracking-[0.12em] uppercase mb-6" style={{ color: "rgba(255,255,255,0.4)" }}>
                  Una última cosa
                </p>
                <h2
                  className="font-[family-name:var(--font-display)] font-800 tracking-[-0.03em] leading-[0.97] text-white"
                  style={{ fontSize: "clamp(2.2rem,4.5vw,3.8rem)" }}
                >
                  Esta noche alguien
                  <br />
                  va a escribir a tu clínica.
                  <br />
                  <span style={{ color: "rgba(255,255,255,0.35)" }}>¿Les vas a responder?</span>
                </h2>
                <p className="mt-6 text-[15px] leading-[1.7]" style={{ color: "rgba(255,255,255,0.55)" }}>
                  15 minutos para contarnos tu situación. Propuesta con precio
                  cerrado en 48 horas. Sin compromiso.
                </p>
              </div>

              <div className="flex flex-col gap-3 flex-shrink-0">
                <a
                  href="https://calendly.com/atomatica/demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 bg-white text-[var(--color-text)] text-[14px] font-700 px-7 py-4 rounded-xl hover:bg-[var(--color-bg)] transition-colors duration-200 whitespace-nowrap"
                >
                  Agenda tu consulta gratuita
                  <svg className="transition-transform group-hover:translate-x-0.5" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 12L12 2M12 2H5M12 2v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <p className="text-[12px] text-center" style={{ color: "rgba(255,255,255,0.3)" }}>
                  Sin tarjeta · Sin compromiso
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
