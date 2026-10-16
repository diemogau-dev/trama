// Catálogo de Trama. Fuente: script del prototipo (Trama Web v3.dc.html), que manda sobre catalog.json.
// Medidas de cobogós y rinde por m² son provisorios.

export type ColorId = "gris" | "oscuro" | "ocre" | "musgo" | "mostaza";
export type Color = { id: ColorId; name: string; sw: string };

export const COLORS: Color[] = [
  { id: "gris", name: "Gris natural", sw: "#B3AFA8" },
  { id: "oscuro", name: "Gris oscuro", sw: "#55524F" },
  { id: "ocre", name: "Ocre", sw: "#B98642" },
  { id: "musgo", name: "Verde musgo", sw: "#6B7050" },
  { id: "mostaza", name: "Amarillo mostaza", sw: "#CFA03A" },
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
    desc: "Placas, listones y cuadrados para vestir muros interiores y fachadas.",
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

/** "cut" = recorte sobre blanco (contain + multiply); "photo" = foto (cover). */
export type GalleryImage = { src: string; kind: "cut" | "photo" };

export type Product = {
  id: string;
  cat: CategoryId;
  name: string;
  dims: string;
  perM2: number;
  unit: string;
  /** Medidas de la pieza en cm, para dibujar la grilla de juntas cuando no hay foto. */
  w?: number;
  h?: number;
  gallery: GalleryImage[];
  desc: string;
};

const R = "/images/recortes/";
const P = "/images/productos/";
const O = "/images/obras/";
const T = "/images/taller/";
const cut = (src: string): GalleryImage => ({ src, kind: "cut" });
const photo = (src: string): GalleryImage => ({ src, kind: "photo" });

export const PRODUCTS: Product[] = [
  {
    id: "placa-lisa", cat: "revestimientos", name: "Placa Lisa", dims: "100 × 50 cm", perM2: 2, unit: "placas", w: 100, h: 50,
    gallery: [photo(P + "rev-lisa-muro.jpg")],
    desc: "Superficie lisa y continua, con el poro natural del concreto. Un fondo sereno para livings, recepciones y fachadas.",
  },
  {
    id: "placa-furos", cat: "revestimientos", name: "Placa con Furos", dims: "100 × 50 cm", perM2: 2, unit: "placas",
    gallery: [cut(R + "rev-furos-blanco.jpg"), photo(P + "material-placa.jpg")],
    desc: "Placa lisa con perforaciones que marcan un ritmo de puntos de sombra, como el concreto visto con pasadores de encofrado.",
  },
  {
    id: "placa-relieve", cat: "revestimientos", name: "Placa con Relieve", dims: "100 × 50 cm", perM2: 2, unit: "placas",
    gallery: [cut(R + "rev-relieve-gris-blanco.jpg"), cut(R + "rev-relieve-ocre-blanco.jpg"), photo(P + "rev-relieve-detalle.jpg")],
    desc: "Estrías verticales en relieve que dibujan líneas de luz y sombra a lo largo del día. Ideal para muros con luz rasante.",
  },
  {
    id: "liston", cat: "revestimientos", name: "Listón Liso", dims: "50 × 10 cm", perM2: 20, unit: "listones", w: 50, h: 10,
    gallery: [],
    desc: "Pieza angosta para colocar trabada, en espiga o en vertical. Arma muros con ritmo de ladrillo visto, en concreto.",
  },
  {
    id: "cuadrado", cat: "revestimientos", name: "Cuadrado", dims: "10 × 10 cm", perM2: 100, unit: "piezas",
    gallery: [photo(P + "rev-cuadrado.jpg")],
    desc: "Pieza chica para revestir con detalle: barras, frentes de mesada, nichos y muros curvos.",
  },
  {
    id: "diagonal", cat: "cobogos", name: "Diagonal", dims: "20 × 20 × 7 cm", perM2: 25, unit: "piezas",
    gallery: [
      cut(R + "diagonal.png"),
      photo(P + "cob-diagonal-estudio.jpg"),
      photo(P + "cob-diagonal-perspectiva.jpg"),
      photo(O + "obra-diagonal-jardin.jpg"),
      photo(P + "cob-diagonal-terracota-muro.jpg"),
    ],
    desc: "Un cuadrado partido en dos: una mitad abierta y otra en relieve. Girando las piezas armás rombos, zigzags o un muro entero de triángulos.",
  },
  {
    id: "panal", cat: "cobogos", name: "Panal", dims: "23 × 20 × 7 cm", perM2: 24, unit: "piezas",
    gallery: [cut(R + "panal.png"), photo(T + "taller-mesa.jpg")],
    desc: "Hexágono con abertura circular. Encastra en panal y deja pasar mucha luz y mucho aire.",
  },
  {
    id: "marco", cat: "cobogos", name: "Marco", dims: "20 × 20 × 7 cm", perM2: 25, unit: "piezas",
    gallery: [cut(R + "marco.png")],
    desc: "Una ventana chica dentro de un marco ancho. Más privacidad, sombra suave y un ritmo tranquilo.",
  },
  {
    id: "encastre", cat: "cobogos", name: "Encastre", dims: "20 × 20 × 7 cm", perM2: 25, unit: "piezas",
    gallery: [cut(R + "encastre.png")],
    desc: "Las muescas laterales se encajan con la pieza vecina y el muro se lee como un tejido.",
  },
  {
    id: "duo", cat: "cobogos", name: "Dúo", dims: "30 × 19 × 7 cm", perM2: 17.5, unit: "piezas",
    gallery: [cut(R + "duo.png"), photo(P + "cob-duo-piezas.jpg")],
    desc: "Dos aberturas de distinto tamaño en una pieza apaisada. Al rotarlas, el muro nunca se repite igual.",
  },
  {
    id: "rendija", cat: "cobogos", name: "Rendija", dims: "30 × 15 × 7 cm", perM2: 22, unit: "piezas",
    gallery: [cut(R + "rendija.png"), photo(T + "taller-mesa.jpg")],
    desc: "Una abertura larga y recta, como una persiana de concreto. Para muros perimetrales, cocheras y lavaderos.",
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
];

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

const LINE = "rgba(43,23,16,.16)";
/** Grilla de juntas a escala para productos sin foto. */
export const jointPattern = (p: Product, k: number) => ({
  backgroundImage: `linear-gradient(${LINE} 1.5px,transparent 1.5px),linear-gradient(90deg,${LINE} 1.5px,transparent 1.5px)`,
  backgroundSize: `${(p.w ?? 20) * k}px ${(p.h ?? 20) * k}px`,
  backgroundPosition: "center",
});
