import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import CtaBanda from "@/components/CtaBanda";
import { productosData } from "@/data/productos";

export const metadata: Metadata = {
  title: "Catálogo de Productos | IKOMI PERÚ",
  description:
    "Explora nuestro catálogo con los mejores repuestos y piezas para tu vehículo.",
};

export default function ProductosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Catálogo"
        titulo="Repuestos para camiones y buses"
        descripcion="Stock real en Lima, de las principales marcas de Corea y Japón. Si no ves el repuesto que buscas, escríbenos y lo confirmamos desde el almacén."
        imagen="https://ikomiperu.com/assets/img/por-que-ikomi.webp"
      />

      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:py-20 xl:px-12">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <SectionTitle titulo={`${productosData.length} productos`} />
          <p className="text-sm text-navy-mist">
            Repuestos con precio publicado y otros que se cotizan por WhatsApp.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {productosData.map((producto) => (
            <ProductCard key={producto.id} producto={producto} />
          ))}
        </div>
      </section>

      <CtaBanda />
    </>
  );
}
