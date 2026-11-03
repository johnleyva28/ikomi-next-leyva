import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nosotros | IKOMI PERÚ',
  description: 'Conoce más sobre la trayectoria, equipo, almacén y tienda de IKOMI PERÚ.',
};

export default function NosotrosPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Sobre Nosotros</h1>
      <p className="mt-4">Somos una empresa importadora líder en repuestos de Korea y Japón.</p>
    </main>
  );
}