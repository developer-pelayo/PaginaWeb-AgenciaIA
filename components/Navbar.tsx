"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#como-funciona" },
  { label: "Precios", href: "#precios" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-[var(--color-border)]"
          : ""
      }`}
    >
      <nav className="mx-auto max-w-[1200px] px-6 md:px-10 flex items-center justify-between h-[70px]">
        {/* Logo */}
        <a
          href="#"
          className="font-[family-name:var(--font-display)] text-[21px] font-800 tracking-[-0.04em]"
        >
          atom<span className="text-[var(--color-lime)]">á</span>tica
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13px] font-medium text-[var(--color-text-2)] hover:text-[var(--color-text)] transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </div>

          <a
            href="https://calendly.com/atomatica/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-600 bg-[var(--color-lime)] text-[var(--color-bg)] px-5 py-2 rounded-lg hover:bg-[var(--color-lime)]/90 transition-colors"
          >
            Hablemos
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[var(--color-text-2)]"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar" : "Menú"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[var(--color-bg)] border-b border-[var(--color-border)]"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-[15px] font-medium text-[var(--color-text-2)] hover:text-[var(--color-text)] transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://calendly.com/atomatica/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] font-600 bg-[var(--color-lime)] text-[var(--color-bg)] px-5 py-2.5 rounded-lg text-center"
              >
                Hablemos
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
