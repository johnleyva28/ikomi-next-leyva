import Image from "next/image";
import Link from "next/link";
import type { Sistema } from "@/data/sitio";

interface CategoryCardProps {
  sistema: Sistema;
}

/**
 * Tarjeta de un sistema del vehículo (motor, frenos, suspensión...). El hover levanta
 * la tarjeta y sube la foto, para que el usuario sepa que es un enlace.
 */
export default function CategoryCard({ sistema }: CategoryCardProps) {
  return (
    <Link
      href="/productos"
      className="group relative flex h-56 flex-col justify-end overflow-hidden rounded-lg border border-white/10 p-5 transition-colors duration-300 hover:border-red-bright/60"
    >
      <Image
        src={sistema.imagen}
        alt={`Repuestos de ${sistema.nombre.toLowerCase()}`}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-transparent" />
      <div className="relative">
        <h3 className="font-display text-2xl font-bold uppercase text-white">{sistema.nombre}</h3>
        <p className="mt-1 text-sm text-navy-mist">{sistema.descripcion}</p>
        <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-red-bright">
          Ver repuestos
          <svg
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
