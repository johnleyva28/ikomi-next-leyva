import type { Metadata } from "next";
import { Montserrat, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import { contacto } from "@/data/sitio";

// next/font descarga la fuente en el build y la sirve desde el propio dominio:
// sin peticiones a Google, sin salto de layout y con el peso variable disponible.
const display = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const body = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IKOMI PERÚ S.R.L. - Repuestos de Korea y Japón",
  description: "Empresa importadora y comercializadora de repuestos para todo tipo de vehículos.",
  icons: {
    icon: "https://ikomiperu.com/icon-512.png?v=1790267432357",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable}`}>
      <body className="flex min-h-screen flex-col bg-navy-deep font-body text-white antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppFab href={contacto.whatsapp} />
      </body>
    </html>
  );
}
