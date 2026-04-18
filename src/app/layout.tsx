import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://caiobrasiladvocacia.com.br"),
  title: {
    default: "Caio Brasil Advocacia",
    template: "%s · Caio Brasil Advocacia",
  },
  description:
    "Advocacia preventiva e estratégica em Brasília. Atuação em direito trabalhista e cível.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Caio Brasil Advocacia",
    title: "Caio Brasil Advocacia",
    description:
      "Advocacia preventiva e estratégica em Brasília. Atuação em direito trabalhista e cível.",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
  other: {
    "preconnect": "https://fonts.googleapis.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Caio Brasil Advocacia",
    url: "https://caiobrasiladvocacia.com.br",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://caiobrasiladvocacia.com.br/search?q={search_term_string}",
      },
      query_input: "required name=search_term_string",
    },
  };

  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
