import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/empresa.html", destination: "/empresa", permanent: true },
      { source: "/cumplimiento.html", destination: "/cumplimiento", permanent: true },
      { source: "/clientes-bancarios.html", destination: "/clientes-bancarios", permanent: true },
      { source: "/privacidad.html", destination: "/privacidad", permanent: true },
      { source: "/servicios/index.html", destination: "/servicios", permanent: true },
      { source: "/servicios/:slug.html", destination: "/servicios/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
