import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "BPM Taxatie Tarieven | Vanaf €149 ex BTW",
  description: "Transparante tarieven voor BPM taxatie in Utrecht. Standaard €149, Spoed €199, Oldtimer €249 (ex BTW). Zakelijke staffelkorting beschikbaar. Geen verborgen kosten, rapport binnen 24 uur.",
  keywords: ["BPM taxatie kosten", "BPM taxatierapport prijs", "goedkope BPM taxatie", "BPM taxatie tarieven"],
};

export default function Tarieven() {
  return (
    <>
      <section className="bg-[#1e3a5f] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Onze Tarieven</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Transparante prijzen, geen verborgen kosten. Altijd een scherp tarief.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Standaard */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-[#1e3a5f] relative">
              <span className="absolute -top-3 left-6 bg-[#1e3a5f] text-white text-xs font-bold px-3 py-1 rounded-full">MEEST GEKOZEN</span>
              <h2 className="text-xl font-bold text-gray-900 mb-1">Standaard Taxatie</h2>
              <p className="text-sm text-gray-500 mb-4">Personenauto&apos;s &amp; motoren</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-[#1e3a5f]">&euro;149</span>
                <span className="text-gray-500 ml-1">ex BTW</span>
              </div>
              <ul className="space-y-3 mb-8">
                {["Volledig BPM taxatierapport", "Fysieke voertuiginspectie", "Fotodocumentatie", "Waardebepaling via koerslijst", "Rapport binnen 24 uur", "Geldig voor Belastingdienst", "PDF + print versie"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />{item}
                  </li>
                ))}
              </ul>
              <Link href="/afspraak-maken" className="block text-center bg-[#f97316] hover:bg-[#ea580c] text-white py-3 rounded-lg font-semibold">Afspraak Maken</Link>
            </div>

            {/* Spoed */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-1">Spoed Taxatie</h2>
              <p className="text-sm text-gray-500 mb-4">Rapport dezelfde dag</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-[#1e3a5f]">&euro;199</span>
                <span className="text-gray-500 ml-1">ex BTW</span>
              </div>
              <ul className="space-y-3 mb-8">
                {["Alles van Standaard Taxatie", "Rapport dezelfde dag", "Prioriteitsverwerking", "Direct contact met taxateur", "Spoedafspraak mogelijk", "Expreslevering per e-mail"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />{item}
                  </li>
                ))}
              </ul>
              <Link href="/afspraak-maken" className="block text-center bg-[#1e3a5f] hover:bg-[#152a45] text-white py-3 rounded-lg font-semibold">Spoed Aanvragen</Link>
            </div>

            {/* Oldtimer */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-1">Oldtimer / Youngtimer</h2>
              <p className="text-sm text-gray-500 mb-4">Klassieke voertuigen</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-[#1e3a5f]">&euro;249</span>
                <span className="text-gray-500 ml-1">ex BTW</span>
              </div>
              <ul className="space-y-3 mb-8">
                {["Alles van Standaard Taxatie", "Specialistische waardebepaling", "Historisch marktonderzoek", "Uitgebreide conditierapportage", "Expertkennis klassiekers", "Advies BPM-vrijstelling"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />{item}
                  </li>
                ))}
              </ul>
              <Link href="/afspraak-maken" className="block text-center bg-[#1e3a5f] hover:bg-[#152a45] text-white py-3 rounded-lg font-semibold">Afspraak Maken</Link>
            </div>
          </div>

          {/* Zakelijk */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Zakelijke Tarieven</h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">Voor autobedrijven, importeurs en dealers bieden wij aantrekkelijke staffelprijzen</p>
            <div className="overflow-x-auto">
              <table className="w-full max-w-lg mx-auto">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="py-3 text-left text-gray-900 font-semibold">Aantal per maand</th>
                    <th className="py-3 text-right text-gray-900 font-semibold">Prijs per taxatie</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100"><td className="py-3">1 - 5 taxaties</td><td className="py-3 text-right font-semibold">&euro;149 ex BTW</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-3">6 - 10 taxaties</td><td className="py-3 text-right font-semibold">&euro;129 ex BTW</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-3">11 - 25 taxaties</td><td className="py-3 text-right font-semibold">&euro;109 ex BTW</td></tr>
                  <tr><td className="py-3">25+ taxaties</td><td className="py-3 text-right font-semibold">Op aanvraag</td></tr>
                </tbody>
              </table>
            </div>
            <div className="text-center mt-8">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#1e3a5f] hover:bg-[#152a45] text-white px-8 py-3 rounded-lg font-semibold">
                Zakelijke Offerte Aanvragen <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Wat zit erin */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Wat Zit Er in Elk Rapport?</h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {[
                "Volledige voertuigidentificatie (VIN, kenteken, specificaties)",
                "Waardering op basis van erkende koerslijst (Autotelex/EuroTax)",
                "Uitgebreide fotodocumentatie (minimaal 10 foto's)",
                "Gedetailleerde conditiebeoordeling",
                "Onderbouwde waardevermindering met bewijs",
                "BPM berekening conform wettelijke richtlijnen",
                "Onafhankelijkheidsverklaring van de taxateur",
                "Handtekening en registratienummer taxateur",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 p-3">
                  <CheckCircle className="w-5 h-5 text-[#1e3a5f] shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
