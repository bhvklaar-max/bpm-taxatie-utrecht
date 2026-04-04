'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Upload, Plus, Trash2, FileText } from 'lucide-react';
import Link from 'next/link';

const steps = [
  'Klantgegevens',
  'Voertuiggegevens',
  "Foto's",
  'Inspectie',
  'Waardebepaling',
  'Review',
];

const merkOptions = [
  'Audi', 'BMW', 'Ford', 'Mercedes-Benz', 'Toyota', 'Volkswagen', 'Volvo',
  'Opel', 'Peugeot', 'Renault', 'Kia', 'Hyundai', 'Skoda', 'SEAT', 'Fiat',
];

const brandstofOptions = ['Benzine', 'Diesel', 'Elektrisch', 'Hybride', 'Plug-in Hybride'];
const voertuigTypeOptions = ['Personenauto', 'Bedrijfsvoertuig', 'Motor', 'Camper'];
const conditieOptions = ['Uitstekend', 'Goed', 'Redelijk', 'Matig', 'Slecht'];

interface DamageItem {
  locatie: string;
  beschrijving: string;
  ernst: string;
  aftrekbedrag: number;
}

const photoZones = [
  { key: 'exterieur_voor', label: 'Exterieur - Voor' },
  { key: 'exterieur_achter', label: 'Exterieur - Achter' },
  { key: 'exterieur_links', label: 'Exterieur - Links' },
  { key: 'exterieur_rechts', label: 'Exterieur - Rechts' },
  { key: 'interieur', label: 'Interieur' },
  { key: 'dashboard', label: 'Dashboard' },
  { key: 'motor', label: 'Motorruimte' },
  { key: 'schade', label: 'Schade (indien aanwezig)' },
];

