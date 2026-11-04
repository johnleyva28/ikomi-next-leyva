import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import CtaBanda from "@/components/CtaBanda";
import { proceso, ventajas } from "@/data/sitio";

export const metadata: Metadata = {
  title: "Servicios | IKOMI PERÚ",
  description: "Ofrecemos ventas, asesoría especializada, delivery y catálogo de productos.",
};

export default function ServiciosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Servicios"
        titulo="Atención que no se detiene en la venta"
        descripcion="Asesoría técnica, stock en Lima, despacho a todo el Perú y respaldo post-venta para que tu unidad nunca se quede varada."
        imagen="https://ikomiperu.com/assets/img/por-que-ikomi.webp"
      />

      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24 xl:px-12">
        <SectionTitle
          eyebrow="Lo que ofrecemos"
          titulo="Un repuesto es solo el principio"
          descripcion="Te ayudamos a identificar la pieza correcta, coordinamos el despacho y seguimos disponibles después de la compra."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {ventajas.map((ventaja) => (
            <article
              key={ventaja.titulo}
              className="group rounded-lg border border-white/10 bg-navy-2/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-red-bright/60"
            >
              <span className="font-display text-4xl font-bold text-red-bright/30 transition-colors duration-300 group-hover:text-red-bright">
                {String(ventajas.indexOf(ventaja) + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-2xl font-bold uppercase text-white">
                {ventaja.titulo}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-mist">{ventaja.descripcion}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-navy/40">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24 xl:px-12">
          <SectionTitle
            eyebrow="Cómo trabajamos"
            titulo="Tres pasos, cero vueltas"
            centrado
          />
          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {proceso.map((paso) => (
              <li
                key={paso.numero}
                className="rounded-lg border border-white/10 bg-navy-2/40 p-7 transition-colors duration-300 hover:border-red-bright/60"
              >
                <span className="font-display text-4xl font-bold text-red-bright">{paso.numero}</span>
                <h3 className="mt-3 font-display text-xl font-bold uppercase text-white">
                  {paso.titulo}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-mist">{paso.descripcion}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBanda
        titulo="¿Tu unidad está varada?"
        descripcion="Si estás frente a una emergencia, podemos dar prioridad a tu solicitud y ayudarte a encontrar una solución rápidamente."
      />
    </>
  );
}
