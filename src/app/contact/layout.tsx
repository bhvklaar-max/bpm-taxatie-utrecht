import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | BPM Taxatie Utrecht",
  description: "Neem contact op met BPM Taxatie Utrecht voor een snelle BPM berekening of taxatie afspraak. Bereikbaar ma-za. Taxatie in Utrecht en omgeving. Bel 030-123 4567.",
  keywords: ["contact BPM taxatie", "BPM taxatie Utrecht contact", "taxatie afspraak maken", "BPM taxateur bellen"],
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
