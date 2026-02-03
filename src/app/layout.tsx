import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { CustomCursor } from "@/components/ui/CustomCursor";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Knowme | Identidades Digitales de Alto Rendimiento",
  description: "Diseño y desarrollo web premium para creadores, empresas y profesionales. Potenciamos tu marca personal y comercial con infraestructura digital de élite.",
  keywords: ["desarrollo web", "diseño premium", "personal branding", "seo local", "creadores de contenido", "knowme"],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${sora.variable}`}>
      <body className="antialiased selection:bg-emerald-primary/10 selection:text-emerald-secondary">
        <CustomCursor />
        <main className="min-h-screen bg-white text-midnight">
          {children}
        </main>
      </body>
    </html>
  );
}
