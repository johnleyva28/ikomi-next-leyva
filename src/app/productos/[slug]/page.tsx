import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { productosData } from "@/data/productos";
import { contacto } from "@/data/sitio";
import ProductCard from "@/components/ProductCard";
import IconoWhatsApp from "@/components/IconoWhatsApp";

interface Props {
  params: Promise<{ slug: string }>;
}

// 1. Genera las rutas estáticas durante el build para que no falle la prerenderización
export async function generateStaticParams() {
  return productosData.map((producto) => ({
    slug: producto.slug,
  }));
}

// 2. Generación de Metadata dinámica
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const producto = productosData.find((p) => p.slug === slug);

  if (!producto) {
    return { title: "Producto no encontrado | IKOMI PERÚ" };
  }

  return {
    title: `${producto.nombre} | IKOMI PERÚ`,
    description: producto.descripcion,
  };
}

// 3. Componente de la Página
// Con Cache Components, leer `params` fuera de un <Suspense> impide que la navegación
// sea instantánea, así que la lectura se baja a un hijo envuelto en <Suspense>:
// el resto del layout se sigue prerenderizando y solo el detalle del producto entra en streaming.
export default function ProductoDetallePage({ params }: Props) {
  return (
    <Suspense fallback={<DetalleCargando />}>
      <DetalleProducto params={params} />
    </Suspense>
  );
}

async function DetalleProducto({ params }: Props) {
  const { slug } = await params;
  const producto = productosData.find((p) => p.slug === slug);

  if (!producto) {
    notFound();
  }

  const relacionados = productosData
    .filter((p) => p.id !== producto.id)
    .slice(0, 3);

  const mensaje = `Hola, quiero consultar por este repuesto:\n${producto.nombre}\nSKU: ${producto.sku}`;

  return (
    <>
      <section className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16 xl:px-12">
        <nav aria-label="Ruta de navegación" className="text-xs uppercase tracking-wider text-navy-mist">
          <Link href="/" className="transition-colors hover:text-red-bright">
            Inicio
          </Link>
          <span className="mx-2" aria-hidden="true">
            /
          </span>
          <Link href="/productos" className="transition-colors hover:text-red-bright">
            Productos
          </Link>
          <span className="mx-2" aria-hidden="true">
            /
          </span>
          <span className="text-white">{producto.nombre}</span>
        </nav>

        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <div className="relative aspect-4/3 overflow-hidden rounded-lg border border-white/10 bg-navy-2/50">
            <Image
              src={producto.imagen}
              alt={`${producto.nombre} — repuesto ${producto.categoria} disponible en IKOMI PERÚ`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <span className="inline-block rounded bg-red-bright px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
              {producto.categoria}
            </span>
            <h1 className="mt-4 font-display text-3xl font-extrabold uppercase leading-tight text-white md:text-4xl">
              {producto.nombre}
            </h1>
            <p className="mt-2 text-xs uppercase tracking-wider text-navy-mist">
              SKU: {producto.sku}
            </p>

            <div className="mt-6 flex items-baseline gap-4">
              {producto.precio !== null ? (
                <>
                  <span className="font-display text-4xl font-bold text-white">
                    S/. {producto.precio.toFixed(2)}
                  </span>
                  {producto.precioAntes !== null && (
                    <span className="text-lg text-navy-mist line-through">
                      S/. {producto.precioAntes.toFixed(2)}
                    </span>
                  )}
                </>
              ) : (
                <span className="font-display text-2xl font-bold uppercase text-red-bright">
                  Consultar precio
                </span>
              )}
            </div>

            <p className="mt-6 leading-relaxed text-navy-mist">{producto.descripcion}</p>

            <div className="mt-6">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                Aplica en
              </h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {producto.vehiculos.map((vehiculo) => (
                  <li
                    key={vehiculo}
                    className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-navy-mist"
                  >
                    {vehiculo}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                Marca de repuesto
              </h2>
              <p className="mt-2 text-sm text-navy-mist">{producto.marcas.join(", ")}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/51985068416?text=${encodeURIComponent(mensaje)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-red-bright px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-red"
              >
                <IconoWhatsApp className="h-4 w-4" />
                Comprar por WhatsApp
              </a>
              <a
                href={contacto.telefonoHref}
                className="inline-flex items-center gap-2 rounded-md border border-white/25 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:border-white hover:bg-white/10"
              >
                Llamar {contacto.telefono}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-navy/40">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 xl:px-12">
          <h2 className="font-display text-2xl font-extrabold uppercase text-white">
            También te puede interesar
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relacionados.map((relacionado) => (
              <ProductCard key={relacionado.id} producto={relacionado} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/** Esqueleto que se muestra mientras entra en streaming el detalle del producto. */
function DetalleCargando() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16 xl:px-12">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="aspect-4/3 animate-pulse rounded-lg border border-white/10 bg-navy-2/40" />
        <div className="space-y-4">
          <div className="h-6 w-24 animate-pulse rounded bg-navy-2/60" />
          <div className="h-10 w-full animate-pulse rounded bg-navy-2/60" />
          <div className="h-12 w-40 animate-pulse rounded bg-navy-2/60" />
          <div className="h-20 w-full animate-pulse rounded bg-navy-2/60" />
        </div>
      </div>
    </section>
  );
}
