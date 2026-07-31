// smart/next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Requerido por el Dockerfile para generar el build standalone
  output: "standalone",
  // tus configs opcionales
};

export default nextConfig;