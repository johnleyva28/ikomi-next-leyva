export interface Marca {
  nombre: string;
  imagen: string;
  slug: string;
}

export interface Sistema {
  nombre: string;
  descripcion: string;
  imagen: string;
  slug: string;
}

export interface Vehiculo {
  nombre: string;
  descripcion: string;
  imagen: string;
  slug: string;
}

/* Marcas de repuestos con las que trabajamos (logos del sitio original). */
export const marcasRepuestos: Marca[] = [
  { nombre: "Hyundai Mobis", slug: "mobis", imagen: "https://ikomiperu.com/assets/img/marcas-repuestos/mobis.webp" },
  { nombre: "Mando", slug: "mando", imagen: "https://ikomiperu.com/assets/img/marcas-repuestos/mando.webp" },
  { nombre: "Valeo", slug: "valeo", imagen: "https://ikomiperu.com/assets/img/marcas-repuestos/valeo.webp" },
  { nombre: "SKF", slug: "skf", imagen: "https://ikomiperu.com/assets/img/marcas-repuestos/skf.webp" },
  { nombre: "Gates", slug: "gates", imagen: "https://ikomiperu.com/assets/img/marcas-repuestos/gates.webp" },
  { nombre: "GMB", slug: "gmb", imagen: "https://ikomiperu.com/assets/img/marcas-repuestos/gmb.webp" },
  { nombre: "Sangsin", slug: "sangsin", imagen: "https://ikomiperu.com/assets/img/marcas-repuestos/sangsin.webp" },
  { nombre: "Hi-Q", slug: "hiq", imagen: "https://ikomiperu.com/assets/img/marcas-repuestos/hiq.webp" },
  { nombre: "BGF", slug: "bgf", imagen: "https://ikomiperu.com/assets/img/marcas-repuestos/bgf.webp" },
  { nombre: "NDC", slug: "ndc", imagen: "https://ikomiperu.com/assets/img/marcas-repuestos/ndc.webp" },
  { nombre: "Taiho", slug: "taiho", imagen: "https://ikomiperu.com/assets/img/marcas-repuestos/taiho.webp" },
  { nombre: "TCIC", slug: "tcic", imagen: "https://ikomiperu.com/assets/img/marcas-repuestos/tcic.webp" },
  { nombre: "Rheejin", slug: "rheejin", imagen: "https://ikomiperu.com/assets/img/marcas-repuestos/rheejin.webp" },
  { nombre: "Shintones", slug: "shintones", imagen: "https://ikomiperu.com/assets/img/marcas-repuestos/shintones.webp" },
];

/* Marcas de vehículos a las que damos repuestos. */
export const marcasVehiculos: Marca[] = [
  { nombre: "Hyundai", slug: "hyundai", imagen: "https://ikomiperu.com/assets/img/marcas/hyundai.webp" },
  { nombre: "Mitsubishi", slug: "mitsubishi", imagen: "https://ikomiperu.com/assets/img/marcas/mitsubishi.webp" },
  { nombre: "Kia", slug: "kia", imagen: "https://ikomiperu.com/assets/img/marcas/kia.webp" },
  { nombre: "Hino", slug: "hino", imagen: "https://ikomiperu.com/assets/img/marcas/hino.webp" },
  { nombre: "Isuzu", slug: "isuzu", imagen: "https://ikomiperu.com/assets/img/marcas/isuzu.webp" },
  { nombre: "Nissan", slug: "nissan", imagen: "https://ikomiperu.com/assets/img/marcas/nissan.webp" },
];

/* Sistemas del vehículo: son los accesos al catálogo. */
export const sistemas: Sistema[] = [
  {
    nombre: "Motor",
    slug: "motor",
    descripcion: "Pistones, anillos, camisas, metales, válvulas, bombas de agua y todo tipo de empaque.",
    imagen: "https://ikomiperu.com/assets/img/categorias/motor.webp",
  },
  {
    nombre: "Embrague",
    slug: "embrague",
    descripcion: "Platos, discos, collarines, bombas, bombines e hidrovacs de embrague.",
    imagen: "https://ikomiperu.com/assets/img/categorias/embrague.webp",
  },
  {
    nombre: "Distribución",
    slug: "distribucion",
    descripcion: "Cadenas, fajas, templadores, guías y kits completos.",
    imagen: "https://ikomiperu.com/assets/img/categorias/distribucion.webp",
  },
  {
    nombre: "Filtros",
    slug: "filtros",
    descripcion: "Filtros de aire, aceite, combustible y sedimentadores.",
    imagen: "https://ikomiperu.com/assets/img/categorias/filtros.webp",
  },
  {
    nombre: "Transmisión",
    slug: "transmision",
    descripcion: "Piñón y corona, bronces, propulsores, retenes y rodajes de transmisión.",
    imagen: "https://ikomiperu.com/assets/img/categorias/transmision.webp",
  },
  {
    nombre: "Frenos",
    slug: "frenos",
    descripcion: "Pastillas, zapatas, tambores, discos, frenos de motor, bombas y bombines de freno.",
    imagen: "https://ikomiperu.com/assets/img/categorias/frenos.webp",
  },
  {
    nombre: "Suspensión",
    slug: "suspension",
    descripcion: "Soportes de cardán, amortiguadores, trapecios, barras estabilizadoras, pines y bocinas.",
    imagen: "https://ikomiperu.com/assets/img/categorias/suspension.webp",
  },
  {
    nombre: "Dirección",
    slug: "direccion",
    descripcion: "Terminales, rótulas y servos de dirección.",
    imagen: "https://ikomiperu.com/assets/img/categorias/direccion.webp",
  },
];