export default function NieuweAanvraagPage() {
  const [currentStep, setCurrentStep] = useState(0);

  // Step 1: Client data
  const [clientNaam, setClientNaam] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientTelefoon, setClientTelefoon] = useState('');
  const [clientType, setClientType] = useState<'particulier' | 'zakelijk'>('particulier');
  const [bedrijfsnaam, setBedrijfsnaam] = useState('');
  const [kvkNummer, setKvkNummer] = useState('');

  // Step 2: Vehicle data
  const [merk, setMerk] = useState('');
  const [model, setModel] = useState('');
  const [bouwjaar, setBouwjaar] = useState('');
  const [vin, setVin] = useState('');
  const [kenteken, setKenteken] = useState('');
  const [brandstof, setBrandstof] = useState('');
  const [kmStand, setKmStand] = useState('');
  const [kleur, setKleur] = useState('');
  const [voertuigType, setVoertuigType] = useState('');

  // Step 4: Inspection
  const [notities, setNotities] = useState('');
  const [conditieExterieur, setConditieExterieur] = useState('Goed');
  const [conditieInterieur, setConditieInterieur] = useState('Goed');
  const [conditieTechnisch, setConditieTechnisch] = useState('Goed');
  const [conditieOnderhoud, setConditieOnderhoud] = useState('Goed');
  const [damageItems, setDamageItems] = useState<DamageItem[]>([]);

  // Step 5: Valuation
  const [catalogusprijs, setCatalogusprijs] = useState('');
  const [handelsinkoopwaarde, setHandelsinkoopwaarde] = useState('');
  const [bpmPercentage, setBpmPercentage] = useState('37');

  const totalDamageDeductions = damageItems.reduce((sum, item) => sum + (item.aftrekbedrag || 0), 0);
  const catalogusPrijsNum = parseFloat(catalogusprijs) || 0;
  const handelsinkoopwaardeNum = parseFloat(handelsinkoopwaarde) || 0;
  const totaalWaardevermindering = catalogusPrijsNum - handelsinkoopwaardeNum + totalDamageDeductions;
  const getaxeerdeWaarde = Math.max(0, handelsinkoopwaardeNum - totalDamageDeductions);
  const bpmBedrag = Math.round(getaxeerdeWaarde * ((parseFloat(bpmPercentage) || 0) / 100));

  const addDamageItem = () => {
    setDamageItems([...damageItems, { locatie: '', beschrijving: '', ernst: 'licht', aftrekbedrag: 0 }]);
  };

  const removeDamageItem = (index: number) => {
    setDamageItems(damageItems.filter((_, i) => i !== index));
  };

  const updateDamageItem = (index: number, field: keyof DamageItem, value: string | number) => {
    const updated = [...damageItems];
    updated[index] = { ...updated[index], [field]: value };
    setDamageItems(updated);
  };

  const nextStep = () => setCurrentStep(Math.min(currentStep + 1, steps.length - 1));
  const prevStep = () => setCurrentStep(Math.max(currentStep - 1, 0));

  const inputClass = "w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/dashboard/aanvragen" className="p-2 rounded-lg hover:bg-gray-200 transition-colors">
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Nieuwe Aanvraag</h1>
          <p className="text-gray-500 mt-0.5">Maak een nieuwe taxatieaanvraag aan</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
        <div className="flex items-center justify-between mb-2">
          {steps.map((step, index) => (
            <div key={step} className="flex items-center flex-1 last:flex-initial">
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                    index < currentStep
                      ? 'bg-green-500 text-white'
                      : index === currentStep
                      ? 'text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                  style={index === currentStep ? { backgroundColor: '#1e3a5f' } : undefined}
                >
                  {index < currentStep ? <Check className="w-4 h-4" /> : index + 1}
                </div>
                <span className={`text-xs mt-1 hidden sm:block ${index === currentStep ? 'font-semibold text-gray-900' : 'text-gray-400'}`}>
                  {step}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className={`flex-1 h-0.5 mx-2 ${index < currentStep ? 'bg-green-500' : 'bg-gray-200'}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step content */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        {/* Step 1: Klantgegevens */}
        {currentStep === 0 && (
          <div className="space-y-5">
            <h2 className="text-lg font-semibold text-gray-900">Klantgegevens</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className={labelClass}>Type klant</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="clientType" value="particulier" checked={clientType === 'particulier'} onChange={() => setClientType('particulier')} className="accent-orange-500" />
                    <span className="text-sm">Particulier</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="clientType" value="zakelijk" checked={clientType === 'zakelijk'} onChange={() => setClientType('zakelijk')} className="accent-orange-500" />
                    <span className="text-sm">Zakelijk</span>
                  </label>
                </div>
              </div>
              <div>
                <label className={labelClass}>Naam *</label>
                <input type="text" value={clientNaam} onChange={(e) => setClientNaam(e.target.value)} className={inputClass} placeholder="Volledige naam" />
              </div>
              <div>
                <label className={labelClass}>E-mail *</label>
                <input type="email" value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} className={inputClass} placeholder="email@voorbeeld.nl" />
              </div>
              <div>
                <label className={labelClass}>Telefoon *</label>
                <input type="tel" value={clientTelefoon} onChange={(e) => setClientTelefoon(e.target.value)} className={inputClass} placeholder="06-12345678" />
              </div>
              {clientType === 'zakelijk' && (
                <>
                  <div>
                    <label className={labelClass}>Bedrijfsnaam</label>
                    <input type="text" value={bedrijfsnaam} onChange={(e) => setBedrijfsnaam(e.target.value)} className={inputClass} placeholder="Bedrijfsnaam B.V." />
                  </div>
                  <div>
                    <label className={labelClass}>KVK-nummer</label>
                    <input type="text" value={kvkNummer} onChange={(e) => setKvkNummer(e.target.value)} className={inputClass} placeholder="12345678" />
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Step 2: Voertuiggegevens */}
        {currentStep === 1 && (
          <div className="space-y-5">
            <h2 className="text-lg font-semibold text-gray-900">Voertuiggegevens</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Merk *</label>
                <select value={merk} onChange={(e) => setMerk(e.target.value)} className={inputClass}>
                  <option value="">Selecteer merk</option>
                  {merkOptions.map((m) => <option key={m} value={m}>{m}</option>)}
                </select>
              </div>
              <div>
                <label className={labelClass}>Model *</label>
                <input type="text" value={model} onChange={(e) => setModel(e.target.value)} className={inputClass} placeholder="bijv. 320d Touring" />
              </div>
              <div>
                <label className={labelClass}>Bouwjaar *</label>
                <input type="number" value={bouwjaar} onChange={(e) => setBouwjaar(e.target.value)} className={inputClass} placeholder="2022" min="1990" max="2026" />
              </div>
              <div>
                <label className={labelClass}>VIN (chassisnummer)</label>
                <input type="text" value={vin} onChange={(e) => setVin(e.target.value)} className={inputClass} placeholder="WBAXXXXXXXXXXXXXXX" maxLength={17} />
              </div>
              <div>
                <label className={labelClass}>Kenteken *</label>
                <input type="text" value={kenteken} onChange={(e) => setKenteken(e.target.value.toUpperCase())} className={inputClass} placeholder="AB-123-CD" />
              </div>
              <div>
                <label className={labelClass}>Brandstof *</label>
                <select value={brandstof} onChange={(e) => setBrandstof(e.target.value)} className={inputClass}>
                  <option value="">Selecteer brandstof</option>
                  {brandstofOptions.map((b) => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>
              <div>
                <label className={labelClass}>Kilometerstand *</label>
                <input type="number" value={kmStand} onChange={(e) => setKmStand(e.target.value)} className={inputClass} placeholder="85000" />
              </div>
              <div>
                <label className={labelClass}>Kleur</label>
                <input type="text" value={kleur} onChange={(e) => setKleur(e.target.value)} className={inputClass} placeholder="bijv. Zwart metallic" />
              </div>
              <div>
                <label className={labelClass}>Voertuigtype *</label>
                <select value={voertuigType} onChange={(e) => setVoertuigType(e.target.value)} className={inputClass}>
                  <option value="">Selecteer type</option>
                  {voertuigTypeOptions.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Foto's */}
        {currentStep === 2 && (
          <div className="space-y-5">
            <h2 className="text-lg font-semibold text-gray-900">Foto&apos;s Uploaden</h2>
            <p className="text-sm text-gray-500">Upload foto&apos;s van het voertuig voor de taxatie.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {photoZones.map((zone) => (
                <div
                  key={zone.key}
                  className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center gap-2 hover:border-orange-400 hover:bg-orange-50/50 transition-colors cursor-pointer min-h-[140px]"
                >
                  <Upload className="w-8 h-8 text-gray-400" />
                  <p className="text-xs font-medium text-gray-600 text-center">{zone.label}</p>
                  <p className="text-xs text-gray-400">Klik of sleep</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Inspectie */}
        {currentStep === 3 && (
          <div className="space-y-5">
            <h2 className="text-lg font-semibold text-gray-900">Inspectie</h2>

            <div>
              <label className={labelClass}>Taxateur notities</label>
              <textarea
                value={notities}
                onChange={(e) => setNotities(e.target.value)}
                rows={4}
                className={inputClass}
                placeholder="Algemene opmerkingen over het voertuig..."
              />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-800 mb-3">Conditie Beoordeling</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: 'Exterieur', value: conditieExterieur, setter: setConditieExterieur },
                  { label: 'Interieur', value: conditieInterieur, setter: setConditieInterieur },
                  { label: 'Technisch', value: conditieTechnisch, setter: setConditieTechnisch },
                  { label: 'Onderhoud', value: conditieOnderhoud, setter: setConditieOnderhoud },
                ].map((item) => (
                  <div key={item.label}>
                    <label className={labelClass}>{item.label}</label>
                    <select value={item.value} onChange={(e) => item.setter(e.target.value)} className={inputClass}>
                      {conditieOptions.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-800">Schade-items</h3>
                <button
                  onClick={addDamageItem}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-white hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#f97316' }}
                >
                  <Plus className="w-4 h-4" />
                  Toevoegen
                </button>
              </div>
              {damageItems.length === 0 && (
                <p className="text-sm text-gray-400 py-4 text-center border border-dashed border-gray-200 rounded-lg">
                  Geen schade-items toegevoegd
                </p>
              )}
              <div className="space-y-3">
                {damageItems.map((item, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Schade #{index + 1}</span>
                      <button onClick={() => removeDamageItem(index)} className="p-1 text-red-400 hover:text-red-600">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs text-gray-500">Locatie</label>
                        <input
                          type="text"
                          value={item.locatie}
                          onChange={(e) => updateDamageItem(index, 'locatie', e.target.value)}
                          className={inputClass}
                          placeholder="bijv. Voorbumper links"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-500">Ernst</label>
                        <select
                          value={item.ernst}
                          onChange={(e) => updateDamageItem(index, 'ernst', e.target.value)}
                          className={inputClass}
                        >
                          <option value="licht">Licht</option>
                          <option value="matig">Matig</option>
                          <option value="ernstig">Ernstig</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-xs text-gray-500">Beschrijving</label>
                        <input
                          type="text"
                          value={item.beschrijving}
                          onChange={(e) => updateDamageItem(index, 'beschrijving', e.target.value)}
                          className={inputClass}
                          placeholder="Beschrijving van de schade"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-500">Aftrekbedrag (&euro;)</label>
                        <input
                          type="number"
                          value={item.aftrekbedrag || ''}
                          onChange={(e) => updateDamageItem(index, 'aftrekbedrag', parseFloat(e.target.value) || 0)}
                          className={inputClass}
                          placeholder="0"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 5: Waardebepaling */}
        {currentStep === 4 && (
          <div className="space-y-5">
            <h2 className="text-lg font-semibold text-gray-900">Waardebepaling</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Catalogusprijs (&euro;)</label>
                <input
                  type="number"
                  value={catalogusprijs}
                  onChange={(e) => setCatalogusprijs(e.target.value)}
                  className={inputClass}
                  placeholder="bijv. 52800"
                />
              </div>
              <div>
                <label className={labelClass}>Handelsinkoopwaarde (&euro;)</label>
                <input
                  type="number"
                  value={handelsinkoopwaarde}
                  onChange={(e) => setHandelsinkoopwaarde(e.target.value)}
                  className={inputClass}
                  placeholder="bijv. 36200"
                />
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-5 space-y-3">
              <h3 className="text-sm font-semibold text-gray-800">Berekening</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Catalogusprijs</span>
                  <span className="font-medium">&euro;{catalogusPrijsNum.toLocaleString('nl-NL')}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Handelsinkoopwaarde</span>
                  <span className="font-medium">&euro;{handelsinkoopwaardeNum.toLocaleString('nl-NL')}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Schadeaftrek totaal</span>
                  <span className="font-medium text-red-600">-&euro;{totalDamageDeductions.toLocaleString('nl-NL')}</span>
                </div>
                <hr className="border-gray-200" />
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Totaal waardevermindering</span>
                  <span className="font-semibold text-red-600">&euro;{totaalWaardevermindering.toLocaleString('nl-NL')}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700 font-medium">Getaxeerde waarde</span>
                  <span className="font-bold text-lg" style={{ color: '#1e3a5f' }}>&euro;{getaxeerdeWaarde.toLocaleString('nl-NL')}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>BPM percentage (%)</label>
                <input
                  type="number"
                  value={bpmPercentage}
                  onChange={(e) => setBpmPercentage(e.target.value)}
                  className={inputClass}
                  placeholder="37"
                />
              </div>
              <div>
                <label className={labelClass}>BPM bedrag (berekend)</label>
                <div className="px-3 py-2.5 border border-gray-300 rounded-lg text-sm bg-gray-50 font-bold" style={{ color: '#f97316' }}>
                  &euro;{bpmBedrag.toLocaleString('nl-NL')}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 6: Review */}
        {currentStep === 5 && (
          <div className="space-y-5">
            <h2 className="text-lg font-semibold text-gray-900">Overzicht &amp; Bevestiging</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Client summary */}
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-gray-800 mb-3">Klantgegevens</h3>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between"><dt className="text-gray-500">Naam</dt><dd className="font-medium">{clientNaam || '-'}</dd></div>
                  <div className="flex justify-between"><dt className="text-gray-500">Email</dt><dd className="font-medium">{clientEmail || '-'}</dd></div>
                  <div className="flex justify-between"><dt className="text-gray-500">Telefoon</dt><dd className="font-medium">{clientTelefoon || '-'}</dd></div>
                  <div className="flex justify-between"><dt className="text-gray-500">Type</dt><dd className="font-medium capitalize">{clientType}</dd></div>
                  {clientType === 'zakelijk' && (
                    <>
                      <div className="flex justify-between"><dt className="text-gray-500">Bedrijf</dt><dd className="font-medium">{bedrijfsnaam || '-'}</dd></div>
                      <div className="flex justify-between"><dt className="text-gray-500">KVK</dt><dd className="font-medium">{kvkNummer || '-'}</dd></div>
                    </>
                  )}
                </dl>
              </div>

              {/* Vehicle summary */}
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-gray-800 mb-3">Voertuiggegevens</h3>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between"><dt className="text-gray-500">Merk / Model</dt><dd className="font-medium">{merk} {model || '-'}</dd></div>
                  <div className="flex justify-between"><dt className="text-gray-500">Bouwjaar</dt><dd className="font-medium">{bouwjaar || '-'}</dd></div>
                  <div className="flex justify-between"><dt className="text-gray-500">Kenteken</dt><dd className="font-medium">{kenteken || '-'}</dd></div>
                  <div className="flex justify-between"><dt className="text-gray-500">VIN</dt><dd className="font-medium text-xs">{vin || '-'}</dd></div>
                  <div className="flex justify-between"><dt className="text-gray-500">Brandstof</dt><dd className="font-medium">{brandstof || '-'}</dd></div>
                  <div className="flex justify-between"><dt className="text-gray-500">KM-stand</dt><dd className="font-medium">{kmStand ? `${parseInt(kmStand).toLocaleString('nl-NL')} km` : '-'}</dd></div>
                </dl>
              </div>

              {/* Inspection summary */}
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-gray-800 mb-3">Inspectie</h3>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between"><dt className="text-gray-500">Exterieur</dt><dd className="font-medium">{conditieExterieur}</dd></div>
                  <div className="flex justify-between"><dt className="text-gray-500">Interieur</dt><dd className="font-medium">{conditieInterieur}</dd></div>
                  <div className="flex justify-between"><dt className="text-gray-500">Technisch</dt><dd className="font-medium">{conditieTechnisch}</dd></div>
                  <div className="flex justify-between"><dt className="text-gray-500">Onderhoud</dt><dd className="font-medium">{conditieOnderhoud}</dd></div>
                  <div className="flex justify-between"><dt className="text-gray-500">Schade-items</dt><dd className="font-medium">{damageItems.length}</dd></div>
                </dl>
              </div>

              {/* Valuation summary */}
              <div className="border border-gray-200 rounded-lg p-4" style={{ borderColor: '#1e3a5f' }}>
                <h3 className="text-sm font-semibold mb-3" style={{ color: '#1e3a5f' }}>Waardebepaling</h3>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between"><dt className="text-gray-500">Catalogusprijs</dt><dd className="font-medium">&euro;{catalogusPrijsNum.toLocaleString('nl-NL')}</dd></div>
                  <div className="flex justify-between"><dt className="text-gray-500">Handelsinkoopwaarde</dt><dd className="font-medium">&euro;{handelsinkoopwaardeNum.toLocaleString('nl-NL')}</dd></div>
                  <div className="flex justify-between"><dt className="text-gray-500">Schadeaftrek</dt><dd className="font-medium text-red-600">-&euro;{totalDamageDeductions.toLocaleString('nl-NL')}</dd></div>
                  <hr className="border-gray-200" />
                  <div className="flex justify-between"><dt className="font-medium text-gray-700">Getaxeerde waarde</dt><dd className="font-bold" style={{ color: '#1e3a5f' }}>&euro;{getaxeerdeWaarde.toLocaleString('nl-NL')}</dd></div>
                  <div className="flex justify-between"><dt className="font-medium text-gray-700">BPM bedrag</dt><dd className="font-bold" style={{ color: '#f97316' }}>&euro;{bpmBedrag.toLocaleString('nl-NL')}</dd></div>
                </dl>
              </div>
            </div>

            <button
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-semibold text-base hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#1e3a5f' }}
            >
              <FileText className="w-5 h-5" />
              Genereer Taxatierapport
            </button>
          </div>
        )}
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
            currentStep === 0
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          Vorige
        </button>
        {currentStep < steps.length - 1 && (
          <button
            onClick={nextStep}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#f97316' }}
          >
            Volgende
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
