"use client";

import { Section, Reveal } from "@/lib/motion";
import { MessageCircle, Users, Star, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    slug: "recepcionista-whatsapp",
    icon: MessageCircle,
    title: "Recepcionista IA por WhatsApp",
    description: "Atiende a tus pacientes 24/7, agenda citas, responde sobre precios y tratamientos, y manda recordatorios automáticos 24h antes.",
  },
  {
    slug: "reactivacion-pacientes",
    icon: Users,
    title: "Reactivación de pacientes",
    description: "Campañas automáticas por WhatsApp para pacientes que llevan meses sin volver. Sin trabajo para tu equipo.",
  },
  {
    slug: "resenas-google",
    icon: Star,
    title: "Reseñas automáticas de Google",
    description: "Mensaje automático después de cada consulta pidiendo reseña. Más estrellas sin pedirlas a mano.",
  },
];

export default function Services() {
  return (
    <Section id="servicios" className="py-28 md:py-40 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <div>
            <Reveal direction="left">
              <p className="text-[13px] font-500 text-[var(--color-lime)] tracking-[0.08em] uppercase mb-4">
                Servicios
              </p>
            </Reveal>
            <Reveal>
              <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4.5vw,3.8rem)] font-800 leading-[0.95] tracking-[-0.03em]">
                Tres problemas concretos.
                <br />
                <span className="text-[var(--color-text-3)]">Tres soluciones.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <p className="text-[15px] text-[var(--color-text-2)] leading-[1.7] max-w-[360px]">
              No hacemos de todo. Nos especializamos en lo que más impacta
              a una clínica: atención, retención y reputación.
            </p>
          </Reveal>
        </div>

        <div className="border-t border-[var(--color-border)]">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.04}>
              <Link
                href={`/servicios/${s.slug}`}
                className="group flex items-start md:items-center gap-5 md:gap-8 py-7 md:py-6 border-b border-[var(--color-border)] hover:bg-[var(--color-surface)] transition-colors duration-200 px-2 md:px-4 -mx-2 md:-mx-4 rounded-lg"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] flex items-center justify-center flex-shrink-0 group-hover:border-[var(--color-lime-muted)] group-hover:bg-[var(--color-lime-dim)] transition-colors duration-200">
                  <s.icon size={18} strokeWidth={1.5} className="text-[var(--color-text-2)] group-hover:text-[var(--color-lime)] transition-colors duration-200" />
                </div>

                <h3 className="font-[family-name:var(--font-display)] text-[17px] md:text-[19px] font-700 tracking-[-0.02em] w-[200px] md:w-[280px] flex-shrink-0 group-hover:text-[var(--color-lime)] transition-colors duration-200">
                  {s.title}
                </h3>

                <p className="hidden md:block text-[14px] text-[var(--color-text-3)] leading-[1.5] flex-1">
                  {s.description}
                </p>

                <ArrowUpRight
                  size={18}
                  className="text-[var(--color-text-3)] flex-shrink-0 ml-auto opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-y-0.5 translate-x-[-4px] group-hover:translate-y-0 group-hover:translate-x-0"
                />
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 text-[14px] text-[var(--color-text-3)]">
            ¿Tienes algo más en mente?{" "}
            <a
              href="https://calendly.com/atomatica/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-lime)] hover:underline underline-offset-4"
            >
              Cuéntanoslo
            </a>
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
