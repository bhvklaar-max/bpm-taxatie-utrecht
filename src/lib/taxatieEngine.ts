// =============================================================================
// Taxatie Engine - Intelligente automatische taxatierapport generator
// Genereert complete BPM taxatierapporten op basis van voertuiggegevens,
// inspectieresultaten en schadebeschrijvingen.
// =============================================================================

import { findVehicle, type VehicleKnowledge } from './vehicleKnowledgeBase';
import {
  calculateBPM,
  calculateBPMWithTaxatie,
  calculateVehicleAge,
} from './bpmCalculation';

// =============================================================================
// Interfaces
// =============================================================================

export interface TaxatieInput {
  // Voertuig basis
  make: string;
  model: string;
  year: number;
  fuelType: string;
  mileage: number;
  vin?: string;
  licensePlate?: string;
  firstRegistrationDate: string;
  importCountry: string;

  // Inspectie resultaten
  exteriorCondition: 'uitstekend' | 'goed' | 'redelijk' | 'matig' | 'slecht';
  interiorCondition: 'uitstekend' | 'goed' | 'redelijk' | 'matig' | 'slecht';
  technicalCondition: 'uitstekend' | 'goed' | 'redelijk' | 'matig' | 'slecht';
  maintenanceHistory: 'volledig' | 'gedeeltelijk' | 'onbekend';

  // Schade items
  damageItems: Array<{
    location: string;
    description: string;
    severity: 'licht' | 'matig' | 'zwaar';
    estimatedCost: number;
  }>;

  // Taxateur notities
  inspectorNotes: string;
}

export interface TaxatieResult {
  // Referentie waarden
  catalogPrice: number;
  marketValue: number;
  retailValue: number;
  bpmNew: number;

  // Aftrekposten
  conditionDeduction: number;
  mileageDeduction: number;
  damageDeduction: number;
  totalDeduction: number;

  // Getaxeerde waarde
  taxatieValue: number;

  // BPM berekening
  forfaitairBPM: number;
  taxatieBPM: number;
  bpmBesparing: number;
  besparingPercentage: number;

  // Rapport metadata
  rapportNummer: string;
  datum: string;
  waarderingsgrondslag: string;

  // Extra informatie
  voertuigGegevens: {
    make: string;
    model: string;
    year: number;
    fuelType: string;
    mileage: number;
    vin?: string;
    licensePlate?: string;
    firstRegistrationDate: string;
    importCountry: string;
    vehicleAge: number;
  };
  aftrekDetails: {
    exteriorCondition: string;
    interiorCondition: string;
    technicalCondition: string;
    maintenanceHistory: string;
    conditionPercentage: number;
    mileagePercentage: number;
    aantalSchadeItems: number;
  };
}

// =============================================================================
// Conditie aftrekpercentages
// =============================================================================

const CONDITION_PERCENTAGES: Record<string, number> = {
  uitstekend: 0,
  goed: 2,
  redelijk: 5,
  matig: 10,
  slecht: 20,
};

const MAINTENANCE_PERCENTAGES: Record<string, number> = {
  volledig: 0,
  gedeeltelijk: 3,
  onbekend: 7,
};

// =============================================================================
// Gemiddelde km per jaar per brandstoftype
// =============================================================================

const AVERAGE_KM_PER_YEAR: Record<string, number> = {
  benzine: 15000,
  diesel: 25000,
  elektrisch: 12000,
  hybride: 18000,
  'plug-in hybride': 16000,
};

// =============================================================================
// Kern functies
// =============================================================================

/**
 * Bereken de conditie-aftrek op basis van exterieur, interieur, technische
 * staat en onderhoudshistorie.
 *
 * De aftrek is een gewogen gemiddelde:
 * - Exterieur: 30% (visueel, lak, carrosserie)
 * - Interieur: 20% (bekleding, dashboard, slijtage)
 * - Technisch: 35% (motor, versnellingsbak, onderstel)
 * - Onderhoud: 15% (onderhoudsboekje, APK)
 *
 * @returns Aftrekpercentage (0-20%)
 */
