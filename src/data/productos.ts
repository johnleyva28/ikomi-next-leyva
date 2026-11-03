export interface Producto {
  id: string;
  slug: string;
  nombre: string;
  categoria: string;
  descripcion: string;
  imagen: string;
}

export const productosData: Producto[] = [
  {
    id: "1",
    slug: "disco-embrague",
    nombre: "Disco, Plato y Collarín de Embrague",
    categoria: "Embrague",
    descripcion: "Juego completo de embrague para camiones de alta resistencia, garantizando una excelente durabilidad y rendimiento.",
    imagen: "/images/productos/embrague.jpg"
  },
  {
    id: "2",
    slug: "pinon-corona",
    nombre: "Piñón y Parte de Caja",
    categoria: "Transmisión",
    descripcion: "Conjunto de piñón y corona diseñado para soportar altas cargas de trabajo en cajas de transmisión de vehículos pesados.",
    imagen: "/images/productos/pinon.jpg"
  },
  {
    id: "3",
    slug: "pastilla-freno",
    nombre: "Pastilla y Zapata de Freno",
    categoria: "Frenos",
    descripcion: "Pastillas de freno mecánicas de fricción de la marca Sangsin Brake, con máxima precisión de frenado para buses y camiones.",
    imagen: "/images/productos/frenos.jpg"
  }
];