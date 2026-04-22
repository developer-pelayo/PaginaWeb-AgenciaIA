"use client";

import { Section, Reveal } from "@/lib/motion";

const testimonials = [
  {
    name: "María G.",
    business: "Clínica dental",
    quote:
      "Nos montaron un asistente de voz que gestiona las citas automáticamente. Hemos reducido las llamadas perdidas un 80%.",
  },
  {
    name: "Carlos R.",
    business: "Ecommerce de moda",
    quote:
      "El chatbot de WhatsApp resuelve el 80% de las consultas solo. Mis clientes están más contentos y yo tengo 2 horas extra al día.",
  },
  {
    name: "Laura M.",
    business: "Agencia inmobiliaria",
    quote:
      "Nos hicieron una web con un sistema de captación automático. En el primer mes conseguimos 3 veces más contactos cualificados.",
  },
];

export default function Testimonials() {
  return (
    <Section className="py-28 md:py-40 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-20">
          <Reveal direction="left">
            <p className="text-[13px] font-500 text-[var(--color-lime)] tracking-[0.08em] uppercase">
              Testimonios
            </p>
          </Reveal>
          <Reveal>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4.5vw,3.8rem)] font-800 leading-[0.95] tracking-[-0.03em] max-w-[500px]">
              Lo que dicen nuestros clientes
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-border)] border border-[var(--color-border)]">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div className="bg-[var(--color-bg)] p-8 md:p-10 h-full flex flex-col">
                {/* Quote */}
                <p className="font-[family-name:var(--font-display)] text-[56px] leading-none text-[var(--color-border-light)] select-none mb-4">
                  &ldquo;
                </p>
                <blockquote className="text-[16px] text-[var(--color-text-2)] leading-[1.7] flex-1">
                  {t.quote}
                </blockquote>

                <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
                  <p className="font-[family-name:var(--font-display)] text-[15px] font-700">
                    {t.name}
                  </p>
                  <p className="text-[13px] text-[var(--color-text-3)] mt-0.5">
                    {t.business}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
