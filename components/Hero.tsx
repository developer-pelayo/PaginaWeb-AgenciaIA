"use client";

import { useState, useEffect } from "react";
import { CheckCheck } from "lucide-react";
import { Reveal, motion, stagger } from "@/lib/motion";

const chatMessages = [
  { from: "user",  text: "Hola, ¿tenéis hueco esta semana para limpieza?",                                                            time: "22:04" },
  { from: "bot",   text: "¡Hola! Claro 😊 Tenemos el miércoles a las 17h o el jueves a las 10h. ¿Cuál te viene mejor?",               time: "22:04" },
  { from: "user",  text: "El jueves a las 10, perfecto 👍",                                                                            time: "22:05" },
  { from: "bot",   text: "¡Perfecto! Cita confirmada para el jueves a las 10:00. Te mandamos recordatorio 24h antes. 🗓",              time: "22:05" },
];

/* ─────────────────────────── phone sub-components ─────────────────────────── */

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-4 pt-2.5 pb-1" style={{ background: "#1F2C34" }}>
      <span className="text-[9px] font-600 text-white/80">22:04</span>
      <div className="flex items-center gap-1.5">
        {/* Signal */}
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
          <rect x="0" y="4" width="2" height="4" rx="0.5" fill="white" fillOpacity="0.9"/>
          <rect x="2.5" y="2.5" width="2" height="5.5" rx="0.5" fill="white" fillOpacity="0.9"/>
          <rect x="5" y="1" width="2" height="7" rx="0.5" fill="white" fillOpacity="0.9"/>
          <rect x="7.5" y="0" width="2" height="8" rx="0.5" fill="white" fillOpacity="0.35"/>
        </svg>
        {/* WiFi */}
        <svg width="11" height="8" viewBox="0 0 11 8" fill="none">
          <path d="M5.5 6.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z" fill="white"/>
          <path d="M3.2 4.8a3.3 3.3 0 0 1 4.6 0" stroke="white" strokeWidth="1" strokeLinecap="round"/>
          <path d="M1.2 2.8a6 6 0 0 1 8.6 0" stroke="white" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.5"/>
        </svg>
        {/* Battery */}
        <div className="flex items-center gap-px">
          <div className="w-5 h-2.5 rounded-[2px] border border-white/60 flex items-center pl-px">
            <div className="w-[70%] h-1.5 bg-white/90 rounded-[1px]" />
          </div>
          <div className="w-px h-1 bg-white/40 rounded-r-full" />
        </div>
      </div>
    </div>
  );
}

