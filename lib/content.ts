// Textos literales del prototipo (Trama Web v3.dc.html).

export const HERO = {
  src: "/images/obras/cobogo-triangulo.png",
  pos: "62% 60%",
  cap: "Muro perimetral con cobogó Diagonal",
  headline: ["Muros que hablan ", "por sí solos"] as const,
};

export const BENEFITS: [string, string][] = [
  ["Concreto de alta performance", "Mezclas con aditivos y fibras que logran piezas más finas, densas y resistentes que un bloque común."],
  ["Una fórmula para cada uso", "Interior, exterior, muro perimetral o divisorio: cada pieza sale con la mezcla que pide su lugar en la obra."],
  ["Hecho para nuestro clima", "Baja absorción de agua. Aguanta el sol, las tormentas y la humedad; no se pudre, no se oxida y no le entran termitas."],
  ["Color en la masa", "El pigmento va dentro del concreto, no encima. No se descascara ni necesita pintura."],
  ["Fresco y ventilado", "La masa del concreto suaviza el calor del día y el cobogó deja cruzar el aire. Se nota con 40 grados."],
];

export const STEPS: [string, string][] = [
  ["Elegí tus piezas", "Recorré la tienda y elegí diseño y color entre los cinco de cada pieza."],
  ["Calculá tu muro", "En el carrito cargás los m² de tu pared y te decimos cuántas piezas necesitás."],
  ["Confirmá y señá", "Te enviamos el presupuesto con flete por WhatsApp. Confirmás con una seña del 50%."],
  ["Fabricamos y entregamos", "En 30 días tu pedido está listo. Lo llevamos a tu obra o lo retirás en el taller."],
];

export const FAQS: [string, string][] = [
  ["¿Por qué no hay precios en la web?", "Cada pedido se fabrica para tu obra, y el precio depende de la pieza, la cantidad, el color y el destino. Armá tu carrito y te pasamos el presupuesto por WhatsApp en el día."],
  ["¿Cuánto tarda mi pedido?", "Todo es sobre pedido: fabricamos y entregamos en 30 días desde que confirmás con la seña. Para pedidos muy grandes te confirmamos el plazo al cotizar."],
  ["¿Cómo se paga?", "Una seña del 50% al confirmar el pedido y el saldo antes de la entrega. Aceptamos transferencia bancaria y efectivo."],
  ["¿Qué colores tienen?", "Todas las piezas se fabrican en cinco colores: gris natural, gris oscuro, ocre, verde musgo y amarillo mostaza. El pigmento va en la masa del concreto."],
  ["¿Cuántas piezas entran por metro cuadrado?", "Depende del diseño. Cada producto indica cuántas piezas lleva un m². En el carrito cargás los m² de tu muro y lo calculamos, con un 5% extra por cortes si querés."],
  ["¿Sirven para exterior?", "Sí. Tenemos una fórmula de concreto para exterior con baja absorción de agua, pensada para sol, lluvia y humedad."],
  ["¿Cómo se colocan?", "Los cobogós se asientan con mortero como un ladrillo. Los revestimientos se pegan con adhesivo cementicio. Cualquier albañil puede hacerlo y te enviamos la guía de colocación."],
  ["¿Hacen envíos al interior?", "Sí, a todo el Paraguay. El flete se calcula según destino y volumen, y va incluido en el presupuesto."],
  ["¿Puedo ver las piezas antes de comprar?", "Sí. Podés visitar el taller en Asunción coordinando por WhatsApp. Si sos arquitecto o revendedor, sumate a Socios Trama y te acercamos muestras."],
];

/**
 * "Muros con presencia": galería estática en filas justificadas de 3 fotos
 * (1 horizontal "wide" + 2 verticales). Mitad cobogós, mitad revestimientos, mezcladas.
 * Fotos retocadas en /images/obras/galeria/.
 */
export type GalleryPhoto = { src: string; alt: string; wide?: boolean; pos?: string };
const G = "/images/obras/galeria/";

export const GALLERY: GalleryPhoto[][] = [
  [
    { src: G + "obra-casa-terracota.jpg", alt: "Fachada de casa con muro de cobogó terracota junto a la piscina", wide: true, pos: "50% 60%" },
    { src: G + "rev-escalera-madera.jpg", alt: "Escalera de madera junto a un muro de placas de concreto", pos: "50% 50%" },
    { src: G + "obra-ovalo-flores.jpg", alt: "Muro de cobogó Óvalo con agapantos en flor", pos: "50% 55%" },
  ],
  [
    { src: G + "obra-hexagono.jpg", alt: "Muro de cobogó hexagonal terracota a contraluz", pos: "50% 50%" },
    { src: G + "rev-fachada-casa.jpg", alt: "Fachada de casa revestida con placas de concreto", wide: true, pos: "50% 50%" },
    { src: G + "rev-neon.jpg", alt: "Muro de placas de concreto con un cartel de neón", pos: "50% 50%" },
  ],
  [
    { src: G + "rev-escalera-sombra.jpg", alt: "Placas de concreto con la sombra de una planta sobre la escalera", pos: "30% 50%" },
    { src: G + "obra-circulo-sol.jpg", alt: "Cobogó de círculos proyectando luz sobre una mesada de madera", pos: "50% 45%" },
    { src: G + "cobogo-terracota.jpg", alt: "Living con muro de cobogó terracota y plantas", wide: true, pos: "50% 50%" },
  ],
  [
    { src: G + "rev-cocina-comedor.jpg", alt: "Cocina y comedor con un muro de placas de concreto", wide: true, pos: "50% 55%" },
    { src: G + "obra-ovalo-noche.jpg", alt: "Muro de cobogó Óvalo iluminado de noche", pos: "50% 50%" },
    { src: G + "rev-dormitorio.jpg", alt: "Dormitorio con cabecera de placas de concreto y pared de ladrillo", pos: "40% 50%" },
  ],
];
