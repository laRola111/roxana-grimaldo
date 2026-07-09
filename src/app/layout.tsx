import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    default: "Roxana Grimaldo | Estética Avanzada & Skincare",
    template: "%s | Roxana Grimaldo"
  },
  description: "Servicios de estética avanzada, pestañas, diseño de cejas y tratamientos faciales personalizados por Roxana Grimaldo. Realza tu belleza natural.",
  keywords: ["Roxana Grimaldo", "esteticista", "skincare", "tratamientos faciales", "extensión de pestañas", "diseño de cejas", "belleza", "aesthetics", "facialist", "Austin", "Texas"],
  authors: [{ name: "Roxana Grimaldo" }],
  creator: "Roxana Grimaldo",
  metadataBase: new URL("https://www.roxanagrimaldo.com"),
  openGraph: {
    title: "Roxana Grimaldo | Estética Avanzada & Skincare",
    description: "Servicios de estética avanzada, pestañas, diseño de cejas y tratamientos faciales personalizados. Realza tu belleza natural.",
    url: "https://www.roxanagrimaldo.com",
    siteName: "Roxana Grimaldo",
    locale: "es_US",
    type: "website",
    images: [
      {
        url: "/logo-roxana-navbar-rosado.png",
        width: 800,
        height: 600,
        alt: "Roxana Grimaldo Logo",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roxana Grimaldo | Estética Avanzada & Skincare",
    description: "Tratamientos faciales y servicios de estética avanzada personalizados.",
    images: ["/logo-roxana-navbar-rosado.png"],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} antialiased bg-black text-foreground min-h-screen font-sans`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
