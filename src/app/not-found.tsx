import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="p-8 text-center">
      <h1 className="text-4xl font-bold text-red-600">404 - Página no encontrada</h1>
      <p className="mt-4 text-gray-600">Lo sentimos, la sección o producto que buscas no existe en IKOMI PERÚ.</p>
      <Link href="/" className="inline-block mt-6 px-4 py-2 bg-blue-600 text-white rounded">
        Volver al Inicio
      </Link>
    </main>
  );
}