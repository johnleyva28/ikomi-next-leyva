# DECISIONES DE ARQUITECTURA Y CONFIGURACIÓN - IKOMI PERÚ

## 1. Configuración del Proyecto Next.js

| Opción elegida | Alternativa descartada | Justificación |
| :--- | :--- | :--- |
| **TypeScript** | JavaScript | Permite autocompletado y tipado estricto en los componentes y datos de los productos de IKOMI PERÚ. Esto reduce errores en tiempo de desarrollo al pasar props y evita fallos en producción al renderizar precios o imágenes. |
| **Tailwind CSS** | CSS Modules / Bootstrap | Nos da clases utilitarias para construir la interfaz responsive de IKOMI PERÚ de forma rápida y limpia. Permite manejar estilos centralizados en el archivo global sin sobrecargar de código CSS externo. |
| **Carpeta `src/`** | Raíz del proyecto | Mantiene el código fuente de la aplicación aislado de los archivos de configuración de la raíz (como Tailwind, TypeScript o ESLint). Esto ordena la estructura del proyecto y facilita ubicar componentes y datos. |
| **App Router** | Pages Router | Es la arquitectura moderna de Next.js recomendada para proyectos actuales. Permite renderizar Server Components por defecto, mejorando la carga inicial y el SEO del sitio corporativo de IKOMI PERÚ. |
| **ESLint** | Sin linter | Analiza el código automáticamente en busca de errores sintácticos o malas prácticas durante el desarrollo. Garantiza un código limpio y uniforme antes de mandar a producción. |

---

## 2. Explicación de Archivos y Scripts

* **`src/app/layout.tsx`**: Es la plantilla principal que envuelve a todas las páginas de la app. Aquí colocamos elementos globales como la barra de navegación (Navbar), el pie de página (Footer), fuentes e importación de estilos globales.
* **`src/app/page.tsx`**: Corresponde a la vista principal o Inicio (`/`) del sitio web de IKOMI PERÚ.
* **`public/`**: Carpeta para guardar recursos estáticos públicos sin procesar, como imágenes del catálogo, logos y el favicon del sitio.
* **`next.config.ts`**: Archivo de configuración avanzada de Next.js donde se definen dominios de imágenes externas, redirecciones o variables de entorno.
* **Scripts de `package.json`**:
  * `dev`: Levanta el servidor local de desarrollo (`http://localhost:3000`) con recarga en vivo (hot reload).
  * `build`: Compila y optimiza toda la aplicación generando archivos de producción.
  * `start`: Inicia el servidor de producción usando el build previamente generado.

---

## 3. Ventaja Concreta de Next.js frente a una SPA de React (Vite)

Para un sitio corporativo como el de **IKOMI PERÚ S.R.L.**, la ventaja principal es el **Server-Side Rendering (SSR)** y el **SEO optimizado**. 

En una SPA tradicional con Vite, el servidor entrega un archivo HTML prácticamente vacío y es el navegador del usuario el que debe descargar y ejecutar todo JavaScript para armar la página. Esto causa dos problemas:
1. **Pésimo SEO:** Los buscadores como Google no ven el contenido indexable de inmediato.
2. **Lenta carga inicial:** En conexiones móviles lentas, el cliente ve una pantalla blanca mientras carga el bundle.

Con Next.js y App Router, el HTML de páginas clave (como la sección de Inicio o Catálogo de Productos) se renderiza en el servidor y llega listo al navegador. **Ejemplo concreto en el sitio:** Al entrar a la ruta `/productos`, Google indexa de inmediato los títulos y descripciones de las piezas mecánicas en el HTML original, logrando que IKOMI PERÚ aparezca en las búsquedas cuando un cliente busque "repuestos de camiones en Perú".
