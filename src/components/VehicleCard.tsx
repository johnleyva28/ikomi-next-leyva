import Image from "next/image";
import Link from "next/link";
import type { Vehiculo } from "@/data/sitio";

interface VehicleCardProps {
  vehiculo: Vehiculo;
}

/** Tarjeta de una unidad (camión o bus) sobre la que tenemos repuestos. */
export default function VehicleCard({ vehiculo }: VehicleCardProps) {
  return (
    <Link
      href="/productos"
      className="group flex flex-col overflow-hidden rounded-lg border border-white/10 bg-navy-2/50 transition-all duration-300 hover:-translate-y-1 hover:border-red-bright/60"
    >
      <div className="relative aspect-4/3 overflow-hidden bg-navy-3">
        <Image
          src={vehiculo.imagen}
          alt={`${vehiculo.nombre}: ${vehiculo.descripcion}`}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl font-bold uppercase text-white transition-colors group-hover:text-red-bright">
          {vehiculo.nombre}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-navy-mist">{vehiculo.descripcion}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-red-bright">
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
