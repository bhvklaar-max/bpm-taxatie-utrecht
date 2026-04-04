// =============================================================================
// BPM Berekening Engine
// Implementeert de Nederlandse BPM forfaitaire afschrijvingstabel en
// taxatie-gebaseerde BPM berekening conform belastingdienst richtlijnen.
// =============================================================================

/**
 * Forfaitaire afschrijvingstabel BPM
 * Bron: Belastingdienst Nederland
 * Key = leeftijd voertuig in jaren, Value = afschrijvingspercentage
 */
export const BPM_DEPRECIATION_TABLE: Record<number, number> = {
  0: 0,    // Nieuw voertuig
  1: 23,   // 1 jaar oud
  2: 33,   // 2 jaar oud
  3: 44,   // 3 jaar oud
  4: 55,   // 4 jaar oud
  5: 63,   // 5 jaar oud
  6: 70,   // 6 jaar oud
  7: 75,   // 7 jaar oud
  8: 79,   // 8 jaar oud
  9: 82,   // 9 jaar oud
  10: 85,  // 10 jaar of ouder
};

/**
 * Fijnmazige maandtabel voor nauwkeurigere berekening binnen het eerste jaar
 * en de overgang tussen jaren. Per maand extra afschrijving.
 */
const MONTHLY_DEPRECIATION_WITHIN_YEAR: Record<number, number[]> = {
  0: [0, 2, 4, 6, 8, 10, 12, 14, 16, 17, 19, 21],
  1: [23, 24, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33],
  2: [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
  3: [44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55],
  4: [55, 56, 56, 57, 58, 59, 59, 60, 61, 61, 62, 63],
  5: [63, 64, 64, 65, 65, 66, 67, 67, 68, 68, 69, 70],
  6: [70, 70, 71, 71, 72, 72, 73, 73, 74, 74, 75, 75],
  7: [75, 75, 76, 76, 76, 77, 77, 77, 78, 78, 79, 79],
  8: [79, 79, 79, 80, 80, 80, 81, 81, 81, 82, 82, 82],
  9: [82, 82, 83, 83, 83, 83, 84, 84, 84, 84, 85, 85],
};

/**
 * Bereken het afschrijvingspercentage op basis van exacte leeftijd.
 * Gebruikt de maandtabel voor nauwkeurigere berekening.
 */
export function getDepreciationPercentage(ageInYears: number, ageInMonths?: number): number {
  // 10 jaar of ouder: vast 85%
  if (ageInYears >= 10) return 85;

  // Als we maanden hebben, gebruik fijnmazige tabel
  if (ageInMonths !== undefined) {
    const yearKey = Math.min(ageInYears, 9);
    const monthInYear = Math.min(ageInMonths % 12, 11);
    const monthlyTable = MONTHLY_DEPRECIATION_WITHIN_YEAR[yearKey];
    if (monthlyTable) {
      return monthlyTable[monthInYear];
    }
  }

  // Anders forfaitaire jaartabel
  return BPM_DEPRECIATION_TABLE[Math.min(ageInYears, 10)] ?? 85;
}

export interface BPMCalculationResult {
  forfaitairBPM: number;
  depreciationPercentage: number;
}

/**
 * Bereken de BPM verschuldigd op basis van forfaitaire tabel.
 *
 * @param params.catalogPrice - Oorspronkelijke catalogusprijs incl. BPM
 * @param params.bpmNew - BPM bedrag bij eerste registratie
 * @param params.vehicleAge - Leeftijd voertuig in jaren
 * @param params.co2Emission - CO2 uitstoot in g/km (optioneel, voor referentie)
 * @returns Forfaitair BPM bedrag en afschrijvingspercentage
 */
export function calculateBPM(params: {
  catalogPrice: number;
  bpmNew: number;
  vehicleAge: number;
  co2Emission?: number;
}): BPMCalculationResult {
  const { bpmNew, vehicleAge } = params;

  const depreciationPercentage = getDepreciationPercentage(vehicleAge);
  const forfaitairBPM = Math.round(bpmNew * (1 - depreciationPercentage / 100));

  return {
    forfaitairBPM: Math.max(forfaitairBPM, 0),
    depreciationPercentage,
  };
}

export interface BPMTaxatieResult {
  taxatieBPM: number;
  forfaitairBPM: number;
  besparing: number;
  besparingPercentage: number;
  methode: 'taxatie' | 'forfaitair';
}

/**
 * Bereken BPM met taxatiewaarde.
 *
 * De BPM kan op twee manieren berekend worden:
 * 1. Forfaitair: BPM nieuw x (1 - afschrijvingspercentage)
 * 2. Taxatie: BPM nieuw x (getaxeerde waarde / catalogusprijs)
 *
 * De laagste van de twee mag worden toegepast. Een taxatierapport
 * kan dus een aanzienlijke besparing opleveren als het voertuig
 * meer is afgeschreven dan de forfaitaire tabel aangeeft (bijv. door
 * schade, hoge km-stand, of slijtage).
 *
 * @param params.catalogPrice - Oorspronkelijke catalogusprijs incl. BPM en BTW
 * @param params.bpmNew - BPM bij nieuw
 * @param params.vehicleAge - Leeftijd in jaren
 * @param params.marketValue - Handelsinkoopwaarde koerslijst
 * @param params.taxatieValue - Getaxeerde waarde (na aftrek schade/slijtage)
 * @returns Berekening met besparing
 */
export function calculateBPMWithTaxatie(params: {
  catalogPrice: number;
  bpmNew: number;
  vehicleAge: number;
  marketValue: number;
  taxatieValue: number;
}): BPMTaxatieResult {
  const { catalogPrice, bpmNew, vehicleAge, taxatieValue } = params;

  // Methode 1: Forfaitair
  const depreciationPercentage = getDepreciationPercentage(vehicleAge);
  const forfaitairBPM = Math.round(bpmNew * (1 - depreciationPercentage / 100));

  // Methode 2: Taxatie
  // BPM = BPM nieuw x (getaxeerde waarde / catalogusprijs excl. BPM)
  const catalogPriceExclBPM = catalogPrice - bpmNew;
  const taxatieRatio = catalogPriceExclBPM > 0
    ? taxatieValue / catalogPriceExclBPM
    : 0;
  const taxatieBPM = Math.round(bpmNew * taxatieRatio);

  // De laagste methode is voordeligst voor de klant
  const effectiveTaxatieBPM = Math.min(taxatieBPM, forfaitairBPM);
  const besparing = Math.max(forfaitairBPM - effectiveTaxatieBPM, 0);
  const besparingPercentage = forfaitairBPM > 0
    ? Math.round((besparing / forfaitairBPM) * 10000) / 100
    : 0;

  return {
    taxatieBPM: Math.max(effectiveTaxatieBPM, 0),
    forfaitairBPM: Math.max(forfaitairBPM, 0),
    besparing,
    besparingPercentage,
    methode: effectiveTaxatieBPM < forfaitairBPM ? 'taxatie' : 'forfaitair',
  };
}

/**
 * Bereken de leeftijd van een voertuig in hele jaren.
 *
 * @param firstRegistrationDate - Datum eerste registratie (ISO string: YYYY-MM-DD)
 * @returns Leeftijd in hele jaren
 */
export function calculateVehicleAge(firstRegistrationDate: string): number {
  const regDate = new Date(firstRegistrationDate);
  const now = new Date();

  if (isNaN(regDate.getTime())) {
    throw new Error(`Ongeldige datum: ${firstRegistrationDate}`);
  }

  let age = now.getFullYear() - regDate.getFullYear();
  const monthDiff = now.getMonth() - regDate.getMonth();
  const dayDiff = now.getDate() - regDate.getDate();

  // Als de verjaardag dit jaar nog niet is geweest, trek 1 af
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  return Math.max(age, 0);
}

/**
 * Bereken de leeftijd van een voertuig in maanden (voor fijnmazige berekening).
 *
 * @param firstRegistrationDate - Datum eerste registratie (ISO string: YYYY-MM-DD)
 * @returns Leeftijd in maanden
 */
export function calculateVehicleAgeInMonths(firstRegistrationDate: string): number {
  const regDate = new Date(firstRegistrationDate);
  const now = new Date();

  if (isNaN(regDate.getTime())) {
    throw new Error(`Ongeldige datum: ${firstRegistrationDate}`);
  }

  const yearDiff = now.getFullYear() - regDate.getFullYear();
  const monthDiff = now.getMonth() - regDate.getMonth();
  const dayDiff = now.getDate() - regDate.getDate();

  let totalMonths = yearDiff * 12 + monthDiff;
  if (dayDiff < 0) {
    totalMonths--;
  }

  return Math.max(totalMonths, 0);
}

/**
 * Bereken de bruto catalogusprijs exclusief BPM.
 * Nuttig voor het bepalen van de taxatieratio.
 */
export function getCatalogPriceExclBPM(catalogPrice: number, bpmNew: number): number {
  return Math.max(catalogPrice - bpmNew, 0);
}

/**
 * Schat de BPM bij nieuw op basis van CO2-uitstoot (vereenvoudigd).
 * Dit is een benadering; werkelijke BPM hangt af van het exacte tarief
 * op moment van eerste toelating.
 *
 * Tarieven zijn indicatief voor 2024/2025.
 */
export function estimateBPMFromCO2(co2GramPerKm: number): number {
  if (co2GramPerKm <= 0) return 0; // Elektrisch

  // Vereenvoudigde berekening gebaseerd op 2024 tarieven
  let bpm = 0;

  // Schijf 1: 1-79 g/km
  if (co2GramPerKm > 0) {
    const bracket1 = Math.min(co2GramPerKm, 79);
    bpm += bracket1 * 6;
  }
  // Schijf 2: 80-106 g/km
  if (co2GramPerKm > 79) {
    const bracket2 = Math.min(co2GramPerKm - 79, 27);
    bpm += bracket2 * 70;
  }
  // Schijf 3: 107-155 g/km
  if (co2GramPerKm > 106) {
    const bracket3 = Math.min(co2GramPerKm - 106, 49);
    bpm += bracket3 * 154;
  }
  // Schijf 4: 156-170 g/km
  if (co2GramPerKm > 155) {
    const bracket4 = Math.min(co2GramPerKm - 155, 15);
    bpm += bracket4 * 204;
  }
  // Schijf 5: >170 g/km
  if (co2GramPerKm > 170) {
    const bracket5 = co2GramPerKm - 170;
    bpm += bracket5 * 547;
  }

  return Math.round(bpm);
}
