import Image from "next/image";
import Marquee from "@/components/Marquee";
import { marcasRepuestos } from "@/data/sitio";

/**
 * Carrusel infinito de marcas de repuestos (animación con propósito: comunica que
 * el catálogo cubre muchas marcas sin obligar a desplazar una lista larga).
 */
export default function BrandsMarquee() {
  return (
    <div className="relative overflow-hidden py-2">
      <Marquee duration="45s" gap="3rem" pauseOnHover>
        {marcasRepuestos.map((marca) => (
          <div
            key={marca.slug}
            className="flex h-16 w-32 shrink-0 items-center justify-center rounded-md border border-white/10 bg-navy-2/40 px-4"
          >
            <Image
              src={marca.imagen}
              alt={`Logo de ${marca.nombre}`}
              width={110}
              height={40}
              sizes="128px"
              className="max-h-10 w-auto opacity-70 transition-opacity duration-300 hover:opacity-100"
            />
          </div>
        ))}
      </Marquee>

      {/* Desvanecido en los bordes para que los logos entren y salgan del marco */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-navy-deep to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-navy-deep to-transparent"
        aria-hidden="true"
      />
    </div>
  );
}
