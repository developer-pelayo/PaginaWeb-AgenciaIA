import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["600", "700", "800"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Atomática — Automatización con IA para clínicas",
  description:
    "Recepcionista de WhatsApp con IA para clínicas dentales, estéticas y de fisioterapia. Atiende 24/7, agenda citas y reactiva pacientes inactivos.",
  keywords: [
    "recepcionista WhatsApp clínica",
    "automatización clínica dental",
    "chatbot WhatsApp clínica",
    "IA para clínicas España",
    "reactivación pacientes",
    "reseñas Google automáticas",
  ],
  authors: [{ name: "Atomática" }],
  openGraph: {
    title: "Atomática — Automatización con IA para clínicas",
    description:
      "Recepcionista de WhatsApp con IA para clínicas. Atiende 24/7, agenda citas y reactiva pacientes inactivos.",
    url: "https://atomatica.es",
    siteName: "Atomática",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atomática — Automatización con IA para clínicas",
    description:
      "Recepcionista de WhatsApp con IA para clínicas dentales, estéticas y de fisioterapia.",
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
