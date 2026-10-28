# TRAMA — web oficial

Cobogós y revestimientos de concreto (Asunción, Paraguay). Next.js 16 (App Router) + TypeScript + Tailwind v4. Deploy a Vercel.

## Git

- **`main` es producción**: Vercel builda de `main`. Todos los cambios van directo a `main`.
- Única rama de prueba: `prueba`, y solo cuando Diego lo pida explícitamente. No crear ramas por pedido.
- Diego a veces sube archivos por la web de GitHub: antes de trabajar, `git fetch origin main` y ordenar cualquier imagen suelta en la raíz dentro de `public/images/`.

## Fuente de verdad del diseño

El prototipo de Claude Design (`Trama Web v3.dc.html`) manda sobre su README. Se replicó tal cual (copy, colores, tamaños con clamp(), radios) salvo la galería "Muros con presencia" (rediseñada a pedido de Diego: estática, 12 fotos, mitad cobogós y mitad revestimientos mezcladas; en la tienda se repite debajo del catálogo según la pestaña: todo = mezcla, revestimientos = 8 fotos, cobogós = 12 fotos) y los botones de las tarjetas de categoría (alineados abajo a la izquierda).

## Reglas de contenido

- Sin precios y sin pago online. Todo es sobre pedido: seña 50%, entrega en 30 días.
- Todos los CTA abren WhatsApp con el mensaje armado.
- Medidas de cobogós y rinde por m² son provisorios.
- No se usa el isotipo; donde iba, va el logo `trama-carbon.svg`.
- 4 colores de lanzamiento: Gris Natural, Gris Marengo, Terracota y Verde Olivo.
- Nombres: revestimientos = Placa Lisa (100×50), Placa con Puntos de Anclaje (100×45), Placa Ripada (100×40), Azulejo de Concreto Rectangular (50×12) y Cuadrado. Cobogós: Diagonal, Circular, Cuadrado (ex Marco), Rectangular (ex Rendija), Dúo, Doble Círculo, Óvalo, Panal, Encastre. No usar "listón", "furos", "relieve", "marco" ni "rendija" como nombres.

## Estructura

- `lib/catalog.ts` — colores, categorías, 14 productos, cálculo m²/piezas. `LEGACY_IDS` redirige URLs viejas y migra carritos guardados.
- `lib/content.ts` — textos de la home (beneficios, pasos, FAQ) y galería.
- `lib/whatsapp.ts` — único lugar con el número (`NEXT_PUBLIC_WHATSAPP`, fallback 595991629500 = 0991 629 500).
- `lib/cart.ts` — carrito global persistido en `localStorage['trama-cart-v3']`.
- Tokens en `app/globals.css`: `carbon`, `terracota`, `hormigon`, `muted`, `arena`, `tone`, `placeholder`. Clases: `shell`, `section`, `display`, `t1`, `t2`, `t3`, `lede`, `copy`, `kicker`, `num`, `pill-dot`.

## Imágenes (`public/images/`)

- `logo/` logotipos SVG.
- `recortes/` piezas viejas sobre fondo blanco (ya no se muestran; quedan como fuente).
- `productos/` fotos de producto.
- `productos/colores/` foto de estudio por SKU y color (`{id}-{color}.jpg`, 1600×1600, pieza sobre el fondo `tone`). Es la imagen principal de tarjetas, ficha y carrito. Se generan recortando y recoloreando las fotos de `productos/originales/` (Placa Lisa = placa con anclajes sin los agujeros; Azulejo Cuadrado = las dos puntas del rectangular; Óvalo, Panal y Encastre salen de fotos viejas).
- `productos/originales/` fotos sin retocar del taller, con nombre descriptivo.
- `obras/` fotos de muros terminados; `obras/revestimientos/` fotos originales de placas; `obras/galeria/` versiones retocadas (luz, nitidez, agrandadas) que usa la home.
- `taller/` fotos del taller.
- `og/` imagen para compartir en redes (`trama-logo.png`: logo hormigón sobre fondo carbón, 1200×630).

Hay fotos guardadas sin usar todavía (`placa-rosa`, `cobogo-noche`, `cob-diagonal-torre*`, `taller-moldes`).

## Comandos

```bash
npm run dev     # desarrollo
npm run build   # build de producción
npm run lint    # eslint
```

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
