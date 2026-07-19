import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Panama Collectors | Recuperación y gestión de activos",
  description:
    "Panama Collectors S.A. gestiona cobros, recuperación de autos, adjudicación de bienes y soporte operativo para entidades bancarias en Panamá.",
  icons: {
    icon: "/assets/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <link rel="preload" as="image" href="/assets/images/generated/panama-collectors-hero-operacion-bancaria.webp" type="image/webp" />
        {children}
        <Script src="/script.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
