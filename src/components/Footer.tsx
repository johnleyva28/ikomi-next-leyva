import Link from "next/link";
import Image from "next/image";
import { contacto } from "@/data/sitio";
import IconoWhatsApp from "@/components/IconoWhatsApp";

const enlaces = [
  { name: "Inicio", path: "/" },
  { name: "Productos", path: "/productos" },
  { name: "Servicios", path: "/servicios" },
  { name: "Marcas", path: "/marcas" },
  { name: "Nosotros", path: "/nosotros" },
  { name: "Contacto", path: "/contacto" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-deep">
      <div className="mx-auto w-full max-w-6xl px-6 py-14 xl:px-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="https://ikomiperu.com/assets/img/logo-ikomi.webp"
                alt="IKOMI PERÚ"
                width={48}
                height={20}
                className="h-8 w-auto"
              />
              <span className="font-display text-lg font-bold uppercase tracking-wide text-white">
                IKOMI PERÚ
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-mist">
              Importación y venta de repuestos de calidad para camiones y buses Hyundai, Kia,
              Mitsubishi, Hino, Isuzu y Nissan. Todo lo que tu flota necesita en un solo lugar.
            </p>
          </div>

          <nav aria-label="Secciones del sitio">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Secciones
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-navy-mist">
              {enlaces.map((enlace) => (
                <li key={enlace.path}>
                  <Link
                    href={enlace.path}
                    className="transition-colors hover:text-red-bright"
                  >
                    {enlace.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Contacto
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-navy-mist">
              <li>{contacto.direccion}</li>
              <li>
                <a href={contacto.telefonoHref} className="transition-colors hover:text-red-bright">
                  {contacto.telefono}
                </a>
              </li>
              <li>
                <a href={`mailto:${contacto.correo}`} className="transition-colors hover:text-red-bright">
                  {contacto.correo}
                </a>
              </li>
            </ul>
            <a
              href={contacto.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center rounded-md bg-red-bright px-5 py-3 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-red"
            >
              <IconoWhatsApp className="h-4 w-4" />
              Cotizar por WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-navy-mist sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 IKOMI PERÚ S.R.L. Todos los derechos reservados.</p>
          <p>Ave. Nicolás Ayllón 3384, Ate, Lima, Perú</p>
        </div>
      </div>
    </footer>
  );
}
