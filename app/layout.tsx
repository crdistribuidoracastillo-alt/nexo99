
import type { Metadata } from "next";
import "./style.css";

export const metadata: Metadata = {
  title: "NEXO 99 | Panel Administrativo",
  description:
    "Plataforma de análisis y comunidad. Banca Pura Vida."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
