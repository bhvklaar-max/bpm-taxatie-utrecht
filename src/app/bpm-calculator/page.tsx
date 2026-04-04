'use client';

import { useState } from 'react';
import Link from 'next/link';

const AFSCHRIJVINGSTABEL: Record<number, number> = {
  0: 0,
  1: 23,
  2: 33,
  3: 44,
  4: 55,
  5: 63,
  6: 70,
  7: 75,
  8: 79,
  9: 82,
  10: 85,
};

export default function BpmCalculatorPage() {
  const [catalogusprijs, setCatalogusprijs] = useState<string>('');
  const [voertuigtype, setVoertuigtype] = useState<string>('personenauto');
  const [leeftijd, setLeeftijd] = useState<string>('0');
  const [brandstof, setBrandstof] = useState<string>('benzine');
  const [resultaat, setResultaat] = useState<{
    baseBpm: number;
    afschrijving: number;
    geschatteBpm: number;
    besparingMin: number;
    besparingMax: number;
    nettoBpmMin: number;
    nettoBpmMax: number;
  } | null>(null);
  const [showResult, setShowResult] = useState(false);

  const berekenBpm = () => {
    const prijs = parseFloat(catalogusprijs);
    if (isNaN(prijs) || prijs <= 0) return;

    // Elektrisch: geen BPM
    if (brandstof === 'elektrisch') {
      setResultaat({
        baseBpm: 0,
        afschrijving: 0,
        geschatteBpm: 0,
        besparingMin: 0,
        besparingMax: 0,
        nettoBpmMin: 0,
        nettoBpmMax: 0,
      });
      setShowResult(true);
      return;
    }

    // Base BPM: ~25% van catalogusprijs
    const baseBpm = prijs * 0.25;

    // Forfaitaire afschrijving
    const leeftijdNum = parseInt(leeftijd);
    const leeftijdKey = leeftijdNum >= 10 ? 10 : leeftijdNum;
    const afschrijvingPercentage = AFSCHRIJVINGSTABEL[leeftijdKey] ?? 0;
    const afschrijvingBedrag = baseBpm * (afschrijvingPercentage / 100);
    const geschatteBpm = baseBpm - afschrijvingBedrag;

    // Besparing met taxatierapport: 15-30%
    const besparingMin = geschatteBpm * 0.15;
    const besparingMax = geschatteBpm * 0.30;
    const nettoBpmMin = geschatteBpm - besparingMax;
    const nettoBpmMax = geschatteBpm - besparingMin;

    setResultaat({
      baseBpm: Math.round(baseBpm),
      afschrijving: afschrijvingPercentage,
      geschatteBpm: Math.round(geschatteBpm),
      besparingMin: Math.round(besparingMin),
      besparingMax: Math.round(besparingMax),
      nettoBpmMin: Math.round(nettoBpmMin),
      nettoBpmMax: Math.round(nettoBpmMax),
    });
    setShowResult(true);
  };

  const formatBedrag = (bedrag: number) =>
    new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(bedrag);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#1e3a5f] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">BPM Calculator</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Bereken snel een indicatie van de BPM-kosten voor uw ge&iuml;mporteerde voertuig.
            Ontdek hoeveel u kunt besparen met een professioneel taxatierapport.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-8">
              Voer uw voertuiggegevens in
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Catalogusprijs */}
              <div>
                <label
                  htmlFor="catalogusprijs"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Catalogusprijs (nieuwprijs)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
                    &euro;
                  </span>
                  <input
                    id="catalogusprijs"
                    type="number"
                    min="0"
                    step="100"
                    placeholder="bijv. 35000"
                    value={catalogusprijs}
                    onChange={(e) => setCatalogusprijs(e.target.value)}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-[#f97316] outline-none transition"
                  />
                </div>
              </div>

              {/* Voertuigtype */}
              <div>
                <label
                  htmlFor="voertuigtype"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Voertuigtype
                </label>
                <select
                  id="voertuigtype"
                  value={voertuigtype}
                  onChange={(e) => setVoertuigtype(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-[#f97316] outline-none transition bg-white"
                >
                  <option value="personenauto">Personenauto</option>
                  <option value="motor">Motor</option>
                  <option value="camper">Camper</option>
                </select>
              </div>

              {/* Leeftijd voertuig */}
              <div>
                <label
                  htmlFor="leeftijd"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Leeftijd voertuig
                </label>
                <select
                  id="leeftijd"
                  value={leeftijd}
                  onChange={(e) => setLeeftijd(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-[#f97316] outline-none transition bg-white"
                >
                  <option value="0">Nieuw (0 jaar)</option>
                  <option value="1">1 jaar</option>
                  <option value="2">2 jaar</option>
                  <option value="3">3 jaar</option>
                  <option value="4">4 jaar</option>
                  <option value="5">5 jaar</option>
                  <option value="6">6 jaar</option>
                  <option value="7">7 jaar</option>
                  <option value="8">8 jaar</option>
                  <option value="9">9 jaar</option>
                  <option value="10">10+ jaar</option>
                </select>
              </div>

              {/* Brandstof */}
              <div>
                <label
                  htmlFor="brandstof"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Brandstof
                </label>
                <select
                  id="brandstof"
                  value={brandstof}
                  onChange={(e) => setBrandstof(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-[#f97316] outline-none transition bg-white"
                >
                  <option value="benzine">Benzine</option>
                  <option value="diesel">Diesel</option>
                  <option value="elektrisch">Elektrisch</option>
                  <option value="hybride">Hybride</option>
                </select>
              </div>
            </div>

            {/* Bereken Button */}
            <div className="mt-8">
              <button
                onClick={berekenBpm}
                disabled={!catalogusprijs || parseFloat(catalogusprijs) <= 0}
                className="w-full bg-[#f97316] hover:bg-[#ea6c10] disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Bereken BPM indicatie
              </button>
            </div>
          </div>

          {/* Resultaat */}
          {showResult && resultaat && (
            <div
              className="mt-8 bg-white rounded-2xl shadow-lg overflow-hidden"
              style={{ animation: 'fadeInUp 0.5s ease-out' }}
            >
              {/* Result Header */}
              <div className="bg-[#1e3a5f] text-white p-6">
                <h3 className="text-xl font-bold">Uw BPM Indicatie</h3>
                <p className="text-gray-200 text-sm mt-1">
                  Op basis van de forfaitaire afschrijvingstabel
                </p>
              </div>

              <div className="p-6 md:p-8">
                {brandstof === 'elektrisch' ? (
                  <div className="text-center py-6">
                    <div className="text-5xl mb-4">&#9889;</div>
                    <h4 className="text-2xl font-bold text-green-600 mb-2">
                      Geen BPM verschuldigd
                    </h4>
                    <p className="text-gray-600">
                      Elektrische voertuigen zijn vrijgesteld van BPM.
                    </p>
                  </div>
                ) : (
                  <>
                    {/* BPM Bedragen */}
                    <div className="space-y-4 mb-8">
                      <div className="flex justify-between items-center py-3 border-b border-gray-100">
                        <span className="text-gray-600">Geschatte basis BPM</span>
                        <span className="font-semibold text-gray-900">
                          {formatBedrag(resultaat.baseBpm)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-gray-100">
                        <span className="text-gray-600">
                          Forfaitaire afschrijving ({resultaat.afschrijving}%)
                        </span>
                        <span className="font-semibold text-green-600">
                          - {formatBedrag(resultaat.baseBpm - resultaat.geschatteBpm)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b-2 border-[#1e3a5f]">
                        <span className="text-lg font-bold text-[#1e3a5f]">
                          Geschatte BPM (forfaitair)
                        </span>
                        <span className="text-lg font-bold text-[#1e3a5f]">
                          {formatBedrag(resultaat.geschatteBpm)}
                        </span>
                      </div>
                    </div>

                    {/* Besparing Card */}
                    <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-8">
                      <h4 className="text-lg font-bold text-[#f97316] mb-3">
                        Mogelijke besparing met taxatierapport
                      </h4>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700">Geschatte besparing (15-30%)</span>
                        <span className="font-bold text-green-600">
                          {formatBedrag(resultaat.besparingMin)} - {formatBedrag(resultaat.besparingMax)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center pt-3 border-t border-orange-200">
                        <span className="font-semibold text-gray-800">
                          Netto geschatte BPM na taxatie
                        </span>
                        <span className="font-bold text-[#1e3a5f]">
                          {formatBedrag(resultaat.nettoBpmMin)} - {formatBedrag(resultaat.nettoBpmMax)}
                        </span>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="bg-[#1e3a5f] rounded-xl p-6 text-center text-white">
                      <h4 className="text-xl font-bold mb-2">
                        Wilt u exact weten hoeveel u kunt besparen?
                      </h4>
                      <p className="text-gray-200 mb-2">
                        Vraag een gratis indicatie aan!
                      </p>
                      <p className="text-gray-300 text-sm mb-4">
                        BPM Taxatie Utrecht &mdash; Standaard tarief: <strong>&euro;149 ex BTW</strong>
                      </p>
                      <Link
                        href="/afspraak-maken"
                        className="inline-block bg-[#f97316] hover:bg-[#ea6c10] text-white font-bold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105"
                      >
                        Vraag gratis indicatie aan
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Afschrijvingstabel */}
          <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">
              Forfaitaire afschrijvingstabel
            </h2>
            <p className="text-gray-600 mb-6">
              De Belastingdienst hanteert onderstaande forfaitaire afschrijvingspercentages.
              Met een taxatierapport kunt u vaak een hogere afschrijving aantonen.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#1e3a5f] text-white">
                    <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">Leeftijd voertuig</th>
                    <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">Afschrijving</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(AFSCHRIJVINGSTABEL).map(([jaar, pct]) => (
                    <tr key={jaar} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 text-gray-700">
                        {jaar === '0' ? 'Nieuw (0 jaar)' : jaar === '10' ? '10+ jaar' : `${jaar} jaar`}
                      </td>
                      <td className="px-4 py-3 font-semibold text-[#1e3a5f]">{pct}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              <strong>Let op:</strong> Deze berekening is een indicatie op basis van de
              forfaitaire afschrijvingstabel. De werkelijke BPM kan afwijken. Een
              professioneel taxatierapport geeft de exacte waarde en kan tot 30% besparing
              opleveren.
            </p>
          </div>

          {/* Company Info */}
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>
              <strong>BPM Taxatie Utrecht</strong> | Standaard tarief: &euro;149 ex BTW |
              RDW-erkend taxateur
            </p>
          </div>
        </div>
      </section>

      {/* Keyframe Animation */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
