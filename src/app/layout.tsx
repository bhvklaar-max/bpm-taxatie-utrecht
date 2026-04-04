import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "BPM Taxatie Utrecht | Erkende BPM Taxatie Service",
    template: "%s | BPM Taxatie Utrecht",
  },
  description:
    "Erkende en onafhankelijke BPM taxatie in Utrecht. Professionele taxatierapporten voor auto-import, motoren, campers en oldtimers. Snel, betrouwbaar en scherp geprijsd. Bespaar tot 30% op uw BPM!",
  keywords: [
    "BPM taxatie",
    "BPM taxatie Utrecht",
    "taxatierapport",
    "auto import",
    "BPM aangifte",
    "BPM besparen",
    "erkende taxateur",
    "voertuig taxatie",
    "BPM tegenbewijs",
    "auto taxatie Utrecht",
    "BPM rapport",
    "import auto Nederland",
  ],
  authors: [{ name: "BPM Taxatie Utrecht" }],
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "BPM Taxatie Utrecht",
    title: "BPM Taxatie Utrecht | Erkende BPM Taxatie Service",
    description:
      "Erkende en onafhankelijke BPM taxatie in Utrecht. Professionele taxatierapporten vanaf €149. Snel, betrouwbaar en scherp geprijsd.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "BPM Taxatie Utrecht",
  description:
    "Erkende en onafhankelijke BPM taxatie service in Utrecht. Professionele taxatierapporten voor geïmporteerde voertuigen.",
  image: "/og-image.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Industrieweg 12",
    addressLocality: "Utrecht",
    postalCode: "3542 AD",
    addressCountry: "NL",
  },
  telephone: "+31301234567",
  email: "info@bpmtaxatieutrecht.nl",
  url: "https://bpmtaxatieutrecht.nl",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
  priceRange: "€€",
  areaServed: {
    "@type": "Country",
    name: "Nederland",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "BPM Taxatie Diensten",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "BPM Taxatierapport",
          description: "Officieel BPM taxatierapport voor geïmporteerde voertuigen",
        },
        price: "149",
        priceCurrency: "EUR",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
