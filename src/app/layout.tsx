import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";
const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-outfit", display: "swap" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-inter", display: "swap" });
const description = "A PIPA une construção de marca, visão de negócio e soluções digitais para quem quer evoluir com intenção.";
export const metadata: Metadata = {
  ...(site.url ? { metadataBase: new URL(site.url), alternates: { canonical: "/" } } : {}),
  title: "PIPA — Marcas e sistemas feitos com intenção",
  description,
  openGraph: { title: "PIPA", description, locale: "pt_BR", type: "website", images: ["/brand/logo/pipa-logo-sphere.jpg"] },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR" className={`${outfit.variable} ${inter.variable}`}><body>{children}</body></html>;
}
