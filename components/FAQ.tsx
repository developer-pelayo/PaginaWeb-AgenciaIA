"use client";

import { useState } from "react";
import { Section, Reveal, motion } from "@/lib/motion";
import { AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "¿Para qué tipo de clínicas trabajáis?",
    a: "Dental, estética y fisioterapia principalmente. Cualquier clínica que gestione citas por WhatsApp y quiera atender mejor a sus pacientes sin ampliar el equipo.",
  },
  {
    q: "¿Qué necesito tener ya instalado?",
    a: "Solo WhatsApp Business. Nosotros nos encargamos del resto: el agente de IA, los flujos de automatización, la base de datos y la integración con tu agenda.",
  },
  {
    q: "¿Qué pasa si el paciente pregunta algo que el agente no sabe?",
    a: "Lo escala automáticamente a tu recepcionista con todo el contexto de la conversación. El agente sabe cuándo no puede ayudar y lo dice, nunca inventa.",
  },
  {
    q: "¿Cuánto tiempo tarda la configuración?",
    a: "Normalmente entre 1 y 2 semanas desde que nos das la información de tu clínica: tratamientos, precios, horarios y política de cancelaciones.",
  },
  {
    q: "¿Cuánto cuesta?",
    a: "Hay un coste de setup para configurarlo todo y una mensualidad de mantenimiento. En 48 horas te mandamos una propuesta con precio cerrado. Sin sorpresas ni costes ocultos.",
  },
  {
    q: "¿Tengo que hacer algo yo?",
    a: "Nada técnico. Nos das la información de tu clínica y nosotros lo construimos, configuramos y probamos todo. Tú solo lo usas.",
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
