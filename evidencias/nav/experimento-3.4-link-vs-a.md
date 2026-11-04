# Experimento 3.4 — `next/link` vs. `<a href>` en la pestaña Network

**Objetivo:** Demostrar con evidencia real qué cambia en la pestaña Network de las DevTools al navegar
de `/` a `/productos` usando el componente `Link` de `next/link` y, en contraste, una etiqueta `<a href>`.

**Método:** Se instrumentó el navegador con Playwright/CDP sobre `http://localhost:3000` (servidor de
desarrollo de Next.js 16.4.4). Cada respuesta HTTP se registró con su tipo de recurso, código de
estado, `Content-Type` y las cabeceras que Next.js usa para el payload RSC (`RSC: 1`,
`Next-Router-Prefetch: 1`). La acción medida fue el clic sobre el enlace **PRODUCTOS** de la barra de
navegación de escritorio (1280 px).

Los registros completos están en las capturas `red-con-link.png` y `red-con-anchor.png` de esta misma
carpeta (los `.txt` crudos quedaron fuera del repo, en `pcalificada3/registros-evidencia/`).

---

## 1. Código usado en cada variante

### Variante A — con `next/link` (la que se quedó en el proyecto)

```tsx
<Link
  key={item.path}
  href={item.path}
  aria-current={active ? "page" : undefined}
  className="group relative py-2 text-xs font-bold tracking-wider ..."
>
  {item.name}
  <span className="absolute bottom-0 left-0 h-[2px] bg-red-bright ..." />
</Link>
```

### Variante B — con `<a href>` (reemplazo temporal, revertido)

```tsx
<a
  key={item.path}
  href={item.path}
  aria-current={active ? "page" : undefined}
  className="group relative py-2 text-xs font-bold tracking-wider ..."
>
  {item.name}
  <span className="absolute bottom-0 left-0 h-[2px] bg-red-bright ..." />
</a>
```

---

## 2. Resultado medido tras el clic

| | Variante A (`Link`) | Variante B (`<a href>`) |
| :--- | :--- | :--- |
| Peticiones tras el clic | **1** | **19** |
| Petición principal | `fetch` → `/productos?_rsc=bDxByZpqNar9PdVL` | `document` → `/productos` (`Content-Type: text/html`) |
| Cabecera `RSC: 1` | **Sí** | No |
| Se vuelve a descargar el HTML | No | **Sí** (documento completo) |
| Se vuelven a pedir los bundles JS/CSS | No | **Sí** (17 revalidaciones `304` + 1 chunk nuevo `200`) |
| Se vuelve a montar el `Navbar` y el layout raíz | No | **Sí** |

Detalle de la única petición de la Variante A:

```
| Fase | Tipo   | Código | Content-Type      | Cabeceras Next.js | URL                        |
| CLIC | fetch  | 200    | text/x-component  | RSC:1              | /productos?_rsc=bDxByZpqNar9PdVL |
```

Detalle de las peticiones de la Variante B (extracto):

```
| CLIC | document  | 200 | text/html               | - | /productos                                   |
| CLIC | stylesheet| 304 | -                       | - | /_next/static/chunks/src_app_globals_...css   |
| CLIC | script    | 304 | -                       | - | /_next/static/chunks/...react-dom-client...js |
| CLIC | script    | 200 | application/javascript  | - | /_next/static/chunks/_0tvoxopx9tmg4._.js      |
| ... (17 revalidaciones 304 en total)                                       |
```

---

## 3. Por qué cambia

* **`Link` (navegación *soft*):** Next.js intercepta el clic y pide **solo el payload RSC** de la ruta
  destino (`Content-Type: text/x-component`, cabecera `RSC: 1`). El HTML y los bundles JS ya están en
  memoria: React reemplaza el contenido dentro del layout raíz, que **no se desmonta**. Por eso el
  `Navbar` mantiene su estado, el scroll no salta al inicio y no se vuelve a descargar JavaScript.
  Además, en producción (`next build && next start`) los enlaces que entran en el viewport se
  **precargan** con la cabecera `Next-Router-Prefetch: 1`, de modo que el clic ya no espera al servidor.

* **`<a href>` (navegación *hard*):** el navegador interpreta el atributo `href` como una URL y pide el
  **documento HTML completo** de `/productos`. Se reinicia toda la aplicación: se vuelven a pedir el
  CSS, todos los chunks de JavaScript y las imágenes (los `304` son revalidaciones de caché: el
  servidor vuelve a comprobar cada uno). Se pierde cualquier estado del cliente y se vuelve a montar
  el `Navbar` y el layout raíz.

* **Consecuencia para un sitio corporativo:** con `<a href>` el cliente ve la pantalla en blanco y
  descarga de nuevo toda la lógica de la web en cada clic del menú; con `Link` la transición es
  inmediata y el sitio se comporta como una aplicación sin recargar la página, manteniendo la barra de
  navegación fija y el scroll.

> Nota: la precarga (`prefetch`) solo ocurre en producción. En `next dev` el `Link` no precarga por eso
> en el registro de la Variante A no aparece `Next-Router-Prefetch: 1`; sí aparece el payload RSC del
> momento del clic.