export function calculateConditionDeduction(
  exterior: string,
  interior: string,
  technical: string,
  maintenance: string
): number {
  const exteriorPct = CONDITION_PERCENTAGES[exterior] ?? 5;
  const interiorPct = CONDITION_PERCENTAGES[interior] ?? 5;
  const technicalPct = CONDITION_PERCENTAGES[technical] ?? 5;
  const maintenancePct = MAINTENANCE_PERCENTAGES[maintenance] ?? 3;

  // Gewogen gemiddelde
  const weightedAverage =
    exteriorPct * 0.3 +
    interiorPct * 0.2 +
    technicalPct * 0.35 +
    maintenancePct * 0.15;

  return Math.round(weightedAverage * 100) / 100;
}

/**
 * Bereken de kilometerstand-aftrek.
 *
 * Vergelijkt de werkelijke km-stand met het verwachte gemiddelde voor de
 * leeftijd en het brandstoftype van het voertuig.
 *
 * Berekening:
 * - Afwijking = (werkelijk - verwacht) / verwacht
 * - Bij meer km dan gemiddeld: aftrek stijgt progressief
 * - Bij minder km dan gemiddeld: bonus (negatieve aftrek), max -5%
 *
 * Progressieve schaal (bij meer km):
 * - 0-10% meer: 2% aftrek
 * - 10-20% meer: 5% aftrek
 * - 20-40% meer: 10% aftrek
 * - 40-60% meer: 15% aftrek
 * - >60% meer: 20% aftrek
 *
 * @returns Aftrekpercentage (-5% tot 20%)
 */
export function calculateMileageDeduction(
  mileage: number,
  vehicleAge: number,
  vehicleType: string
): number {
  const avgKmPerYear = AVERAGE_KM_PER_YEAR[vehicleType.toLowerCase()] ?? 15000;
  const expectedKm = avgKmPerYear * Math.max(vehicleAge, 0.5); // Min 0.5 jaar

  if (expectedKm <= 0) return 0;

  const deviation = (mileage - expectedKm) / expectedKm;

  if (deviation <= -0.3) {
    // 30% of meer minder km: -5% bonus (hogere waarde)
    return -5;
  } else if (deviation <= -0.15) {
    // 15-30% minder km: -3% bonus
    return -3;
  } else if (deviation <= 0) {
    // Minder km maar niet significant: -1% bonus
    return -1;
  } else if (deviation <= 0.1) {
    // 0-10% meer km: 2% aftrek
    return 2;
  } else if (deviation <= 0.2) {
    // 10-20% meer: 5% aftrek
    return 5;
  } else if (deviation <= 0.4) {
    // 20-40% meer: 10% aftrek
    return 10;
  } else if (deviation <= 0.6) {
    // 40-60% meer: 15% aftrek
    return 15;
  } else {
    // >60% meer: 20% aftrek
    return 20;
  }
}

/**
 * Genereer een uniek rapportnummer.
 * Formaat: TAX-YYYYMMDD-XXXXX (bijv. TAX-20260405-A3F7K)
 */
export function generateRapportNummer(): string {
  const now = new Date();
  const dateStr = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, '0'),
    String(now.getDate()).padStart(2, '0'),
  ].join('');

  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let random = '';
  for (let i = 0; i < 5; i++) {
    random += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return `TAX-${dateStr}-${random}`;
}

/**
 * Bereken de totale schadeaftrek op basis van individuele schade-items.
 *
 * De schadeaftrek is de som van de geschatte reparatiekosten van alle items,
 * met een correctie per ernstgraad:
 * - Licht: 100% van de geschatte kosten (bijv. kras, deuk)
 * - Matig: 110% van geschatte kosten (extra arbeid, verborgen schade)
 * - Zwaar: 125% van geschatte kosten (structurele schade, waardevermindering)
 */
function calculateDamageTotal(
  damageItems: TaxatieInput['damageItems']
): number {
  if (!damageItems || damageItems.length === 0) return 0;

  const severityMultiplier: Record<string, number> = {
    licht: 1.0,
    matig: 1.1,
    zwaar: 1.25,
  };

  return damageItems.reduce((total, item) => {
    const multiplier = severityMultiplier[item.severity] ?? 1.0;
    return total + Math.round(item.estimatedCost * multiplier);
  }, 0);
}

