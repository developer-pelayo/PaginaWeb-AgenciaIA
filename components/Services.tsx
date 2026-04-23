"use client";

import { Section, Reveal } from "@/lib/motion";
import Link from "next/link";

/* Custom inline SVGs — context-specific, not generic icon library */
function IconWhatsApp() {
  return (
    <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
      <path d="M16 2C8.268 2 2 8.268 2 16c0 2.472.648 4.793 1.782 6.807L2 30l7.39-1.74A13.942 13.942 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2z" fill="#00A884"/>
      <path d="M22.5 19.5c-.367-.184-2.17-1.07-2.505-1.193-.336-.122-.58-.183-.824.184-.245.366-.948 1.193-1.162 1.437-.213.244-.428.275-.795.092-.366-.184-1.548-.57-2.948-1.82-1.09-.972-1.825-2.172-2.04-2.539-.214-.366-.023-.564.16-.747.167-.166.367-.428.55-.642.184-.214.245-.367.367-.611.123-.244.062-.458-.03-.641-.092-.184-.824-1.987-1.13-2.721-.298-.714-.6-.617-.824-.629l-.703-.012c-.244 0-.641.092-.977.458-.336.367-1.283 1.254-1.283 3.057s1.314 3.543 1.498 3.787c.184.245 2.587 3.95 6.267 5.539.876.378 1.56.604 2.092.773.879.28 1.68.24 2.312.146.705-.105 2.17-.887 2.476-1.744.306-.856.306-1.59.214-1.744-.092-.153-.336-.245-.703-.428z" fill="white"/>
    </svg>
  );
}

function IconReactivation() {
  return (
    <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
      <circle cx="12" cy="10" r="5" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M4 26c0-4.418 3.582-8 8-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M22 18v8M26 22h-8" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function IconReview() {
  return (
    <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
      <path d="M16 4l3.09 6.26L26 11.27l-5 4.87 1.18 6.88L16 19.77l-6.18 3.25L11 16.14 6 11.27l6.91-1.01L16 4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M23 24l2 2 4-4" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

const services = [
  {
    slug: "recepcionista-whatsapp",
    num: "01",
    Icon: IconWhatsApp,
    title: "Recepcionista IA por WhatsApp",
    description: "Atiende a tus pacientes 24/7, agenda citas, responde sobre precios y tratamientos, y manda recordatorios automáticos 24h antes.",
    tag: "Más popular",
  },
  {
    slug: "reactivacion-pacientes",
    num: "02",
    Icon: IconReactivation,
    title: "Reactivación de pacientes",
    description: "Campañas automáticas por WhatsApp para pacientes que llevan meses sin volver. Sin trabajo manual para tu equipo.",
    tag: null,
  },
  {
    slug: "resenas-google",
    num: "03",
    Icon: IconReview,
    title: "Reseñas automáticas de Google",
    description: "Mensaje automático después de cada consulta pidiendo reseña. Más estrellas sin pedirlas a mano.",
    tag: null,
  },
];

export default function Services() {
  return (
    <Section id="servicios" className="py-24 md:py-36 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <Reveal direction="left">
              <p className="text-[11px] font-600 text-[var(--color-text-3)] tracking-[0.12em] uppercase mb-5">
                Servicios
              </p>
            </Reveal>
            <Reveal>
              <h2 className="font-[family-name:var(--font-display)] font-800 leading-[0.97] tracking-[-0.03em]"
                style={{ fontSize: "clamp(2rem,4vw,3.5rem)" }}>
                Tres problemas concretos.
                <br />
                <span className="text-[var(--color-text-3)]">Tres soluciones.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <p className="text-[15px] text-[var(--color-text-2)] leading-[1.7] max-w-[340px]">
              No hacemos de todo. Solo lo que más impacta a una clínica:
              atención, retención y reputación.
            </p>
          </Reveal>
        </div>

        <div className="border-t border-[var(--color-border)]">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
              <Link
                href={`/servicios/${s.slug}`}
                className="group flex items-start gap-6 md:gap-8 py-7 border-b border-[var(--color-border)] hover:bg-[var(--color-surface)] transition-colors duration-200 px-3 -mx-3 rounded-xl"
              >
                {/* number */}
                <span className="font-[family-name:var(--font-display)] text-[11px] font-700 text-[var(--color-text-3)] tracking-[0.08em] mt-1 w-6 flex-shrink-0 select-none">
                  {s.num}
                </span>

                {/* icon */}
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-[var(--color-text-2)] group-hover:text-[var(--color-lime)] transition-colors"
                  style={{ background: "var(--color-surface-2)", border: "1px solid var(--color-border)" }}>
                  <s.Icon />
                </div>

                {/* content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1.5">
                    <h3 className="font-[family-name:var(--font-display)] text-[18px] md:text-[20px] font-700 tracking-[-0.02em] group-hover:text-[var(--color-lime)] transition-colors duration-200">
                      {s.title}
                    </h3>
                    {s.tag && (
                      <span className="text-[10px] font-600 text-[var(--color-lime)] bg-[var(--color-lime-dim)] border border-[var(--color-border-light)] rounded-full px-2.5 py-0.5 tracking-wide flex-shrink-0">
                        {s.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-[14px] text-[var(--color-text-3)] leading-[1.6] max-w-[520px]">
                    {s.description}
                  </p>
                </div>

                {/* arrow */}
                <div className="flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-[-6px] group-hover:translate-x-0">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 14L14 2M14 2H6M14 2v8" stroke="var(--color-lime)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-8 text-[13px] text-[var(--color-text-3)]">
            ¿Tienes algo más en mente?{" "}
            <a href="https://calendly.com/atomatica/demo" target="_blank" rel="noopener noreferrer"
              className="text-[var(--color-lime)] hover:underline underline-offset-4 decoration-[var(--color-border-light)]">
              Cuéntanoslo →
            </a>
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
