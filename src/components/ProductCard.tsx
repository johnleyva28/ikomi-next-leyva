import Link from "next/link";
import Image from "next/image";
import type { Producto } from "@/data/productos";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  producto: Producto;
}

/**
 * Tarjeta de producto del catálogo. Recibe los datos por props, así que el mismo
 * componente sirve para el listado, para los destacados del inicio o para un carrusel.
 * Es un Server Component: la animación de hover es CSS puro.
 */
export default function ProductCard({ producto }: ProductCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-navy-2/60 transition-all duration-300 hover:-translate-y-1 hover:border-red-bright/60 hover:shadow-[0_18px_40px_-20px_rgba(227,32,63,0.55)]">
      <Link
        href={`/productos/${producto.slug}`}
        className="relative block aspect-4/3 overflow-hidden bg-navy-3"
      >
        <Image
          src={producto.imagen}
          alt={`${producto.nombre} — repuesto ${producto.categoria} para ${producto.vehiculos.join(", ")}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded bg-red-bright px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
          {producto.categoria}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] uppercase tracking-wider text-navy-mist">SKU: {producto.sku}</p>
        <h3 className="mt-2 text-lg font-bold uppercase leading-snug text-white transition-colors group-hover:text-red-bright">
          <Link href={`/productos/${producto.slug}`}>{producto.nombre}</Link>
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-navy-mist">{producto.descripcion}</p>

        <div className="mt-auto pt-5">
          <div className="flex items-baseline gap-3">
            {producto.precio !== null ? (
              <>
                <span className="font-display text-2xl font-bold text-white">
                  S/. {producto.precio.toFixed(2)}
                </span>
                {producto.precioAntes !== null && (
                  <span className="text-sm text-navy-mist line-through">
                    S/. {producto.precioAntes.toFixed(2)}
                  </span>
                )}
              </>
            ) : (
              <span className="font-display text-xl font-bold uppercase text-red-bright">
                Consultar precio
              </span>
            )}
          </div>

          <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
            <span className="min-w-0 truncate text-xs text-navy-mist">
              {producto.vehiculos.slice(0, 2).join(" · ")}
            </span>
            <Link
              href={`/productos/${producto.slug}`}
              className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap text-xs font-bold uppercase tracking-wider text-white transition-colors hover:text-red-bright"
            >
              Ver detalle
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
