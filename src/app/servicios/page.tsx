import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Servicios | IKOMI PERÚ',
  description: 'Ofrecemos ventas, asesoría especializada, delivery y catálogo de productos.',
};

export default function ServiciosPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Nuestros Servicios</h1>
      <p className="mt-4">Ventas, Asesoría técnica especializada y Delivery rápido.</p>
    </main>
  );
}