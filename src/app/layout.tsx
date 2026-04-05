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
    "BPM taxatierapport",
    "auto import",
    "auto importeren Duitsland",
    "BPM aangifte",
    "BPM besparen",
    "BPM berekenen",
    "BPM calculator",
    "erkende taxateur",
    "erkende taxateur Utrecht",
    "voertuig taxatie",
    "BPM tegenbewijs",
    "auto taxatie Utrecht",
    "BPM rapport",
    "import auto Nederland",
    "BPM teruggave",
    "BPM kosten auto import",
    "taxatierapport kosten",
    "BPM taxatie motor",
    "BPM taxatie camper",
    "BPM taxatie oldtimer",
    "BPM afschrijvingstabel",
    "auto import kosten",
    "goedkope BPM taxatie",
    "BPM taxatie in de buurt",
    "BPM taxatie midden Nederland",
    "kenteken taxatie",
    "voertuigwaardering",
    "RDW taxatie",
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
          name: "BPM Taxatierapport Standaard",
          description: "Officieel BPM taxatierapport voor geïmporteerde personenauto's. Erkend door RDW en Belastingdienst.",
        },
        price: "149",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "BPM Taxatierapport Spoed",
          description: "Spoedtaxatie met rapport binnen 4 uur. Voor urgente BPM aangiftes.",
        },
        price: "199",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "BPM Taxatie Oldtimer",
          description: "Specialistische taxatie voor oldtimers en youngtimers met uitgebreide waardebepaling.",
        },
        price: "249",
        priceCurrency: "EUR",
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
    bestRating: "5",
  },
  sameAs: [
    "https://www.google.com/maps/place/BPM+Taxatie+Utrecht",
  ],
  geo: {
    "@type": "GeoCoordinates",
    latitude: "52.0907",
    longitude: "5.1214",
  },
  paymentAccepted: "Cash, iDEAL, Bankoverschrijving, Creditcard",
  currenciesAccepted: "EUR",
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
