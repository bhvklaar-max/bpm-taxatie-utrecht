'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ArrowRight } from 'lucide-react';

const faqs = [
  { q: "Wat is een BPM taxatierapport?", a: "Een BPM taxatierapport is een officiële waardebepaling van een voertuig dat wordt geïmporteerd naar Nederland. Een erkende, onafhankelijke taxateur stelt dit rapport op na een fysieke inspectie van het voertuig. Het rapport wordt gebruikt als tegenbewijs bij de Belastingdienst om de verschuldigde BPM te berekenen op basis van de werkelijke waarde van het voertuig." },
  { q: "Hoeveel kan ik besparen met een taxatierapport?", a: "De besparing varieert per voertuig, maar gemiddeld besparen onze klanten 15-30% op de BPM ten opzichte van de standaard forfaitaire afschrijvingstabel. Bij voertuigen met schade, hoge kilometerstand of intensief gebruik kan de besparing nog hoger oplopen. Wij geven u vooraf een gratis indicatie." },
  { q: "Hoe lang duurt het maken van een taxatierapport?", a: "Na de fysieke inspectie ontvangt u uw rapport doorgaans binnen 24 uur per e-mail. Bij spoedaanvragen (tegen meerprijs) is levering op dezelfde dag mogelijk. De fysieke inspectie zelf duurt ongeveer 30-45 minuten." },
  { q: "Welke documenten heb ik nodig?", a: "U heeft nodig: het buitenlandse kentekenbewijs (deel I en II) of een COC-document (Certificate of Conformity), een geldig legitimatiebewijs (paspoort of ID-kaart), en bij voorkeur de aankoopfactuur van het voertuig. Indien beschikbaar, is een onderhoudsboekje ook nuttig." },
  { q: "Wat kost een BPM taxatierapport?", a: "Ons standaard tarief voor een BPM taxatierapport is €149 ex BTW (€180,29 incl. BTW). Voor spoedopdrachten geldt een tarief van €199 ex BTW, en voor oldtimers/youngtimers €249 ex BTW. Zakelijke klanten met meerdere voertuigen per maand ontvangen staffelkorting." },
  { q: "Is een taxatierapport verplicht?", a: "Nee, een taxatierapport is niet verplicht. U kunt de BPM ook laten berekenen via de forfaitaire afschrijvingstabel. Echter, een taxatierapport levert in veel gevallen een aanzienlijke besparing op, omdat het de werkelijke waarde en staat van het voertuig meeneemt." },
  { q: "Wat is het verschil tussen de forfaitaire tabel en een taxatierapport?", a: "De forfaitaire afschrijvingstabel berekent de BPM puur op basis van de leeftijd van het voertuig met vaste percentages. Een taxatierapport houdt daarentegen rekening met de werkelijke staat, schade, kilometerstand en marktwaarde, wat vaak resulteert in een lagere BPM." },
  { q: "Hoe wordt de waarde van mijn auto bepaald?", a: "De waarde wordt bepaald aan de hand van erkende koerslijsten (Autotelex/EuroTax), de fysieke staat van het voertuig, de kilometerstand, eventuele schade of gebreken, het onderhoud en de actuele marktomstandigheden. Alle waardeverminderingen worden onderbouwd met fotobewijs." },
  { q: "Is het rapport geldig voor de Belastingdienst?", a: "Ja, onze taxatierapporten voldoen aan alle wettelijke eisen conform de Uitvoeringsregeling BPM 1992 en worden geaccepteerd door de Belastingdienst. Onze taxateur is RDW erkend en ROTA gecertificeerd." },
  { q: "Kan ik ook een taxatie laten doen voor een motor of camper?", a: "Ja, wij verzorgen BPM taxaties voor alle typen voertuigen: personenauto's, motorfietsen, campers, bedrijfsvoertuigen, oldtimers en youngtimers. Voor elk voertuigtype hebben wij de juiste expertise en referentiedata." },
  { q: "Wat als mijn auto schade heeft?", a: "Schade aan uw voertuig kan juist een reden zijn om een taxatierapport te laten maken. Onze taxateur documenteert alle schade uitvoerig met foto's en berekent de waardevermindering. Dit kan leiden tot een aanzienlijk lagere BPM." },
  { q: "Moet het voertuig naar Utrecht komen voor inspectie?", a: "Onze inspectielocatie is gevestigd in Utrecht. Het voertuig moet fysiek worden geïnspecteerd — dit is een wettelijke vereiste. De inspectie mag maximaal 1 maand voor de RDW-registratie plaatsvinden. In overleg is inspectie op een andere locatie mogelijk (tegen meerkosten)." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="bg-[#1e3a5f] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Veelgestelde Vragen</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">Alles wat u wilt weten over BPM taxatie</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">{faq.a}</div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12 p-8 bg-gray-50 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Staat uw vraag er niet bij?</h2>
            <p className="text-gray-600 mb-6">Neem gerust contact met ons op, wij helpen u graag verder</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white px-6 py-3 rounded-lg font-semibold">
              Contact Opnemen <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
