"use client";

import { useRef, useState, useEffect } from "react";
import { ArrowDownRight, TrendingUp } from "lucide-react";
import { Reveal, motion, stagger } from "@/lib/motion";

const chatMessages = [
  { from: "user", text: "Hola, ¿tenéis hueco esta semana para limpieza?" },
  { from: "bot", text: "¡Hola! Claro, tenemos hueco el miércoles a las 17h o el jueves a las 10h. ¿Cuál te viene mejor?" },
  { from: "user", text: "El jueves a las 10 perfecto 👍" },
  { from: "bot", text: "Perfecto, cita confirmada para el jueves a las 10:00. Te mandamos un recordatorio 24h antes. ¡Hasta pronto! 😊" },
];

function PhoneScene() {
  const [visibleMessages, setVisibleMessages] = useState<number>(0);
  const [isTyping, setIsTyping] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let step = 0;
    let timeout: ReturnType<typeof setTimeout>;

    function showNext() {
      if (step >= chatMessages.length) {
        timeout = setTimeout(() => {
          step = 0;
          setVisibleMessages(0);
          setIsTyping(false);
          timeout = setTimeout(showNext, 800);
        }, 3000);
        return;
      }

      const msg = chatMessages[step];
      if (msg.from === "bot") {
        setIsTyping(true);
        timeout = setTimeout(() => {
          setIsTyping(false);
          step++;
          setVisibleMessages(step);
          timeout = setTimeout(showNext, 1400);
        }, 1200);
      } else {
        step++;
        setVisibleMessages(step);
        timeout = setTimeout(showNext, msg.from === "user" ? 900 : 1400);
      }
    }

    timeout = setTimeout(showNext, 600);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    function onMove(e: MouseEvent) {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;
      setTilt({ x: dy * -8, y: dx * 8 });
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center"
      style={{ perspective: "1000px", height: "540px" }}
    >
      {/* Floating card — top left */}
      <div
        className="absolute left-0 top-16 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl px-4 py-3 shadow-lg z-20 min-w-[140px]"
        style={{ animation: "float-up 4s ease-in-out infinite" }}
      >
        <p className="text-[11px] text-[var(--color-text-3)] mb-1">Citas hoy</p>
        <div className="flex items-end gap-2">
          <span className="font-[family-name:var(--font-display)] text-[24px] font-800 text-[var(--color-text)]">24</span>
          <span className="flex items-center gap-0.5 text-[11px] font-600 text-emerald-500 mb-0.5">
            <TrendingUp size={10} />
            +40%
          </span>
        </div>
      </div>

      {/* Floating card — bottom right */}
      <div
        className="absolute right-0 bottom-20 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl px-4 py-3 shadow-lg z-20 min-w-[148px]"
        style={{ animation: "float-down 5s ease-in-out infinite" }}
      >
        <p className="text-[11px] text-[var(--color-text-3)] mb-1">Tiempo ahorrado</p>
        <span className="font-[family-name:var(--font-display)] text-[22px] font-800 text-[var(--color-text)]">2h 14m</span>
        <p className="text-[10px] text-[var(--color-text-3)] mt-0.5">hoy</p>
      </div>

      {/* IA activa badge */}
      <div
        className="absolute right-4 top-10 bg-[var(--color-surface)] border border-[var(--color-border-light)] rounded-full px-3 py-1.5 shadow-md z-20 flex items-center gap-2"
        style={{ animation: "float-up 3.5s ease-in-out infinite 0.5s" }}
      >
        <span
          className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"
          style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
        />
        <span className="text-[11px] font-600 text-[var(--color-text-2)]">IA activa</span>
      </div>

      {/* Phone */}
      <div
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: "preserve-3d",
          transition: "transform 0.1s ease-out",
        }}
      >
        {/* Phone shell */}
        <div
          className="relative rounded-[38px] overflow-hidden"
          style={{
            width: "240px",
            height: "480px",
            background: "#0c0c0c",
            boxShadow: "0 40px 80px rgba(0,0,0,0.22), 0 0 0 1px rgba(255,255,255,0.06), inset 0 0 0 1px rgba(255,255,255,0.04)",
          }}
        >
          {/* Notch */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#0c0c0c] rounded-full z-30" />

          {/* Screen */}
          <div
            className="absolute inset-[3px] rounded-[35px] overflow-hidden flex flex-col"
            style={{ background: "#0f172a" }}
          >
            {/* WhatsApp header */}
            <div
              className="flex items-center gap-2.5 px-3 pt-8 pb-3"
              style={{ background: "#1e293b" }}
            >
              <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[10px] font-700">C</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-[11px] font-600 leading-tight truncate">Clínica Dental Smile</p>
                <p className="text-[#94a3b8] text-[9px]">en línea</p>
              </div>
            </div>

            {/* Chat */}
            <div className="flex-1 px-2.5 py-2 flex flex-col gap-2 overflow-hidden">
              {chatMessages.slice(0, visibleMessages).map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                  style={{ animation: "fadeSlideIn 0.3s ease-out" }}
                >
                  <div
                    className="max-w-[78%] px-2.5 py-1.5 rounded-xl text-[9px] leading-[1.5] text-white"
                    style={{
                      background: msg.from === "user" ? "#2563eb" : "#1e293b",
                      borderRadius: msg.from === "user" ? "12px 12px 2px 12px" : "12px 12px 12px 2px",
                    }}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div
                    className="px-3 py-2 rounded-xl flex gap-1 items-center"
                    style={{ background: "#1e293b", borderRadius: "12px 12px 12px 2px" }}
                  >
                    {[0, 0.2, 0.4].map((d, i) => (
                      <span
                        key={i}
                        className="w-1 h-1 rounded-full bg-[#94a3b8]"
                        style={{ animation: `chat-dot 1.2s ease-in-out infinite ${d}s` }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Input bar */}
            <div
              className="flex items-center gap-2 mx-2 mb-3 px-3 py-2 rounded-full"
              style={{ background: "#1e293b" }}
            >
              <span className="text-[#475569] text-[9px] flex-1">Escribe un mensaje…</span>
              <div className="w-4 h-4 rounded-full bg-[#2563eb] flex items-center justify-center">
                <ArrowDownRight size={7} className="text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Phone shadow */}
        <div
          className="absolute left-1/2 -translate-x-1/2 -bottom-8 rounded-full blur-2xl opacity-30"
          style={{ width: "200px", height: "24px", background: "#2563eb", transform: "translateX(-50%) translateZ(-10px)" }}
        />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col justify-center px-6 md:px-10 pt-28 pb-20 overflow-hidden"
    >
      {/* Subtle gradient blob */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.07] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 70% 30%, #2563eb 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left column */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            {/* Badge */}
            <Reveal>
              <div className="inline-flex items-center gap-2 bg-[var(--color-lime-dim)] border border-[var(--color-border-light)] rounded-full px-3.5 py-1.5 mb-8">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[var(--color-lime)]"
                  style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
                />
                <span className="text-[12px] font-600 text-[var(--color-lime)] tracking-[0.04em]">
                  Automatización con IA para clínicas
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.6rem,6vw,5rem)] font-800 leading-[0.93] tracking-[-0.04em]">
                Tus pacientes
                <br />
                escriben a las
                <br />
                <span className="text-[var(--color-lime)]">10 de la noche.</span>
                <br />
                ¿Quién responde?
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 text-[16px] md:text-[17px] text-[var(--color-text-2)] leading-[1.65] max-w-[440px]">
                Ponemos un recepcionista con IA en el WhatsApp de tu clínica.
                Atiende 24/7, agenda citas y resuelve dudas. Sin que tu equipo
                tenga que hacer nada.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="https://calendly.com/atomatica/demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 bg-[var(--color-lime)] text-white text-[14px] font-600 px-6 py-3 rounded-lg hover:bg-[var(--color-lime)]/90 transition-colors"
                >
                  Cuéntanos tu clínica
                  <ArrowDownRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  />
                </a>
                <a
                  href="#servicios"
                  className="text-[14px] font-500 text-[var(--color-text-2)] hover:text-[var(--color-text)] border border-[var(--color-border)] px-6 py-3 rounded-lg transition-colors hover:border-[var(--color-border-light)]"
                >
                  Ver servicios
                </a>
              </div>
            </Reveal>

            {/* Trust stats */}
            <Reveal delay={0.3}>
              <div className="mt-10 pt-8 border-t border-[var(--color-border)] flex flex-wrap gap-6">
                {[
                  { value: "80%", label: "mensajes reciben respuesta" },
                  { value: "24/7", label: "atención sin interrupciones" },
                  { value: "< 2h", label: "configuración inicial" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="font-[family-name:var(--font-display)] text-[22px] font-800 text-[var(--color-text)] tracking-[-0.02em]">
                      {s.value}
                    </p>
                    <p className="text-[12px] text-[var(--color-text-3)] mt-0.5 max-w-[110px] leading-snug">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </motion.div>

          {/* Right column — phone scene (hidden on mobile) */}
          <div className="hidden lg:flex justify-center items-center">
            <PhoneScene />
          </div>
        </div>
      </div>
    </section>
  );
}
