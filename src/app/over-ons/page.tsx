import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Award, Users, Target, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Over BPM Taxatie Utrecht | Erkend Taxateur",
  description: "BPM Taxatie Utrecht - Uw erkende BPM taxateur in de regio Utrecht. ROTA-gecertificeerd, onafhankelijk en betrouwbaar. Leer meer over onze werkwijze en certificeringen.",
  keywords: ["erkende taxateur Utrecht", "ROTA taxateur", "BPM taxatie bedrijf Utrecht", "onafhankelijke taxateur"],
};

export default function OverOns() {
  return (
    <>
      <section className="bg-[#1e3a5f] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Over Ons</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">Erkend, onafhankelijk en gepassioneerd over eerlijke voertuigtaxaties</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Uw Betrouwbare Partner voor BPM Taxaties</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                BPM Taxatie Utrecht is opgericht met één duidelijke missie: het bieden van eerlijke, snelle en professionele BPM taxatierapporten tegen een scherp tarief.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Gevestigd in Utrecht, bedienen wij klanten door heel Nederland. Onze erkende taxateur beschikt over jarenlange ervaring in de automotive sector en is volledig onafhankelijk — wij hebben geen banden met autodealers of importbedrijven.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Wij geloven dat iedereen recht heeft op een eerlijke BPM-berekening. Daarom zetten wij ons in om voor elke klant de meest gunstige, maar altijd eerlijke en wettelijk correcte waardebepaling te maken.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2a5080] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Cijfers &amp; Feiten</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { num: "500+", label: "Taxaties uitgevoerd" },
                  { num: "98%", label: "Klanttevredenheid" },
                  { num: "<24u", label: "Gemiddelde levertijd" },
                  { num: "30%", label: "Gem. BPM besparing" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-3xl font-bold text-orange-400">{s.num}</div>
                    <div className="text-sm text-gray-300 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { icon: Shield, title: "Erkend", desc: "RDW erkend en ROTA gecertificeerd taxateur" },
              { icon: Award, title: "Onafhankelijk", desc: "Geen banden met dealers of importeurs" },
              { icon: Users, title: "Ervaren", desc: "Jarenlange expertise in voertuigtaxaties" },
              { icon: Target, title: "Nauwkeurig", desc: "Grondige inspectie en eerlijke waardebepaling" },
            ].map((v) => (
              <div key={v.title} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-14 h-14 bg-[#1e3a5f] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Onze Certificeringen</h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {[
                "RDW erkend taxateur",
                "ROTA gecertificeerd (Register Onafhankelijke Taxateurs Automotive)",
                "Lid van branchevereniging RETM",
                "Werkzaam volgens Uitvoeringsregeling BPM 1992",
                "Onafhankelijkheidsverklaring conform wet",
                "Continue bijscholing en actualisatie",
              ].map((c) => (
                <div key={c} className="flex items-start gap-3 p-2">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">{c}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Wilt u meer weten?</h2>
            <p className="text-gray-600 mb-8 text-lg">Neem gerust contact met ons op voor vragen of een vrijblijvende offerte</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-4 rounded-lg text-lg font-semibold">
              Neem Contact Op <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
