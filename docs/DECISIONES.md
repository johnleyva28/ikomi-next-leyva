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
| **Marcar el activo con CSS puro** (`a[href="/productos"] { ... }`) | No funciona: en `/productos/disco-embrague` el CSS no puede saber cuál de los dos enlaces es el que está activo. Con `usePathname` se resuelve con `pathname === path \|\| pathname.startsWith(path)`. |
| **`useRouter()` de `next/router`** | Es del Pages Router y no existe en el App Router; en Next 16 el hook correcto es `usePathname` de `next/navigation`. Es de los errores típicos que te propone una IA. |
| **Pensar que el `Link` necesita `"use client"`** | `Link` sí se puede usar en un Server Component. Lo que obliga a que el Navbar sea cliente es el `usePathname` y el `useState` del menú, no el `Link`. |

### 5.3 Otras decisiones del menú

| Opción elegida | Alternativa descartada | Justificación |
| :--- | :--- | :--- |
| **Menú móvil a pantalla completa (`fixed` + `clip-path`)** | Desplegable colgando de la barra | Es lo que hace el sitio real (lo revisé con el navegador): la pantalla se cubre con el panel y el logo y el botón quedan arriba. Por eso los enlaces van en mayúsculas grandes, con separador y flecha, y al pie el teléfono, el correo y el WhatsApp. |
| **Cambio de diseño en `lg` (1024 px)** | Menú de escritorio desde `md` (768 px) | Con seis secciones la barra completa no cabe bien en 768 px. Con `lg` el celular y la tableta se ven limpios y el escritorio aparece desde 1024 px, como en el original, que cambia a los 1160 px. |
| **Bloquear el scroll del fondo y cerrar con `Escape`** | Dejar el menú como una lista simple | Con el panel a pantalla completa el fondo se seguiría moviendo con el dedo y el usuario se pierde. Bloquear el `overflow` del `body` y cerrar con `Escape` es lo que espera cualquiera que use teclado o lector de pantalla. |


---

## 6. Estrategia de estilos

| Opción elegida | Alternativa descartada | Justificación |
| :--- | :--- | :--- |
| **Tailwind CSS v4** | CSS Modules / Bootstrap | Con Tailwind el estilo vive junto al marcado, así que un componente se lee completo en un solo archivo y no hay que saltar entre el `.tsx` y su hoja de estilos. Para este sitio es clave: la barra de navegación, las tarjetas y el panel móvil tienen muchas variantes (activo, hover, responsive) y con clases utilitarias se resuelven sin inventar una jerarquía de selectores. Además v4 permite declarar la paleta y las tipografías en el `@theme` de `globals.css`, que es justo lo que pedía el enunciado: los colores de IKOMI (`#00022a`, `#010646`, `#e3203f`) están escritos una sola vez y se usan como `bg-navy`, `text-red-bright`, etc. |
| **CSS Modules** | — | Descartado como estrategia general: es válido y no ata el proyecto a una librería, pero obliga a crear un archivo `.module.css` por componente (14 archivos más) y a inventar nombres de clases para algo que Tailwind ya resuelve con las mismas utilidades. |
| **Bootstrap** | — | Descartado: trae un framework entero con sus propios colores, tipografías y componentes (`.btn`, `.card`, `.navbar`) que choque con la identidad visual de IKOMI y que tendría que sobreescribir casi todo. Además son ~200 KB de CSS para usar cuatro cosas. |

**Cómo se mantiene coherente:** los colores, las tipografías y las animaciones viven en el bloque
`@theme` de `src/app/globals.css`. Ningún componente escribe un color hexadecimal suelto: todos
usan los tokens (`bg-navy-deep`, `text-red-bright`, `font-display`).

---

## 7. `next/image` y `next/font`

