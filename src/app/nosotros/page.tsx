import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import CtaBanda from "@/components/CtaBanda";
import { hitos, valores } from "@/data/sitio";

export const metadata: Metadata = {
  title: "Nosotros | IKOMI PERÚ",
  description: "Conoce más sobre la trayectoria, equipo, almacén y tienda de IKOMI PERÚ.",
};

export default function NosotrosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Quiénes somos"
        titulo="17 años acompañando tu ruta"
        descripcion="Somos IKOMI PERÚ. Desde hace más de 17 años acompañamos a quienes mantienen el transporte en movimiento, ofreciendo repuestos de calidad para camiones y buses."
        imagen="https://ikomiperu.com/assets/img/por-que-ikomi.webp"
      />

      {/* Línea de tiempo */}
      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24 xl:px-12">
        <SectionTitle eyebrow="Nuestra historia" titulo="De un local a todo el Perú" />
        <ol className="mt-12 space-y-10 border-l border-white/10 pl-6 md:pl-10">
          {hitos.map((hito) => (
            <li key={hito.anio} className="relative">
              <span
                className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-red-bright md:-left-[47px]"
                aria-hidden="true"
              />
              <p className="font-display text-2xl font-bold text-red-bright">{hito.anio}</p>
              <h3 className="mt-1 font-display text-xl font-bold uppercase text-white">
                {hito.titulo}
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-navy-mist">
                {hito.descripcion}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Misión y visión */}
      <section className="border-y border-white/10 bg-navy/40">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-16 md:grid-cols-2 md:py-20 xl:px-12">
          <div className="rounded-lg border border-white/10 bg-navy-2/40 p-8">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-bright">
              Misión
            </p>
            <p className="mt-4 font-display text-2xl font-bold uppercase leading-tight text-white">
              Proporcionar repuestos de calidad y soluciones para mantener el transporte de nuestro
              país siempre en movimiento.
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-navy-2/40 p-8">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-bright">
              Visión
            </p>
            <p className="mt-4 font-display text-2xl font-bold uppercase leading-tight text-white">
              Ser un referente en la importación y comercialización de repuestos para camiones y
              buses a nivel nacional.
            </p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24 xl:px-12">
        <SectionTitle
          eyebrow="Nuestros valores"
          titulo="Cómo trabajamos"
          descripcion="Cuatro principios que resumen cómo atendemos a nuestros clientes y collaborators."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valores.map((valor) => (
            <div
              key={valor.titulo}
              className="rounded-lg border border-white/10 bg-navy-2/40 p-6 transition-colors duration-300 hover:border-red-bright/60"
            >
              <h3 className="font-display text-xl font-bold uppercase text-white">
                {valor.titulo}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-mist">{valor.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanda
        titulo="Cuentan con nosotros."
        descripcion="Para nosotros, atenderte no es solo vender un repuesto. Es escucharte, orientarte y ayudarte a resolver lo que necesitas."
      />
    </>
  );
}
