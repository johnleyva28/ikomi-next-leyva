import Link from "next/link";
import { contacto } from "@/data/sitio";

interface CtaBandaProps {
  titulo?: string;
  descripcion?: string;
}

/** Banda de llamada a la acción que cierra las páginas de contenido. */
export default function CtaBanda({
  titulo = "¿No encuentras tu repuesto? Te lo conseguimos.",
  descripcion = "Nuestro catálogo en almacén es mucho más amplio que lo que ves en la web. Escríbenos por WhatsApp o llámanos y te ayudamos a encontrarlo.",
}: CtaBandaProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 xl:px-12">
      <div className="relative overflow-hidden rounded-lg border border-red-bright/40 bg-navy-2/60 px-6 py-10 md:px-12 md:py-14">
        {/* Barrido de luz sobre el borde: refuerza la acción sin distraer. */}
        <span
          className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 animate-shine bg-gradient-to-r from-transparent via-white/10 to-transparent"
          aria-hidden="true"
        />

        <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-bright">
          Atención inmediata
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold uppercase leading-tight text-white md:text-4xl">
          {titulo}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy-mist">{descripcion}</p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={contacto.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-red-bright px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-red"
          >
            Enviar mensaje por WhatsApp
          </a>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 rounded-md border border-white/25 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:border-white hover:bg-white/10"
          >
            Ir a contacto
          </Link>
        </div>
      </div>
    </section>
  );
}
