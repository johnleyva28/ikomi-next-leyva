import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Oculta el indicador de desarrollo de Next.js para que las capturas de evidencia salen limpias.
  devIndicators: false,
  // Cache Components + Partial Prefetching habilitan la navegación instantánea entre rutas del App Router.
  cacheComponents: true,
  partialPrefetching: true,
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