/* Unidades sobre las que trabajamos con frecuencia. */
export const vehiculos: Vehiculo[] = [
  {
    nombre: "Hyundai H-100",
    slug: "hyundai-h-100",
    descripcion: "Motores D4BB, D4BH y D4CB. Utilizados en reparto urbano y transporte ligero.",
    imagen: "https://ikomiperu.com/assets/img/vehiculos/hyundai-h-100.webp",
  },
  {
    nombre: "Hino 500",
    slug: "hino-500",
    descripcion: "Motores J05C, J05E, J08C y J08E. Usados para el transporte de mercancías.",
    imagen: "https://ikomiperu.com/assets/img/vehiculos/hino-500.webp",
  },
  {
    nombre: "Kia K2700",
    slug: "kia-k2700",
    descripcion: "Motores J2, JT y D4CB. Vehículo ligero para reparto y transporte urbano.",
    imagen: "https://ikomiperu.com/assets/img/vehiculos/kia-k2700.webp",
  },
  {
    nombre: "Mitsubishi Fuso",
    slug: "mitsubishi-fuso",
    descripcion: "Motores 4D31, 4D32, 4D33, 4D34 y 4D35. Empleados en distribución y carga.",
    imagen: "https://ikomiperu.com/assets/img/vehiculos/mitsubishi-fuso.webp",
  },
  {
    nombre: "Isuzu 1300",
    slug: "isuzu-1300",
    descripcion: "Motores 4HK1 y 6HK1. Camiones para distribución y transporte de carga.",
    imagen: "https://ikomiperu.com/assets/img/vehiculos/isuzu-1300.webp",
  },
  {
    nombre: "Hyundai HD-170",
    slug: "hyundai-hd-170",
    descripcion: "Motor D6GA. Camión pesado para transporte de carga de larga distancia.",
    imagen: "https://ikomiperu.com/assets/img/vehiculos/hyundai-hd-170.webp",
  },
  {
    nombre: "Hyundai Mighty",
    slug: "hyundai-mighty",
    descripcion: "Motores D4DB, D4DD y D4GA. Camiones ligeros y medianos para carga.",
    imagen: "https://ikomiperu.com/assets/img/vehiculos/hyundai-mighty.webp",
  },
  {
    nombre: "Hyundai County",
    slug: "hyundai-county",
    descripcion: "Motores D4DD y D4GA. Minibús para transporte de pasajeros.",
    imagen: "https://ikomiperu.com/assets/img/vehiculos/hyundai-county.webp",
  },
];

/* Cifras destacadas del sitio original. */
export const estadisticas = [
  { valor: "+3,000", etiqueta: "Clientes a nivel nacional" },
  { valor: "+17", etiqueta: "Años de experiencia" },
  { valor: "+2,000", etiqueta: "Productos disponibles" },
  { valor: "25", etiqueta: "Regiones atendidas" },
];

/* Ventajas de trabajar con IKOMI. */
export const ventajas = [
  {
    titulo: "Versatilidad en repuestos",
    descripcion:
      "No nos limitamos a una sola línea de repuestos. Nuestra oferta abarca diferentes áreas del vehículo, permitiéndote encontrar todo lo que necesitas en un solo lugar.",
  },
  {
    titulo: "Asesoría personalizada",
    descripcion:
      "Te ayudamos a encontrar el repuesto adecuado según tu vehículo, modelo, motor, aplicación o número de pieza.",
  },
  {
    titulo: "Servicio post-venta",
    descripcion:
      "Te acompañamos después de tu compra, brindándote respaldo y atención ante cualquier consulta o requerimiento.",
  },
  {
    titulo: "Cobertura a nivel nacional",
    descripcion:
      "Llevamos tus repuestos a todo el Perú, coordinando el despacho de acuerdo con tu ubicación y preferencias.",
  },
];

