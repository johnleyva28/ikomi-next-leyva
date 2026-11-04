import Image from "next/image";
import Link from "next/link";
import { contacto, estadisticas } from "@/data/sitio";
import { ArrowRight, MapPin } from "lucide-react";
import IconoWhatsApp from "@/components/IconoWhatsApp";

/**
 * Banner principal de la portada. Server Component: la imagen y los textos
 * se renderizan en el servidor y solo el CSS se encarga de la animación de entrada.
 */
export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src="https://ikomiperu.com/assets/img/hero-inicio.webp"
        alt="Camión con repuestos de IKOMI PERÚ listos para despacho"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/30" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-20 md:py-28 xl:px-12">
        <p className="animate-rise flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-white">
          <span className="h-px w-10 bg-red-bright" aria-hidden="true" />
          Repuestos para camiones y buses
        </p>

        <h1 className="animate-rise mt-5 max-w-3xl font-display text-5xl font-extrabold uppercase leading-[0.92] text-white md:text-7xl [animation-delay:120ms]">
          Repuestos que <span className="text-red-bright">mueven</span> al Perú
        </h1>

        <p className="animate-rise mt-6 max-w-xl text-base leading-relaxed text-navy-mist [animation-delay:220ms]">
          Importación y venta de repuestos de calidad para camiones y buses Hyundai, Kia,
          Mitsubishi, Hino, Isuzu y Nissan. Encuentra todo lo que tu camión, bus o flota necesita
          en un solo lugar.
        </p>

        <div className="animate-rise mt-9 flex flex-wrap items-center gap-4 [animation-delay:320ms]">
          <Link
            href="/productos"
            className="inline-flex items-center gap-2 rounded-md bg-red-bright px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-red"
          >
            Ver catálogo
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <a
            href={contacto.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-white/25 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:border-white hover:bg-white/10"
          >
            <IconoWhatsApp className="h-4 w-4" />
            Cotizar por WhatsApp
          </a>
        </div>

        <p className="animate-rise mt-10 flex items-center gap-2 text-sm text-navy-mist [animation-delay:420ms]">
          <MapPin className="h-4 w-4 text-red-bright" aria-hidden />
          {contacto.direccion}
        </p>
      </div>

      {/* Cifras destacadas */}
      <dl className="relative mx-auto grid w-full max-w-6xl grid-cols-2 gap-6 border-t border-white/10 px-6 py-10 md:grid-cols-4 xl:px-12">
        {estadisticas.map((stat) => (
          <div key={stat.etiqueta}>
            <dt className="sr-only">{stat.etiqueta}</dt>
            <dd>
              <span className="font-display text-3xl font-bold text-red-bright md:text-4xl">
                {stat.valor}
              </span>
              <span className="mt-1 block text-xs uppercase tracking-[0.15em] text-navy-mist">
                {stat.etiqueta}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
