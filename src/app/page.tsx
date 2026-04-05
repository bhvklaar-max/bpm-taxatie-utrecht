import Link from "next/link";
import Image from "next/image";

// KIE.AI generated images - local paths
const IMAGES = {
  hero: "/images/hero-team.jpeg",
  inspection: "/images/car-inspection.jpeg",
  germanImports: "/images/german-imports.jpeg",
  happyCustomer: "/images/happy-customer.jpeg",
  rapport: "/images/rapport-document.jpeg",
  office: "/images/office-utrecht.jpeg",
  aboutGarage: "/images/about-garage.jpeg",
  cta: "/images/cta-background.jpeg",
};
import {
  Shield,
  Clock,
  Euro,
  Car,
  MapPin,
  Calculator,
  Phone,
  ArrowRight,
  CheckCircle,
  FileText,
  Search,
  ClipboardCheck,
  Truck,
  Bike,
  Caravan,
  Timer,
} from "lucide-react";

const trustItems = [
  { icon: Shield, title: "Erkend Taxateur", desc: "RDW erkend en ROTA gecertificeerd" },
  { icon: Clock, title: "Snelle Levering", desc: "Uw rapport binnen 24 uur" },
  { icon: Euro, title: "Scherpe Tarieven", desc: "Vanaf €149 ex BTW" },
  { icon: Car, title: "Alle Voertuigen", desc: "Auto's, motoren, campers & meer" },
  { icon: MapPin, title: "Landelijke Dekking", desc: "Vanuit Utrecht, heel Nederland" },
  { icon: Calculator, title: "Gratis BPM Indicatie", desc: "Vrijblijvend berekenen" },
];

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Aanvraag Indienen",
    desc: "Vul het online formulier in of bel ons direct. Wij vragen alleen de basisgegevens van uw voertuig op.",
  },
  {
    num: "02",
    icon: ClipboardCheck,
    title: "Voertuig Inspectie",
    desc: "Onze erkende taxateur voert een grondige fysieke inspectie uit bij onze garage in Utrecht.",
  },
  {
    num: "03",
    icon: FileText,
    title: "Rapport Ontvangen",
    desc: "U ontvangt uw officiële BPM taxatierapport binnen 24 uur, klaar voor de Belastingdienst.",
  },
];

const diensten = [
  { icon: Car, title: "Personenauto's", desc: "Complete BPM taxatie voor alle personenauto's die worden geïmporteerd naar Nederland." },
  { icon: Bike, title: "Motoren", desc: "Professionele taxatie voor geïmporteerde motorfietsen van alle merken en types." },
  { icon: Caravan, title: "Campers", desc: "Gespecialiseerde BPM taxatie voor kampeerauto's en campers." },
  { icon: Timer, title: "Oldtimers & Youngtimers", desc: "Speciale taxatie voor klassieke voertuigen met gunstige BPM-regeling." },
  { icon: Truck, title: "Bedrijfsvoertuigen", desc: "BPM taxatie voor bedrijfswagens en bestelauto's." },
  { icon: Shield, title: "Tegenbewijs Taxatie", desc: "Officieel tegenbewijs als u het niet eens bent met de BPM-berekening." },
];

