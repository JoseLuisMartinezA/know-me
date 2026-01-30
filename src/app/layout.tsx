import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "know me. | Infraestructura digital para negocios de alto rendimiento",
  description: "Diseño webs personalizadas, rápidas y optimizadas para transformar tu visión en una herramienta de ventas de élite.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="antialiased selection:bg-emerald-primary/10 selection:text-emerald-secondary">
        <main className="min-h-screen bg-white text-midnight">
          {children}
        </main>
      </body>
    </html>
  );
}
