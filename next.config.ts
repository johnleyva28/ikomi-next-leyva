import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Oculta el indicador de desarrollo de Next.js para que las capturas de evidencia salen limpias.
  devIndicators: false,
  // Cache Components + Partial Prefetching habilitan la navegación instantánea entre rutas del App Router.
  cacheComponents: true,
  partialPrefetching: true,
  experimental: {
    // La validación instantánea solo corre en desarrollo y avisa por cada segmento.
    // Con 'manual-warning' se valida únicamente lo que se marca a propósito (por ejemplo
    // `export const instant = false` en /contacto, que trae el mapa de Google Maps).
    instantInsights: {
      validationLevel: "manual-warning",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ikomiperu.com',
      },
    ],
  },
};

export default nextConfig;