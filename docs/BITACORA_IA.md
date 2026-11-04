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