// =============================================================================
// Hoofdfunctie: genereer complete taxatie
// =============================================================================

/**
 * Genereert een compleet taxatierapport op basis van de invoergegevens.
 *
 * Werkwijze:
 * 1. Zoek voertuig op in knowledge base voor referentiewaarden
 * 2. Bereken aftrekposten voor conditie, kilometerstand en schade
 * 3. Bepaal de getaxeerde waarde (handelsinkoopwaarde - aftrekposten)
 * 4. Bereken forfaitaire BPM en taxatie-BPM
 * 5. Toon de besparing voor de klant
 */
export function generateTaxatie(input: TaxatieInput): TaxatieResult {
  // -------------------------------------------------------------------------
  // Stap 1: Voertuig opzoeken
  // -------------------------------------------------------------------------
  const vehicleRef: VehicleKnowledge | undefined = findVehicle(
    input.make,
    input.model,
    input.year,
    input.fuelType
  );

  // Fallback waarden als voertuig niet in database staat
  const catalogPrice = vehicleRef?.catalogPrice ?? 0;
  const marketValue = vehicleRef?.currentMarketValue ?? 0;
  const retailValue = vehicleRef?.retailValue ?? 0;
  const bpmNew = vehicleRef?.bpmNew ?? 0;

  // -------------------------------------------------------------------------
  // Stap 2: Voertuig leeftijd bepalen
  // -------------------------------------------------------------------------
  let vehicleAge: number;
  try {
    vehicleAge = calculateVehicleAge(input.firstRegistrationDate);
  } catch {
    // Fallback: bereken op basis van bouwjaar
    vehicleAge = new Date().getFullYear() - input.year;
  }

  // -------------------------------------------------------------------------
  // Stap 3: Aftrekposten berekenen
  // -------------------------------------------------------------------------

  // Conditie aftrek (percentage van marktwaarde)
  const conditionPercentage = calculateConditionDeduction(
    input.exteriorCondition,
    input.interiorCondition,
    input.technicalCondition,
    input.maintenanceHistory
  );
  const conditionDeduction = Math.round(marketValue * (conditionPercentage / 100));

  // Kilometerstand aftrek (percentage van marktwaarde)
  const mileagePercentage = calculateMileageDeduction(
    input.mileage,
    vehicleAge,
    input.fuelType
  );
  const mileageDeduction = Math.round(marketValue * (mileagePercentage / 100));

  // Schade aftrek (directe kosten)
  const damageDeduction = calculateDamageTotal(input.damageItems);

  // Totale aftrek
  const totalDeduction = conditionDeduction + mileageDeduction + damageDeduction;

  // -------------------------------------------------------------------------
  // Stap 4: Getaxeerde waarde bepalen
  // -------------------------------------------------------------------------
  // Taxatiewaarde = handelsinkoopwaarde - totale aftrekposten
  // Minimaal EUR 0
  const taxatieValue = Math.max(marketValue - totalDeduction, 0);

  // -------------------------------------------------------------------------
  // Stap 5: BPM berekeningen
  // -------------------------------------------------------------------------

  // Forfaitair (zonder taxatie)
  const forfaitairResult = calculateBPM({
    catalogPrice,
    bpmNew,
    vehicleAge,
    co2Emission: vehicleRef?.co2Emission,
  });

  // Met taxatie
  const taxatieResult = calculateBPMWithTaxatie({
    catalogPrice,
    bpmNew,
    vehicleAge,
    marketValue,
    taxatieValue,
  });

  // -------------------------------------------------------------------------
  // Stap 6: Rapport genereren
  // -------------------------------------------------------------------------
  const rapportNummer = generateRapportNummer();
  const datum = new Date().toISOString().split('T')[0];

  return {
    // Referentie waarden
    catalogPrice,
    marketValue,
    retailValue,
    bpmNew,

    // Aftrekposten
    conditionDeduction,
    mileageDeduction,
    damageDeduction,
    totalDeduction,

    // Getaxeerde waarde
    taxatieValue,

    // BPM berekening
    forfaitairBPM: forfaitairResult.forfaitairBPM,
    taxatieBPM: taxatieResult.taxatieBPM,
    bpmBesparing: taxatieResult.besparing,
    besparingPercentage: taxatieResult.besparingPercentage,

    // Rapport metadata
    rapportNummer,
    datum,
    waarderingsgrondslag: 'Handelsinkoopwaarde conform koerslijst, verminderd met '
      + 'vastgestelde aftrekposten voor conditie, kilometerstand en schade. '
      + 'Taxatie uitgevoerd conform Wet op de belasting van personenauto\'s '
      + 'en motorrijwielen 1992 (Wet BPM).',

    // Extra informatie
    voertuigGegevens: {
      make: input.make,
      model: input.model,
      year: input.year,
      fuelType: input.fuelType,
      mileage: input.mileage,
      vin: input.vin,
      licensePlate: input.licensePlate,
      firstRegistrationDate: input.firstRegistrationDate,
      importCountry: input.importCountry,
      vehicleAge,
    },
    aftrekDetails: {
      exteriorCondition: input.exteriorCondition,
      interiorCondition: input.interiorCondition,
      technicalCondition: input.technicalCondition,
      maintenanceHistory: input.maintenanceHistory,
      conditionPercentage,
      mileagePercentage,
      aantalSchadeItems: input.damageItems.length,
    },
  };
}

