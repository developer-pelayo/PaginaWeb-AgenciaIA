import { ArrowLeft, ArrowDownRight } from "lucide-react";
import Link from "next/link";

const services: Record<
  string,
  { title: string; description: string; features: string[] }
> = {
  "recepcionista-whatsapp": {
    title: "Recepcionista IA por WhatsApp",
    description:
      "Un agente de IA que atiende el WhatsApp de tu clínica 24 horas al día, 7 días a la semana. Agenda citas, responde dudas sobre precios y tratamientos, manda recordatorios automáticos y escala a tu recepcionista cuando no puede resolver algo.",
    features: [
      "Atención 24/7 sin intervención humana",
      "Agendado de citas directamente en tu calendario",
      "Respuestas sobre precios, tratamientos y horarios de tu clínica",
      "Recordatorios automáticos 24h antes de cada cita",
      "Escalado a recepcionista humana cuando hace falta",
      "Configurado con los datos reales de tu clínica",
    ],
  },
  "reactivacion-pacientes": {
    title: "Reactivación de pacientes",
    description:
      "Campañas automáticas por WhatsApp para pacientes que llevan meses sin volver. El sistema identifica quién lleva tiempo sin visita y les manda un mensaje personalizado en el momento justo. Sin que tu equipo tenga que hacer nada.",
    features: [
      "Identificación automática de pacientes inactivos",
      "Mensajes personalizados por WhatsApp",
      "Segmentación por tiempo sin visita y tipo de tratamiento",
      "Seguimiento automático si no hay respuesta",
      "Sin trabajo manual para tu equipo",
      "Integración con tu base de datos de pacientes",
    ],
  },
  "resenas-google": {
    title: "Reseñas automáticas de Google",
    description:
      "Mensaje automático por WhatsApp después de cada consulta pidiendo reseña en Google. Llega en el momento en que el paciente está más satisfecho, con un enlace directo. Sin que tu recepcionista tenga que acordarse de pedirlo.",
    features: [
      "Mensaje automático post-consulta por WhatsApp",
      "Enlace directo a tu perfil de Google",
      "Timing optimizado: llega cuando el paciente está contento",
      "Sin intervención manual de tu equipo",
      "Más reseñas positivas sin pedirlas a mano",
      "Compatible con cualquier clínica con WhatsApp Business",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return params.then(({ slug }) => {
    const service = services[slug];
    if (!service) return { title: "Servicio — Atomática" };
    return {
      title: `${service.title} — Atomática`,
      description: service.description,
    };
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services[slug];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="font-[family-name:var(--font-display)] text-3xl font-800 mb-4">
            Servicio no encontrado
          </h1>
          <Link
            href="/#servicios"
            className="text-[var(--color-lime)] hover:underline"
          >
            Volver a servicios
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 inset-x-0 z-50 bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 flex items-center justify-between h-[70px]">
          <Link
            href="/"
            className="font-[family-name:var(--font-display)] text-[21px] font-800 tracking-[-0.04em]"
          >
            atom<span className="text-[var(--color-lime)]">á</span>tica
          </Link>
          <Link
            href="/#servicios"
            className="inline-flex items-center gap-2 text-[13px] font-500 text-[var(--color-text-2)] hover:text-[var(--color-text)] transition-colors"
          >
            <ArrowLeft size={14} />
            Todos los servicios
          </Link>
        </div>
      </nav>

      <main className="pt-[130px] pb-32 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[13px] font-500 text-[var(--color-lime)] tracking-[0.08em] uppercase mb-6">
            Servicio
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,4.5rem)] font-800 tracking-[-0.04em] leading-[0.95]">
            {service.title}
          </h1>
          <p className="mt-6 text-[17px] text-[var(--color-text-2)] leading-[1.7] max-w-[560px]">
            {service.description}
          </p>

          <div className="mt-16">
            <h2 className="font-[family-name:var(--font-display)] text-[19px] font-700 tracking-[-0.01em] mb-8">
              Qué incluye
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[var(--color-border)] border border-[var(--color-border)]">
              {service.features.map((f) => (
                <div
                  key={f}
                  className="bg-[var(--color-bg)] p-6 flex items-start gap-4"
                >
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[var(--color-lime)] flex-shrink-0" />
                  <span className="text-[15px] text-[var(--color-text-2)] leading-snug">
                    {f}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 border border-[var(--color-border)] rounded-lg bg-[var(--color-surface)] p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-[22px] font-700 tracking-[-0.02em] mb-2">
                ¿Te interesa para tu clínica?
              </h3>
              <p className="text-[15px] text-[var(--color-text-2)] max-w-[400px]">
                15 minutos para contarnos cómo funciona tu clínica. Propuesta
                con precio cerrado en 48 horas. Sin compromiso.
              </p>
            </div>
            <a
              href="https://calendly.com/atomatica/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-[var(--color-lime)] text-[var(--color-bg)] text-[14px] font-600 px-6 py-3 rounded-lg hover:bg-[var(--color-lime)]/90 transition-colors whitespace-nowrap flex-shrink-0"
            >
              Agenda tu consulta gratuita
              <ArrowDownRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
