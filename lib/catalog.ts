// Catálogo de Trama. Fuente: script del prototipo (Trama Web v3.dc.html), que manda sobre catalog.json.
// Medidas de cobogós y rinde por m² son provisorios.

export type ColorId = "gris" | "marengo" | "terracota" | "olivo";
export type Color = { id: ColorId; name: string; sw: string };

/** Los 4 colores de lanzamiento. Las muestras coinciden con las fotos de producto en public/images/productos/colores/. */
export const COLORS: Color[] = [
  { id: "gris", name: "Gris Natural", sw: "#B8B6B0" },
  { id: "marengo", name: "Gris Marengo", sw: "#707172" },
  { id: "terracota", name: "Terracota", sw: "#C88C70" },
  { id: "olivo", name: "Verde Olivo", sw: "#969676" },
];

export type CategoryId = "revestimientos" | "cobogos";

export const CATS: Record<
  CategoryId,
  { name: string; single: string; short: string; desc: string; use: string; place: string }
> = {
  revestimientos: {
    name: "Revestimientos",
    single: "Revestimiento",
    short: "Revestimiento",
    desc: "Placas y azulejos de concreto para vestir muros interiores y fachadas.",
    use: "Interior y exterior",
    place:
      "Se pegan con adhesivo cementicio sobre revoque firme y nivelado. Para exterior usamos nuestra fórmula hidrorrepelente. Te enviamos la guía de colocación con tu pedido.",
  },
  cobogos: {
    name: "Cobogós",
    single: "Cobogó",
    short: "Cobogó",
    desc: "Piezas caladas para muros que filtran luz, aire y vista.",
    use: "Perimetral, divisorio y fachada",
    place:
      "Se asientan con mortero como un ladrillo, con junta de 1 cm. En muros de más de 2 m sumá armadura horizontal cada 3 o 4 hiladas. Te enviamos la guía de colocación con tu pedido.",
  },
};

export const CATEGORY_IDS = Object.keys(CATS) as CategoryId[];

export type GalleryImage = { src: string; kind: "photo" };

export type Product = {
  id: string;
  cat: CategoryId;
  name: string;
  dims: string;
  perM2: number;
  unit: string;
  /** Fotos extra (obra, taller, detalle). Las fotos por color salen de colorImage(). */
  gallery: GalleryImage[];
  desc: string;
};

const P = "/images/productos/";
const F = "/images/productos/originales/";
const O = "/images/obras/";
const T = "/images/taller/";
const photo = (src: string): GalleryImage => ({ src, kind: "photo" });

