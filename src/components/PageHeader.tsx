import Image from "next/image";

interface PageHeaderProps {
  eyebrow: string;
  titulo: string;
  descripcion: string;
  imagen: string;
}

/** Cabecera de las páginas interiores (catálogo, nosotros, contacto...). */
export default function PageHeader({
  eyebrow,
  titulo,
  descripcion,
  imagen,
}: PageHeaderProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10">
      <Image
        src={imagen}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/85 to-navy/60" />
      <div className="relative mx-auto w-full max-w-6xl px-6 py-16 md:py-20 xl:px-12">
        <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-red-bright">
          <span className="h-px w-10 bg-red-bright" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold uppercase leading-tight text-white md:text-5xl">
          {titulo}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-navy-mist">{descripcion}</p>
      </div>
    </section>
  );
}
