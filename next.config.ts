import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 90 solo para la foto del hero, que se ve a pantalla completa.
    qualities: [75, 90],
  },
};

export default nextConfig;
