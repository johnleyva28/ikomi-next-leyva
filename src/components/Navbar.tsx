"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import IconoWhatsApp from "@/components/IconoWhatsApp";

const navItems = [
  { name: "INICIO", path: "/" },
  { name: "PRODUCTOS", path: "/productos" },
  { name: "SERVICIOS", path: "/servicios" },
  { name: "MARCAS", path: "/marcas" },
  { name: "NOSOTROS", path: "/nosotros" },
  { name: "CONTACTO", path: "/contacto" },
];

const WHATSAPP_URL =
  "https://wa.me/51985068416?text=Hola%2C%20busco%20repuesto(s)%20para%20mi%20veh%C3%ADculo.";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // El menú móvil bloquea el scroll del fondo mientras está abierto.
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Escape cierra el menú y el foco entra al panel abierto.
  useEffect(() => {
    if (!isOpen) return;
    panelRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const isActive = (path: string) =>
    pathname === path || (path !== "/" && pathname.startsWith(path));

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-navy text-white shadow-2xl">
        {/* BARRA SUPERIOR DE CONTACTO */}
        <div className="hidden w-full items-center justify-between border-b border-white/10 bg-navy-deep px-6 py-1.5 text-[11px] text-gray-300 lg:flex xl:px-12">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-red-bright" aria-hidden />
              Av. Nicolás Ayllón 3384, Ate
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-red-bright" aria-hidden />
              ventas@ikomiperu.com
            </span>
          </div>
          <span className="flex items-center gap-1.5 font-bold tracking-wide text-red-bright">
            <Phone className="h-3.5 w-3.5" aria-hidden />
            +51 985 068 416
          </span>
        </div>

        {/* LOGO + NAVEGACIÓN */}
        <div className="flex w-full items-center justify-between px-6 py-3.5 xl:px-12">
          <Link href="/" className="group flex items-center gap-3">
            <Image
              src="https://ikomiperu.com/assets/img/logo-ikomi.webp"
              alt="IKOMI PERÚ"
              width={48}
              height={20}
              className="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white">IKOMI PERÚ</span>
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">
                MÁS QUE REPUESTOS
              </span>
            </div>
          </Link>

          {/* NAVEGACIÓN DESKTOP */}
          <nav className="hidden items-center gap-5 lg:flex xl:gap-8">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  aria-current={active ? "page" : undefined}
                  className={`group relative py-2 text-xs font-bold tracking-wider transition-colors duration-200 ${
                    active ? "font-extrabold text-white" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-red-bright transition-all duration-300 ease-out ${
                      active
                        ? "w-full opacity-100"
                        : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* BURGER */}
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
            aria-controls="menu-movil"
            className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            <span className="sr-only">Menú</span>
            <span
              className={`absolute left-2.5 right-2.5 h-[2px] rounded bg-current transition-all duration-300 ${
                isOpen ? "translate-y-0 rotate-45" : "-translate-y-[7px] rotate-0"
              }`}
            />
            <span
              className={`absolute left-2.5 right-2.5 h-[2px] rounded bg-current transition-all duration-200 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-2.5 right-2.5 h-[2px] rounded bg-current transition-all duration-300 ${
                isOpen ? "translate-y-0 -rotate-45" : "translate-y-[7px] rotate-0"
              }`}
            />
          </button>
        </div>
      </header>

      {/* PANEL MÓVIL (pantalla completa, como en ikomiperu.com) */}
      {isOpen && (
        <div
          id="menu-movil"
          ref={panelRef}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
          className="menu-panel fixed inset-0 z-40 bg-navy-deep lg:hidden"
        >
          <div className="flex h-full flex-col justify-between overflow-y-auto px-6 pb-8 pt-24">
            <nav className="flex flex-col">
              {navItems.map((item, index) => {
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`menu-item flex items-center justify-between border-b border-white/10 py-4 text-2xl font-black uppercase tracking-wide transition-colors duration-200 ${
                      active ? "text-red-bright" : "text-white hover:text-red-bright"
                    }`}
                    style={{ animationDelay: `${120 + index * 60}ms` }}
                  >
                    {item.name}
                    <ArrowUpRight className="h-5 w-5 shrink-0 opacity-70" aria-hidden />
                  </Link>
                );
              })}
            </nav>

            {/* PIE DEL PANEL: CONTACTO */}
            <div className="mt-8 flex flex-col gap-3 text-sm text-gray-300">
              <a href="tel:+51985068416" className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-red-bright" aria-hidden />
                +51 985 068 416
              </a>
              <a href="mailto:ventas@ikomiperu.com" className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-red-bright" aria-hidden />
                ventas@ikomiperu.com
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-md bg-red-bright px-5 py-3 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-red"
              >
                <IconoWhatsApp className="h-4 w-4" />
                Cotizar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
