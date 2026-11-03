import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { productosData } from '@/data/productos';

interface Props {
  params: Promise<{ slug: string }>;
}

// 1. Genera las rutas estáticas durante el build para que no falle la prerenderización
export async function generateStaticParams() {
  return productosData.map((producto) => ({
    slug: producto.slug,
  }));
}

// 2. Generación de Metadata dinámica
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const producto = productosData.find((p) => p.slug === slug);

  if (!producto) {
    return { title: 'Producto no encontrado | IKOMI PERÚ' };
  }

  return {
    title: `${producto.nombre} | IKOMI PERÚ`,
    description: producto.descripcion,
  };
}

// 3. Componente de la Página
export default async function ProductoDetallePage({ params }: Props) {
  const { slug } = await params;
  const producto = productosData.find((p) => p.slug === slug);

  if (!producto) {
    notFound();
  }

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">{producto.nombre}</h1>
      <span className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded mt-2">
        {producto.categoria}
      </span>
      <p className="mt-4 text-gray-700">{producto.descripcion}</p>
    </main>
  );
}