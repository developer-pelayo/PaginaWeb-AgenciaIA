"use client";

import { Section, Reveal } from "@/lib/motion";

const pains = [
  {
    num: "01",
    title: "Mensajes sin responder fuera de horario",
    text: "Un paciente pregunta a las 10 de la noche si tienes hueco mañana. Nadie responde. Al día siguiente ya ha llamado a otra clínica.",
  },
  {
    num: "02",
    title: "Tu recepcionista no puede estar en todo",
    text: "Teléfono, WhatsApp, la sala de espera. Cuando hay lío, los mensajes esperan. Y un paciente que espera respuesta busca en otro sitio.",
  },
  {
    num: "03",
    title: "Pacientes que llevan meses sin volver",
    text: "Están en tu base de datos pero nadie les ha contactado. Algunos ya se han ido a la competencia. Solo necesitaban un mensaje en el momento justo.",
  },
  {
    num: "04",
    title: "Reseñas de Google que nunca llegan",
    text: "Haces un buen trabajo pero no lo pides. Sigues con 4.1 estrellas mientras la clínica de enfrente sube a 4.8 porque sí pregunta.",
  },
];

export default function PainPoints() {
  return (
    <Section id="problema" className="py-28 md:py-40 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-20">
          <Reveal direction="left">
            <p className="text-[13px] font-500 text-[var(--color-lime)] tracking-[0.08em] uppercase">
              El problema
            </p>
          </Reveal>
          <Reveal>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4.5vw,3.8rem)] font-800 leading-[0.95] tracking-[-0.03em] max-w-[500px]">
              ¿Te suena
              <br />
              esto?
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-border)]">
          {pains.map((p, i) => (
            <Reveal key={p.num} delay={i * 0.06}>
              <div className="bg-[var(--color-bg)] p-8 md:p-10 group hover:bg-[var(--color-surface)] transition-colors duration-300 h-full">
                <span className="font-[family-name:var(--font-display)] text-[11px] font-700 text-[var(--color-text-3)] tracking-[0.1em] uppercase">
                  {p.num}
                </span>
                <h3 className="mt-5 font-[family-name:var(--font-display)] text-[19px] md:text-[21px] font-700 leading-[1.2] tracking-[-0.02em] group-hover:text-[var(--color-lime)] transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="mt-4 text-[15px] text-[var(--color-text-2)] leading-[1.7]">
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-16 flex items-center gap-4">
            <div className="h-px flex-1 bg-[var(--color-border)]" />
            <p className="font-[family-name:var(--font-display)] text-[18px] md:text-[22px] font-700 tracking-[-0.02em] text-[var(--color-lime)] whitespace-nowrap">
              Nosotros lo solucionamos.
            </p>
            <div className="h-px flex-1 bg-[var(--color-border)]" />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
