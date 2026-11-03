import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contáctenos | IKOMI PERÚ',
  description: 'Ponte en contacto con nuestro equipo de atención y ventas en Ate, Lima.',
};

export default function ContactoPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Contáctenos</h1>
      <p className="mt-4">Envíanos un mensaje y un asesor te atenderá pronto.</p>
    </main>
  );
}