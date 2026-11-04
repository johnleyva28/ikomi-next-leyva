"use client";

import { useState } from "react";
import IconoWhatsApp from "@/components/IconoWhatsApp";

const perfiles = ["Mecánico", "Dueño de flota", "Transportista", "Vendedor de repuestos", "Otro"];

interface ContactFormProps {
  /** Teléfono de WhatsApp al que se manda la consulta (solo dígitos, con código de país). */
  whatsapp: string;
}

/**
 * Formulario de cotización. Solo es interfaz: no manda nada a un servidor,
 * arma el mensaje y lo abre en WhatsApp, que es el canal real de la empresa.
 * Al usar estado es un Client Component.
 */
export default function ContactForm({ whatsapp }: ContactFormProps) {
  const [nombre, setNombre] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [perfil, setPerfil] = useState(perfiles[0]);
  const [vehiculo, setVehiculo] = useState("");
  const [repuesto, setRepuesto] = useState("");

  const mensaje = [
    `Hola, quiero cotizar un repuesto.`,
    `Nombre: ${nombre}`,
    empresa && `Empresa: ${empresa}`,
    `Teléfono: ${telefono}`,
    correo && `Correo: ${correo}`,
    `Soy: ${perfil}`,
    vehiculo && `Unidad: ${vehiculo}`,
    `Repuesto que necesito: ${repuesto}`,
  ]
    .filter(Boolean)
    .join("\n");

  const href = `https://wa.me/${whatsapp}?text=${encodeURIComponent(mensaje)}`;

  return (
    <form className="grid gap-5 rounded-lg border border-white/10 bg-navy-2/40 p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm">
          <span className="font-medium text-white">
            Nombre completo <span className="text-red-bright">*</span>
          </span>
          <input
            type="text"
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Juan Pérez"
            className="rounded-md border border-white/15 bg-navy-deep/60 px-4 py-3 text-white outline-none transition-colors placeholder:text-navy-mist/60 focus:border-red-bright"
          />
        </label>

        <label className="grid gap-2 text-sm">
          <span className="font-medium text-white">Empresa</span>
          <input
            type="text"
            value={empresa}
            onChange={(e) => setEmpresa(e.target.value)}
            placeholder="Transportes del Norte S.A.C."
            className="rounded-md border border-white/15 bg-navy-deep/60 px-4 py-3 text-white outline-none transition-colors placeholder:text-navy-mist/60 focus:border-red-bright"
          />
        </label>

        <label className="grid gap-2 text-sm">
          <span className="font-medium text-white">
            Teléfono / WhatsApp <span className="text-red-bright">*</span>
          </span>
          <input
            type="tel"
            required
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            placeholder="+51 900 000 000"
            className="rounded-md border border-white/15 bg-navy-deep/60 px-4 py-3 text-white outline-none transition-colors placeholder:text-navy-mist/60 focus:border-red-bright"
          />
        </label>

        <label className="grid gap-2 text-sm">
          <span className="font-medium text-white">Correo electrónico</span>
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="operaciones@empresa.com"
            className="rounded-md border border-white/15 bg-navy-deep/60 px-4 py-3 text-white outline-none transition-colors placeholder:text-navy-mist/60 focus:border-red-bright"
          />
        </label>
      </div>

      <fieldset className="grid gap-3">
        <legend className="text-sm font-medium text-white">Soy…</legend>
        <div className="flex flex-wrap gap-2">
          {perfiles.map((opcion) => (
            <button
              key={opcion}
              type="button"
              onClick={() => setPerfil(opcion)}
              aria-pressed={perfil === opcion}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                perfil === opcion
                  ? "border-red-bright bg-red-bright text-white"
                  : "border-white/15 text-navy-mist hover:border-white/40 hover:text-white"
              }`}
            >
              {opcion}
            </button>
          ))}
        </div>
      </fieldset>

      <label className="grid gap-2 text-sm">
        <span className="font-medium text-white">Marca y modelo de la unidad</span>
        <input
          type="text"
          value={vehiculo}
          onChange={(e) => setVehiculo(e.target.value)}
          placeholder="Hyundai H-100 2.5 D4BH"
          className="rounded-md border border-white/15 bg-navy-deep/60 px-4 py-3 text-white outline-none transition-colors placeholder:text-navy-mist/60 focus:border-red-bright"
        />
      </label>

      <label className="grid gap-2 text-sm">
        <span className="font-medium text-white">
          ¿Qué repuesto necesitas? <span className="text-red-bright">*</span>
        </span>
        <textarea
          required
          rows={4}
          value={repuesto}
          onChange={(e) => setRepuesto(e.target.value)}
          placeholder="Ej.: balancín de admisión Hyundai D4BH, o el número de parte 24531-42880"
          className="resize-y rounded-md border border-white/15 bg-navy-deep/60 px-4 py-3 text-white outline-none transition-colors placeholder:text-navy-mist/60 focus:border-red-bright"
        />
      </label>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-red-bright px-6 py-4 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-red"
      >
        <IconoWhatsApp className="h-4 w-4" />
        Enviar por WhatsApp
      </a>

      <p className="text-xs text-navy-mist">
        Los campos con <span className="text-red-bright">*</span> son obligatorios. El mensaje se
        abre en WhatsApp listo para enviar.
      </p>
    </form>
  );
}
