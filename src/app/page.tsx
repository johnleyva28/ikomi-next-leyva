import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import VehicleCard from "@/components/VehicleCard";
import BrandsMarquee from "@/components/BrandsMarquee";
import CtaBanda from "@/components/CtaBanda";
import { productosData } from "@/data/productos";
import { marcasVehiculos, sistemas, vehiculos, ventajas, proceso } from "@/data/sitio";

export const metadata: Metadata = {
  title: "Inicio | IKOMI PERÚ S.R.L. - Repuestos para Camiones",
  description:
    "Empresa importadora y comercializadora de repuestos de calidad para camiones y buses Hyundai, Kia, Mitsubishi, Hino, Isuzu y Nissan.",
};

export default function HomePage() {
  const destacados = productosData.slice(0, 6);

  return (
    <>
      <Hero />

      {/* Sistemas del vehículo */}
      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24 xl:px-12">
        <SectionTitle
          eyebrow="Repuestos por sistema"
          titulo="Todo el vehículo, en un solo lugar"
          descripcion="Busca por el sistema que necesitas: motor, embrague, transmisión, frenos y más."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sistemas.slice(0, 4).map((sistema) => (
            <CategoryCard key={sistema.slug} sistema={sistema} />
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/productos"
            className="inline-flex items-center gap-2 rounded-md border border-white/25 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:border-red-bright hover:text-red-bright"
          >
            Ver todo el catálogo
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>

      {/* Marcas de vehículos */}
      <section className="border-y border-white/10 bg-navy/40">
        <div className="mx-auto w-full max-w-6xl px-6 py-12 xl:px-12">
          <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-navy-mist">
            Trabajamos con los principales fabricantes de Corea y Japón
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6 sm:grid-cols-6">
            {marcasVehiculos.map((marca) => (
              <div key={marca.slug} className="flex justify-center">
                <BrandMark nombre={marca.nombre} imagen={marca.imagen} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Productos destacados */}
      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24 xl:px-12">
        <SectionTitle
          eyebrow="Del almacén"
          titulo="Repuestos disponibles ahora"
          descripcion="Stock real en Lima, listos para despacho. Si no ves lo que buscas, lo conseguimos."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {destacados.map((producto) => (
            <ProductCard key={producto.id} producto={producto} />
          ))}
        </div>
      </section>

      {/* Marcas de repuestos en movimiento */}
      <section className="border-y border-white/10 bg-navy/40 py-16">
        <div className="mx-auto w-full max-w-6xl px-6 xl:px-12">
          <SectionTitle
            eyebrow="Nuestras marcas"
            titulo="Trabajamos con las mejores marcas de repuestos"
            centrado
          />
        </div>
        <div className="mt-10">
          <BrandsMarquee />
        </div>
      </section>

      {/* Unidades */}
      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24 xl:px-12">
        <SectionTitle
          eyebrow="Por vehículo"
          titulo="¿De qué unidad necesitas repuestos?"
          descripcion="Trabajamos con las unidades que más circulan en el transporte de carga y pasajeros del país."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {vehiculos.slice(0, 4).map((vehiculo) => (
            <VehicleCard key={vehiculo.slug} vehiculo={vehiculo} />
          ))}
        </div>
      </section>

      {/* Ventajas */}
      <section className="border-t border-white/10 bg-navy/40">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24 xl:px-12">
          <SectionTitle
            eyebrow="Por qué IKOMI"
            titulo="Más que repuestos"
            descripcion="Somos importadores y especialistas en repuestos: la diferencia está en el servicio que das después de la venta."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {ventajas.map((ventaja) => (
              <div
                key={ventaja.titulo}
                className="border-l-2 border-red-bright/60 pl-5 transition-colors duration-300 hover:border-red-bright"
              >
                <h3 className="font-display text-xl font-bold uppercase text-white">
                  {ventaja.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-mist">
                  {ventaja.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24 xl:px-12">
        <SectionTitle
          eyebrow="Cómo trabajamos"
          titulo="De tu consulta al despacho"
          centrado
        />
        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {proceso.map((paso) => (
            <li key={paso.numero} className="relative">
              <span className="font-display text-5xl font-bold text-red-bright/30">
                {paso.numero}
              </span>
              <h3 className="mt-2 font-display text-xl font-bold uppercase text-white">
                {paso.titulo}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-mist">{paso.descripcion}</p>
            </li>
          ))}
        </ol>
      </section>

      <CtaBanda />
    </>
  );
}

/** Logo de marca de vehículo. */
function BrandMark({ nombre, imagen }: { nombre: string; imagen: string }) {
  return (
    <span className="flex flex-col items-center gap-2" title={nombre}>
      <Image
        src={imagen}
        alt={`Logo de ${nombre}`}
        width={90}
        height={34}
        sizes="90px"
        className="h-8 w-auto opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
      />
      <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-navy-mist">
        {nombre}
      </span>
    </span>
  );
}