export const PRODUCTS: Product[] = [
  {
    id: "placa-lisa", cat: "revestimientos", name: "Placa Lisa", dims: "100 × 50 cm", perM2: 2, unit: "placas",
    gallery: [photo(P + "rev-lisa-muro.jpg")],
    desc: "Superficie lisa y continua, con el poro natural del concreto. Un fondo sereno para livings, recepciones y fachadas.",
  },
  {
    id: "placa-anclaje", cat: "revestimientos", name: "Placa con Puntos de Anclaje", dims: "100 × 45 cm", perM2: 2.2, unit: "placas",
    gallery: [photo(F + "rev-placa-anclaje-gris.jpg"), photo(F + "rev-placa-anclaje-detalle.jpg"), photo(P + "material-placa.jpg")],
    desc: "Placa lisa con seis puntos de anclaje a la vista que marcan un ritmo de sombras, como el concreto visto con pasadores de encofrado.",
  },
  {
    id: "placa-ripada", cat: "revestimientos", name: "Placa Ripada", dims: "100 × 40 cm", perM2: 2.5, unit: "placas",
    gallery: [
      photo(F + "rev-placa-ripada-gris.jpg"),
      photo(F + "rev-placa-ripada-perspectiva.jpg"),
      photo(F + "rev-placa-ripada-detalle.jpg"),
      photo(P + "rev-relieve-detalle.jpg"),
    ],
    desc: "Estrías verticales en relieve que dibujan líneas de luz y sombra a lo largo del día. Ideal para muros con luz rasante.",
  },
  {
    id: "azulejo-rectangular", cat: "revestimientos", name: "Azulejo de Concreto Rectangular", dims: "50 × 12 cm", perM2: 16.7, unit: "azulejos",
    gallery: [photo(F + "azulejo-rectangular-gris.jpg")],
    desc: "Pieza angosta para colocar trabada, en espiga o en vertical. Arma muros con ritmo de ladrillo visto, en concreto.",
  },
  {
    id: "azulejo-cuadrado", cat: "revestimientos", name: "Azulejo de Concreto Cuadrado", dims: "10 × 10 cm", perM2: 100, unit: "azulejos",
    gallery: [photo(P + "rev-cuadrado.jpg")],
    desc: "Pieza chica para revestir con detalle: barras, frentes de mesada, nichos y muros curvos.",
  },
  {
    id: "diagonal", cat: "cobogos", name: "Diagonal", dims: "20 × 20 × 7 cm", perM2: 25, unit: "piezas",
    gallery: [
      photo(F + "cob-diagonal-gris.jpg"),
      photo(P + "cob-diagonal-estudio.jpg"),
      photo(P + "cob-diagonal-perspectiva.jpg"),
      photo(O + "obra-diagonal-jardin.jpg"),
      photo(P + "cob-diagonal-terracota-muro.jpg"),
    ],
    desc: "Un cuadrado partido en dos: una mitad abierta y otra en relieve. Girando las piezas armás rombos, zigzags o un muro entero de triángulos.",
  },
  {
    id: "circular", cat: "cobogos", name: "Circular", dims: "20 × 20 × 7 cm", perM2: 25, unit: "piezas",
    gallery: [photo(F + "cob-circular-terracota.jpg"), photo(F + "cob-circular-marengo.jpg")],
    desc: "Una abertura redonda rodeada por un bisel suave que se hunde hacia el centro. La luz entra en anillos y el muro se vuelve un juego de círculos.",
  },
  {
    id: "cuadrado", cat: "cobogos", name: "Cuadrado", dims: "20 × 20 × 7 cm", perM2: 25, unit: "piezas",
    gallery: [photo(F + "cob-cuadrado-olivo.jpg")],
    desc: "Una ventana chica dentro de un marco ancho. Más privacidad, sombra suave y un ritmo tranquilo.",
  },
  {
    id: "rectangular", cat: "cobogos", name: "Rectangular", dims: "30 × 15 × 7 cm", perM2: 22, unit: "piezas",
    gallery: [photo(F + "cob-rectangular-gris.jpg"), photo(T + "taller-mesa.jpg")],
    desc: "Una abertura larga y recta, como una persiana de concreto. Para muros perimetrales, cocheras y lavaderos.",
  },
  {
    id: "duo", cat: "cobogos", name: "Dúo", dims: "30 × 19 × 7 cm", perM2: 17.5, unit: "piezas",
    gallery: [photo(F + "cob-duo-gris.jpg"), photo(P + "cob-duo-piezas.jpg")],
    desc: "Dos aberturas de distinto tamaño en una pieza apaisada. Al rotarlas, el muro nunca se repite igual.",
  },
  {
    id: "doble-circulo", cat: "cobogos", name: "Doble Círculo", dims: "40 × 19 × 7 cm", perM2: 13.2, unit: "piezas",
    gallery: [photo(F + "cob-doble-circulo-terracota.jpg")],
    desc: "Pieza apaisada con dos aberturas redondas y una superficie ondulada que cambia con la luz del día. Para muros con carácter escultórico.",
  },
  {
    id: "ovalo", cat: "cobogos", name: "Óvalo", dims: "40 × 14 × 7 cm", perM2: 17.8, unit: "piezas",
    gallery: [
      photo(P + "cob-ovalo.jpg"),
      photo(P + "cob-ovalo-terracota.jpg"),
      photo(P + "cob-ovalo-piezas.jpg"),
      photo(O + "obra-ovalo-flores.jpg"),
      photo(O + "obra-ovalo-noche.jpg"),
    ],
    desc: "Pieza rectangular con el centro ovalado. Repetida, arma muros largos con un ritmo suave que de noche, con luz rasante, se vuelve escultura.",
  },
  {
    id: "panal", cat: "cobogos", name: "Panal", dims: "23 × 20 × 7 cm", perM2: 24, unit: "piezas",
    gallery: [photo(T + "taller-mesa.jpg")],
    desc: "Hexágono con abertura circular. Encastra en panal y deja pasar mucha luz y mucho aire.",
  },
  {
    id: "encastre", cat: "cobogos", name: "Encastre", dims: "20 × 20 × 7 cm", perM2: 25, unit: "piezas",
    gallery: [],
    desc: "Las muescas laterales se encajan con la pieza vecina y el muro se lee como un tejido.",
  },
];

/** Ids anteriores, para redirigir URLs viejas y migrar carritos guardados. */
export const LEGACY_IDS: Record<string, string> = {
  "placa-furos": "placa-anclaje",
  "placa-relieve": "placa-ripada",
  liston: "azulejo-rectangular",
  marco: "cuadrado",
  rendija: "rectangular",
};
export const LEGACY_COLORS: Record<string, ColorId> = { oscuro: "marengo", ocre: "terracota", musgo: "olivo", mostaza: "gris" };

/** Foto de producto sobre el fondo de la caja, una por color. */
export const colorImage = (p: Product, color: ColorId): GalleryImage => photo(`${P}colores/${p.id}-${color}.jpg`);

/** Tono único de las cajas de producto. */
export const TONE = "#E4DFD8";

export const getProduct = (id: string) => PRODUCTS.find((p) => p.id === id);
export const colorName = (id: string) => (COLORS.find((c) => c.id === id) ?? COLORS[0]).name;
export const fullName = (p: Product) => (p.cat === "revestimientos" ? p.name : "Cobogó " + p.name);

// Formato numérico del prototipo: miles con punto, decimales con coma.
export const fmtN = (n: number) => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
export const fmtDec = (n: number) => String(Math.round(n * 10) / 10).replace(".", ",");
export const parseQ = (s: string | number) => Math.max(0, parseFloat(String(s).replace(",", ".")) || 0);

export type Mode = "m2" | "u";

/** m² → piezas = ceil(m2 * perM2 * (waste ? 1.05 : 1)); piezas → m2 = piezas / perM2 */
export const calc = (p: Product, mode: Mode, qty: string, waste: boolean) => {
  const q = parseQ(qty);
  const pieces = mode === "m2" ? Math.ceil(q * p.perM2 * (waste ? 1.05 : 1)) : Math.round(q);
  return { pieces, m2: mode === "m2" ? q : pieces / p.perM2 };
};

/** Stepper ±1, mínimo 0,5 m² o 1 pieza. */
export const step = (q: string, d: number, mode: Mode) =>
  String(Math.round(Math.max(mode === "m2" ? 0.5 : 1, parseQ(q) + d) * 10) / 10);
