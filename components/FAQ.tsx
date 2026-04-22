"use client";

import { useState } from "react";
import { Section, Reveal, motion } from "@/lib/motion";
import { AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "¿En qué sectores trabajáis?",
    a: "En cualquiera. Hemos trabajado con ecommerce, clínicas, inmobiliarias, despachos de abogados, restaurantes, academias... Si tu negocio tiene procesos manuales, podemos automatizarlos.",
  },
  {
    q: "¿Necesito conocimientos técnicos?",
    a: "No. Nosotros nos encargamos de todo lo técnico. Tú solo nos explicas qué necesitas y nosotros lo construimos, configuramos y mantenemos.",
  },
  {
    q: "¿Cuánto cuesta un proyecto?",
    a: "Depende del alcance. Hacemos una consulta inicial gratuita, entendemos lo que necesitas, y en 48 horas te enviamos una propuesta con precio cerrado. Sin sorpresas ni costes ocultos.",
  },
  {
    q: "¿Cuánto tardáis en entregar?",
    a: "Depende del proyecto. Una landing page puede estar lista en una semana. Una automatización compleja puede tardar 2-4 semanas. Siempre te damos plazos claros antes de empezar.",
  },
  {
    q: "¿Qué pasa después de la entrega?",
    a: "Te damos soporte continuo. Si algo deja de funcionar o necesitas ajustes, estamos ahí. También ofrecemos planes de mantenimiento para proyectos que lo necesiten.",
  },
  {
    q: "¿Puedo combinar varios servicios?",
    a: "Claro. De hecho, lo más potente es combinarlos. Por ejemplo: una web con chatbot integrado, o un asistente de voz conectado a tu CRM con un dashboard de métricas. Todo se integra.",
  },
];

function FAQItem({ q, a, num }: { q: string; a: string; num: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[var(--color-border)]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-5 py-6 md:py-7 text-left group"
        aria-expanded={open}
      >
        <span className="font-[family-name:var(--font-display)] text-[12px] font-700 text-[var(--color-text-3)] mt-1 w-6 flex-shrink-0">
          {num}
        </span>
        <span
          className={`font-[family-name:var(--font-display)] text-[17px] md:text-[19px] font-700 tracking-[-0.01em] flex-1 transition-colors duration-200 ${
            open ? "text-[var(--color-lime)]" : "group-hover:text-[var(--color-text)]"
          }`}
        >
          {q}
        </span>
        <span
          className={`text-[var(--color-text-3)] text-[20px] font-300 leading-none mt-0.5 flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-7 pl-11 text-[15px] text-[var(--color-text-2)] leading-[1.7] max-w-[560px]">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <Section id="faq" className="py-28 md:py-40 px-6 md:px-10">
      <div className="max-w-[800px] mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <div>
              <p className="text-[13px] font-500 text-[var(--color-lime)] tracking-[0.08em] uppercase mb-4">
                FAQ
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-800 leading-[0.95] tracking-[-0.03em]">
                Preguntas frecuentes
              </h2>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="border-t border-[var(--color-border)]">
            {faqs.map((f, i) => (
              <FAQItem
                key={f.q}
                q={f.q}
                a={f.a}
                num={String(i + 1).padStart(2, "0")}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
