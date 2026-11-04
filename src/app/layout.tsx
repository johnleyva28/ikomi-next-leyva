import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "IKOMI PERÚ S.R.L. - Repuestos de Korea y Japón",
  description: "Empresa importadora y comercializadora de repuestos para todo tipo de vehículos.",
  icons: {
    icon: "https://ikomiperu.com/icon-512.png?v=1790267432357",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <body className="flex min-h-screen flex-col bg-navy-deep text-white antialiased">
        <Navbar />
        <div className="flex-grow">{children}</div>
      </body>
    </html>
  );
}