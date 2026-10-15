// Número en formato internacional, sin "+" ni espacios. Se configura en Vercel.
export const WHATSAPP_NUMBER = (process.env.NEXT_PUBLIC_WHATSAPP || "595981625546").replace(/\D/g, "");

export const WHATSAPP_DISPLAY =
  "+" + WHATSAPP_NUMBER.replace(/^(\d{3})(\d{3})(\d{3})(\d+)$/, "$1 $2 $3 $4");

export const waLink = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export const WA_GENERAL = waLink(
  "¡Hola Trama! Quiero hacer una consulta sobre cobogós y revestimientos de concreto.",
);

export const WA_PARTNERS = waLink(
  "¡Hola Trama! Quiero sumarme a Socios Trama. Soy (arquitecto / diseñador / constructora / revendedor) y mi empresa es: ",
);
