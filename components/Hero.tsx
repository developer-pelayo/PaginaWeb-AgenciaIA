"use client";

import { useState, useEffect } from "react";
import { ArrowDownRight, TrendingUp, Check, CheckCheck } from "lucide-react";
import { Reveal, motion, stagger } from "@/lib/motion";

const chatMessages = [
  { from: "user", text: "Hola, ¿tenéis hueco esta semana para limpieza?", time: "22:04" },
  { from: "bot", text: "¡Hola! Claro 😊 Tenemos el miércoles a las 17h o el jueves a las 10h. ¿Cuál te viene mejor?", time: "22:04" },
  { from: "user", text: "El jueves a las 10 perfecto 👍", time: "22:05" },
  { from: "bot", text: "¡Perfecto! Cita confirmada para el jueves a las 10:00. Te mandamos un recordatorio 24h antes.", time: "22:05" },
];

function WhatsAppPhone() {
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let step = 0;
    let timeout: ReturnType<typeof setTimeout>;

    function showNext() {
      if (step >= chatMessages.length) {
        timeout = setTimeout(() => {
          step = 0;
          setVisibleMessages(0);
          setIsTyping(false);
          timeout = setTimeout(showNext, 1000);
        }, 3500);
        return;
      }
      const msg = chatMessages[step];
      if (msg.from === "bot") {
        setIsTyping(true);
        timeout = setTimeout(() => {
          setIsTyping(false);
          step++;
          setVisibleMessages(step);
          timeout = setTimeout(showNext, 1600);
        }, 1400);
      } else {
        step++;
        setVisibleMessages(step);
        timeout = setTimeout(showNext, 1000);
      }
    }

    timeout = setTimeout(showNext, 800);
    return () => clearTimeout(timeout);
  }, []);

  return (
    /* Outer scene — wide enough to hold cards on both sides without overlap */
    <div className="relative" style={{ width: "520px", height: "560px" }}>

      {/* === Floating cards — positioned OUTSIDE phone bounds === */}

      {/* Top-left: Citas hoy */}
      <div
        className="absolute bg-white border border-[var(--color-border)] rounded-2xl px-4 py-3.5 shadow-xl z-20"
        style={{ left: "0px", top: "60px", width: "148px", animation: "float-up 4s ease-in-out infinite" }}
      >
        <p className="text-[10px] font-500 text-[var(--color-text-3)] uppercase tracking-wide mb-1.5">Citas hoy</p>
        <div className="flex items-end gap-1.5">
          <span className="font-[family-name:var(--font-display)] text-[26px] font-800 leading-none text-[var(--color-text)]">24</span>
          <span className="flex items-center gap-0.5 text-[10px] font-600 text-emerald-500 mb-0.5 pb-px">
            <TrendingUp size={9} />
            +40%
          </span>
        </div>
      </div>

      {/* Bottom-right: Tiempo ahorrado */}
      <div
        className="absolute bg-white border border-[var(--color-border)] rounded-2xl px-4 py-3.5 shadow-xl z-20"
        style={{ right: "0px", bottom: "80px", width: "156px", animation: "float-down 5s ease-in-out infinite" }}
      >
        <p className="text-[10px] font-500 text-[var(--color-text-3)] uppercase tracking-wide mb-1.5">Tiempo libre</p>
        <span className="font-[family-name:var(--font-display)] text-[24px] font-800 leading-none text-[var(--color-text)]">2h 14m</span>
        <p className="text-[9px] text-[var(--color-text-3)] mt-1">ahorrado hoy</p>
      </div>

      {/* Top-right: IA activa */}
      <div
        className="absolute bg-white border border-[var(--color-border-light)] rounded-full px-3 py-1.5 shadow-md z-20 flex items-center gap-2"
        style={{ right: "8px", top: "28px", animation: "float-up 3.5s ease-in-out infinite 0.7s" }}
      >
        <span
          className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"
          style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
        />
        <span className="text-[11px] font-600 text-[var(--color-text-2)]">IA activa</span>
      </div>

      {/* === Phone — centered in scene === */}
      <div
        className="absolute"
        style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
      >
        {/* Shell */}
        <div
          className="relative"
          style={{
            width: "220px",
            height: "460px",
            borderRadius: "42px",
            background: "linear-gradient(145deg, #1a1a1a 0%, #0a0a0a 100%)",
            boxShadow: "0 50px 100px rgba(0,0,0,0.35), 0 0 0 1.5px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          {/* Side button */}
          <div className="absolute right-[-3px] top-[90px] w-[3px] h-[60px] rounded-r-full" style={{ background: "#2a2a2a" }} />
          <div className="absolute left-[-3px] top-[70px] w-[3px] h-[40px] rounded-l-full" style={{ background: "#2a2a2a" }} />
          <div className="absolute left-[-3px] top-[120px] w-[3px] h-[40px] rounded-l-full" style={{ background: "#2a2a2a" }} />

          {/* Screen bezel */}
          <div
            className="absolute overflow-hidden flex flex-col"
            style={{
              inset: "4px",
              borderRadius: "38px",
              background: "#0B141A",
            }}
          >
            {/* Status bar */}
            <div className="flex items-center justify-between px-5 pt-3 pb-1" style={{ background: "#0B141A" }}>
              <span className="text-white text-[8px] font-600">22:04</span>
              <div className="w-12 h-3 rounded-full bg-black" /> {/* Dynamic island */}
              <div className="flex items-center gap-1">
                <svg width="10" height="7" viewBox="0 0 10 7" fill="white" opacity="0.9"><rect x="0" y="2" width="2" height="5" rx="0.5"/><rect x="2.5" y="1" width="2" height="6" rx="0.5"/><rect x="5" y="0" width="2" height="7" rx="0.5"/><rect x="7.5" width="2" height="7" rx="0.5" opacity="0.4"/></svg>
                <svg width="8" height="8" viewBox="0 0 24 24" fill="white" opacity="0.9"><path d="M1 1l22 22M16.72 11.06A10.94 10.94 0 0119 12.55M5 12.55a10.94 10.94 0 015.17-2.39M10.71 5.05A16 16 0 0122.56 9M1.42 9a15.91 15.91 0 014.7-2.88M8.53 16.11a6 6 0 016.95 0M12 20h.01" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
                <div className="flex items-center gap-0.5">
                  <div className="w-4 h-2 rounded-sm border border-white/60 flex items-center pl-px"><div className="w-[60%] h-1 bg-white rounded-sm"/></div>
                </div>
              </div>
            </div>

            {/* WhatsApp header */}
            <div
              className="flex items-center gap-2.5 px-3 py-2"
              style={{ background: "#1F2C34", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
              {/* Back arrow */}
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
              {/* Avatar */}
              <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-white text-[11px] font-700" style={{ background: "#128C7E" }}>
                C
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-[11px] font-600 leading-tight">Clínica Dental Smile</p>
                <p className="text-[10px]" style={{ color: "#8696A0" }}>en línea</p>
              </div>
              {/* Icons */}
              <div className="flex gap-3 opacity-70">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
              </div>
            </div>

            {/* Chat background */}
            <div
              className="flex-1 flex flex-col gap-1.5 px-2 py-2 overflow-hidden"
              style={{ background: "#0B141A" }}
            >
              {/* Date separator */}
              <div className="flex justify-center my-1">
                <span className="text-[8px] px-2 py-0.5 rounded-full font-500" style={{ background: "#1F2C34", color: "#8696A0" }}>HOY</span>
              </div>

              {chatMessages.slice(0, visibleMessages).map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                  style={{ animation: "fadeSlideIn 0.25s ease-out" }}
                >
                  <div
                    className="max-w-[82%] px-2.5 pt-1.5 pb-1 relative"
                    style={{
                      background: msg.from === "user" ? "#005C4B" : "#1F2C34",
                      borderRadius: msg.from === "user" ? "8px 8px 2px 8px" : "8px 8px 8px 2px",
                      boxShadow: "0 1px 2px rgba(0,0,0,0.3)",
                    }}
                  >
                    <p className="text-[8.5px] leading-[1.5]" style={{ color: "#E9EDEF" }}>
                      {msg.text}
                    </p>
                    <div className="flex items-center justify-end gap-0.5 mt-0.5">
                      <span className="text-[7px]" style={{ color: "#8696A0" }}>{msg.time}</span>
                      {msg.from === "user" && (
                        <CheckCheck size={8} className="text-[#53BDEB]" />
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div
                    className="px-3 py-2 flex gap-1 items-center"
                    style={{ background: "#1F2C34", borderRadius: "8px 8px 8px 2px", boxShadow: "0 1px 2px rgba(0,0,0,0.3)" }}
                  >
                    {[0, 0.2, 0.4].map((d, i) => (
                      <span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: "#8696A0", animation: `chat-dot 1.2s ease-in-out infinite ${d}s` }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Input bar */}
            <div className="px-2 py-2" style={{ background: "#0B141A" }}>
              <div className="flex items-center gap-2">
                <div
                  className="flex-1 flex items-center gap-2 px-3 py-1.5 rounded-full"
                  style={{ background: "#1F2C34" }}
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#8696A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/></svg>
                  <span className="text-[8px] flex-1" style={{ color: "#8696A0" }}>Escribe un mensaje</span>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#8696A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/></svg>
                </div>
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#00A884" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
                </div>
              </div>
            </div>
          </div>

          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full" style={{ background: "rgba(255,255,255,0.3)" }} />
        </div>

        {/* Glow under phone */}
        <div
          className="absolute -bottom-6 left-1/2 -translate-x-1/2 blur-2xl rounded-full opacity-20"
          style={{ width: "180px", height: "20px", background: "#2563eb" }}
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
      {/* Gradient blob top-right */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] opacity-[0.06] pointer-events-none"
        style={{ background: "radial-gradient(circle at 70% 20%, #2563eb 0%, transparent 65%)" }}
      />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(var(--color-text) 1px, transparent 1px), linear-gradient(90deg, var(--color-text) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
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
              <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.4rem,5.5vw,4.6rem)] font-800 leading-[1.0] tracking-[-0.03em]">
                Tus pacientes escriben
                <br />
                a las 10 de la noche.
                <br />
                <span className="text-[var(--color-lime)]">¿Quién responde?</span>
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
                  className="group flex items-center gap-2.5 bg-[var(--color-lime)] text-white text-[14px] font-600 px-6 py-3.5 rounded-xl hover:bg-[var(--color-lime)]/90 transition-colors shadow-sm"
                >
                  Cuéntanos tu clínica
                  <ArrowDownRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                </a>
                <a
                  href="#servicios"
                  className="text-[14px] font-500 text-[var(--color-text-2)] hover:text-[var(--color-text)] border border-[var(--color-border)] px-6 py-3.5 rounded-xl transition-colors hover:border-[var(--color-border-light)]"
                >
                  Ver servicios
                </a>
              </div>
            </Reveal>

            {/* Trust stats */}
            <Reveal delay={0.3}>
              <div className="mt-10 pt-8 border-t border-[var(--color-border)] flex flex-wrap gap-8">
                {[
                  { value: "80%", label: "de consultas resueltas sin intervención humana" },
                  { value: "24/7", label: "atención continua, incluso de madrugada" },
                  { value: "48h", label: "de tu clínica funcionando con IA" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="font-[family-name:var(--font-display)] text-[24px] font-800 text-[var(--color-text)] tracking-[-0.02em]">
                      {s.value}
                    </p>
                    <p className="text-[12px] text-[var(--color-text-3)] mt-1 max-w-[120px] leading-snug">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </motion.div>

          {/* Right — phone (hidden on mobile) */}
          <div className="hidden lg:flex justify-center items-center">
            <WhatsAppPhone />
          </div>
        </div>
      </div>
    </section>
  );
}
