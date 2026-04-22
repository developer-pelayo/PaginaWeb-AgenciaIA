import { ArrowLeft, ArrowDownRight } from "lucide-react";
import Link from "next/link";

const services: Record<
  string,
  { title: string; description: string; features: string[] }
> = {
  "paginas-web": {
    title: "Páginas web",
    description:
      "Diseñamos y desarrollamos landing pages, webs corporativas y tiendas online a medida. Rápidas, optimizadas para SEO y con un diseño que convierte visitantes en clientes.",
    features: [
      "Landing pages de alta conversión",
      "Webs corporativas a medida",
      "Tiendas online (Shopify, WooCommerce, custom)",
      "Diseño responsive y optimizado para móvil",
      "SEO técnico incluido",
      "Panel de administración fácil de usar",
    ],
  },
  "asistentes-voz": {
    title: "Asistentes de voz con IA",
    description:
      "Creamos asistentes telefónicos y por voz que atienden llamadas, cualifican leads, gestionan citas y responden preguntas frecuentes de forma autónoma, 24 horas al día.",
    features: [
      "Atención telefónica automatizada 24/7",
      "Cualificación de leads por voz",
      "Gestión automática de citas",
      "Integración con tu CRM y calendario",
      "Voz natural y personalizable",
      "Transferencia a humano cuando sea necesario",
    ],
  },
  chatbots: {
    title: "Chatbots con IA",
    description:
      "Chatbots inteligentes para WhatsApp, tu web o redes sociales que responden a tus clientes con datos reales de tu negocio. No son bots genéricos: entienden contexto y resuelven problemas.",
    features: [
      "WhatsApp Business, web, Instagram, Telegram",
      "Respuestas basadas en datos reales de tu negocio",
      "Gestión de pedidos y consultas",
      "Cualificación y captación de leads",
      "Escalado automático a humano",
      "Analytics de conversaciones",
    ],
  },
  "automatizacion-procesos": {
    title: "Automatización de procesos",
    description:
      "Conectamos tus herramientas entre sí y automatizamos las tareas repetitivas que te roban tiempo. Desde facturas automáticas hasta flujos de trabajo complejos entre múltiples plataformas.",
    features: [
      "Conexión entre cualquier herramienta con API",
      "Automatización con Make, Zapier o custom",
      "Flujos de facturación automática",
      "Sincronización de datos entre plataformas",
      "Alertas y notificaciones inteligentes",
      "Eliminación de tareas manuales repetitivas",
    ],
  },
  dashboards: {
    title: "Dashboards e informes con IA",
    description:
      "Paneles de control en tiempo real que centralizan todos tus datos y te dan insights accionables generados por IA. Deja de buscar información en 10 sitios distintos.",
    features: [
      "Dashboard en tiempo real personalizado",
      "Centralización de datos de múltiples fuentes",
      "Insights y recomendaciones generadas por IA",
      "Reportes automáticos periódicos",
      "Alertas inteligentes cuando algo cambia",
      "Accesible desde móvil y escritorio",
    ],
  },
  "email-marketing": {
    title: "Email marketing automatizado",
    description:
      "Secuencias de email inteligentes que se adaptan al comportamiento de cada usuario. Desde bienvenida hasta recuperación de clientes inactivos, todo automático y personalizado.",
    features: [
      "Secuencias de bienvenida automáticas",
      "Emails personalizados con IA",
      "Segmentación inteligente de audiencias",
      "Recuperación de clientes inactivos",
      "A/B testing automatizado",
      "Integración con tu CRM y ecommerce",
    ],
  },
  "agentes-ia": {
    title: "Agentes de IA personalizados",
    description:
      "Agentes autónomos que ejecutan tareas complejas por ti: investigación de mercado, análisis de competencia, generación de contenido, procesamiento de documentos y mucho más.",
    features: [
      "Agentes de investigación y análisis",
      "Generación de contenido automatizada",
      "Procesamiento inteligente de documentos",
      "Extracción y clasificación de datos",
      "Agentes multimodales (texto, imagen, voz)",
      "Integración con tus herramientas existentes",
    ],
  },
  integraciones: {
    title: "Integraciones y APIs",
    description:
      "Conectamos cualquier herramienta con cualquier herramienta. Si tiene API, lo integramos. Eliminamos los silos de información y hacemos que todo tu stack tecnológico trabaje junto.",
    features: [
      "Conexión entre cualquier plataforma",
      "Desarrollo de APIs custom",
      "Webhooks y sincronización en tiempo real",
      "Migración de datos entre plataformas",
      "Integración de IA en herramientas existentes",
      "Documentación y soporte técnico",
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
      {/* Nav */}
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
                ¿Te interesa?
              </h3>
              <p className="text-[15px] text-[var(--color-text-2)] max-w-[400px]">
                Cuéntanos tu proyecto en 15 minutos. Propuesta a medida
                sin compromiso.
              </p>
            </div>
            <a
              href="https://calendly.com/atomatica/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-[var(--color-lime)] text-[var(--color-bg)] text-[14px] font-600 px-6 py-3 rounded-lg hover:bg-[var(--color-lime)]/90 transition-colors whitespace-nowrap flex-shrink-0"
            >
              Pide presupuesto gratis
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
