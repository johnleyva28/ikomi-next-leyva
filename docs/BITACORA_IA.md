# BITÁCORA DE USO DE INTELIGENCIA ARTIFICIAL

## Entrada 1: Creación del proyecto Next.js
* **Objetivo:** Inicializar la app ikomi-next-leyva con la estructura y tecnologías requeridas para la evaluación.
* **Prompt utilizado:** "vamos en orden vamos con el punto 1.1 primero"
* **Resumen de la respuesta:** La IA me dio el comando `npx create-next-app@latest ikomi-next-leyva` y me indicó seleccionar TypeScript, ESLint, Tailwind CSS, la carpeta `src/` y App Router para usar la versión moderna.
* **Decisión tomada:** Aceptado parcialmente.
* **Justificación:** Usé las opciones indicadas porque aseguran trabajar sobre la versión moderna de Next.js sin meter configuraciones viejas del Pages Router.

---
## Entrada 2: Implementación de rutas y metadatos SEO
* **Objetivo:** Definir la estructura de páginas estáticas, la ruta dinámica `/productos/[slug]` con `notFound()` y la decisión de arquitectura de carpetas.
* **Prompt utilizado:** "bien vamos con el siguiente punto el punto 2 Parte 2 – Enrutamiento y Páginas..."
* **Resumen de la respuesta:** La IA estructuró la carpeta `src/data/productos.ts` con el array de datos, configuró los metadatos en cada `page.tsx` usando la API nativa de Next.js y generó el `not-found.tsx` personalizado.
* **Decisión tomada:** Aceptado tal cual.
* **Justificación:** Se usó la API nativa `Metadata` y `generateMetadata` de Next.js en lugar de paquetes viejos tipo `react-helmet`, lo que garantiza el correcto SEO del App Router.

