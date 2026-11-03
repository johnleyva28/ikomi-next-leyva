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