| API | Qué aporta en este sitio |
| :--- | :--- |
| **`next/image`** | Las fotos de los repuestos, los logos de las marcas y el banner del hero pesan bastante y vienen de un dominio externo. `next/image` las reoptimiza (WebP/AVIF, varios anchos), sirve un `srcset` para que el celular baje la versión chica, y añade `width`/`height` para que el navegador reserve el espacio y no haya salto de layout al cargar. También cumple con la criterio 4.3: cada imagen lleva su `alt` descriptivo (por ejemplo, el nombre del repuesto más los vehículos donde aplica) y un `sizes` acorde al grid donde se muestra. |
| **`next/font`** | `next/font` descarga la fuente **en el build** y la sirve desde el propio dominio. Con eso se cumplen tres cosas: nadie hace peticiones a Google desde el navegador (privacidad), la fuente llega optimizada con `font-display: swap` (no se ve texto invisible esperando) y se cachea para siempre (una sola visita y el resto es gratis). Se usa la misma tipografía condensada del sitio original para los títulos (Oswald) y una sans legible para el texto (Montserrat), declaradas como variables CSS (`--font-oswald`, `--font-montserrat`) y expuestas como `font-display` y `font-body` en el `@theme`. |

---

## 8. Animaciones con propósito

| Animación | Dónde | Por qué mejora la experiencia |
| :--- | :--- | :--- |
| **Marquesina de marcas con el patrón Marquee de Magic UI, reescrito en CSS puro** (en lugar de instalar `motion`/framer-motion y usar el componente tal cual) | Inicio y `/marcas` | Es el único elemento del sitio que necesita movimiento infinito. El componente de Magic UI resuelve eso, pero trae `motion` como dependencia y con ella unos 30 KB de JavaScript para una animación que CSS ya hace bien. Lo reescribí con el mismo patrón: el bloque de contenido se repite, `@keyframes marquee` lo desplaza y `group-hover` lo pausa. Son 40 líneas de CSS en `globals.css` y ni una dependencia nueva. La referencia a Magic UI queda anotada en el propio `Marquee.tsx`. |
| **Hover de las tarjetas de producto** | Catálogo y detalle | La tarjeta se levanta y aparece un borde rojo al pasar el mouse: es la señal que el usuario espera para saber que la tarjeta es clicable, en lugar de tener que subrayarlo todo con iconos. |
| **Entrada escalonada del hero** | Inicio | El titular, el texto y los botones aparecen en cascada al cargar. Da la sensación de que la página se arma sola y dirige la mirada al botón de cotización, que es lo que queremos que el visitante pulse primero. |
| **Barrido de luz en la banda de CTA** | Todas las páginas | Un brillo recorre el borde de la banda de llamada a la acción cada pocos segundos, atrayendo la mirada al final del recorrido sin molestar. |


---

## 9. Recursos del sitio oficial (contenido e imágenes)

| Opción elegida | Alternativa descartada | Justificación |
| :--- | :--- | :--- |
| **Fotos, logos y textos reales de `ikomiperu.com`, servidos con `next/image` desde el dominio remoto** | Descargar las imágenes al repositorio y guardarlas en `public/` | El enunciado pide replicar ese sitio, así que lo fiel es usar su material: las fotos reales de cada repuesto (con el fondo blanco recortado que usa el original), los logos de las marcas y el banner del hero. Como `next/image` se encarga de reoptimizar igual, no pierdo nada de rendimiento. Lo único que exige es permitir el dominio en `next.config.ts` (`images.remotePatterns`), que ya está configurado. La contra es que el sitio depende de que el CDN de IKOMI siga en pie, pero para una réplica de laboratorio es un riesgo que acepto a cambio de parecerse de verdad. |
| **Mapa de Google Maps embebido con `iframe` + enlace "Cómo llegar"** | Imagen estática del mapa (API de Maps con clave) o solo la dirección en texto | La página de contacto pide que la gente vaya, y un mapa interactivo les dice cómo llegar sin que copien la dirección a otro sitio. La API de mapas estáticos que usa el original necesita una clave de Google y devuelve una imagen que no se puede mover; con el `iframe` de `output=embed` se naviga el mapa y no hay que pagar ni configurar claves. El `loading="lazy"` evita que el mapa pida red antes de que el usuario baje a esa parte de la página. |
| **Catálogo real de 12 productos** (con SKU, precio, precio anterior, vehículos y marca de repuesto) | Inventar tres productos de ejemplo | Con datos inventados el catálogo no sirve ni para probar la ruta dinámica ni para mostrar el tratamiento de "consultar precio" que usa el original. Con los datos reales se ven los dos casos: repuestos con precio publicado y repuestos que se cotizan por WhatsApp. |
| **Copiar los textos del sitio original** (misión, visión, valores, proceso de compra y datos de contacto) | Redactar textos nuevos | Los textos del original explican el negocio (17 años, cobertura nacional, asesoría por número de parte) y son lo que el visitante quiere leer. Escribirlos otra vez solo agregaría trabajo sin aportar. |

