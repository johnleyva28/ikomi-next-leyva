import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col items-center px-6 py-24 text-center">
      <p className="font-display text-7xl font-extrabold leading-none text-red-bright">404</p>
      <h1 className="mt-4 font-display text-3xl font-extrabold uppercase text-white">
        Página no encontrada
      </h1>
      <p className="mt-4 max-w-md text-navy-mist">
        La sección o el repuesto que buscas no existe en IKOMI PERÚ. Puede que el enlace esté mal
        escrito o que el producto ya no esté en el catálogo.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-md bg-red-bright px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-red"
        >
          Volver al inicio
        </Link>
        <Link
          href="/productos"
          className="inline-flex items-center gap-2 rounded-md border border-white/25 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:border-white hover:bg-white/10"
        >
          Ver el catálogo
        </Link>
      </div>
    </section>
  );
}
