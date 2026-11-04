import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import { contacto } from "@/data/sitio";

export const metadata: Metadata = {
  title: "Contáctenos | IKOMI PERÚ",
  description: "Ponte en contacto con nuestro equipo de atención y ventas en Ate, Lima.",
};

// La página trae el mapa de Google Maps, que es un iframe externo: Next.js no puede validar
// la navegación instantánea hacia una ruta con recursos de terceros, así que se marca
// como blocking a propósito (en el resto del sitio la navegación sí es instantánea).
export const instant = false;

export default function ContactoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Hablemos"
        titulo="Estamos a un mensaje de distancia"
        descripcion="No importa si tienes el código o una foto del repuesto, o si solo sabes qué vehículo tienes. Cuéntanos qué necesitas por llamada o WhatsApp y te ayudaremos a encontrar el repuesto adecuado."
        imagen="https://ikomiperu.com/assets/img/por-que-ikomi.webp"
      />

      {/* Datos de contacto */}
      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:py-20 xl:px-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionTitle eyebrow="Datos" titulo="Escríbenos o llámanos" />

            <ul className="mt-8 space-y-4 text-navy-mist">
              <li>
                <span className="block text-xs font-bold uppercase tracking-[0.2em] text-white">
                  WhatsApp
                </span>
                <a
                  href={contacto.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-red-bright"
                >
                  {contacto.telefono}
                </a>
              </li>
              <li>
                <span className="block text-xs font-bold uppercase tracking-[0.2em] text-white">
                  Teléfono
                </span>
                <a href={contacto.telefonoHref} className="transition-colors hover:text-red-bright">
                  {contacto.telefono}
                </a>
              </li>
              <li>
                <span className="block text-xs font-bold uppercase tracking-[0.2em] text-white">
                  Correo
                </span>
                <a
                  href={`mailto:${contacto.correo}`}
                  className="transition-colors hover:text-red-bright"
                >
                  {contacto.correo}
                </a>
              </li>
              <li>
                <span className="block text-xs font-bold uppercase tracking-[0.2em] text-white">
                  Dirección
                </span>
                {contacto.direccion}
              </li>
            </ul>

            <div className="mt-10 rounded-lg border border-white/10 bg-navy-2/40 p-6">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                Horario de atención
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-navy-mist">
                {contacto.horario.map((horario) => (
                  <li key={horario.dias} className="flex justify-between gap-4">
                    <span>{horario.dias}</span>
                    <span className="text-white">{horario.horas}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mapa de la dirección real del almacén */}
            <div className="mt-10 overflow-hidden rounded-lg border border-white/10">
              <iframe
                title="Mapa de la ubicación de IKOMI PERÚ en Ate, Lima"
                src="https://www.google.com/maps?q=Avenida%20Nicol%C3%A1s%20Ayll%C3%B3n%203384%2C%20Ate%2C%20Lima%2C%20Per%C3%BA&output=embed"
                width="100%"
                height="320"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block border-0"
              />
              <div className="flex flex-wrap items-center justify-between gap-3 bg-navy-2/60 px-5 py-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                    Visítanos
                  </p>
                  <p className="mt-1 text-sm text-navy-mist">{contacto.direccion}</p>
                </div>
                <a
                  href="https://maps.google.com/?cid=6203740438463707532"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-white/25 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-red-bright hover:text-red-bright"
                >
                  Cómo llegar
                </a>
              </div>
            </div>
          </div>

          <div>
            <SectionTitle eyebrow="Cotización" titulo="Cuéntanos qué necesitas" />
            <div className="mt-8">
              <ContactForm whatsapp="51985068416" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