function WAHeader() {
  return (
    <div className="flex items-center gap-2 px-2 py-2" style={{ background: "#1F2C34", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
      {/* back */}
      <svg width="9" height="15" viewBox="0 0 9 15" fill="none">
        <path d="M8 1L2 7.5L8 14" stroke="white" strokeOpacity="0.7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      {/* avatar */}
      <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-white text-[11px] font-700 select-none" style={{ background: "linear-gradient(135deg,#128C7E,#075E54)" }}>
        C
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[11px] font-600 text-white leading-tight truncate">Clínica Dental Smile</p>
        <div className="flex items-center gap-1 mt-px">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#00A884" }} />
          <p className="text-[9px]" style={{ color: "#8696A0" }}>en línea</p>
        </div>
      </div>
      {/* icons */}
      <div className="flex items-center gap-3.5 pr-1">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.65">
          <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
        </svg>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.65">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
        </svg>
        <svg width="4" height="14" viewBox="0 0 4 18" fill="white" opacity="0.65">
          <circle cx="2" cy="2" r="2"/><circle cx="2" cy="9" r="2"/><circle cx="2" cy="16" r="2"/>
        </svg>
      </div>
    </div>
  );
}

function ChatBubble({ msg }: { msg: typeof chatMessages[0] }) {
  const sent = msg.from === "user";
  return (
    <div className={`flex ${sent ? "justify-end" : "justify-start"}`} style={{ animation: "fadeSlideIn 0.22s ease-out" }}>
      <div
        className="relative max-w-[83%] px-2.5 pt-1.5 pb-1"
        style={{
          background: sent ? "#005C4B" : "#1F2C34",
          borderRadius: sent ? "10px 10px 2px 10px" : "10px 10px 10px 2px",
          boxShadow: "0 1px 2px rgba(0,0,0,0.3)",
        }}
      >
        {/* bubble tail */}
        <div
          className="absolute bottom-0 w-0 h-0"
          style={sent
            ? { right: "-5px", borderTop: "6px solid #005C4B", borderLeft: "6px solid transparent" }
            : { left: "-5px", borderTop: "6px solid #1F2C34", borderRight: "6px solid transparent" }
          }
        />
        <p className="text-[9px] leading-[1.55]" style={{ color: "#E9EDEF" }}>{msg.text}</p>
        <div className="flex items-center justify-end gap-0.5 mt-[2px]">
          <span className="text-[7.5px]" style={{ color: "#8696A0" }}>{msg.time}</span>
          {sent && <CheckCheck size={9} color="#53BDEB" />}
        </div>
      </div>
    </div>
  );
}

function WAPhone() {
  const [visible, setVisible] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    let step = 0;
    let t: ReturnType<typeof setTimeout>;
    function next() {
      if (step >= chatMessages.length) {
        t = setTimeout(() => { step = 0; setVisible(0); setTyping(false); t = setTimeout(next, 800); }, 3200);
        return;
      }
      const msg = chatMessages[step];
      if (msg.from === "bot") {
        setTyping(true);
        t = setTimeout(() => { setTyping(false); step++; setVisible(step); t = setTimeout(next, 1500); }, 1300);
      } else {
        step++; setVisible(step); t = setTimeout(next, 950);
      }
    }
    t = setTimeout(next, 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      style={{
        width: "258px", height: "526px",
        borderRadius: "44px",
        background: "linear-gradient(160deg, #222 0%, #0d0d0d 50%, #080808 100%)",
        boxShadow: [
          "0 0 0 1.5px rgba(255,255,255,0.09)",
          "inset 0 0 0 1px rgba(255,255,255,0.04)",
          "30px 60px 120px rgba(0,0,0,0.55)",
          "10px 20px 40px rgba(0,0,0,0.3)",
          "-4px 8px 24px rgba(0,0,0,0.2)",
        ].join(", "),
        position: "relative",
      }}
    >
      {/* side buttons */}
      <div className="absolute right-[-2.5px] top-24 w-[2.5px] h-14 rounded-r-full" style={{ background: "#1a1a1a" }} />
      <div className="absolute left-[-2.5px] top-20 w-[2.5px] h-9 rounded-l-full" style={{ background: "#1a1a1a" }} />
      <div className="absolute left-[-2.5px] top-32 w-[2.5px] h-9 rounded-l-full" style={{ background: "#1a1a1a" }} />

      {/* screen inset */}
      <div
        className="absolute inset-[3px] flex flex-col overflow-hidden"
        style={{ borderRadius: "41px", background: "#0B141A" }}
      >
        {/* status bar */}
        <StatusBar />
        {/* WA header */}
        <WAHeader />

        {/* chat area */}
        <div
          className="flex-1 flex flex-col gap-2 px-2.5 py-2 overflow-hidden"
          style={{
            background: "#0B141A",
            backgroundImage: "radial-gradient(circle at 10% 20%, rgba(0,168,132,0.03) 0%, transparent 50%)",
          }}
        >
          {/* date badge */}
          <div className="flex justify-center mb-1">
            <span className="text-[7.5px] font-500 px-2.5 py-0.5 rounded-full" style={{ background: "#1F2C34", color: "#8696A0" }}>
              HOY
            </span>
          </div>

          {chatMessages.slice(0, visible).map((m, i) => (
            <ChatBubble key={i} msg={m} />
          ))}

          {typing && (
            <div className="flex justify-start">
              <div className="px-3 py-2 flex gap-[3px] items-center" style={{ background: "#1F2C34", borderRadius: "10px 10px 10px 2px" }}>
                {[0, 0.22, 0.44].map((d, i) => (
                  <span key={i} className="w-[5px] h-[5px] rounded-full" style={{ background: "#8696A0", animation: `chat-dot 1.2s ease-in-out infinite ${d}s` }} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* input */}
        <div className="px-2 pt-1.5 pb-3" style={{ background: "#0B141A" }}>
          <div className="flex items-center gap-2">
            <div className="flex-1 flex items-center gap-2 px-3 py-2 rounded-full" style={{ background: "#1F2C34" }}>
              {/* emoji */}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8696A0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
              </svg>
              <span className="text-[8.5px] flex-1" style={{ color: "#8696A0" }}>Escribe un mensaje</span>
              {/* attach */}
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#8696A0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/>
              </svg>
            </div>
            {/* mic */}
            <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#00A884" }}>
              <svg width="12" height="14" viewBox="0 0 12 16" fill="none">
                <rect x="3.5" y="0" width="5" height="9" rx="2.5" fill="white"/>
                <path d="M1 7.5A5 5 0 0011 7.5" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
                <line x1="6" y1="12.5" x2="6" y2="15" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
                <line x1="3.5" y1="15" x2="8.5" y2="15" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* home indicator */}
        <div className="flex justify-center pb-1.5">
          <div className="w-16 h-[3px] rounded-full" style={{ background: "rgba(255,255,255,0.25)" }} />
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────────── stat chips ─────────────────────────────────── */

function StatChip({ label, value, sub, delay = 0, float = "up" }: {
  label: string; value: string; sub?: string; delay?: number; float?: "up" | "down";
}) {
  return (
    <div
      className="bg-white rounded-2xl px-4 py-3 shadow-lg border border-black/[0.06]"
      style={{ animation: `${float === "up" ? "float-up" : "float-down"} ${float === "up" ? "4.2" : "5"}s ease-in-out infinite ${delay}s` }}
    >
      <p className="text-[9.5px] font-600 uppercase tracking-widest text-[var(--color-text-3)] mb-1">{label}</p>
      <p className="font-[family-name:var(--font-display)] text-[22px] font-800 leading-none text-[var(--color-text)]">{value}</p>
      {sub && <p className="text-[9px] text-[var(--color-text-3)] mt-1">{sub}</p>}
    </div>
  );
}

/* ───────────────────────────── hero ──────────────────────────────────────── */

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col min-h-[100dvh] px-6 md:px-10 pt-24 pb-0 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 65%)" }} />

      {/* Thin left rule */}
      <div className="absolute left-0 top-28 bottom-0 w-px hidden xl:block" style={{ background: "linear-gradient(to bottom, var(--color-lime) 0%, transparent 30%)" }} />

      <div className="relative z-10 max-w-[1200px] mx-auto w-full flex-1 flex flex-col">

        {/* ── main content row ── */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-6 items-center pb-12">

          {/* Left: text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="max-w-[560px]"
          >
            <Reveal>
              <div className="inline-flex items-center gap-2.5 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-lime)]" style={{ animation: "pulse-dot 2s ease-in-out infinite" }} />
                <span className="text-[11px] font-600 tracking-[0.1em] uppercase text-[var(--color-text-3)]">
                  Automatización con IA para clínicas
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.07}>
              <h1
                className="font-[family-name:var(--font-display)] font-800 tracking-[-0.035em] leading-[1.0]"
                style={{ fontSize: "clamp(2.6rem, 5.2vw, 4.8rem)" }}
              >
                Tus pacientes
                <br />
                escriben a las
                <br />
                <span className="text-[var(--color-lime)]">10 de la noche.</span>
                <br />
                ¿Quién responde?
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-6 text-[16px] text-[var(--color-text-2)] leading-[1.65] max-w-[420px]">
                Ponemos un recepcionista con IA en el WhatsApp de tu clínica.
                Atiende 24/7, agenda citas y resuelve dudas —
                sin que tu equipo tenga que hacer nada.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="https://calendly.com/atomatica/demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2.5 bg-[var(--color-lime)] text-white text-[14px] font-600 px-7 py-3.5 rounded-xl overflow-hidden transition-all hover:shadow-[0_8px_24px_rgba(37,99,235,0.35)]"
                >
                  <span className="relative z-10">Cuéntanos tu clínica</span>
                  {/* arrow */}
                  <svg className="relative z-10 transition-transform group-hover:translate-x-0.5" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 12L12 2M12 2H5M12 2v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {/* hover shine */}
                  <span className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 skew-x-12" />
                </a>
                <a
                  href="#servicios"
                  className="inline-flex items-center gap-2 text-[14px] font-500 text-[var(--color-text-2)] hover:text-[var(--color-text)] border border-[var(--color-border)] hover:border-[var(--color-border-light)] px-7 py-3.5 rounded-xl transition-all duration-200"
                >
                  Ver servicios
                </a>
              </div>
            </Reveal>

            {/* trust stats */}
            <Reveal delay={0.28}>
              <div className="mt-12 flex flex-wrap gap-x-10 gap-y-5 pt-8 border-t border-[var(--color-border)]">
                {[
                  { v: "80%",  l: "consultas resueltas sin\nintervención humana" },
                  { v: "24/7", l: "atención continua,\nincluso de madrugada" },
                  { v: "48h",  l: "para que tu clínica\nfuncione con IA" },
                ].map(s => (
                  <div key={s.v}>
                    <p className="font-[family-name:var(--font-display)] text-[26px] font-800 text-[var(--color-text)] tracking-[-0.03em] leading-none">{s.v}</p>
                    <p className="mt-1.5 text-[11px] text-[var(--color-text-3)] leading-[1.4] whitespace-pre-line">{s.l}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </motion.div>

          {/* Right: 3-D phone scene */}
          <div className="hidden lg:block relative flex-shrink-0" style={{ width: "480px", height: "620px" }}>

            {/* stat chip — top left */}
            <div className="absolute" style={{ left: "0", top: "56px", zIndex: 20 }}>
              <StatChip label="Citas hoy" value="24" sub="+40% vs ayer" delay={0} float="up" />
            </div>

            {/* stat chip — bottom right */}
            <div className="absolute" style={{ right: "0", bottom: "70px", zIndex: 20 }}>
              <StatChip label="Tiempo libre" value="2h 14m" sub="ahorrado hoy" delay={0.6} float="down" />
            </div>

            {/* IA activa pill — top right */}
            <div
              className="absolute flex items-center gap-1.5 bg-white rounded-full px-3 py-1.5 shadow-md border border-black/[0.06]"
              style={{ right: "12px", top: "26px", zIndex: 20, animation: "float-up 3.8s ease-in-out infinite 0.4s" }}
            >
              <span className="w-2 h-2 rounded-full" style={{ background: "#00A884", animation: "pulse-dot 2s ease-in-out infinite" }} />
              <span className="text-[11px] font-600 text-[var(--color-text-2)]">IA activa</span>
            </div>

            {/* phone — 3D tilted, static */}
            <div
              className="absolute"
              style={{
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%) perspective(1200px) rotateY(-16deg) rotateX(5deg) rotateZ(1deg)",
                transformOrigin: "center center",
                zIndex: 10,
              }}
            >
              <WAPhone />
            </div>

            {/* floor reflection */}
            <div
              className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full blur-3xl"
              style={{ width: "220px", height: "30px", background: "rgba(37,99,235,0.18)", zIndex: 5 }}
            />
          </div>
        </div>

        {/* ── bottom strip ── */}
        <div className="border-t border-[var(--color-border)] py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-[12px] text-[var(--color-text-3)] tracking-wide">
            Para clínicas dentales · estéticas · fisioterapia
          </p>
          <div className="flex items-center gap-6">
            {["Sin permanencia", "Configuración en 48h", "Soporte incluido"].map(t => (
              <span key={t} className="flex items-center gap-1.5 text-[12px] text-[var(--color-text-3)]">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <circle cx="6" cy="6" r="5.5" stroke="var(--color-border)" />
                  <path d="M3.5 6l1.8 1.8L8.5 4" stroke="var(--color-lime)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {t}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
