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
---

## 4. Estructura de Enrutamiento (Layouts Anidados y Route Groups)

| Enfoque Evaluado | Decisión Tomada | Justificación Técnica |
| :--- | :--- | :--- |
| **Layout Anidado para `/productos`** | **Descartado** | El sitio corporativo de IKOMI PERÚ posee una estructura visual limpia y uniforme en todas sus vistas. Usar un layout anidado agregaría capas innecesarias de componentes, ya que la subruta `/productos/[slug]` solo requiere renderizar el detalle del repuesto sin mantener una barra lateral o submenú persistente. |
| **Route Groups `(marketing)`** | **Descartado** | Las rutas `/nosotros`, `/servicios`, `/marcas` y `/contacto` comparten exactamente la misma envolvente (Navbar y Footer global del layout raíz). Usar grupos de rutas como `(marketing)` agregaría complejidad visual a la carpeta `app/` sin aportar ventajas en la separación de layouts o middleware. |

---

## 5. Navegación: ¿Client Component o Server Component?

**Solo el `Navbar` es Client Component (`"use client"`). Todas las páginas del sitio siguen siendo Server Components.**

### 5.1 Por qué el Navbar tiene que ser cliente

| Motivo | Explicación aplicada a IKOMI PERÚ |
| :--- | :--- |
| **`usePathname()` es un hook de cliente** | Es la única forma de saber en qué ruta está el visitante y de paso marcar el enlace activo. La documentación de Next.js 16 lo dice clarísimo: *"Reading the current URL from a Server Component is not supported"* y `usePathname` *"intentionally requires using a Client Component"*. Es a propósito: el layout raíz se mantiene entre navegaciones, así que leer la URL en el servidor obligaría a renderizar otra vez el layout en cada cambio de página. |
| **El menú depende del estado del navegador** | El botón hamburguesa usa `useState` (abierto/cerrado), el bloqueo del scroll del fondo y el cierre con `Escape`. Eso solo existe en el cliente. |
| **El coste queda acotado** | El `"use client"` no convierte el sitio en una SPA: solo este componente y el bundle de React que necesita viajan al navegador. `/productos`, `/nosotros`, `/servicios`, `/marcas`, `/contacto` y el detalle `/productos/[slug]` se siguen renderizando en el servidor, llegan como HTML y Google indexa el contenido real del catálogo. |

### 5.2 Alternativas que descarté

| Alternativa descartada | Por qué la descarté |
| :--- | :--- |
| **Marcar toda la app con `"use client"`** | Mandaría más JavaScript al cliente, el contenido dejaría de estar en el HTML inicial y el SEO de `/productos` se caería. La interacción que necesito está solo en la barra. |
| **Leer la ruta en el servidor con `headers()`** | Marca la ruta como dinámica (se renderiza en cada petición), pide un `Suspense` y tampoco resuelve bien cuál enlace es el activo. |
| **Marcar el activo con CSS puro** (`a[href="/productos"] { ... }`) | No funciona: en `/productos/disco-embrague` el CSS no puede saber cuál de los dos enlaces es el que está activo. Con `usePathname` se resuelve con `pathname === path || pathname.startsWith(path)`. |
| **`useRouter()` de `next/router`** | Es del Pages Router y no existe en el App Router; en Next 16 el hook correcto es `usePathname` de `next/navigation`. Es de los errores típicos que te propone una IA. |
| **Pensar que el `Link` necesita `"use client"`** | `Link` sí se puede usar en un Server Component. Lo que obliga a que el Navbar sea cliente es el `usePathname` y el `useState` del menú, no el `Link`. |

### 5.3 Otras decisiones del menú

| Opción elegida | Alternativa descartada | Justificación |
| :--- | :--- | :--- |
| **Menú móvil a pantalla completa (`fixed` + `clip-path`)** | Desplegable colgando de la barra | Es lo que hace el sitio real (lo revisé con el navegador): la pantalla se cubre con el panel y el logo y el botón quedan arriba. Por eso los enlaces van en mayúsculas grandes, con separador y flecha, y al pie el teléfono, el correo y el WhatsApp. |
| **Cambio de diseño en `lg` (1024 px)** | Menú de escritorio desde `md` (768 px) | Con seis secciones la barra completa no cabe bien en 768 px. Con `lg` el celular y la tableta se ven limpios y el escritorio aparece desde 1024 px, como en el original, que cambia a los 1160 px. |
| **Bloquear el scroll del fondo y cerrar con `Escape`** | Dejar el menú como una lista simple | Con el panel a pantalla completa el fondo se seguiría moviendo con el dedo y el usuario se pierde. Bloquear el `overflow` del `body` y cerrar con `Escape` es lo que espera cualquiera que use teclado o lector de pantalla. |