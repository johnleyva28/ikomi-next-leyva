import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inicio | IKOMI PERÚ S.R.L. - Repuestos para Camiones',
  description: 'Empresa importadora y comercializadora de repuestos de calidad para camiones de marcas coreanas y japonesas.',
};

export default function HomePage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Bienvenido a IKOMI PERÚ</h1>
      <p className="mt-4">Repuestos en general para camiones de todas las marcas.</p>
    </main>
  );
}