---
## Entrada 3: Barra de navegación y menú responsive
* **Objetivo:** Armar la barra de navegación del sitio: que esté en todas las páginas, que use el `Link` de next/link, que resalte la sección en la que estoy y que en el celular se abra con el menú hamburguesa.
* **Prompt utilizado:** "necesito que hagas la barra de navegación del sitio, tiene que estar en todas las páginas, usar el componente Link de next/link, marcar en rojo la sección en la que estoy en ese momento y que en pantallas chicas se abra con el menú hamburguesa. antes de escribirlo mira cómo lo tiene ikomiperu.com"
* **Resumen de la respuesta:** La IA me dejó el `Navbar.tsx` como Client Component con el array de secciones, cada enlace con `Link` y el subrayado rojo de la página activa con `usePathname`. Antes de escribirlo se metió a ikomiperu.com con el navegador a ver cómo es el menú de verdad: el botón son tres rayitas que giran hasta hacer una "X" y el menú abre como una pantalla completa con las letras grandes, una flechita al lado de cada enlace y abajo el teléfono, el correo y el botón de WhatsApp. Con esa referencia lo dejó armado: panel fijo de pantalla completa, entrada escalonada de los enlaces, bloqueo del scroll del fondo, cierre con Escape y la paleta del sitio (#00022a, #010646, #e3203f) como variables CSS en el globals.css. Para el punto 3.4 la IA registró las peticiones de red de las dos variantes (Link y `<a href>`) y las dejó como evidencia.
* **Decisión tomada:** Aceptado parcialmente.
* **Justificación:** Me quedé con la estructura que propuso (un solo Navbar con "use client", el array de rutas y el usePathname para el enlace activo) porque es lo que pide el enunciado y porque el usePathname solo funciona en el cliente. Pero el menú móvil lo cambié: la IA primero lo hizo como un desplegable abajo de la barra y al ver el sitio original lo pasé a pantalla completa para que la réplica se parezca. También tuve que corregir yo la "X" del botón antes de commitear, porque las dos rayitas no se cruzaban.


---

## Entrada 4: Componentes, estilos e imágenes
* **Objetivo:** Armar la Parte 4 del enunciado: los componentes reutilizables (Footer, Hero, ProductCard, SectionTitle y ContactForm) con el Navbar y el Footer en el layout raíz, la estrategia de estilos, las imágenes con `next/image`, la tipografía con `next/font`, el carrusel de marcas y el árbol de componentes.
* **Prompt utilizado:** "vamos con el punto 4, parte 4 de componentes y estilización. necesito los componentes reutilizables que pide el ejercicio: Footer, Hero, ProductCard, SectionTitle y ContactForm, y que el Navbar y el Footer estén en el layout raíz. también que el sitio se vea bien en 375, 768 y 1280"
* **Resumen de la respuesta:** La IA armó 13 componentes en `src/components/` (los 6 que pide el enunciado más CategoryCard, VehicleCard, PageHeader, CtaBanda, WhatsAppFab, BrandsMarquee y Marquee), copió el catálogo real del sitio original (12 productos con sus fotos, precios y SKUs) y rehizo las secciones del inicio: hero con el banner, sistemas del vehículo, marcas de vehículos, productos destacados, carrusel de marcas, unidades, ventajas y proceso. Cargó las tipografías con `next/font`, dejó la paleta y las animaciones en el `@theme` de `globals.css` y habilitó `ikomiperu.com` en `next.config.ts` para poder servir las imágenes del sitio oficial con `next/image`.
* **Decisión tomada:** Aceptado parcialmente.
* **Justificación:** Acepté la estructura de componentes que propuso la IA porque es justo lo que pide el enunciado y deja el árbol de componentes claro para la sustentación. Pero tres decisiones las tomé yo. Primera: el carrusel de marcas. Tomé el patrón Marquee de Magic UI como base y lo reescribí en CSS puro (el bloque de contenido se repite, `@keyframes marquee` lo desplaza y `group-hover` lo pausa) en vez de instalar el componente tal cual, porque ese componente arrastra la librería `motion` (framer-motion) y con ella unos 30 KB de JavaScript para una animación que CSS ya hace bien. Segunda: el esqueleto de carga. La primera versión de la página de detalle leía `params` directo y Next.js 16 lo rechazaba con "Next.js encountered URL data during prerendering", así que le bajé la lectura a un hijo dentro de `<Suspense>` con un skeleton, que es lo que recomienda la guía de Cache Components del propio paquete. Tercera: los recursos del sitio oficial. Usé las fotos, los logos y los textos reales de ikomiperu.com en vez de inventar imágenes, porque el enunciado pide replicar ese sitio y con `next/image` las fotos se optimizan igual; el único costo es que el dominio tiene que estar permitido en `next.config.ts`, y eso ya está.

---
## Casos de Código Desactualizado / Errores Detectados de la IA (Parte 5.2)

### Caso 1: Error de Prerenderizado en Ruta Dinámica `/productos/[slug]`
* **Problema detectado:** Al ejecutar `npm run build`, Next.js 16 arrojó un error indicando que los `params` asíncronos en la ruta dinámica rompían el prerenderizado estático de la página.
* **Código incorrecto (Antes):** Falta de la función `generateStaticParams()` para definir los parámetros válidos al momento de compilar.
* **Código corregido (Después):**
```typescript
export async function generateStaticParams() {
  return productosData.map((producto) => ({
    slug: producto.slug,
  }));
}
```

### Caso 2: La "X" del menú hamburguesa salía como un galón
* **Qué pasó:** al abrir el menú en el celular, el botón no armaba la "X" sino un galón (`‹`). Las dos rayitas quedaban separadas 14 px y nunca se cruzaban.
* **Código incorrecto (Antes):**
```tsx
isOpen ? "translate-y-[7px] rotate-45" : "-translate-y-[7px]"
isOpen ? "-translate-y-[7px] -rotate-45" : "translate-y-[7px]"
```
* **Código corregido (Después):** las dos rayitas tienen que terminar en el centro (translate 0) y ahí rotar 45° en sentidos contrarios; la rotación también se declara en el estado cerrado para que la transición no dé salto.
```tsx
isOpen ? "translate-y-0 rotate-45" : "-translate-y-[7px] rotate-0"
isOpen ? "translate-y-0 -rotate-45" : "translate-y-[7px] rotate-0"
```
* **Cómo lo detecté:** no lo vi leyendo el código, sino midiendo cada rayita en el navegador con `getBoundingClientRect()`: la de arriba estaba en `y=34` y la de abajo en `y=20`, cuando las dos debían caer en el centro. Se comprobó con la captura de 375 px (`evidencias/nav/nav-375-abierto.png`).


### Caso 3: La fuente `Big_Shoulders_Display` no existe en Next.js 16
* **Problema detectado:** Al compilar, Next.js 16.4.4 tiró `Module not found: Can't resolve 'next/font/google/target.css' — Unknown font`. La fuente que usa el sitio original (Big Shoulders Display) viene en las declaraciones de tipos del paquete, pero no está en el manifiesto de fuentes que trae Next 16, así que no se puede pedir.
* **Código incorrecto (Antes):**
```tsx
import { Big_Shoulders_Display, Montserrat } from "next/font/google";

const display = Big_Shoulders_Display({
  subsets: ["latin"],
  variable: "--font-big-shoulders",
  display: "swap",
});
```
* **Código corregido (Después):** se usa Oswald, que sí está en el manifiesto y es la condensada más parecida para los títulos.
```tsx
import { Montserrat, Oswald } from "next/font/google";

const display = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});
```
* **Cómo se corrigió:** revisando el manifiesto de fuentes que trae el propio paquete (`node_modules/next/dist/compiled/@next/font/dist/google/font-data.json`), donde sí aparecen `Oswald`, `Montserrat`, `Anton`, `Inter` y `Manrope`.

### Caso 4: `new Date()` rompía el prerenderizado del Footer
* **Problema detectado:** con `cacheComponents` activado, el build abortó con `Next.js encountered the unstable value 'new Date() while prerendering` en `Footer.tsx`. Con Cache Components los valores que cambian entre renders no se pueden usar en una página prerenderizada.
* **Código incorrecto (Antes):**
```tsx
<p>© {new Date().getFullYear()} IKOMI PERÚ S.R.L. Todos los derechos reservados.</p>
```
* **Código corregido (Después):** el año va fijo en el texto, porque en un sitio estático cambia una vez al año y no justifica volver dinámica toda la página.
```tsx
<p>© 2026 IKOMI PERÚ S.R.L. Todos los derechos reservados.</p>
```


### Caso 5: `params` fuera de `<Suspense>` en la ruta dinámica
* **Problema detectado:** al navegar al detalle de un producto, la consola del navegador tiraba `Route "/productos/[slug]": Next.js encountered URL data during prerendering or a navigation`. Con Cache Components y Partial Prefetching activados, leer `params` sin un límite de Suspense hace que la navegación deje de ser instantánea.
* **Código incorrecto (Antes):**
```tsx
export default async function ProductoDetallePage({ params }: Props) {
  const { slug } = await params;
  const producto = productosData.find((p) => p.slug === slug);
  ...
}
```
* **Código corregido (Después):** la lectura de `params` baja a un hijo envuelto en `<Suspense>`, con un esqueleto de carga como placeholder. Así el resto del layout se sigue prerenderizando y solo el detalle entra en streaming.
```tsx
export default function ProductoDetallePage({ params }: Props) {
  return (
    <Suspense fallback={<DetalleCargando />}>
      <DetalleProducto params={params} />
    </Suspense>
  );
}
```
* **Cómo se corrigió:** leyendo la guía `migrating-to-cache-components` que viene en `node_modules/next/dist/docs`, que dice que hay que bajar la lectura al hoja más pequeño posible para que el resto siga prerenderizándose.