---

## 10. Esqueleto de carga en la ruta dinámica

| Opción elegida | Alternativa descartada | Justificación |
| :--- | :--- | :--- |
| **Envolver la lectura de `params` en `<Suspense>` con un esqueleto de carga** | Leer `params` directo en la página, o marcar la ruta con `export const instant = false` | Con Cache Components y Partial Prefetching activados, Next.js 16 rechaza la navegación al detalle si `params` se lee fuera de un límite de `<Suspense>`: avisa que la transición deja de ser instantánea. La guía `migrating-to-cache-components` del propio paquete pide bajar la lectura al hijo más pequeño posible, y eso es lo que hice: el `Navbar`, el `Footer` y el resto de la página se siguen prerenderizando y solo el detalle del producto entra en streaming. El esqueleto son bloques grises con `animate-pulse` que ocupan el lugar del producto mientras entra, para que la página no salte de alto. La otra salida (`export const instant = false`) era más corta, pero renuncia a la navegación instantánea y deja la ruta bloqueando la respuesta del servidor. |


---

## 11. Favicon e iconos del sitio

| Opción elegida | Alternativa descartada | Justificación |
| :--- | :--- | :--- |
| **Favicon propio en `src/app/favicon.ico` (el logo de IKOMI) más el PNG de 512 px del CDN en `metadata.icons`** | Dejar el favicon genérico que trae `create-next-app`, o apuntar el icono solo al CDN | Con el archivo en `src/app/`, Next.js lo sirve solo en `/favicon.ico`, que es lo que piden los navegadores y lo que se guarda en los marcadores. Con el PNG de 512 px agregado en `metadata.icons` los navegadores modernos usan la versión grande y nítida. Así el icono de la pestaña es el logo de la empresa en vez de un globo terráqueo genérico, que es lo primero que ve el visitante. |
| **Iconos de `lucide-react`** | Emoji (📍, 📧, 📞) o SVG dibujados a mano | Los emoji se ven distintos en cada sistema operativo, ocupan más espacio y algunos ni siquiera tienen equivalente (un teléfono, un correo o una ubicación no se pueden representar bien con un emoji). Los SVG dibujados a mano, además, son un peso muerto: hay que mantenerlos y cada uno queda con su propio trazo y su propio `strokeWidth`. `lucide-react` trae el mismo set de iconos de trazo con el mismo grosor y el mismo estilo, todos en SVG, con `currentColor` para que hereden el color del texto. Se usa la línea 0.x a propósito porque en la 1.x cada icono queda marcado como `"use client"` (usa un contexto de React), y eso convertía cada icono en un Client Component dentro de las páginas de servidor. Con la 0.x los iconos se renderizan en el servidor y no suman JavaScript extra al bundle del cliente. Con eso la barra superior, el pie del panel móvil, el hero, las tarjetas y el botón de WhatsApp usan el mismo lenguaje visual. |
| **El glifo oficial de WhatsApp en un componente propio (`IconoWhatsApp`)** | Un icono genérico de la librería de iconos | Lucide es una librería de iconos genéricos y a propósito no incluye logos de marca, así que una burbuja de conversación se ve como un chat cualquiera y no como WhatsApp. El componente `src/components/IconoWhatsApp.tsx` lleva el SVG de marca que usa el propio sitio de IKOMI, con `fill="currentColor"` para que herede el color del botón y se vea bien tanto en el verde del botón flotante como en el rojo de las llamadas a la acción. El enlace sigue llevando a `wa.me` con el mensaje listo. |

