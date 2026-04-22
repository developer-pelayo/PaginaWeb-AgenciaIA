import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const body = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Atomática — Agencia de automatización con IA",
  description:
    "Automatizamos tu negocio con inteligencia artificial. Páginas web, chatbots, asistentes de voz, automatización de procesos y más. Para cualquier sector.",
  keywords: [
    "automatización IA",
    "agencia automatización",
    "chatbot IA",
    "asistente voz IA",
    "automatización procesos",
    "agencia IA España",
  ],
  authors: [{ name: "Atomática" }],
  openGraph: {
    title: "Atomática — Agencia de automatización con IA",
    description:
      "Automatizamos tu negocio con inteligencia artificial. Para cualquier sector.",
    url: "https://atomatica.es",
    siteName: "Atomática",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atomática — Agencia de automatización con IA",
    description:
      "Automatizamos tu negocio con inteligencia artificial.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
