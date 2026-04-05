import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Search, ClipboardCheck, FileText, ArrowRight, Phone, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Hoe Werkt BPM Taxatie? | 3 Stappen naar uw Rapport",
  description: "Ontdek hoe BPM taxatie werkt bij BPM Taxatie Utrecht. In 3 eenvoudige stappen naar uw officieel taxatierapport: aanvraag, inspectie en rapport binnen 24 uur. Bespaar tot 30% op uw BPM.",
  keywords: ["hoe werkt BPM taxatie", "BPM taxatie stappen", "taxatierapport aanvragen", "BPM inspectie proces"],
};

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Aanvraag Indienen",
    desc: "Neem contact met ons op via het online formulier, telefoon of e-mail. Wij vragen de basisgegevens van uw voertuig op: merk, model, bouwjaar, kilometerstand en het land van herkomst.",
    image: "/images/rapport-document.jpeg",
    imageAlt: "BPM taxatierapport document met officiële stempels en handtekening",
    details: [
      "Vul het online aanvraagformulier in of bel ons direct",
      "Stuur de voertuigdocumenten digitaal op",
      "Ontvang binnen 1 uur een bevestiging",
      "Wij plannen direct een afspraak voor de inspectie",
    ],
  },
  {
    num: "02",
    icon: ClipboardCheck,
    title: "Voertuig Inspectie",
    desc: "Onze erkende taxateur voert een grondige fysieke inspectie uit bij onze garage in Utrecht. Het voertuig wordt uitvoerig gecontroleerd en gefotografeerd.",
    image: "/images/car-inspection.jpeg",
    imageAlt: "Erkende taxateur inspecteert auto in de werkplaats van BPM Taxatie Utrecht",
    details: [
      "Uitgebreide visuele inspectie van exterieur en interieur",
      "Fotodocumentatie van alle relevante onderdelen",
      "Controle op schade, slijtage en gebreken",
      "Beoordeling van onderhoudsstaat en technische conditie",
    ],
  },
  {
    num: "03",
    icon: FileText,
    title: "Rapport Ontvangen",
    desc: "Op basis van de inspectie stellen wij een officieel BPM taxatierapport op dat voldoet aan alle wettelijke eisen. U ontvangt het rapport binnen 24 uur.",
    image: "/images/happy-customer.jpeg",
    imageAlt: "Tevreden klant ontvangt BPM taxatierapport bij onze garage in Utrecht",
    details: [
      "Professioneel taxatierapport volgens wettelijke richtlijnen",
      "Waardebepaling op basis van erkende koerslijsten",
      "Fotobewijs voor alle waardeverminderingen",
      "Digitaal en per post beschikbaar",
    ],
  },
];

export default function HoeWerktHet() {
  return (
    <>
      {/* Hero with background image */}
      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/about-garage.jpeg"
          alt="Professionele autogarage van BPM Taxatie Utrecht waar voertuigen worden getaxeerd"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a5f]/85 to-[#1e3a5f]/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white drop-shadow-lg">
            Hoe Werkt Het?
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto drop-shadow">
            In drie eenvoudige stappen naar uw officiële BPM taxatierapport
          </p>
        </div>
      </section>

      {/* Steps with images */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {steps.map((step, index) => (
            <div
              key={step.num}
              className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-10 items-center`}
            >
              {/* Image */}
              <div className="w-full md:w-5/12 flex-shrink-0">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-[#f97316] rounded-xl flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-sm">{step.num}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-[#1e3a5f] rounded-xl flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-sm font-bold text-[#f97316] tracking-wider uppercase">
                    Stap {step.num}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h2>
                <p className="text-gray-600 text-lg mb-4 leading-relaxed">{step.desc}</p>
                <ul className="space-y-2">
                  {step.details.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Waarom Kiezen voor Ons? with background image */}
      <section className="relative py-20 overflow-hidden">
        <Image
          src="/images/about-garage.jpeg"
          alt="Achtergrond van de BPM Taxatie Utrecht garage en werkplaats"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1e3a5f]/90" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Waarom Kiezen voor Ons?</h2>
          <p className="text-gray-200 mb-10 text-lg max-w-2xl mx-auto">
            Wij combineren snelheid, betrouwbaarheid en maximale besparing voor elke klant
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Snel & Efficiënt", desc: "Rapport binnen 24 uur na inspectie" },
              { title: "Erkend & Betrouwbaar", desc: "RDW erkend en ROTA gecertificeerd" },
              { title: "Maximale Besparing", desc: "Gemiddeld 15-30% besparing op BPM" },
            ].map((b) => (
              <div key={b.title} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-white mb-2">{b.title}</h3>
                <p className="text-gray-200 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1e3a5f] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Klaar om te beginnen?</h2>
          <p className="text-gray-200 mb-8 text-lg">Maak vandaag nog een afspraak voor uw BPM taxatie</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/afspraak-maken" className="inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-4 rounded-lg text-lg font-semibold">
              Afspraak Maken <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:+31301234567" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold border border-white/30">
              <Phone className="w-5 h-5" /> 030 - 123 4567
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
