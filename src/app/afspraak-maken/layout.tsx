import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Afspraak Maken | BPM Taxatie Utrecht",
  description: "Maak direct een afspraak voor uw BPM taxatie in Utrecht. Kies uw datum en tijd online. Rapport binnen 24 uur. Standaard taxatie vanaf €149 ex BTW.",
  keywords: ["BPM taxatie afspraak", "taxatie afspraak maken Utrecht", "BPM taxatierapport aanvragen", "online afspraak taxatie"],
};

export default function AfspraakLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
