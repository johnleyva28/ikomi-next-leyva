import { Metadata } from 'next';
import Link from 'next/link';
import { productosData } from '@/data/productos';

export const metadata: Metadata = {
  title: 'Catálogo de Productos | IKOMI PERÚ',
  description: 'Explora nuestro catálogo con los mejores repuestos y piezas para tu vehículo.',
};

export default function ProductosPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Catálogo de Productos</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {productosData.map((prod) => (
          <div key={prod.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-bold">{prod.nombre}</h2>
            <p className="text-sm text-gray-600">{prod.categoria}</p>
            <Link 
              href={`/productos/${prod.slug}`} 
              className="inline-block mt-4 text-blue-600 underline font-medium"
            >
              Ver Detalle
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
