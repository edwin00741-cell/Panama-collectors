import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Panama Collectors | Recuperacion y gestion de activos",
  description:
    "Panama Collectors S.A. gestiona cobros, recuperacion de autos, adjudicacion de bienes y soporte operativo para entidades bancarias en Panama.",
  icons: {
    icon: "/assets/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        {children}
        <Script src="/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
