import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

const siteUrl = "https://darshifashanti.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dar Shifa Shanti — Maison d'hôtes à Merzouga, Maroc",
    template: "%s | Dar Shifa Shanti",
  },
  description:
    "Maison d'hôtes authentique à Merzouga, au pied des dunes de l'Erg Chebbi. Hospitalité marocaine, chambres traditionnelles et expériences sahariennes inoubliables.",
  keywords: [
    "Merzouga",
    "Erg Chebbi",
    "maison d'hôtes Merzouga",
    "riad Merzouga",
    "désert Maroc",
    "Sahara",
    "hébergement Merzouga",
    "Dar Shifa Shanti",
    "chambres d'hôtes désert",
    "nuit dans le désert Maroc",
  ],
  authors: [{ name: "Dar Shifa Shanti" }],
  creator: "Dar Shifa Shanti",
  publisher: "Dar Shifa Shanti",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Dar Shifa Shanti",
    title: "Dar Shifa Shanti — Maison d'hôtes à Merzouga",
    description:
      "Maison d'hôtes authentique au pied des dunes de l'Erg Chebbi. Vivre le Sahara autrement.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Dar Shifa Shanti – Maison d'hôtes à Merzouga",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dar Shifa Shanti — Maison d'hôtes à Merzouga",
    description:
      "Maison d'hôtes authentique au pied des dunes de l'Erg Chebbi. Vivre le Sahara autrement.",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "travel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
