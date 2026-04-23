"use client";

import { Section, Reveal } from "@/lib/motion";

const pains = [
  {
    num: "01",
    title: "Mensajes sin responder fuera de horario",
    text: "Un paciente pregunta a las 10 de la noche si tienes hueco mañana. Nadie responde. Al día siguiente ya ha llamado a otra clínica.",
    aside: "68% de consultas llegan fuera del horario de recepción",
  },
  {
    num: "02",
    title: "Tu recepcionista no puede estar en todo",
    text: "Teléfono, WhatsApp, la sala de espera. Cuando hay lío, los mensajes esperan. Y un paciente que espera respuesta busca en otro sitio.",
    aside: "12 min de media hasta responder un WhatsApp",
  },
  {
    num: "03",
    title: "Pacientes que llevan meses sin volver",
    text: "Están en tu base de datos pero nadie les ha contactado. Algunos ya se han ido a la competencia. Solo necesitaban un mensaje en el momento justo.",
    aside: "30% de pacientes no vuelve por falta de seguimiento",
  },
  {
    num: "04",
    title: "Reseñas de Google que nunca llegan",
    text: "Haces un buen trabajo pero no lo pides. Sigues con 4.1 estrellas mientras la clínica de enfrente sube a 4.8 porque sí pregunta.",
    aside: "1 estrella más = 19% más de llamadas entrantes",
  },
];

export default function PainPoints() {
  return (
    <Section id="problema" className="py-20 md:py-28 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto">

        {/* Header row */}
        <div className="flex items-end justify-between mb-14 border-b border-[var(--color-border)] pb-8">
          <Reveal direction="left">
            <h2 className="font-[family-name:var(--font-display)] font-800 tracking-[-0.03em] leading-[0.97]"
              style={{ fontSize: "clamp(1.9rem,3.8vw,3.2rem)" }}>
              ¿Te suena esto?
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-[12px] font-600 text-[var(--color-text-3)] tracking-[0.1em] uppercase hidden md:block">
              El problema
            </p>
          </Reveal>
        </div>

        {/* Pain list — table-style rows */}
        <div>
          {pains.map((p, i) => (
            <Reveal key={p.num} delay={i * 0.05}>
              <div className="grid grid-cols-1 md:grid-cols-[64px_1fr_1fr] gap-4 md:gap-8 py-8 border-b border-[var(--color-border)] group">

                {/* number */}
                <span className="font-[family-name:var(--font-display)] text-[13px] font-700 text-[var(--color-text-3)] tracking-[0.06em] mt-0.5">
                  {p.num}
                </span>

                {/* title + text */}
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-[18px] md:text-[20px] font-700 tracking-[-0.02em] leading-[1.2] mb-3 group-hover:text-[var(--color-lime)] transition-colors duration-200">
                    {p.title}
                  </h3>
                  <p className="text-[14px] text-[var(--color-text-2)] leading-[1.7]">
                    {p.text}
                  </p>
                </div>

                {/* stat aside */}
                <div className="hidden md:flex items-start justify-end">
                  <span className="text-[12px] text-[var(--color-text-3)] leading-[1.5] text-right max-w-[200px] italic">
                    "{p.aside}"
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom callout */}
        <Reveal delay={0.25}>
          <div className="mt-10 flex items-center gap-4">
            <div className="w-6 h-6 rounded-full bg-[var(--color-lime)] flex-shrink-0 flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="font-[family-name:var(--font-display)] text-[16px] md:text-[19px] font-700 tracking-[-0.01em]">
              Nosotros lo automatizamos para que tu equipo se centre en lo que importa.
            </p>
          </div>
        </Reveal>

      </div>
    </Section>
  );
}