// =============================================================================
// Utility: snel een taxatie overzicht formatteren (voor logging/debug)
// =============================================================================

export function formatTaxatieSummary(result: TaxatieResult): string {
  const lines = [
    `╔══════════════════════════════════════════════════════════╗`,
    `║  TAXATIERAPPORT ${result.rapportNummer}`,
    `║  Datum: ${result.datum}`,
    `╠══════════════════════════════════════════════════════════╣`,
    `║  Voertuig: ${result.voertuigGegevens.make} ${result.voertuigGegevens.model} (${result.voertuigGegevens.year})`,
    `║  Brandstof: ${result.voertuigGegevens.fuelType}`,
    `║  Km-stand: ${result.voertuigGegevens.mileage.toLocaleString('nl-NL')} km`,
    `║  Leeftijd: ${result.voertuigGegevens.vehicleAge} jaar`,
    `╠══════════════════════════════════════════════════════════╣`,
    `║  WAARDEN`,
    `║  Catalogusprijs:        € ${result.catalogPrice.toLocaleString('nl-NL')}`,
    `║  Handelsinkoopwaarde:   € ${result.marketValue.toLocaleString('nl-NL')}`,
    `║  Verkoopwaarde:         € ${result.retailValue.toLocaleString('nl-NL')}`,
    `╠══════════════════════════════════════════════════════════╣`,
    `║  AFTREKPOSTEN`,
    `║  Conditie:              € ${result.conditionDeduction.toLocaleString('nl-NL')}`,
    `║  Kilometerstand:        € ${result.mileageDeduction.toLocaleString('nl-NL')}`,
    `║  Schade:                € ${result.damageDeduction.toLocaleString('nl-NL')}`,
    `║  ─────────────────────────────────`,
    `║  Totaal aftrek:         € ${result.totalDeduction.toLocaleString('nl-NL')}`,
    `║  GETAXEERDE WAARDE:     € ${result.taxatieValue.toLocaleString('nl-NL')}`,
    `╠══════════════════════════════════════════════════════════╣`,
    `║  BPM BEREKENING`,
    `║  BPM nieuw:             € ${result.bpmNew.toLocaleString('nl-NL')}`,
    `║  Forfaitair BPM:        € ${result.forfaitairBPM.toLocaleString('nl-NL')}`,
    `║  Taxatie BPM:           € ${result.taxatieBPM.toLocaleString('nl-NL')}`,
    `║  ─────────────────────────────────`,
    `║  BESPARING:             € ${result.bpmBesparing.toLocaleString('nl-NL')} (${result.besparingPercentage}%)`,
    `╚══════════════════════════════════════════════════════════╝`,
  ];

  return lines.join('\n');
}
