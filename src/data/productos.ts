export interface Producto {
  id: string;
  slug: string;
  nombre: string;
  sku: string;
  categoria: string;
  descripcion: string;
  /** null cuando el repuesto se cotiza por WhatsApp */
  precio: number | null;
  precioAntes: number | null;
  vehiculos: string[];
  marcas: string[];
  imagen: string;
}

export const productosData: Producto[] = [
  {
    id: "1",
    slug: "balancin-de-admision-hyundai-d4bh-d4bb",
    nombre: "Balancín de admisión (IN) Hyundai D4BH D4BB / Mitsubishi 4D55 4D56",
    sku: "24531-42880",
    categoria: "Motor",
    descripcion:
      "Balancín de admisión para motores Hyundai D4BH y D4BB y Mitsubishi 4D55 y 4D56. Fabricado para soportar el trabajo diario de trucks y buses, con el rodamiento y la superficie de contacto calibrados de fábrica.",
    precio: 23,
    precioAntes: 35,
    vehiculos: ["Hyundai H-100", "Hyundai Grace", "Hyundai H-1"],
    marcas: ["Hyundai Mobis"],
    imagen:
      "https://ikomiperu.com/assets/img/productos/24531-42880.webp",
  },
  {
    id: "2",
    slug: "balancin-de-escape-hyundai-d4bh-d4bb",
    nombre: "Balancín de escape (EX) Hyundai D4BH D4BB / Mitsubishi 4D55 4D56",
    sku: "24529-42880",
    categoria: "Motor",
    descripcion:
      "Balancín de escape para motores Hyundai D4BH y D4BB y Mitsubishi 4D55 y 4D56. Pieza de repuesto original para mantener la distribución de válvulas en su lugar y evitar el consumo de aceite del motor.",
    precio: 23,
    precioAntes: 35,
    vehiculos: ["Hyundai H-100", "Hyundai Grace", "Hyundai H-1"],
    marcas: ["Hyundai Mobis"],
    imagen:
      "https://ikomiperu.com/assets/img/productos/24529-42880.webp",
  },
  {
    id: "3",
    slug: "empaque-de-tapa-de-balancin-kia-j2",
    nombre: "Empaque de tapa de balancín Kia J2",
    sku: "0K65A10236C",
    categoria: "Motor",
    descripcion:
      "Empaque de tapa de balancín para motores Kia J2. Sello de reemplazo recomendado en cada mantenimiento de motor, porque una tapa mal sellada es la causa habitual de la fuga de aceite.",
    precio: 30,
    precioAntes: 40,
    vehiculos: ["Kia K2700", "Kia Pregio", "Kia Bongo"],
    marcas: ["Hyundai Mobis"],
    imagen:
      "https://ikomiperu.com/assets/img/productos/0k65a10236c.webp",
  },
  {
    id: "4",
    slug: "soporte-de-cardan-con-rodaje-40mm-hyundai-county",
    nombre: "Soporte de cardán con rodaje 40 mm Hyundai County HD-65 HD-78",
    sku: "49710-45200",
    categoria: "Suspensión",
    descripcion:
      "Soporte de cardán con rodaje de 40 mm para Hyundai County, HD-65 y HD-78. Amortigua la vibración de la línea de Cardán y protege los semiejes en trayectos largos y con carga.",
    precio: null,
    precioAntes: null,
    vehiculos: ["Hyundai County", "Hyundai HD-65", "Hyundai HD-78"],
    marcas: ["Nam Yang"],
    imagen:
      "https://ikomiperu.com/assets/img/productos/49710-45200.webp",
  },
  {
    id: "5",
    slug: "trapecio-de-suspension-derecho-hyundai-h-100",
    nombre: "Trapecio de suspensión inferior derecho Hyundai H-100 Porter",
    sku: "54540-4B001",
    categoria: "Suspensión",
    descripcion:
      "Trapecio de suspensión inferior derecho para Hyundai H-100 y Porter. Mantiene la geometría de las ruedas y evita el desgaste irregular de los neumáticos.",
    precio: 160,
    precioAntes: 200,
    vehiculos: ["Hyundai H-100", "Hyundai Porter"],
    marcas: ["Hyundai Mobis"],
    imagen:
      "https://ikomiperu.com/assets/img/productos/54540-4b001.webp",
  },
  {
    id: "6",
    slug: "trapecio-de-suspension-izquierdo-hyundai-h-100",
    nombre: "Trapecio de suspensión inferior izquierdo Hyundai H-100 Porter",
    sku: "54510-4B001",
    categoria: "Suspensión",
    descripcion:
      "Trapecio de suspensión inferior izquierdo para Hyundai H-100 y Porter. Se instala junto al lado derecho para conservar la altura correcta de la carrocería.",
    precio: 160,
    precioAntes: 200,
    vehiculos: ["Hyundai H-100", "Hyundai Porter"],
    marcas: ["Hyundai Mobis"],
    imagen:
      "https://ikomiperu.com/assets/img/productos/54510-4b001.webp",
  },
  {
    id: "7",
    slug: "bomba-de-agua-hyundai-d4bb-d4bh-d4bf",
    nombre: "Bomba de agua Hyundai D4BB D4BH D4BF / Mitsubishi 4D56",
    sku: "25100-42540",
    categoria: "Motor",
    descripcion:
      "Bomba de agua para motores Hyundai D4BB, D4BH y D4BF y Mitsubishi 4D56. Circula el refrigerante por el bloque y la culata, clave para que el motor no se sobrecaliente en ruta.",
    precio: 125,
    precioAntes: 150,
    vehiculos: ["Hyundai H-100", "Hyundai Porter", "Hyundai Grace"],
    marcas: ["ATC"],
    imagen:
      "https://ikomiperu.com/assets/img/productos/25100-42540.webp",
  },
  {
    id: "8",
    slug: "bomba-de-agua-hilo-grueso-hyundai-d4cb",
    nombre: "Bomba de agua hilo grueso Hyundai D4CB H-100 Porter II / Kia Bongo",
    sku: "25100-4A855",
    categoria: "Motor",
    descripcion:
      "Bomba de agua de hilo grueso para Hyundai D4CB, H-100 Porter II y Kia Bongo. Rosca de conexión reforzada para no perder el circuito de refrigeración en estrela.",
    precio: null,
    precioAntes: null,
    vehiculos: ["Hyundai H-100", "Hyundai Porter II", "Kia Bongo"],
    marcas: ["ATC"],
    imagen:
      "https://ikomiperu.com/assets/img/productos/25100-4a855.webp",
  },
  {
    id: "9",
    slug: "filtro-de-petroleo-hyundai-d4cb-d4bh-d4bb",
    nombre: "Filtro de petróleo Hyundai D4CB D4BH D4BB / Kia J2",
    sku: "31945-45700",
    categoria: "Filtros",
    descripcion:
      "Filtro de aceite para motores Hyundai D4CB, D4BH y D4BB y Kia J2. Retiene las partículas metálicas que desgastan los componentes internos del motor.",
    precio: 120,
    precioAntes: 150,
    vehiculos: ["Hyundai H-100", "Hyundai Porter", "Hyundai H-1"],
    marcas: ["Hyundai Mobis"],
    imagen:
      "https://ikomiperu.com/assets/img/productos/31945-45700.webp",
  },
  {
    id: "10",
    slug: "enfriador-de-aceite-nucleo-hyundai-d4cb",
    nombre: "Enfriador de aceite (núcleo) Hyundai D4CB / Kia D4CB",
    sku: "26421-4A700",
    categoria: "Refrigeración",
    descripcion:
      "Enfriador de aceite tipo núcleo para Hyundai D4CB y Kia D4CB. Refrigera el aceite dentro del bloque y evita que la lubricación se degrade antes de tiempo.",
    precio: null,
    precioAntes: null,
    vehiculos: ["Hyundai H-100", "Hyundai Porter", "Kia K2700"],
    marcas: ["Nam Yang"],
    imagen:
      "https://ikomiperu.com/assets/img/productos/26421-4a700.webp",
  },
  {
    id: "11",
    slug: "soporte-de-cardan-con-rodaje-60mm-isuzu-1300",
    nombre: "Soporte de cardán con rodaje 60 mm Isuzu 1300 FVR / CXZ CXM",
    sku: "1-37516-048",
    categoria: "Suspensión",
    descripcion:
      "Soporte de cardán con rodaje de 60 mm para Isuzu 1300, FVR, CXZ y CXM. Soporta el peso de la línea de Cardán en vehículos de carga pesados.",
    precio: null,
    precioAntes: null,
    vehiculos: ["Isuzu 1300", "Isuzu FVR", "Isuzu CXZ"],
    marcas: ["SAMTIN"],
    imagen:
      "https://ikomiperu.com/assets/img/productos/1-37516-048.webp",
  },
  {
    id: "12",
    slug: "tapa-de-radiador-1-1-bar-hyundai-h-1",
    nombre: "Tapa de radiador 1.1 bar Hyundai H-1 Grand Starex Porter II / Kia Bongo III",
    sku: "25330-3K000",
    categoria: "Refrigeración",
    descripcion:
      "Tapa de radiador con presión de 1.1 bar para Hyundai H-1, Grand Starex, Porter II y Kia Bongo III. Mantiene la presión correcta del sistema de refrigeración.",
    precio: 30,
    precioAntes: 40,
    vehiculos: ["Hyundai H-1", "Hyundai Starex", "Kia Bongo"],
    marcas: ["Hyundai Mobis"],
    imagen:
      "https://ikomiperu.com/assets/img/productos/25330-3k000.webp",
  },
];

export const categoriasData = [
  "Motor",
  "Embrague",
  "Distribución",
  "Filtros",
  "Transmisión",
  "Frenos",
  "Suspensión",
  "Dirección",
];