const faqs = [
  {
    q: "Wat is een BPM taxatierapport?",
    a: "Een BPM taxatierapport is een officiële waardebepaling van uw voertuig door een erkende taxateur. Dit rapport wordt gebruikt om de te betalen BPM te berekenen bij de import van een voertuig naar Nederland.",
  },
  {
    q: "Hoeveel kan ik besparen met een taxatierapport?",
    a: "Gemiddeld besparen onze klanten 15-30% op de BPM ten opzichte van de standaard afschrijvingstabel. Bij voertuigen met schade of hoge kilometerstand kan de besparing nog hoger zijn.",
  },
  {
    q: "Hoe lang duurt het maken van een taxatierapport?",
    a: "Na de fysieke inspectie ontvangt u uw rapport doorgaans binnen 24 uur. Bij spoedaanvragen is levering op dezelfde dag mogelijk.",
  },
  {
    q: "Welke documenten heb ik nodig?",
    a: "U heeft het buitenlandse kentekenbewijs (of COC-document), een geldig legitimatiebewijs en eventueel de aankoopfactuur van het voertuig nodig.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative text-white py-20 lg:py-32 overflow-hidden">
        <Image
          src={IMAGES.hero}
          alt="Team BPM Taxatie Utrecht - Professioneel taxatieteam in garage"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/95 via-[#1e3a5f]/85 to-[#1e3a5f]/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-[#f97316] text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              Erkend &amp; Onafhankelijk Taxateur in Utrecht
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Erkende BPM Taxatie
              <span className="text-orange-400"> in Utrecht</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
              Bespaar tot 30% op uw BPM met een professioneel taxatierapport.
              Snel, betrouwbaar en scherp geprijsd. Rapport binnen 24 uur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/afspraak-maken"
                className="inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
              >
                Direct Afspraak Maken
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+31301234567"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold border border-white/30 transition-colors backdrop-blur-sm"
              >
                <Phone className="w-5 h-5" />
                030 - 123 4567
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-300">
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> RDW Erkend</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Vanaf €149 ex BTW</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Rapport binnen 24 uur</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {trustItems.map((item) => (
              <div key={item.title} className="text-center p-4">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-7 h-7 text-[#1e3a5f]" />
                </div>
                <h3 className="font-semibold text-sm text-gray-900 mb-1">{item.title}</h3>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hoe Werkt Het */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Hoe Werkt Het?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              In drie eenvoudige stappen naar uw officiële BPM taxatierapport
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => {
              const stepImages = [
                IMAGES.rapport,
                IMAGES.inspection,
                IMAGES.happyCustomer,
              ];
              return (
                <div key={step.num} className="relative text-center">
                  <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-6">
                    <Image src={stepImages[i]} alt={step.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
                    <div className="absolute inset-0 bg-[#1e3a5f]/40 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <span className="absolute top-3 right-3 bg-[#f97316] text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Diensten */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Onze Diensten
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Wij verzorgen BPM taxaties voor alle typen voertuigen
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diensten.map((dienst, i) => {
              const dienstImages = [
                IMAGES.germanImports,
                IMAGES.inspection,
                IMAGES.germanImports,
                IMAGES.cta,
                IMAGES.germanImports,
                IMAGES.rapport,
              ];
              return (
                <div
                  key={dienst.title}
                  className="card-hover bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-[#1e3a5f]/30 group"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image src={dienstImages[i]} alt={dienst.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width:768px) 100vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-3 left-3 w-10 h-10 bg-[#f97316] rounded-lg flex items-center justify-center">
                      <dienst.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{dienst.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{dienst.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tarieven Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Onze Tarieven
              </h2>
              <p className="text-lg text-gray-600">
                Transparante en scherpe prijzen, geen verborgen kosten
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Particulier */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-[#1e3a5f]">
                <span className="inline-block bg-[#1e3a5f] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  MEEST GEKOZEN
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Particulier</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#1e3a5f]">€149</span>
                  <span className="text-gray-500 ml-1">ex BTW</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "Volledig BPM taxatierapport",
                    "Fysieke voertuiginspectie",
                    "Fotodocumentatie",
                    "Waardebepaling via koerslijst",
                    "Rapport binnen 24 uur",
                    "Geldig voor Belastingdienst",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/afspraak-maken"
                  className="block text-center bg-accent hover:bg-accent-dark text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Afspraak Maken
                </Link>
              </div>

              {/* Zakelijk */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <span className="inline-block bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  ZAKELIJK
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Bedrijven</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#1e3a5f]">Op maat</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "Staffelprijzen bij volume",
                    "Vaste contactpersoon",
                    "Prioriteitsverwerking",
                    "Maandelijkse facturatie",
                    "Flexibele planning",
                    "Meerdere voertuigen tegelijk",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="block text-center bg-[#1e3a5f] hover:bg-[#152a45] text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Offerte Aanvragen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Over Ons kort */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Waarom BPM Taxatie Utrecht?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Wij zijn een erkend en onafhankelijk taxatiebedrijf gevestigd in Utrecht.
                Met jarenlange ervaring in de automotive sector bieden wij professionele
                BPM taxatierapporten die voldoen aan alle wettelijke eisen.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { num: "500+", label: "Taxaties uitgevoerd" },
                  { num: "98%", label: "Klanttevredenheid" },
                  { num: "24u", label: "Gemiddelde levertijd" },
                  { num: "30%", label: "Gemiddelde besparing" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-3xl font-bold text-[#1e3a5f]">{stat.num}</div>
                    <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
              <Link
                href="/over-ons"
                className="inline-flex items-center gap-2 text-[#1e3a5f] font-semibold mt-8 hover:text-orange-500 transition-colors"
              >
                Meer over ons <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src={IMAGES.aboutGarage}
                alt="BPM Taxatie Utrecht garage locatie"
                width={600}
                height={500}
                className="object-cover w-full h-full rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/90 via-[#1e3a5f]/30 to-transparent rounded-2xl" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Onze Garanties</h3>
                <ul className="space-y-3">
                  {[
                    "Erkend en onafhankelijk taxateur",
                    "ROTA gecertificeerd",
                    "Rapport voldoet aan alle wettelijke eisen",
                    "Geaccepteerd door de Belastingdienst",
                    "Transparante werkwijze",
                    "Geen verborgen kosten",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-400 shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Veelgestelde Vragen
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/veelgestelde-vragen"
              className="inline-flex items-center gap-2 text-[#1e3a5f] font-semibold hover:text-orange-500 transition-colors"
            >
              Bekijk alle vragen <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-16 overflow-hidden">
        <Image
          src={IMAGES.cta}
          alt="Luxe auto's showroom BPM Taxatie Utrecht"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/95 to-[#1e3a5f]/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Klaar om uw BPM te laten taxeren?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Maak vandaag nog een afspraak en bespaar op uw BPM. Rapport binnen 24 uur.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/afspraak-maken"
              className="inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
            >
              Direct Afspraak Maken
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+31301234567"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold border border-white/30 transition-colors backdrop-blur-sm"
            >
              <Phone className="w-5 h-5" />
              Bel Ons Direct
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
