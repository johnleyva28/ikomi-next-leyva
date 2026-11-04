interface SectionTitleProps {
  /** Texto corto que va encima del título, por ejemplo "Nuestras marcas". */
  eyebrow?: string;
  titulo: string;
  descripcion?: string;
  /** Centra el bloque en lugar de alinearlo a la izquierda. */
  centrado?: boolean;
}

/**
 * Encabezado reutilizable de cada sección del sitio.
 * Es un Server Component: no necesita estado ni efectos, solo pinta HTML.
 */
export default function SectionTitle({
  eyebrow,
  titulo,
  descripcion,
  centrado = false,
}: SectionTitleProps) {
  return (
    <div className={centrado ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-red-bright">
          {centrado && <span className="h-px w-8 bg-red-bright" aria-hidden="true" />}
          {eyebrow}
          {centrado && <span className="h-px w-8 bg-red-bright" aria-hidden="true" />}
        </p>
      )}
      <h2 className="mt-3 text-3xl font-extrabold uppercase leading-tight text-white md:text-4xl">
        {titulo}
      </h2>
      {descripcion && (
        <p className="mt-4 text-base leading-relaxed text-navy-mist">{descripcion}</p>
      )}
    </div>
  );
}
