import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marcas Aliadas | IKOMI PERÚ',
  description: 'Contamos con marcas reconocidas como Sangsin, Hansang, Mando, TCIC, Valeo y Yulim.',
};

export default function MarcasPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Marcas Garantizadas</h1>
      <p className="mt-4">Trabajamos con los mejores fabricantes de repuestos internacionales.</p>
    </main>
  );
}