/* Cómo trabajamos, paso a paso. */
export const proceso = [
  {
    numero: "01",
    titulo: "Cuéntanos qué necesitas",
    descripcion:
      "Escríbenos o llámanos con el repuesto que buscas. Puedes indicarnos el modelo, motor, placa o enviarnos una foto de la pieza.",
  },
  {
    numero: "02",
    titulo: "Te ayudamos a elegir",
    descripcion:
      "Confirmamos disponibilidad y te presentamos las opciones disponibles en distintas marcas y precios. También podemos enviarte fotos o videos del producto.",
  },
  {
    numero: "03",
    titulo: "Elige cómo recibirlo",
    descripcion:
      "En Lima, puedes recogerlo en tienda o solicitar el envío mediante un servicio de motorizado. Para provincias, coordinamos el despacho con la agencia de tu preferencia.",
  },
];

/* Línea de tiempo de la empresa. */
export const hitos = [
  {
    anio: "2009",
    titulo: "Nuestros inicios",
    descripcion:
      "IKOMI PERÚ nació como un pequeño emprendimiento. No contábamos con un local propio, pero sí con el conocimiento en repuestos y las ganas de hacer crecer el proyecto.",
  },
  {
    anio: "2012",
    titulo: "Almacén propio",
    descripcion:
      "El crecimiento de IKOMI nos llevó a establecer nuestro propio local, actualmente en Ate, para atender de cerca a las flotas y talleres.",
  },
  {
    anio: "2020",
    titulo: "Nuevo escenario",
    descripcion:
      "La pandemia trajo nuevos desafíos. El transporte no podía detenerse, y los repuestos tampoco. Nos adaptamos a nuevas herramientas y formas de trabajar para seguir en marcha.",
  },
  {
    anio: "2026",
    titulo: "IKOMI hoy",
    descripcion:
      "Iniciamos una transformación digital, incorporando el e-commerce, fortaleciendo nuestra presencia en redes y empleando nuevas herramientas como la IA para brindarte un mejor servicio.",
  },
];

/* Valores de la empresa. */
export const valores = [
  {
    titulo: "Respeto",
    descripcion:
      "Tratamos con respeto a nuestros clientes y colaboradores, valorando a cada persona por igual.",
  },
  {
    titulo: "Compromiso",
    descripcion:
      "Asumimos cada tarea con responsabilidad y máximo esfuerzo, generando un impacto directo.",
  },
  {
    titulo: "Superación",
    descripcion:
      "Buscamos nuevos retos, salimos de nuestra zona de confort y nos exigimos mejorar continuamente.",
  },
  {
    titulo: "Adaptabilidad",
    descripcion:
      "Estamos abiertos a nuevas ideas y tecnologías para brindar un mejor servicio cada día.",
  },
];

/* Reseñas de clientes. */
export const testimonios = [
  {
    autor: "César T.",
    texto:
      "Gran trabajo IKOMI! Muy comprometido con sus clientes! Qué sigan los éxitos!",
  },
  {
    autor: "Renzo H.",
    texto:
      "Me brindaron un excelente servicio post-venta. Se nota que se preocupan por dar una buena atención al cliente en todo momento, desde la cotización hasta la entrega de productos.",
  },
  {
    autor: "Ricardo M.",
    texto:
      "Tuve la oportunidad de conocer IKOMI gracias a las redes sociales y siempre me han ayudado a encontrar soluciones para el mantenimiento de vehículos Hino e Isuzu. No fallan!",
  },
  {
    autor: "Julia G.",
    texto:
      "IKOMI siempre tiene la solución a los problemas de mis camiones. Gracias a su amplio conocimiento en repuestos, lo recomiendo!",
  },
  {
    autor: "Luis B.",
    texto:
      "La atención al cliente es lo mejor que tienen. Hace 5 años que compro en aquí para mi flota de camiones Hyundai y siempre he encontrado lo que necesito. Gracias por el regalo!",
  },
];

/* Datos de contacto de la empresa. */
export const contacto = {
  telefono: "+51 985 068 416",
  telefonoHref: "tel:+51985068416",
  correo: "ventas@ikomiperu.com",
  direccion: "Avenida Nicolás Ayllón 3384, Ate, Lima, Perú",
  horario: [
    { dias: "Lunes a viernes", horas: "8:30 a.m. – 6:00 p.m." },
    { dias: "Sábados", horas: "8:30 a.m. – 3:00 p.m." },
  ],
  whatsapp:
    "https://wa.me/51985068416?text=Hola%2C%20busco%20repuesto(s)%20para%20mi%20veh%C3%ADculo.",
};
