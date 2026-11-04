import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import BrandsMarquee from "@/components/BrandsMarquee";
import CtaBanda from "@/components/CtaBanda";
import { marcasRepuestos, marcasVehiculos } from "@/data/sitio";

export const metadata: Metadata = {
  title: "Marcas Aliadas | IKOMI PERÚ",
  description:
    "Contamos con marcas reconocidas como Sangsin, Hansang, Mando, TCIC, Valeo y Yulim.",
};

export default function MarcasPage() {
  return (
    <>
      <PageHeader
        eyebrow="Nuestras marcas"
        titulo="Trabajamos con las mejores"
        descripcion="Somos partners de los principales fabricantes de Corea y Japón. Cada marca que ves acá tiene stock en nuestro almacén de Ate."
        imagen="https://ikomiperu.com/assets/img/por-que-ikomi.webp"
      />

      {/* Marcas de repuestos */}
      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24 xl:px-12">
        <SectionTitle
          eyebrow="Marcas de repuesto"
          titulo="De quién es el repuesto que buscas"
          descripcion="Si buscas una marca concreta, tenemos stock o lo conseguimos en pocos días."
        />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {marcasRepuestos.map((marca) => (
            <div
              key={marca.slug}
              className="flex h-24 items-center justify-center rounded-md border border-white/10 bg-navy-2/40 px-4 transition-colors duration-300 hover:border-red-bright/60"
            >
              <Image
                src={marca.imagen}
                alt={`Logo de ${marca.nombre}`}
                width={120}
                height={44}
                sizes="120px"
                className="max-h-11 w-auto opacity-80 transition-opacity duration-300 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Marquesina */}
      <section className="border-y border-white/10 bg-navy/40 py-14">
        <div className="mx-auto w-full max-w-6xl px-6 xl:px-12">
          <SectionTitle
            eyebrow="En movimiento"
            titulo="Marcas con las que trabajamos"
            centrado
          />
        </div>
        <div className="mt-10">
          <BrandsMarquee />
        </div>
      </section>

      {/* Marcas de vehículos */}
      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24 xl:px-12">
        <SectionTitle
          eyebrow="Marcas de vehículo"
          titulo="Las que más importan"
          descripcion="Damos repuestos para las marcas de camiones y buses más comunes del mercado peruano."
        />
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {marcasVehiculos.map((marca) => (
            <div
              key={marca.slug}
              className="flex flex-col items-center gap-3 rounded-md border border-white/10 bg-navy-2/40 p-6 transition-colors duration-300 hover:border-red-bright/60"
            >
              <Image
                src={marca.imagen}
                alt={`Logo de ${marca.nombre}`}
                width={100}
                height={38}
                sizes="100px"
                className="h-9 w-auto opacity-80 transition-opacity duration-300 hover:opacity-100"
              />
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-white">
                {marca.nombre}
              </span>
            </div>
          ))}
        </div>
      </section>

      <CtaBanda />
    </>
  );
}
