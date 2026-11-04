import { MessageCircle } from "lucide-react";

interface WhatsAppFabProps {
  href: string;
}

/** Botón flotante de WhatsApp, siempre visible como en el sitio original. */
export default function WhatsAppFab({ href }: WhatsAppFabProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir a IKOMI PERÚ por WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-wa-green text-white shadow-lg shadow-black/30 transition-transform duration-300 hover:scale-110"
    >
      <MessageCircle className="h-7 w-7" aria-hidden />
    </a>
  );
}
