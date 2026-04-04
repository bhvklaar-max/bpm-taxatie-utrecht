// =============================================================================
// Vehicle Knowledge Base - Uitgebreide voertuigdatabase voor BPM taxaties
// 200+ voertuigen met realistische Nederlandse marktprijzen
// =============================================================================

export interface VehicleKnowledge {
  make: string;
  model: string;
  yearFrom: number;
  yearTo: number;
  fuelType: 'benzine' | 'diesel' | 'elektrisch' | 'hybride' | 'plug-in hybride';
  bodyType: 'sedan' | 'hatchback' | 'suv' | 'station' | 'coupe' | 'cabrio' | 'mpv' | 'bus' | 'pick-up';
  engineCC?: number;
  powerHP?: number;
  catalogPrice: number;
  currentMarketValue: number;
  retailValue: number;
  bpmNew: number;
  co2Emission?: number;
  weight?: number;
  transmission: 'handgeschakeld' | 'automaat';
}

export const vehicleKnowledgeBase: VehicleKnowledge[] = [
  // ===========================================================================
  // BMW
  // ===========================================================================
  // 1-serie
  { make: 'BMW', model: '118i', yearFrom: 2018, yearTo: 2020, fuelType: 'benzine', bodyType: 'hatchback', engineCC: 1499, powerHP: 140, catalogPrice: 34900, currentMarketValue: 15500, retailValue: 18000, bpmNew: 6200, co2Emission: 131, weight: 1345, transmission: 'handgeschakeld' },
  { make: 'BMW', model: '118i', yearFrom: 2020, yearTo: 2023, fuelType: 'benzine', bodyType: 'hatchback', engineCC: 1499, powerHP: 140, catalogPrice: 37900, currentMarketValue: 21000, retailValue: 24500, bpmNew: 6800, co2Emission: 126, weight: 1395, transmission: 'automaat' },
  { make: 'BMW', model: '120i', yearFrom: 2023, yearTo: 2025, fuelType: 'benzine', bodyType: 'hatchback', engineCC: 1998, powerHP: 178, catalogPrice: 42900, currentMarketValue: 32000, retailValue: 36000, bpmNew: 8200, co2Emission: 142, weight: 1430, transmission: 'automaat' },
  { make: 'BMW', model: '116d', yearFrom: 2018, yearTo: 2021, fuelType: 'diesel', bodyType: 'hatchback', engineCC: 1496, powerHP: 116, catalogPrice: 33500, currentMarketValue: 14000, retailValue: 16500, bpmNew: 5900, co2Emission: 109, weight: 1395, transmission: 'handgeschakeld' },
  // 2-serie
  { make: 'BMW', model: '218i Gran Coupe', yearFrom: 2020, yearTo: 2023, fuelType: 'benzine', bodyType: 'sedan', engineCC: 1499, powerHP: 140, catalogPrice: 39900, currentMarketValue: 22000, retailValue: 25500, bpmNew: 7100, co2Emission: 130, weight: 1395, transmission: 'automaat' },
  { make: 'BMW', model: '220i Gran Coupe', yearFrom: 2023, yearTo: 2025, fuelType: 'benzine', bodyType: 'sedan', engineCC: 1998, powerHP: 178, catalogPrice: 44900, currentMarketValue: 33000, retailValue: 37500, bpmNew: 8500, co2Emission: 140, weight: 1440, transmission: 'automaat' },
  { make: 'BMW', model: '220d Gran Coupe', yearFrom: 2020, yearTo: 2023, fuelType: 'diesel', bodyType: 'sedan', engineCC: 1995, powerHP: 190, catalogPrice: 44500, currentMarketValue: 24000, retailValue: 28000, bpmNew: 8100, co2Emission: 118, weight: 1490, transmission: 'automaat' },
  // 3-serie
  { make: 'BMW', model: '318i', yearFrom: 2018, yearTo: 2021, fuelType: 'benzine', bodyType: 'sedan', engineCC: 1998, powerHP: 156, catalogPrice: 42900, currentMarketValue: 19000, retailValue: 22500, bpmNew: 7800, co2Emission: 139, weight: 1470, transmission: 'automaat' },
  { make: 'BMW', model: '318i', yearFrom: 2021, yearTo: 2025, fuelType: 'benzine', bodyType: 'sedan', engineCC: 1998, powerHP: 156, catalogPrice: 45900, currentMarketValue: 28000, retailValue: 32000, bpmNew: 8400, co2Emission: 137, weight: 1490, transmission: 'automaat' },
  { make: 'BMW', model: '320i', yearFrom: 2018, yearTo: 2021, fuelType: 'benzine', bodyType: 'sedan', engineCC: 1998, powerHP: 184, catalogPrice: 47500, currentMarketValue: 21000, retailValue: 24500, bpmNew: 8800, co2Emission: 144, weight: 1500, transmission: 'automaat' },
  { make: 'BMW', model: '320i', yearFrom: 2021, yearTo: 2025, fuelType: 'benzine', bodyType: 'sedan', engineCC: 1998, powerHP: 184, catalogPrice: 49900, currentMarketValue: 28000, retailValue: 32000, bpmNew: 9800, co2Emission: 142, weight: 1510, transmission: 'automaat' },
  { make: 'BMW', model: '320d', yearFrom: 2018, yearTo: 2021, fuelType: 'diesel', bodyType: 'sedan', engineCC: 1995, powerHP: 190, catalogPrice: 49900, currentMarketValue: 20000, retailValue: 23500, bpmNew: 9200, co2Emission: 118, weight: 1560, transmission: 'automaat' },
  { make: 'BMW', model: '320d', yearFrom: 2021, yearTo: 2025, fuelType: 'diesel', bodyType: 'sedan', engineCC: 1995, powerHP: 190, catalogPrice: 52500, currentMarketValue: 29000, retailValue: 33500, bpmNew: 9600, co2Emission: 116, weight: 1580, transmission: 'automaat' },
  { make: 'BMW', model: '330e', yearFrom: 2020, yearTo: 2025, fuelType: 'plug-in hybride', bodyType: 'sedan', engineCC: 1998, powerHP: 292, catalogPrice: 58900, currentMarketValue: 32000, retailValue: 37000, bpmNew: 4200, co2Emission: 37, weight: 1815, transmission: 'automaat' },
  // 4-serie
  { make: 'BMW', model: '420i Gran Coupe', yearFrom: 2021, yearTo: 2025, fuelType: 'benzine', bodyType: 'coupe', engineCC: 1998, powerHP: 184, catalogPrice: 52900, currentMarketValue: 31000, retailValue: 35500, bpmNew: 10200, co2Emission: 148, weight: 1555, transmission: 'automaat' },
  { make: 'BMW', model: '420d Gran Coupe', yearFrom: 2021, yearTo: 2025, fuelType: 'diesel', bodyType: 'coupe', engineCC: 1995, powerHP: 190, catalogPrice: 55900, currentMarketValue: 33000, retailValue: 38000, bpmNew: 10400, co2Emission: 122, weight: 1620, transmission: 'automaat' },
  // 5-serie
  { make: 'BMW', model: '520i', yearFrom: 2018, yearTo: 2023, fuelType: 'benzine', bodyType: 'sedan', engineCC: 1998, powerHP: 184, catalogPrice: 58900, currentMarketValue: 26000, retailValue: 30000, bpmNew: 11200, co2Emission: 150, weight: 1600, transmission: 'automaat' },
  { make: 'BMW', model: '520i', yearFrom: 2023, yearTo: 2025, fuelType: 'benzine', bodyType: 'sedan', engineCC: 1998, powerHP: 208, catalogPrice: 62900, currentMarketValue: 46000, retailValue: 52000, bpmNew: 12100, co2Emission: 148, weight: 1710, transmission: 'automaat' },
  { make: 'BMW', model: '520d', yearFrom: 2018, yearTo: 2023, fuelType: 'diesel', bodyType: 'sedan', engineCC: 1995, powerHP: 190, catalogPrice: 59900, currentMarketValue: 24000, retailValue: 28000, bpmNew: 10800, co2Emission: 122, weight: 1655, transmission: 'automaat' },
  { make: 'BMW', model: '530e', yearFrom: 2020, yearTo: 2025, fuelType: 'plug-in hybride', bodyType: 'sedan', engineCC: 1998, powerHP: 292, catalogPrice: 67900, currentMarketValue: 34000, retailValue: 39500, bpmNew: 5100, co2Emission: 38, weight: 1960, transmission: 'automaat' },
  // 7-serie
  { make: 'BMW', model: '740i', yearFrom: 2019, yearTo: 2023, fuelType: 'benzine', bodyType: 'sedan', engineCC: 2998, powerHP: 340, catalogPrice: 105900, currentMarketValue: 48000, retailValue: 55000, bpmNew: 22500, co2Emission: 178, weight: 1880, transmission: 'automaat' },
  { make: 'BMW', model: '740d', yearFrom: 2019, yearTo: 2023, fuelType: 'diesel', bodyType: 'sedan', engineCC: 2993, powerHP: 340, catalogPrice: 109900, currentMarketValue: 45000, retailValue: 52000, bpmNew: 20800, co2Emission: 155, weight: 1960, transmission: 'automaat' },
  // X1
  { make: 'BMW', model: 'X1 sDrive18i', yearFrom: 2018, yearTo: 2022, fuelType: 'benzine', bodyType: 'suv', engineCC: 1499, powerHP: 140, catalogPrice: 41900, currentMarketValue: 18500, retailValue: 21500, bpmNew: 7500, co2Emission: 143, weight: 1490, transmission: 'automaat' },
  { make: 'BMW', model: 'X1 sDrive18i', yearFrom: 2022, yearTo: 2025, fuelType: 'benzine', bodyType: 'suv', engineCC: 1499, powerHP: 136, catalogPrice: 45900, currentMarketValue: 30000, retailValue: 34500, bpmNew: 8300, co2Emission: 145, weight: 1585, transmission: 'automaat' },
  { make: 'BMW', model: 'X1 xDrive25e', yearFrom: 2020, yearTo: 2025, fuelType: 'plug-in hybride', bodyType: 'suv', engineCC: 1499, powerHP: 245, catalogPrice: 49900, currentMarketValue: 26000, retailValue: 30000, bpmNew: 3600, co2Emission: 35, weight: 1795, transmission: 'automaat' },
  // X3
  { make: 'BMW', model: 'X3 xDrive20i', yearFrom: 2018, yearTo: 2022, fuelType: 'benzine', bodyType: 'suv', engineCC: 1998, powerHP: 184, catalogPrice: 56900, currentMarketValue: 27000, retailValue: 31000, bpmNew: 10600, co2Emission: 162, weight: 1710, transmission: 'automaat' },
  { make: 'BMW', model: 'X3 xDrive20i', yearFrom: 2022, yearTo: 2025, fuelType: 'benzine', bodyType: 'suv', engineCC: 1998, powerHP: 184, catalogPrice: 59900, currentMarketValue: 39000, retailValue: 44500, bpmNew: 11200, co2Emission: 158, weight: 1740, transmission: 'automaat' },
  { make: 'BMW', model: 'X3 xDrive20d', yearFrom: 2018, yearTo: 2022, fuelType: 'diesel', bodyType: 'suv', engineCC: 1995, powerHP: 190, catalogPrice: 59500, currentMarketValue: 28000, retailValue: 32500, bpmNew: 10900, co2Emission: 135, weight: 1780, transmission: 'automaat' },
  { make: 'BMW', model: 'X3 xDrive30e', yearFrom: 2020, yearTo: 2025, fuelType: 'plug-in hybride', bodyType: 'suv', engineCC: 1998, powerHP: 292, catalogPrice: 66900, currentMarketValue: 33000, retailValue: 38000, bpmNew: 4800, co2Emission: 39, weight: 2060, transmission: 'automaat' },
  // X5
  { make: 'BMW', model: 'X5 xDrive40i', yearFrom: 2018, yearTo: 2023, fuelType: 'benzine', bodyType: 'suv', engineCC: 2998, powerHP: 340, catalogPrice: 89900, currentMarketValue: 45000, retailValue: 52000, bpmNew: 19500, co2Emission: 195, weight: 2120, transmission: 'automaat' },
  { make: 'BMW', model: 'X5 xDrive30d', yearFrom: 2018, yearTo: 2023, fuelType: 'diesel', bodyType: 'suv', engineCC: 2993, powerHP: 286, catalogPrice: 85900, currentMarketValue: 42000, retailValue: 48500, bpmNew: 18200, co2Emission: 162, weight: 2170, transmission: 'automaat' },
  { make: 'BMW', model: 'X5 xDrive45e', yearFrom: 2019, yearTo: 2025, fuelType: 'plug-in hybride', bodyType: 'suv', engineCC: 2998, powerHP: 394, catalogPrice: 95900, currentMarketValue: 48000, retailValue: 55000, bpmNew: 7200, co2Emission: 44, weight: 2510, transmission: 'automaat' },
  // X6
  { make: 'BMW', model: 'X6 xDrive40i', yearFrom: 2019, yearTo: 2025, fuelType: 'benzine', bodyType: 'suv', engineCC: 2998, powerHP: 340, catalogPrice: 99900, currentMarketValue: 52000, retailValue: 59000, bpmNew: 21500, co2Emission: 198, weight: 2190, transmission: 'automaat' },

  // ===========================================================================
  // MERCEDES-BENZ
  // ===========================================================================
  // A-Klasse
  { make: 'Mercedes-Benz', model: 'A 180', yearFrom: 2018, yearTo: 2022, fuelType: 'benzine', bodyType: 'hatchback', engineCC: 1332, powerHP: 136, catalogPrice: 35900, currentMarketValue: 17000, retailValue: 20000, bpmNew: 6400, co2Emission: 130, weight: 1375, transmission: 'automaat' },
  { make: 'Mercedes-Benz', model: 'A 180', yearFrom: 2022, yearTo: 2025, fuelType: 'benzine', bodyType: 'hatchback', engineCC: 1332, powerHP: 136, catalogPrice: 38900, currentMarketValue: 24000, retailValue: 28000, bpmNew: 7100, co2Emission: 128, weight: 1395, transmission: 'automaat' },
  { make: 'Mercedes-Benz', model: 'A 200', yearFrom: 2018, yearTo: 2025, fuelType: 'benzine', bodyType: 'hatchback', engineCC: 1332, powerHP: 163, catalogPrice: 40900, currentMarketValue: 22000, retailValue: 25500, bpmNew: 7500, co2Emission: 135, weight: 1395, transmission: 'automaat' },
  { make: 'Mercedes-Benz', model: 'A 180d', yearFrom: 2018, yearTo: 2025, fuelType: 'diesel', bodyType: 'hatchback', engineCC: 1461, powerHP: 116, catalogPrice: 37500, currentMarketValue: 18000, retailValue: 21000, bpmNew: 6200, co2Emission: 108, weight: 1410, transmission: 'automaat' },
  // B-Klasse
  { make: 'Mercedes-Benz', model: 'B 180', yearFrom: 2018, yearTo: 2025, fuelType: 'benzine', bodyType: 'mpv', engineCC: 1332, powerHP: 136, catalogPrice: 38500, currentMarketValue: 18500, retailValue: 21500, bpmNew: 6800, co2Emission: 134, weight: 1415, transmission: 'automaat' },
  { make: 'Mercedes-Benz', model: 'B 200', yearFrom: 2018, yearTo: 2025, fuelType: 'benzine', bodyType: 'mpv', engineCC: 1332, powerHP: 163, catalogPrice: 41900, currentMarketValue: 21000, retailValue: 24500, bpmNew: 7400, co2Emission: 138, weight: 1430, transmission: 'automaat' },
  // C-Klasse
  { make: 'Mercedes-Benz', model: 'C 180', yearFrom: 2018, yearTo: 2021, fuelType: 'benzine', bodyType: 'sedan', engineCC: 1497, powerHP: 156, catalogPrice: 44900, currentMarketValue: 19500, retailValue: 22500, bpmNew: 8100, co2Emission: 141, weight: 1455, transmission: 'automaat' },
  { make: 'Mercedes-Benz', model: 'C 180', yearFrom: 2021, yearTo: 2025, fuelType: 'benzine', bodyType: 'sedan', engineCC: 1496, powerHP: 170, catalogPrice: 48900, currentMarketValue: 30000, retailValue: 34500, bpmNew: 9100, co2Emission: 143, weight: 1520, transmission: 'automaat' },
  { make: 'Mercedes-Benz', model: 'C 200', yearFrom: 2018, yearTo: 2021, fuelType: 'benzine', bodyType: 'sedan', engineCC: 1497, powerHP: 184, catalogPrice: 48500, currentMarketValue: 21000, retailValue: 24500, bpmNew: 8900, co2Emission: 147, weight: 1470, transmission: 'automaat' },
  { make: 'Mercedes-Benz', model: 'C 200', yearFrom: 2021, yearTo: 2025, fuelType: 'benzine', bodyType: 'sedan', engineCC: 1496, powerHP: 204, catalogPrice: 52500, currentMarketValue: 33000, retailValue: 38000, bpmNew: 9800, co2Emission: 145, weight: 1540, transmission: 'automaat' },
  { make: 'Mercedes-Benz', model: 'C 220d', yearFrom: 2018, yearTo: 2021, fuelType: 'diesel', bodyType: 'sedan', engineCC: 1950, powerHP: 194, catalogPrice: 50900, currentMarketValue: 22000, retailValue: 25500, bpmNew: 9400, co2Emission: 120, weight: 1540, transmission: 'automaat' },
  { make: 'Mercedes-Benz', model: 'C 220d', yearFrom: 2021, yearTo: 2025, fuelType: 'diesel', bodyType: 'sedan', engineCC: 1993, powerHP: 200, catalogPrice: 55900, currentMarketValue: 35000, retailValue: 40000, bpmNew: 10200, co2Emission: 118, weight: 1595, transmission: 'automaat' },
  { make: 'Mercedes-Benz', model: 'C 300e', yearFrom: 2021, yearTo: 2025, fuelType: 'plug-in hybride', bodyType: 'sedan', engineCC: 1999, powerHP: 313, catalogPrice: 59900, currentMarketValue: 32000, retailValue: 37000, bpmNew: 4100, co2Emission: 33, weight: 1870, transmission: 'automaat' },
  // E-Klasse
  { make: 'Mercedes-Benz', model: 'E 200', yearFrom: 2018, yearTo: 2023, fuelType: 'benzine', bodyType: 'sedan', engineCC: 1991, powerHP: 197, catalogPrice: 62900, currentMarketValue: 28000, retailValue: 32500, bpmNew: 11800, co2Emission: 153, weight: 1610, transmission: 'automaat' },
  { make: 'Mercedes-Benz', model: 'E 200', yearFrom: 2023, yearTo: 2025, fuelType: 'benzine', bodyType: 'sedan', engineCC: 1999, powerHP: 204, catalogPrice: 65900, currentMarketValue: 48000, retailValue: 54000, bpmNew: 12500, co2Emission: 150, weight: 1770, transmission: 'automaat' },
  { make: 'Mercedes-Benz', model: 'E 220d', yearFrom: 2018, yearTo: 2023, fuelType: 'diesel', bodyType: 'sedan', engineCC: 1950, powerHP: 194, catalogPrice: 65500, currentMarketValue: 30000, retailValue: 34500, bpmNew: 11400, co2Emission: 126, weight: 1680, transmission: 'automaat' },
  { make: 'Mercedes-Benz', model: 'E 300e', yearFrom: 2020, yearTo: 2025, fuelType: 'plug-in hybride', bodyType: 'sedan', engineCC: 1991, powerHP: 320, catalogPrice: 72900, currentMarketValue: 35000, retailValue: 40500, bpmNew: 5500, co2Emission: 40, weight: 2020, transmission: 'automaat' },
  // S-Klasse
  { make: 'Mercedes-Benz', model: 'S 350d', yearFrom: 2018, yearTo: 2025, fuelType: 'diesel', bodyType: 'sedan', engineCC: 2925, powerHP: 286, catalogPrice: 115900, currentMarketValue: 52000, retailValue: 60000, bpmNew: 24500, co2Emission: 158, weight: 2050, transmission: 'automaat' },
  { make: 'Mercedes-Benz', model: 'S 500', yearFrom: 2021, yearTo: 2025, fuelType: 'benzine', bodyType: 'sedan', engineCC: 2999, powerHP: 435, catalogPrice: 139900, currentMarketValue: 82000, retailValue: 92000, bpmNew: 32000, co2Emission: 195, weight: 2110, transmission: 'automaat' },
  // GLA
  { make: 'Mercedes-Benz', model: 'GLA 200', yearFrom: 2018, yearTo: 2025, fuelType: 'benzine', bodyType: 'suv', engineCC: 1332, powerHP: 163, catalogPrice: 44900, currentMarketValue: 23000, retailValue: 26500, bpmNew: 8200, co2Emission: 140, weight: 1465, transmission: 'automaat' },
  { make: 'Mercedes-Benz', model: 'GLA 250e', yearFrom: 2020, yearTo: 2025, fuelType: 'plug-in hybride', bodyType: 'suv', engineCC: 1332, powerHP: 218, catalogPrice: 49900, currentMarketValue: 25000, retailValue: 29000, bpmNew: 3500, co2Emission: 34, weight: 1770, transmission: 'automaat' },
  // GLC
  { make: 'Mercedes-Benz', model: 'GLC 200', yearFrom: 2018, yearTo: 2023, fuelType: 'benzine', bodyType: 'suv', engineCC: 1991, powerHP: 197, catalogPrice: 58900, currentMarketValue: 29000, retailValue: 33500, bpmNew: 10900, co2Emission: 168, weight: 1760, transmission: 'automaat' },
  { make: 'Mercedes-Benz', model: 'GLC 200', yearFrom: 2023, yearTo: 2025, fuelType: 'benzine', bodyType: 'suv', engineCC: 1999, powerHP: 204, catalogPrice: 62900, currentMarketValue: 46000, retailValue: 52000, bpmNew: 11800, co2Emission: 165, weight: 1830, transmission: 'automaat' },
  { make: 'Mercedes-Benz', model: 'GLC 220d', yearFrom: 2018, yearTo: 2025, fuelType: 'diesel', bodyType: 'suv', engineCC: 1950, powerHP: 194, catalogPrice: 62500, currentMarketValue: 31000, retailValue: 36000, bpmNew: 11200, co2Emission: 140, weight: 1835, transmission: 'automaat' },
  { make: 'Mercedes-Benz', model: 'GLC 300e', yearFrom: 2020, yearTo: 2025, fuelType: 'plug-in hybride', bodyType: 'suv', engineCC: 1999, powerHP: 313, catalogPrice: 69900, currentMarketValue: 35000, retailValue: 40000, bpmNew: 5200, co2Emission: 38, weight: 2120, transmission: 'automaat' },
  // GLE
  { make: 'Mercedes-Benz', model: 'GLE 300d', yearFrom: 2019, yearTo: 2025, fuelType: 'diesel', bodyType: 'suv', engineCC: 1950, powerHP: 272, catalogPrice: 82900, currentMarketValue: 42000, retailValue: 48000, bpmNew: 17500, co2Emission: 155, weight: 2180, transmission: 'automaat' },
  { make: 'Mercedes-Benz', model: 'GLE 350de', yearFrom: 2020, yearTo: 2025, fuelType: 'plug-in hybride', bodyType: 'suv', engineCC: 1950, powerHP: 320, catalogPrice: 89900, currentMarketValue: 46000, retailValue: 53000, bpmNew: 6800, co2Emission: 42, weight: 2560, transmission: 'automaat' },
  // GLS
  { make: 'Mercedes-Benz', model: 'GLS 400d', yearFrom: 2019, yearTo: 2025, fuelType: 'diesel', bodyType: 'suv', engineCC: 2925, powerHP: 330, catalogPrice: 119900, currentMarketValue: 62000, retailValue: 70000, bpmNew: 26500, co2Emission: 185, weight: 2545, transmission: 'automaat' },

  // ===========================================================================
  // AUDI
  // ===========================================================================
  // A1
  { make: 'Audi', model: 'A1 Sportback 25 TFSI', yearFrom: 2018, yearTo: 2025, fuelType: 'benzine', bodyType: 'hatchback', engineCC: 999, powerHP: 95, catalogPrice: 28900, currentMarketValue: 14000, retailValue: 16500, bpmNew: 4800, co2Emission: 114, weight: 1160, transmission: 'handgeschakeld' },
  { make: 'Audi', model: 'A1 Sportback 30 TFSI', yearFrom: 2018, yearTo: 2025, fuelType: 'benzine', bodyType: 'hatchback', engineCC: 999, powerHP: 110, catalogPrice: 31500, currentMarketValue: 16000, retailValue: 18500, bpmNew: 5400, co2Emission: 119, weight: 1180, transmission: 'automaat' },
  // A3
  { make: 'Audi', model: 'A3 Sportback 30 TFSI', yearFrom: 2018, yearTo: 2020, fuelType: 'benzine', bodyType: 'hatchback', engineCC: 1498, powerHP: 150, catalogPrice: 35500, currentMarketValue: 16000, retailValue: 18500, bpmNew: 6200, co2Emission: 126, weight: 1300, transmission: 'automaat' },
  { make: 'Audi', model: 'A3 Sportback 30 TFSI', yearFrom: 2020, yearTo: 2025, fuelType: 'benzine', bodyType: 'hatchback', engineCC: 1498, powerHP: 150, catalogPrice: 38900, currentMarketValue: 23000, retailValue: 26500, bpmNew: 7000, co2Emission: 124, weight: 1340, transmission: 'automaat' },
  { make: 'Audi', model: 'A3 Sportback 35 TDI', yearFrom: 2018, yearTo: 2025, fuelType: 'diesel', bodyType: 'hatchback', engineCC: 1968, powerHP: 150, catalogPrice: 40500, currentMarketValue: 21000, retailValue: 24500, bpmNew: 7200, co2Emission: 112, weight: 1390, transmission: 'automaat' },
  { make: 'Audi', model: 'A3 Sportback 40 TFSI e', yearFrom: 2020, yearTo: 2025, fuelType: 'plug-in hybride', bodyType: 'hatchback', engineCC: 1395, powerHP: 204, catalogPrice: 44900, currentMarketValue: 22000, retailValue: 25500, bpmNew: 3100, co2Emission: 30, weight: 1590, transmission: 'automaat' },
  // A4
  { make: 'Audi', model: 'A4 Sedan 35 TFSI', yearFrom: 2018, yearTo: 2023, fuelType: 'benzine', bodyType: 'sedan', engineCC: 1498, powerHP: 150, catalogPrice: 44500, currentMarketValue: 20000, retailValue: 23000, bpmNew: 8000, co2Emission: 134, weight: 1440, transmission: 'automaat' },
  { make: 'Audi', model: 'A4 Avant 35 TFSI', yearFrom: 2018, yearTo: 2023, fuelType: 'benzine', bodyType: 'station', engineCC: 1498, powerHP: 150, catalogPrice: 48500, currentMarketValue: 23000, retailValue: 26500, bpmNew: 8700, co2Emission: 138, weight: 1510, transmission: 'automaat' },
  { make: 'Audi', model: 'A4 Avant 35 TDI', yearFrom: 2018, yearTo: 2023, fuelType: 'diesel', bodyType: 'station', engineCC: 1968, powerHP: 163, catalogPrice: 50900, currentMarketValue: 24000, retailValue: 27500, bpmNew: 9200, co2Emission: 118, weight: 1565, transmission: 'automaat' },
  // A5
  { make: 'Audi', model: 'A5 Sportback 35 TFSI', yearFrom: 2018, yearTo: 2025, fuelType: 'benzine', bodyType: 'coupe', engineCC: 1498, powerHP: 150, catalogPrice: 49900, currentMarketValue: 24000, retailValue: 27500, bpmNew: 9100, co2Emission: 136, weight: 1470, transmission: 'automaat' },
  { make: 'Audi', model: 'A5 Sportback 40 TDI', yearFrom: 2018, yearTo: 2025, fuelType: 'diesel', bodyType: 'coupe', engineCC: 1968, powerHP: 204, catalogPrice: 54900, currentMarketValue: 27000, retailValue: 31000, bpmNew: 10000, co2Emission: 125, weight: 1570, transmission: 'automaat' },
  // A6
  { make: 'Audi', model: 'A6 Sedan 45 TFSI', yearFrom: 2018, yearTo: 2025, fuelType: 'benzine', bodyType: 'sedan', engineCC: 1984, powerHP: 245, catalogPrice: 62900, currentMarketValue: 30000, retailValue: 34500, bpmNew: 11800, co2Emission: 155, weight: 1660, transmission: 'automaat' },
  { make: 'Audi', model: 'A6 Avant 40 TDI', yearFrom: 2018, yearTo: 2025, fuelType: 'diesel', bodyType: 'station', engineCC: 1968, powerHP: 204, catalogPrice: 61500, currentMarketValue: 29000, retailValue: 33000, bpmNew: 11200, co2Emission: 130, weight: 1730, transmission: 'automaat' },
  { make: 'Audi', model: 'A6 50 TFSI e', yearFrom: 2020, yearTo: 2025, fuelType: 'plug-in hybride', bodyType: 'sedan', engineCC: 1984, powerHP: 299, catalogPrice: 72900, currentMarketValue: 35000, retailValue: 40000, bpmNew: 5400, co2Emission: 36, weight: 2050, transmission: 'automaat' },
  // A8
  { make: 'Audi', model: 'A8 50 TDI', yearFrom: 2018, yearTo: 2025, fuelType: 'diesel', bodyType: 'sedan', engineCC: 2967, powerHP: 286, catalogPrice: 105900, currentMarketValue: 45000, retailValue: 52000, bpmNew: 22000, co2Emission: 162, weight: 2020, transmission: 'automaat' },
  { make: 'Audi', model: 'A8 60 TFSI e', yearFrom: 2020, yearTo: 2025, fuelType: 'plug-in hybride', bodyType: 'sedan', engineCC: 2995, powerHP: 462, catalogPrice: 125900, currentMarketValue: 55000, retailValue: 63000, bpmNew: 8500, co2Emission: 45, weight: 2370, transmission: 'automaat' },
  // Q2
  { make: 'Audi', model: 'Q2 30 TFSI', yearFrom: 2018, yearTo: 2025, fuelType: 'benzine', bodyType: 'suv', engineCC: 999, powerHP: 110, catalogPrice: 34900, currentMarketValue: 17000, retailValue: 19500, bpmNew: 6100, co2Emission: 125, weight: 1290, transmission: 'automaat' },
  { make: 'Audi', model: 'Q2 35 TFSI', yearFrom: 2018, yearTo: 2025, fuelType: 'benzine', bodyType: 'suv', engineCC: 1498, powerHP: 150, catalogPrice: 38500, currentMarketValue: 20000, retailValue: 23000, bpmNew: 6900, co2Emission: 133, weight: 1350, transmission: 'automaat' },
  // Q3
  { make: 'Audi', model: 'Q3 35 TFSI', yearFrom: 2018, yearTo: 2025, fuelType: 'benzine', bodyType: 'suv', engineCC: 1498, powerHP: 150, catalogPrice: 44500, currentMarketValue: 23000, retailValue: 26500, bpmNew: 8000, co2Emission: 142, weight: 1510, transmission: 'automaat' },
  { make: 'Audi', model: 'Q3 35 TDI', yearFrom: 2018, yearTo: 2025, fuelType: 'diesel', bodyType: 'suv', engineCC: 1968, powerHP: 150, catalogPrice: 47500, currentMarketValue: 25000, retailValue: 28500, bpmNew: 8600, co2Emission: 128, weight: 1580, transmission: 'automaat' },
  // Q5
  { make: 'Audi', model: 'Q5 40 TFSI', yearFrom: 2018, yearTo: 2025, fuelType: 'benzine', bodyType: 'suv', engineCC: 1984, powerHP: 204, catalogPrice: 59900, currentMarketValue: 30000, retailValue: 34500, bpmNew: 11000, co2Emission: 160, weight: 1770, transmission: 'automaat' },
  { make: 'Audi', model: 'Q5 40 TDI', yearFrom: 2018, yearTo: 2025, fuelType: 'diesel', bodyType: 'suv', engineCC: 1968, powerHP: 204, catalogPrice: 62500, currentMarketValue: 32000, retailValue: 36500, bpmNew: 11400, co2Emission: 142, weight: 1830, transmission: 'automaat' },
  { make: 'Audi', model: 'Q5 55 TFSI e', yearFrom: 2020, yearTo: 2025, fuelType: 'plug-in hybride', bodyType: 'suv', engineCC: 1984, powerHP: 367, catalogPrice: 69900, currentMarketValue: 34000, retailValue: 39000, bpmNew: 5100, co2Emission: 38, weight: 2155, transmission: 'automaat' },
  // Q7
  { make: 'Audi', model: 'Q7 45 TDI', yearFrom: 2018, yearTo: 2025, fuelType: 'diesel', bodyType: 'suv', engineCC: 2967, powerHP: 231, catalogPrice: 82900, currentMarketValue: 38000, retailValue: 44000, bpmNew: 17200, co2Emission: 165, weight: 2200, transmission: 'automaat' },
  { make: 'Audi', model: 'Q7 55 TFSI e', yearFrom: 2020, yearTo: 2025, fuelType: 'plug-in hybride', bodyType: 'suv', engineCC: 2995, powerHP: 381, catalogPrice: 92900, currentMarketValue: 45000, retailValue: 52000, bpmNew: 7000, co2Emission: 44, weight: 2570, transmission: 'automaat' },

  // ===========================================================================
  // VOLKSWAGEN
  // ===========================================================================
  // Golf
  { make: 'Volkswagen', model: 'Golf 1.0 TSI', yearFrom: 2018, yearTo: 2020, fuelType: 'benzine', bodyType: 'hatchback', engineCC: 999, powerHP: 110, catalogPrice: 29900, currentMarketValue: 13000, retailValue: 15500, bpmNew: 5100, co2Emission: 117, weight: 1250, transmission: 'handgeschakeld' },
  { make: 'Volkswagen', model: 'Golf 1.5 TSI', yearFrom: 2020, yearTo: 2025, fuelType: 'benzine', bodyType: 'hatchback', engineCC: 1498, powerHP: 150, catalogPrice: 38990, currentMarketValue: 22000, retailValue: 25500, bpmNew: 7200, co2Emission: 125, weight: 1335, transmission: 'automaat' },
  { make: 'Volkswagen', model: 'Golf 2.0 TDI', yearFrom: 2018, yearTo: 2020, fuelType: 'diesel', bodyType: 'hatchback', engineCC: 1968, powerHP: 150, catalogPrice: 34500, currentMarketValue: 14500, retailValue: 17000, bpmNew: 5800, co2Emission: 113, weight: 1380, transmission: 'automaat' },
  { make: 'Volkswagen', model: 'Golf 2.0 TDI', yearFrom: 2020, yearTo: 2025, fuelType: 'diesel', bodyType: 'hatchback', engineCC: 1968, powerHP: 150, catalogPrice: 41500, currentMarketValue: 22000, retailValue: 25500, bpmNew: 7500, co2Emission: 110, weight: 1405, transmission: 'automaat' },
  { make: 'Volkswagen', model: 'Golf GTE', yearFrom: 2020, yearTo: 2025, fuelType: 'plug-in hybride', bodyType: 'hatchback', engineCC: 1395, powerHP: 245, catalogPrice: 44900, currentMarketValue: 22000, retailValue: 25500, bpmNew: 3100, co2Emission: 28, weight: 1575, transmission: 'automaat' },
  // Polo
  { make: 'Volkswagen', model: 'Polo 1.0 TSI', yearFrom: 2018, yearTo: 2022, fuelType: 'benzine', bodyType: 'hatchback', engineCC: 999, powerHP: 95, catalogPrice: 22900, currentMarketValue: 10500, retailValue: 12500, bpmNew: 3800, co2Emission: 113, weight: 1100, transmission: 'handgeschakeld' },
  { make: 'Volkswagen', model: 'Polo 1.0 TSI', yearFrom: 2022, yearTo: 2025, fuelType: 'benzine', bodyType: 'hatchback', engineCC: 999, powerHP: 95, catalogPrice: 26900, currentMarketValue: 17000, retailValue: 19500, bpmNew: 4500, co2Emission: 115, weight: 1130, transmission: 'automaat' },
  // Passat
  { make: 'Volkswagen', model: 'Passat Variant 1.5 TSI', yearFrom: 2018, yearTo: 2023, fuelType: 'benzine', bodyType: 'station', engineCC: 1498, powerHP: 150, catalogPrice: 41900, currentMarketValue: 19000, retailValue: 22000, bpmNew: 7600, co2Emission: 132, weight: 1455, transmission: 'automaat' },
  { make: 'Volkswagen', model: 'Passat Variant 2.0 TDI', yearFrom: 2018, yearTo: 2023, fuelType: 'diesel', bodyType: 'station', engineCC: 1968, powerHP: 150, catalogPrice: 44900, currentMarketValue: 20000, retailValue: 23000, bpmNew: 8100, co2Emission: 118, weight: 1520, transmission: 'automaat' },
  { make: 'Volkswagen', model: 'Passat Variant GTE', yearFrom: 2019, yearTo: 2023, fuelType: 'plug-in hybride', bodyType: 'station', engineCC: 1395, powerHP: 218, catalogPrice: 48900, currentMarketValue: 21000, retailValue: 24500, bpmNew: 3400, co2Emission: 32, weight: 1720, transmission: 'automaat' },
  // Tiguan
  { make: 'Volkswagen', model: 'Tiguan 1.5 TSI', yearFrom: 2018, yearTo: 2025, fuelType: 'benzine', bodyType: 'suv', engineCC: 1498, powerHP: 150, catalogPrice: 42900, currentMarketValue: 22000, retailValue: 25500, bpmNew: 7800, co2Emission: 145, weight: 1500, transmission: 'automaat' },
  { make: 'Volkswagen', model: 'Tiguan 2.0 TDI', yearFrom: 2018, yearTo: 2025, fuelType: 'diesel', bodyType: 'suv', engineCC: 1968, powerHP: 150, catalogPrice: 46500, currentMarketValue: 24000, retailValue: 27500, bpmNew: 8400, co2Emission: 132, weight: 1570, transmission: 'automaat' },
  { make: 'Volkswagen', model: 'Tiguan eHybrid', yearFrom: 2021, yearTo: 2025, fuelType: 'plug-in hybride', bodyType: 'suv', engineCC: 1395, powerHP: 245, catalogPrice: 49900, currentMarketValue: 26000, retailValue: 30000, bpmNew: 3500, co2Emission: 33, weight: 1720, transmission: 'automaat' },
  // T-Roc
  { make: 'Volkswagen', model: 'T-Roc 1.0 TSI', yearFrom: 2018, yearTo: 2025, fuelType: 'benzine', bodyType: 'suv', engineCC: 999, powerHP: 110, catalogPrice: 33500, currentMarketValue: 17000, retailValue: 19500, bpmNew: 5800, co2Emission: 126, weight: 1300, transmission: 'handgeschakeld' },
  { make: 'Volkswagen', model: 'T-Roc 1.5 TSI', yearFrom: 2018, yearTo: 2025, fuelType: 'benzine', bodyType: 'suv', engineCC: 1498, powerHP: 150, catalogPrice: 37900, currentMarketValue: 20000, retailValue: 23000, bpmNew: 6800, co2Emission: 133, weight: 1365, transmission: 'automaat' },
  // ID.3
  { make: 'Volkswagen', model: 'ID.3 Pro', yearFrom: 2020, yearTo: 2025, fuelType: 'elektrisch', bodyType: 'hatchback', engineCC: 0, powerHP: 204, catalogPrice: 39900, currentMarketValue: 20000, retailValue: 23000, bpmNew: 0, co2Emission: 0, weight: 1805, transmission: 'automaat' },
  { make: 'Volkswagen', model: 'ID.3 Pro S', yearFrom: 2020, yearTo: 2025, fuelType: 'elektrisch', bodyType: 'hatchback', engineCC: 0, powerHP: 204, catalogPrice: 44900, currentMarketValue: 22000, retailValue: 25500, bpmNew: 0, co2Emission: 0, weight: 1890, transmission: 'automaat' },
  // ID.4
  { make: 'Volkswagen', model: 'ID.4 Pro', yearFrom: 2021, yearTo: 2025, fuelType: 'elektrisch', bodyType: 'suv', engineCC: 0, powerHP: 204, catalogPrice: 44900, currentMarketValue: 24000, retailValue: 27500, bpmNew: 0, co2Emission: 0, weight: 2058, transmission: 'automaat' },
  { make: 'Volkswagen', model: 'ID.4 GTX', yearFrom: 2021, yearTo: 2025, fuelType: 'elektrisch', bodyType: 'suv', engineCC: 0, powerHP: 299, catalogPrice: 52900, currentMarketValue: 28000, retailValue: 32000, bpmNew: 0, co2Emission: 0, weight: 2174, transmission: 'automaat' },
  // Transporter
  { make: 'Volkswagen', model: 'Transporter 2.0 TDI', yearFrom: 2018, yearTo: 2025, fuelType: 'diesel', bodyType: 'bus', engineCC: 1968, powerHP: 150, catalogPrice: 42900, currentMarketValue: 22000, retailValue: 25500, bpmNew: 0, co2Emission: 185, weight: 1960, transmission: 'handgeschakeld' },

  // ===========================================================================
  // TOYOTA
  // ===========================================================================
  { make: 'Toyota', model: 'Yaris 1.5 Hybrid', yearFrom: 2018, yearTo: 2020, fuelType: 'hybride', bodyType: 'hatchback', engineCC: 1497, powerHP: 100, catalogPrice: 22500, currentMarketValue: 11000, retailValue: 13000, bpmNew: 3200, co2Emission: 85, weight: 1065, transmission: 'automaat' },
  { make: 'Toyota', model: 'Yaris 1.5 Hybrid', yearFrom: 2020, yearTo: 2025, fuelType: 'hybride', bodyType: 'hatchback', engineCC: 1490, powerHP: 116, catalogPrice: 26500, currentMarketValue: 17000, retailValue: 19500, bpmNew: 3800, co2Emission: 87, weight: 1085, transmission: 'automaat' },
  { make: 'Toyota', model: 'Corolla 1.8 Hybrid', yearFrom: 2018, yearTo: 2022, fuelType: 'hybride', bodyType: 'hatchback', engineCC: 1798, powerHP: 122, catalogPrice: 29900, currentMarketValue: 16500, retailValue: 19000, bpmNew: 4200, co2Emission: 92, weight: 1320, transmission: 'automaat' },
  { make: 'Toyota', model: 'Corolla 1.8 Hybrid', yearFrom: 2022, yearTo: 2025, fuelType: 'hybride', bodyType: 'hatchback', engineCC: 1798, powerHP: 140, catalogPrice: 32900, currentMarketValue: 22000, retailValue: 25000, bpmNew: 4800, co2Emission: 95, weight: 1340, transmission: 'automaat' },
  { make: 'Toyota', model: 'Corolla Touring Sports 1.8 Hybrid', yearFrom: 2018, yearTo: 2025, fuelType: 'hybride', bodyType: 'station', engineCC: 1798, powerHP: 140, catalogPrice: 35500, currentMarketValue: 20000, retailValue: 23000, bpmNew: 5200, co2Emission: 98, weight: 1395, transmission: 'automaat' },
  { make: 'Toyota', model: 'RAV4 2.5 Hybrid', yearFrom: 2018, yearTo: 2022, fuelType: 'hybride', bodyType: 'suv', engineCC: 2487, powerHP: 218, catalogPrice: 42900, currentMarketValue: 24000, retailValue: 27500, bpmNew: 6200, co2Emission: 115, weight: 1640, transmission: 'automaat' },
  { make: 'Toyota', model: 'RAV4 2.5 Hybrid', yearFrom: 2022, yearTo: 2025, fuelType: 'hybride', bodyType: 'suv', engineCC: 2487, powerHP: 222, catalogPrice: 45900, currentMarketValue: 32000, retailValue: 36500, bpmNew: 6800, co2Emission: 112, weight: 1660, transmission: 'automaat' },
  { make: 'Toyota', model: 'RAV4 2.5 Plug-in Hybrid', yearFrom: 2021, yearTo: 2025, fuelType: 'plug-in hybride', bodyType: 'suv', engineCC: 2487, powerHP: 306, catalogPrice: 52900, currentMarketValue: 33000, retailValue: 38000, bpmNew: 3800, co2Emission: 30, weight: 1850, transmission: 'automaat' },
  { make: 'Toyota', model: 'C-HR 1.8 Hybrid', yearFrom: 2018, yearTo: 2023, fuelType: 'hybride', bodyType: 'suv', engineCC: 1798, powerHP: 122, catalogPrice: 33900, currentMarketValue: 17000, retailValue: 19500, bpmNew: 4800, co2Emission: 98, weight: 1380, transmission: 'automaat' },
  { make: 'Toyota', model: 'C-HR 2.0 Hybrid', yearFrom: 2023, yearTo: 2025, fuelType: 'hybride', bodyType: 'suv', engineCC: 1987, powerHP: 197, catalogPrice: 39900, currentMarketValue: 29000, retailValue: 33000, bpmNew: 5900, co2Emission: 108, weight: 1460, transmission: 'automaat' },
  { make: 'Toyota', model: 'Land Cruiser 2.8 D-4D', yearFrom: 2018, yearTo: 2025, fuelType: 'diesel', bodyType: 'suv', engineCC: 2755, powerHP: 204, catalogPrice: 78900, currentMarketValue: 45000, retailValue: 52000, bpmNew: 16500, co2Emission: 210, weight: 2310, transmission: 'automaat' },
  { make: 'Toyota', model: 'Hilux 2.4 D-4D', yearFrom: 2018, yearTo: 2025, fuelType: 'diesel', bodyType: 'pick-up', engineCC: 2393, powerHP: 150, catalogPrice: 39900, currentMarketValue: 24000, retailValue: 27500, bpmNew: 0, co2Emission: 225, weight: 1950, transmission: 'automaat' },

  // ===========================================================================
  // VOLVO
  // ===========================================================================
  { make: 'Volvo', model: 'XC40 T3', yearFrom: 2018, yearTo: 2022, fuelType: 'benzine', bodyType: 'suv', engineCC: 1477, powerHP: 163, catalogPrice: 39900, currentMarketValue: 20000, retailValue: 23000, bpmNew: 7200, co2Emission: 144, weight: 1548, transmission: 'automaat' },
  { make: 'Volvo', model: 'XC40 B4', yearFrom: 2022, yearTo: 2025, fuelType: 'benzine', bodyType: 'suv', engineCC: 1969, powerHP: 197, catalogPrice: 44900, currentMarketValue: 30000, retailValue: 34500, bpmNew: 8200, co2Emission: 148, weight: 1620, transmission: 'automaat' },
  { make: 'Volvo', model: 'XC40 Recharge', yearFrom: 2020, yearTo: 2025, fuelType: 'elektrisch', bodyType: 'suv', engineCC: 0, powerHP: 231, catalogPrice: 49900, currentMarketValue: 25000, retailValue: 29000, bpmNew: 0, co2Emission: 0, weight: 2032, transmission: 'automaat' },
  { make: 'Volvo', model: 'XC40 T5 Recharge', yearFrom: 2020, yearTo: 2025, fuelType: 'plug-in hybride', bodyType: 'suv', engineCC: 1477, powerHP: 262, catalogPrice: 48900, currentMarketValue: 24000, retailValue: 28000, bpmNew: 3400, co2Emission: 35, weight: 1838, transmission: 'automaat' },
  { make: 'Volvo', model: 'XC60 B5', yearFrom: 2018, yearTo: 2022, fuelType: 'benzine', bodyType: 'suv', engineCC: 1969, powerHP: 250, catalogPrice: 55900, currentMarketValue: 28000, retailValue: 32500, bpmNew: 10400, co2Emission: 162, weight: 1845, transmission: 'automaat' },
  { make: 'Volvo', model: 'XC60 B5 AWD', yearFrom: 2022, yearTo: 2025, fuelType: 'benzine', bodyType: 'suv', engineCC: 1969, powerHP: 250, catalogPrice: 59900, currentMarketValue: 38000, retailValue: 43500, bpmNew: 11200, co2Emission: 158, weight: 1890, transmission: 'automaat' },
  { make: 'Volvo', model: 'XC60 T6 Recharge', yearFrom: 2020, yearTo: 2025, fuelType: 'plug-in hybride', bodyType: 'suv', engineCC: 1969, powerHP: 350, catalogPrice: 67900, currentMarketValue: 34000, retailValue: 39000, bpmNew: 5000, co2Emission: 40, weight: 2125, transmission: 'automaat' },
  { make: 'Volvo', model: 'XC90 B5 AWD', yearFrom: 2018, yearTo: 2025, fuelType: 'benzine', bodyType: 'suv', engineCC: 1969, powerHP: 250, catalogPrice: 75900, currentMarketValue: 38000, retailValue: 43500, bpmNew: 15500, co2Emission: 175, weight: 2055, transmission: 'automaat' },
  { make: 'Volvo', model: 'XC90 T8 Recharge', yearFrom: 2019, yearTo: 2025, fuelType: 'plug-in hybride', bodyType: 'suv', engineCC: 1969, powerHP: 455, catalogPrice: 85900, currentMarketValue: 42000, retailValue: 48000, bpmNew: 6500, co2Emission: 42, weight: 2331, transmission: 'automaat' },
  { make: 'Volvo', model: 'V60 B4', yearFrom: 2018, yearTo: 2025, fuelType: 'benzine', bodyType: 'station', engineCC: 1969, powerHP: 197, catalogPrice: 48900, currentMarketValue: 25000, retailValue: 29000, bpmNew: 8800, co2Emission: 148, weight: 1665, transmission: 'automaat' },
  { make: 'Volvo', model: 'V60 T6 Recharge', yearFrom: 2020, yearTo: 2025, fuelType: 'plug-in hybride', bodyType: 'station', engineCC: 1969, powerHP: 350, catalogPrice: 59900, currentMarketValue: 29000, retailValue: 33500, bpmNew: 4200, co2Emission: 36, weight: 2020, transmission: 'automaat' },
  { make: 'Volvo', model: 'V90 B5 AWD', yearFrom: 2018, yearTo: 2025, fuelType: 'benzine', bodyType: 'station', engineCC: 1969, powerHP: 250, catalogPrice: 62900, currentMarketValue: 30000, retailValue: 34500, bpmNew: 11800, co2Emission: 162, weight: 1830, transmission: 'automaat' },
  { make: 'Volvo', model: 'V90 T6 Recharge', yearFrom: 2020, yearTo: 2025, fuelType: 'plug-in hybride', bodyType: 'station', engineCC: 1969, powerHP: 350, catalogPrice: 69900, currentMarketValue: 33000, retailValue: 38000, bpmNew: 5200, co2Emission: 38, weight: 2100, transmission: 'automaat' },
  { make: 'Volvo', model: 'S60 B4', yearFrom: 2018, yearTo: 2025, fuelType: 'benzine', bodyType: 'sedan', engineCC: 1969, powerHP: 197, catalogPrice: 46900, currentMarketValue: 23000, retailValue: 26500, bpmNew: 8400, co2Emission: 145, weight: 1630, transmission: 'automaat' },
  { make: 'Volvo', model: 'S60 T8 Recharge', yearFrom: 2020, yearTo: 2025, fuelType: 'plug-in hybride', bodyType: 'sedan', engineCC: 1969, powerHP: 390, catalogPrice: 62900, currentMarketValue: 30000, retailValue: 34500, bpmNew: 4500, co2Emission: 37, weight: 2035, transmission: 'automaat' },

  // ===========================================================================
  // FORD
  // ===========================================================================
  { make: 'Ford', model: 'Focus 1.0 EcoBoost', yearFrom: 2018, yearTo: 2022, fuelType: 'benzine', bodyType: 'hatchback', engineCC: 999, powerHP: 125, catalogPrice: 28900, currentMarketValue: 12000, retailValue: 14000, bpmNew: 4800, co2Emission: 120, weight: 1290, transmission: 'handgeschakeld' },
  { make: 'Ford', model: 'Focus 1.0 EcoBoost', yearFrom: 2022, yearTo: 2025, fuelType: 'benzine', bodyType: 'hatchback', engineCC: 999, powerHP: 125, catalogPrice: 32500, currentMarketValue: 19000, retailValue: 22000, bpmNew: 5600, co2Emission: 118, weight: 1310, transmission: 'automaat' },
  { make: 'Ford', model: 'Focus 1.5 EcoBlue', yearFrom: 2018, yearTo: 2025, fuelType: 'diesel', bodyType: 'hatchback', engineCC: 1499, powerHP: 120, catalogPrice: 32500, currentMarketValue: 14500, retailValue: 17000, bpmNew: 5400, co2Emission: 105, weight: 1370, transmission: 'automaat' },
  { make: 'Ford', model: 'Fiesta 1.0 EcoBoost', yearFrom: 2018, yearTo: 2023, fuelType: 'benzine', bodyType: 'hatchback', engineCC: 999, powerHP: 100, catalogPrice: 24900, currentMarketValue: 11000, retailValue: 13000, bpmNew: 4100, co2Emission: 112, weight: 1110, transmission: 'handgeschakeld' },
  { make: 'Ford', model: 'Kuga 1.5 EcoBoost', yearFrom: 2018, yearTo: 2020, fuelType: 'benzine', bodyType: 'suv', engineCC: 1499, powerHP: 150, catalogPrice: 35500, currentMarketValue: 14500, retailValue: 17000, bpmNew: 6100, co2Emission: 148, weight: 1549, transmission: 'handgeschakeld' },
  { make: 'Ford', model: 'Kuga 1.5 EcoBoost', yearFrom: 2020, yearTo: 2025, fuelType: 'benzine', bodyType: 'suv', engineCC: 1498, powerHP: 150, catalogPrice: 39900, currentMarketValue: 21000, retailValue: 24000, bpmNew: 7100, co2Emission: 145, weight: 1569, transmission: 'automaat' },
  { make: 'Ford', model: 'Kuga 2.5 PHEV', yearFrom: 2020, yearTo: 2025, fuelType: 'plug-in hybride', bodyType: 'suv', engineCC: 2488, powerHP: 225, catalogPrice: 42900, currentMarketValue: 22000, retailValue: 25500, bpmNew: 3000, co2Emission: 32, weight: 1802, transmission: 'automaat' },
  { make: 'Ford', model: 'Puma 1.0 EcoBoost', yearFrom: 2020, yearTo: 2025, fuelType: 'benzine', bodyType: 'suv', engineCC: 999, powerHP: 125, catalogPrice: 31500, currentMarketValue: 18000, retailValue: 20500, bpmNew: 5400, co2Emission: 120, weight: 1275, transmission: 'automaat' },
  { make: 'Ford', model: 'Transit Custom 2.0 EcoBlue', yearFrom: 2018, yearTo: 2025, fuelType: 'diesel', bodyType: 'bus', engineCC: 1996, powerHP: 170, catalogPrice: 44900, currentMarketValue: 22000, retailValue: 25500, bpmNew: 0, co2Emission: 210, weight: 2050, transmission: 'automaat' },

  // ===========================================================================
  // TESLA
  // ===========================================================================
  { make: 'Tesla', model: 'Model 3 Standard Range', yearFrom: 2019, yearTo: 2023, fuelType: 'elektrisch', bodyType: 'sedan', engineCC: 0, powerHP: 283, catalogPrice: 44990, currentMarketValue: 24000, retailValue: 27500, bpmNew: 0, co2Emission: 0, weight: 1760, transmission: 'automaat' },
  { make: 'Tesla', model: 'Model 3 Long Range', yearFrom: 2019, yearTo: 2025, fuelType: 'elektrisch', bodyType: 'sedan', engineCC: 0, powerHP: 441, catalogPrice: 52990, currentMarketValue: 30000, retailValue: 34500, bpmNew: 0, co2Emission: 0, weight: 1830, transmission: 'automaat' },
  { make: 'Tesla', model: 'Model 3 Performance', yearFrom: 2019, yearTo: 2025, fuelType: 'elektrisch', bodyType: 'sedan', engineCC: 0, powerHP: 513, catalogPrice: 58990, currentMarketValue: 34000, retailValue: 39000, bpmNew: 0, co2Emission: 0, weight: 1860, transmission: 'automaat' },
  { make: 'Tesla', model: 'Model Y Long Range', yearFrom: 2022, yearTo: 2025, fuelType: 'elektrisch', bodyType: 'suv', engineCC: 0, powerHP: 441, catalogPrice: 55990, currentMarketValue: 35000, retailValue: 40000, bpmNew: 0, co2Emission: 0, weight: 1979, transmission: 'automaat' },
  { make: 'Tesla', model: 'Model Y Performance', yearFrom: 2022, yearTo: 2025, fuelType: 'elektrisch', bodyType: 'suv', engineCC: 0, powerHP: 513, catalogPrice: 62990, currentMarketValue: 38000, retailValue: 43500, bpmNew: 0, co2Emission: 0, weight: 2003, transmission: 'automaat' },
  { make: 'Tesla', model: 'Model S Long Range', yearFrom: 2019, yearTo: 2025, fuelType: 'elektrisch', bodyType: 'sedan', engineCC: 0, powerHP: 670, catalogPrice: 99990, currentMarketValue: 52000, retailValue: 60000, bpmNew: 0, co2Emission: 0, weight: 2162, transmission: 'automaat' },
  { make: 'Tesla', model: 'Model S Plaid', yearFrom: 2021, yearTo: 2025, fuelType: 'elektrisch', bodyType: 'sedan', engineCC: 0, powerHP: 1020, catalogPrice: 129990, currentMarketValue: 72000, retailValue: 82000, bpmNew: 0, co2Emission: 0, weight: 2187, transmission: 'automaat' },
  { make: 'Tesla', model: 'Model X Long Range', yearFrom: 2019, yearTo: 2025, fuelType: 'elektrisch', bodyType: 'suv', engineCC: 0, powerHP: 670, catalogPrice: 109990, currentMarketValue: 58000, retailValue: 66000, bpmNew: 0, co2Emission: 0, weight: 2352, transmission: 'automaat' },
  { make: 'Tesla', model: 'Model X Plaid', yearFrom: 2021, yearTo: 2025, fuelType: 'elektrisch', bodyType: 'suv', engineCC: 0, powerHP: 1020, catalogPrice: 139990, currentMarketValue: 78000, retailValue: 88000, bpmNew: 0, co2Emission: 0, weight: 2390, transmission: 'automaat' },

  // ===========================================================================
  // PEUGEOT
  // ===========================================================================
  { make: 'Peugeot', model: '208 1.2 PureTech', yearFrom: 2018, yearTo: 2020, fuelType: 'benzine', bodyType: 'hatchback', engineCC: 1199, powerHP: 100, catalogPrice: 22500, currentMarketValue: 9500, retailValue: 11500, bpmNew: 3600, co2Emission: 116, weight: 1090, transmission: 'handgeschakeld' },
  { make: 'Peugeot', model: '208 1.2 PureTech', yearFrom: 2020, yearTo: 2025, fuelType: 'benzine', bodyType: 'hatchback', engineCC: 1199, powerHP: 100, catalogPrice: 26500, currentMarketValue: 14500, retailValue: 17000, bpmNew: 4300, co2Emission: 114, weight: 1120, transmission: 'automaat' },
  { make: 'Peugeot', model: 'e-208', yearFrom: 2020, yearTo: 2025, fuelType: 'elektrisch', bodyType: 'hatchback', engineCC: 0, powerHP: 136, catalogPrice: 35900, currentMarketValue: 17000, retailValue: 19500, bpmNew: 0, co2Emission: 0, weight: 1455, transmission: 'automaat' },
  { make: 'Peugeot', model: '308 1.2 PureTech', yearFrom: 2018, yearTo: 2021, fuelType: 'benzine', bodyType: 'hatchback', engineCC: 1199, powerHP: 130, catalogPrice: 29900, currentMarketValue: 12000, retailValue: 14000, bpmNew: 5000, co2Emission: 122, weight: 1230, transmission: 'automaat' },
  { make: 'Peugeot', model: '308 1.2 PureTech', yearFrom: 2021, yearTo: 2025, fuelType: 'benzine', bodyType: 'hatchback', engineCC: 1199, powerHP: 130, catalogPrice: 33900, currentMarketValue: 20000, retailValue: 23000, bpmNew: 5800, co2Emission: 120, weight: 1280, transmission: 'automaat' },
  { make: 'Peugeot', model: '308 Hybrid 225', yearFrom: 2021, yearTo: 2025, fuelType: 'plug-in hybride', bodyType: 'hatchback', engineCC: 1598, powerHP: 225, catalogPrice: 42900, currentMarketValue: 22000, retailValue: 25500, bpmNew: 2900, co2Emission: 28, weight: 1590, transmission: 'automaat' },
  { make: 'Peugeot', model: '2008 1.2 PureTech', yearFrom: 2018, yearTo: 2025, fuelType: 'benzine', bodyType: 'suv', engineCC: 1199, powerHP: 130, catalogPrice: 31500, currentMarketValue: 15500, retailValue: 18000, bpmNew: 5300, co2Emission: 125, weight: 1230, transmission: 'automaat' },
  { make: 'Peugeot', model: 'e-2008', yearFrom: 2020, yearTo: 2025, fuelType: 'elektrisch', bodyType: 'suv', engineCC: 0, powerHP: 136, catalogPrice: 39900, currentMarketValue: 19000, retailValue: 22000, bpmNew: 0, co2Emission: 0, weight: 1548, transmission: 'automaat' },
  { make: 'Peugeot', model: '3008 1.2 PureTech', yearFrom: 2018, yearTo: 2025, fuelType: 'benzine', bodyType: 'suv', engineCC: 1199, powerHP: 130, catalogPrice: 38500, currentMarketValue: 19000, retailValue: 22000, bpmNew: 6800, co2Emission: 135, weight: 1410, transmission: 'automaat' },
  { make: 'Peugeot', model: '3008 Hybrid 225', yearFrom: 2020, yearTo: 2025, fuelType: 'plug-in hybride', bodyType: 'suv', engineCC: 1598, powerHP: 225, catalogPrice: 46900, currentMarketValue: 24000, retailValue: 27500, bpmNew: 3200, co2Emission: 32, weight: 1730, transmission: 'automaat' },
  { make: 'Peugeot', model: '5008 1.2 PureTech', yearFrom: 2018, yearTo: 2025, fuelType: 'benzine', bodyType: 'suv', engineCC: 1199, powerHP: 130, catalogPrice: 41500, currentMarketValue: 20000, retailValue: 23000, bpmNew: 7400, co2Emission: 140, weight: 1495, transmission: 'automaat' },

  // ===========================================================================
  // RENAULT
  // ===========================================================================
  { make: 'Renault', model: 'Clio 1.0 TCe', yearFrom: 2018, yearTo: 2020, fuelType: 'benzine', bodyType: 'hatchback', engineCC: 999, powerHP: 100, catalogPrice: 21500, currentMarketValue: 9000, retailValue: 10500, bpmNew: 3400, co2Emission: 115, weight: 1090, transmission: 'handgeschakeld' },
  { make: 'Renault', model: 'Clio 1.0 TCe', yearFrom: 2020, yearTo: 2025, fuelType: 'benzine', bodyType: 'hatchback', engineCC: 999, powerHP: 100, catalogPrice: 24900, currentMarketValue: 13500, retailValue: 15500, bpmNew: 4100, co2Emission: 112, weight: 1110, transmission: 'automaat' },
  { make: 'Renault', model: 'Clio E-Tech Hybrid', yearFrom: 2020, yearTo: 2025, fuelType: 'hybride', bodyType: 'hatchback', engineCC: 1598, powerHP: 145, catalogPrice: 28500, currentMarketValue: 15000, retailValue: 17500, bpmNew: 4200, co2Emission: 94, weight: 1210, transmission: 'automaat' },
  { make: 'Renault', model: 'Captur 1.0 TCe', yearFrom: 2018, yearTo: 2020, fuelType: 'benzine', bodyType: 'suv', engineCC: 999, powerHP: 100, catalogPrice: 25500, currentMarketValue: 10500, retailValue: 12500, bpmNew: 4200, co2Emission: 124, weight: 1200, transmission: 'handgeschakeld' },
  { make: 'Renault', model: 'Captur 1.3 TCe', yearFrom: 2020, yearTo: 2025, fuelType: 'benzine', bodyType: 'suv', engineCC: 1332, powerHP: 140, catalogPrice: 31500, currentMarketValue: 17000, retailValue: 19500, bpmNew: 5400, co2Emission: 130, weight: 1290, transmission: 'automaat' },
  { make: 'Renault', model: 'Captur E-Tech Plug-in', yearFrom: 2020, yearTo: 2025, fuelType: 'plug-in hybride', bodyType: 'suv', engineCC: 1598, powerHP: 160, catalogPrice: 35900, currentMarketValue: 17000, retailValue: 19500, bpmNew: 2500, co2Emission: 30, weight: 1490, transmission: 'automaat' },
  { make: 'Renault', model: 'Megane 1.3 TCe', yearFrom: 2018, yearTo: 2023, fuelType: 'benzine', bodyType: 'hatchback', engineCC: 1332, powerHP: 140, catalogPrice: 30500, currentMarketValue: 13500, retailValue: 15500, bpmNew: 5100, co2Emission: 128, weight: 1325, transmission: 'automaat' },
  { make: 'Renault', model: 'Megane E-Tech Electric', yearFrom: 2022, yearTo: 2025, fuelType: 'elektrisch', bodyType: 'suv', engineCC: 0, powerHP: 220, catalogPrice: 42900, currentMarketValue: 22000, retailValue: 25500, bpmNew: 0, co2Emission: 0, weight: 1636, transmission: 'automaat' },
  { make: 'Renault', model: 'Kadjar 1.3 TCe', yearFrom: 2018, yearTo: 2022, fuelType: 'benzine', bodyType: 'suv', engineCC: 1332, powerHP: 140, catalogPrice: 33500, currentMarketValue: 14500, retailValue: 17000, bpmNew: 5700, co2Emission: 135, weight: 1400, transmission: 'automaat' },
  { make: 'Renault', model: 'Arkana 1.3 TCe', yearFrom: 2021, yearTo: 2025, fuelType: 'benzine', bodyType: 'suv', engineCC: 1332, powerHP: 140, catalogPrice: 34900, currentMarketValue: 20000, retailValue: 23000, bpmNew: 6000, co2Emission: 132, weight: 1380, transmission: 'automaat' },
  { make: 'Renault', model: 'Arkana E-Tech Hybrid', yearFrom: 2021, yearTo: 2025, fuelType: 'hybride', bodyType: 'suv', engineCC: 1598, powerHP: 145, catalogPrice: 36900, currentMarketValue: 21000, retailValue: 24000, bpmNew: 5400, co2Emission: 105, weight: 1430, transmission: 'automaat' },

  // ===========================================================================
  // SKODA
  // ===========================================================================
  { make: 'Skoda', model: 'Octavia Combi 1.0 TSI', yearFrom: 2018, yearTo: 2020, fuelType: 'benzine', bodyType: 'station', engineCC: 999, powerHP: 115, catalogPrice: 28900, currentMarketValue: 12500, retailValue: 14500, bpmNew: 4800, co2Emission: 118, weight: 1300, transmission: 'handgeschakeld' },
  { make: 'Skoda', model: 'Octavia Combi 1.5 TSI', yearFrom: 2020, yearTo: 2025, fuelType: 'benzine', bodyType: 'station', engineCC: 1498, powerHP: 150, catalogPrice: 35500, currentMarketValue: 20000, retailValue: 23000, bpmNew: 6200, co2Emission: 122, weight: 1380, transmission: 'automaat' },
  { make: 'Skoda', model: 'Octavia Combi 2.0 TDI', yearFrom: 2018, yearTo: 2025, fuelType: 'diesel', bodyType: 'station', engineCC: 1968, powerHP: 150, catalogPrice: 38500, currentMarketValue: 19000, retailValue: 22000, bpmNew: 6800, co2Emission: 112, weight: 1430, transmission: 'automaat' },
  { make: 'Skoda', model: 'Octavia iV', yearFrom: 2020, yearTo: 2025, fuelType: 'plug-in hybride', bodyType: 'station', engineCC: 1395, powerHP: 204, catalogPrice: 42500, currentMarketValue: 21000, retailValue: 24000, bpmNew: 2900, co2Emission: 28, weight: 1580, transmission: 'automaat' },
  { make: 'Skoda', model: 'Superb Combi 1.5 TSI', yearFrom: 2018, yearTo: 2025, fuelType: 'benzine', bodyType: 'station', engineCC: 1498, powerHP: 150, catalogPrice: 39900, currentMarketValue: 20000, retailValue: 23000, bpmNew: 7100, co2Emission: 128, weight: 1465, transmission: 'automaat' },
  { make: 'Skoda', model: 'Superb Combi 2.0 TDI', yearFrom: 2018, yearTo: 2025, fuelType: 'diesel', bodyType: 'station', engineCC: 1968, powerHP: 150, catalogPrice: 42900, currentMarketValue: 22000, retailValue: 25000, bpmNew: 7700, co2Emission: 118, weight: 1535, transmission: 'automaat' },
  { make: 'Skoda', model: 'Superb iV', yearFrom: 2020, yearTo: 2025, fuelType: 'plug-in hybride', bodyType: 'station', engineCC: 1395, powerHP: 218, catalogPrice: 46900, currentMarketValue: 23000, retailValue: 26500, bpmNew: 3200, co2Emission: 30, weight: 1650, transmission: 'automaat' },
  { make: 'Skoda', model: 'Fabia 1.0 TSI', yearFrom: 2018, yearTo: 2022, fuelType: 'benzine', bodyType: 'hatchback', engineCC: 999, powerHP: 95, catalogPrice: 20500, currentMarketValue: 9000, retailValue: 10500, bpmNew: 3200, co2Emission: 112, weight: 1100, transmission: 'handgeschakeld' },
  { make: 'Skoda', model: 'Fabia 1.0 TSI', yearFrom: 2022, yearTo: 2025, fuelType: 'benzine', bodyType: 'hatchback', engineCC: 999, powerHP: 110, catalogPrice: 24500, currentMarketValue: 15000, retailValue: 17500, bpmNew: 4000, co2Emission: 114, weight: 1155, transmission: 'automaat' },
  { make: 'Skoda', model: 'Karoq 1.0 TSI', yearFrom: 2018, yearTo: 2025, fuelType: 'benzine', bodyType: 'suv', engineCC: 999, powerHP: 110, catalogPrice: 33500, currentMarketValue: 17000, retailValue: 19500, bpmNew: 5700, co2Emission: 128, weight: 1315, transmission: 'automaat' },
  { make: 'Skoda', model: 'Karoq 1.5 TSI', yearFrom: 2018, yearTo: 2025, fuelType: 'benzine', bodyType: 'suv', engineCC: 1498, powerHP: 150, catalogPrice: 37500, currentMarketValue: 20000, retailValue: 23000, bpmNew: 6600, co2Emission: 135, weight: 1395, transmission: 'automaat' },
  { make: 'Skoda', model: 'Kodiaq 1.5 TSI', yearFrom: 2018, yearTo: 2025, fuelType: 'benzine', bodyType: 'suv', engineCC: 1498, powerHP: 150, catalogPrice: 42500, currentMarketValue: 22000, retailValue: 25500, bpmNew: 7600, co2Emission: 142, weight: 1565, transmission: 'automaat' },
  { make: 'Skoda', model: 'Kodiaq 2.0 TDI', yearFrom: 2018, yearTo: 2025, fuelType: 'diesel', bodyType: 'suv', engineCC: 1968, powerHP: 150, catalogPrice: 45500, currentMarketValue: 24000, retailValue: 27500, bpmNew: 8200, co2Emission: 138, weight: 1635, transmission: 'automaat' },

  // ===========================================================================
  // OPEL
  // ===========================================================================
  { make: 'Opel', model: 'Corsa 1.2', yearFrom: 2018, yearTo: 2020, fuelType: 'benzine', bodyType: 'hatchback', engineCC: 1199, powerHP: 75, catalogPrice: 19900, currentMarketValue: 8500, retailValue: 10000, bpmNew: 3000, co2Emission: 118, weight: 1050, transmission: 'handgeschakeld' },
  { make: 'Opel', model: 'Corsa 1.2 Turbo', yearFrom: 2020, yearTo: 2025, fuelType: 'benzine', bodyType: 'hatchback', engineCC: 1199, powerHP: 100, catalogPrice: 24900, currentMarketValue: 13500, retailValue: 15500, bpmNew: 4000, co2Emission: 115, weight: 1120, transmission: 'automaat' },
  { make: 'Opel', model: 'Corsa-e', yearFrom: 2020, yearTo: 2025, fuelType: 'elektrisch', bodyType: 'hatchback', engineCC: 0, powerHP: 136, catalogPrice: 35900, currentMarketValue: 16500, retailValue: 19000, bpmNew: 0, co2Emission: 0, weight: 1455, transmission: 'automaat' },
  { make: 'Opel', model: 'Astra 1.2 Turbo', yearFrom: 2018, yearTo: 2022, fuelType: 'benzine', bodyType: 'hatchback', engineCC: 1199, powerHP: 130, catalogPrice: 28500, currentMarketValue: 12500, retailValue: 14500, bpmNew: 4700, co2Emission: 122, weight: 1260, transmission: 'automaat' },
  { make: 'Opel', model: 'Astra 1.2 Turbo', yearFrom: 2022, yearTo: 2025, fuelType: 'benzine', bodyType: 'hatchback', engineCC: 1199, powerHP: 130, catalogPrice: 33500, currentMarketValue: 20000, retailValue: 23000, bpmNew: 5700, co2Emission: 118, weight: 1310, transmission: 'automaat' },
  { make: 'Opel', model: 'Astra Hybrid 225', yearFrom: 2022, yearTo: 2025, fuelType: 'plug-in hybride', bodyType: 'hatchback', engineCC: 1598, powerHP: 225, catalogPrice: 42500, currentMarketValue: 22000, retailValue: 25500, bpmNew: 2900, co2Emission: 28, weight: 1560, transmission: 'automaat' },
  { make: 'Opel', model: 'Mokka 1.2 Turbo', yearFrom: 2021, yearTo: 2025, fuelType: 'benzine', bodyType: 'suv', engineCC: 1199, powerHP: 130, catalogPrice: 31500, currentMarketValue: 18000, retailValue: 20500, bpmNew: 5300, co2Emission: 125, weight: 1295, transmission: 'automaat' },
  { make: 'Opel', model: 'Mokka-e', yearFrom: 2021, yearTo: 2025, fuelType: 'elektrisch', bodyType: 'suv', engineCC: 0, powerHP: 136, catalogPrice: 39500, currentMarketValue: 19000, retailValue: 22000, bpmNew: 0, co2Emission: 0, weight: 1530, transmission: 'automaat' },
  { make: 'Opel', model: 'Grandland 1.2 Turbo', yearFrom: 2018, yearTo: 2025, fuelType: 'benzine', bodyType: 'suv', engineCC: 1199, powerHP: 130, catalogPrice: 36500, currentMarketValue: 18000, retailValue: 20500, bpmNew: 6300, co2Emission: 132, weight: 1400, transmission: 'automaat' },
  { make: 'Opel', model: 'Grandland Hybrid', yearFrom: 2020, yearTo: 2025, fuelType: 'plug-in hybride', bodyType: 'suv', engineCC: 1598, powerHP: 225, catalogPrice: 44500, currentMarketValue: 22000, retailValue: 25500, bpmNew: 3100, co2Emission: 30, weight: 1680, transmission: 'automaat' },

  // ===========================================================================
  // KIA
  // ===========================================================================
  { make: 'Kia', model: 'Ceed 1.0 T-GDi', yearFrom: 2018, yearTo: 2025, fuelType: 'benzine', bodyType: 'hatchback', engineCC: 998, powerHP: 120, catalogPrice: 28500, currentMarketValue: 13000, retailValue: 15000, bpmNew: 4700, co2Emission: 122, weight: 1280, transmission: 'handgeschakeld' },
  { make: 'Kia', model: 'Ceed 1.5 T-GDi', yearFrom: 2021, yearTo: 2025, fuelType: 'benzine', bodyType: 'hatchback', engineCC: 1482, powerHP: 160, catalogPrice: 33500, currentMarketValue: 19000, retailValue: 22000, bpmNew: 5700, co2Emission: 130, weight: 1340, transmission: 'automaat' },
  { make: 'Kia', model: 'Sportage 1.6 T-GDi', yearFrom: 2018, yearTo: 2022, fuelType: 'benzine', bodyType: 'suv', engineCC: 1591, powerHP: 177, catalogPrice: 38500, currentMarketValue: 18000, retailValue: 21000, bpmNew: 6800, co2Emission: 148, weight: 1565, transmission: 'automaat' },
  { make: 'Kia', model: 'Sportage 1.6 T-GDi HEV', yearFrom: 2022, yearTo: 2025, fuelType: 'hybride', bodyType: 'suv', engineCC: 1598, powerHP: 230, catalogPrice: 42900, currentMarketValue: 28000, retailValue: 32000, bpmNew: 6200, co2Emission: 118, weight: 1660, transmission: 'automaat' },
  { make: 'Kia', model: 'Sportage 1.6 T-GDi PHEV', yearFrom: 2022, yearTo: 2025, fuelType: 'plug-in hybride', bodyType: 'suv', engineCC: 1598, powerHP: 265, catalogPrice: 47900, currentMarketValue: 30000, retailValue: 34500, bpmNew: 3300, co2Emission: 30, weight: 1840, transmission: 'automaat' },
  { make: 'Kia', model: 'Niro 1.6 HEV', yearFrom: 2018, yearTo: 2022, fuelType: 'hybride', bodyType: 'suv', engineCC: 1580, powerHP: 141, catalogPrice: 33500, currentMarketValue: 16000, retailValue: 18500, bpmNew: 5200, co2Emission: 104, weight: 1390, transmission: 'automaat' },
  { make: 'Kia', model: 'Niro 1.6 HEV', yearFrom: 2022, yearTo: 2025, fuelType: 'hybride', bodyType: 'suv', engineCC: 1580, powerHP: 141, catalogPrice: 36500, currentMarketValue: 23000, retailValue: 26500, bpmNew: 5600, co2Emission: 100, weight: 1420, transmission: 'automaat' },
  { make: 'Kia', model: 'Niro EV', yearFrom: 2022, yearTo: 2025, fuelType: 'elektrisch', bodyType: 'suv', engineCC: 0, powerHP: 204, catalogPrice: 42900, currentMarketValue: 25000, retailValue: 28500, bpmNew: 0, co2Emission: 0, weight: 1715, transmission: 'automaat' },
  { make: 'Kia', model: 'EV6 Standard', yearFrom: 2022, yearTo: 2025, fuelType: 'elektrisch', bodyType: 'suv', engineCC: 0, powerHP: 229, catalogPrice: 47900, currentMarketValue: 28000, retailValue: 32000, bpmNew: 0, co2Emission: 0, weight: 1820, transmission: 'automaat' },
  { make: 'Kia', model: 'EV6 Long Range', yearFrom: 2022, yearTo: 2025, fuelType: 'elektrisch', bodyType: 'suv', engineCC: 0, powerHP: 325, catalogPrice: 55900, currentMarketValue: 33000, retailValue: 38000, bpmNew: 0, co2Emission: 0, weight: 1985, transmission: 'automaat' },

  // ===========================================================================
  // HYUNDAI
  // ===========================================================================
  { make: 'Hyundai', model: 'i20 1.0 T-GDi', yearFrom: 2018, yearTo: 2025, fuelType: 'benzine', bodyType: 'hatchback', engineCC: 998, powerHP: 100, catalogPrice: 23500, currentMarketValue: 11000, retailValue: 13000, bpmNew: 3800, co2Emission: 118, weight: 1095, transmission: 'handgeschakeld' },
  { make: 'Hyundai', model: 'i20 1.2', yearFrom: 2020, yearTo: 2025, fuelType: 'benzine', bodyType: 'hatchback', engineCC: 1197, powerHP: 84, catalogPrice: 21500, currentMarketValue: 12000, retailValue: 14000, bpmNew: 3300, co2Emission: 120, weight: 1080, transmission: 'handgeschakeld' },
  { make: 'Hyundai', model: 'i30 1.0 T-GDi', yearFrom: 2018, yearTo: 2025, fuelType: 'benzine', bodyType: 'hatchback', engineCC: 998, powerHP: 120, catalogPrice: 28500, currentMarketValue: 13500, retailValue: 15500, bpmNew: 4700, co2Emission: 122, weight: 1280, transmission: 'handgeschakeld' },
  { make: 'Hyundai', model: 'i30 1.5 T-GDi', yearFrom: 2021, yearTo: 2025, fuelType: 'benzine', bodyType: 'hatchback', engineCC: 1482, powerHP: 160, catalogPrice: 33500, currentMarketValue: 19000, retailValue: 22000, bpmNew: 5700, co2Emission: 130, weight: 1340, transmission: 'automaat' },
  { make: 'Hyundai', model: 'Tucson 1.6 T-GDi', yearFrom: 2018, yearTo: 2021, fuelType: 'benzine', bodyType: 'suv', engineCC: 1591, powerHP: 177, catalogPrice: 37500, currentMarketValue: 17000, retailValue: 19500, bpmNew: 6600, co2Emission: 145, weight: 1520, transmission: 'automaat' },
  { make: 'Hyundai', model: 'Tucson 1.6 T-GDi HEV', yearFrom: 2021, yearTo: 2025, fuelType: 'hybride', bodyType: 'suv', engineCC: 1598, powerHP: 230, catalogPrice: 42500, currentMarketValue: 27000, retailValue: 31000, bpmNew: 6100, co2Emission: 116, weight: 1630, transmission: 'automaat' },
  { make: 'Hyundai', model: 'Tucson 1.6 T-GDi PHEV', yearFrom: 2021, yearTo: 2025, fuelType: 'plug-in hybride', bodyType: 'suv', engineCC: 1598, powerHP: 265, catalogPrice: 46500, currentMarketValue: 28000, retailValue: 32000, bpmNew: 3200, co2Emission: 28, weight: 1810, transmission: 'automaat' },
  { make: 'Hyundai', model: 'Kona 1.0 T-GDi', yearFrom: 2018, yearTo: 2023, fuelType: 'benzine', bodyType: 'suv', engineCC: 998, powerHP: 120, catalogPrice: 28500, currentMarketValue: 13000, retailValue: 15000, bpmNew: 4700, co2Emission: 128, weight: 1245, transmission: 'automaat' },
  { make: 'Hyundai', model: 'Kona 1.6 Hybrid', yearFrom: 2023, yearTo: 2025, fuelType: 'hybride', bodyType: 'suv', engineCC: 1580, powerHP: 141, catalogPrice: 34900, currentMarketValue: 25000, retailValue: 28500, bpmNew: 5200, co2Emission: 104, weight: 1405, transmission: 'automaat' },
  { make: 'Hyundai', model: 'Kona Electric', yearFrom: 2018, yearTo: 2025, fuelType: 'elektrisch', bodyType: 'suv', engineCC: 0, powerHP: 204, catalogPrice: 39500, currentMarketValue: 20000, retailValue: 23000, bpmNew: 0, co2Emission: 0, weight: 1685, transmission: 'automaat' },
  { make: 'Hyundai', model: 'Ioniq 5 Standard', yearFrom: 2021, yearTo: 2025, fuelType: 'elektrisch', bodyType: 'suv', engineCC: 0, powerHP: 170, catalogPrice: 44900, currentMarketValue: 26000, retailValue: 30000, bpmNew: 0, co2Emission: 0, weight: 1800, transmission: 'automaat' },
  { make: 'Hyundai', model: 'Ioniq 5 Long Range', yearFrom: 2021, yearTo: 2025, fuelType: 'elektrisch', bodyType: 'suv', engineCC: 0, powerHP: 229, catalogPrice: 49900, currentMarketValue: 30000, retailValue: 34500, bpmNew: 0, co2Emission: 0, weight: 1890, transmission: 'automaat' },

  // ===========================================================================
  // FIAT
  // ===========================================================================
  { make: 'Fiat', model: '500 1.0 Hybrid', yearFrom: 2020, yearTo: 2025, fuelType: 'benzine', bodyType: 'hatchback', engineCC: 999, powerHP: 70, catalogPrice: 19500, currentMarketValue: 10500, retailValue: 12000, bpmNew: 2800, co2Emission: 108, weight: 1015, transmission: 'handgeschakeld' },
  { make: 'Fiat', model: '500 1.2', yearFrom: 2018, yearTo: 2020, fuelType: 'benzine', bodyType: 'hatchback', engineCC: 1242, powerHP: 69, catalogPrice: 16900, currentMarketValue: 7500, retailValue: 9000, bpmNew: 2400, co2Emission: 120, weight: 940, transmission: 'handgeschakeld' },
  { make: 'Fiat', model: '500e', yearFrom: 2021, yearTo: 2025, fuelType: 'elektrisch', bodyType: 'hatchback', engineCC: 0, powerHP: 118, catalogPrice: 32900, currentMarketValue: 16000, retailValue: 18500, bpmNew: 0, co2Emission: 0, weight: 1320, transmission: 'automaat' },
  { make: 'Fiat', model: '500 Cabrio 1.0 Hybrid', yearFrom: 2020, yearTo: 2025, fuelType: 'benzine', bodyType: 'cabrio', engineCC: 999, powerHP: 70, catalogPrice: 22500, currentMarketValue: 12000, retailValue: 14000, bpmNew: 3200, co2Emission: 110, weight: 1055, transmission: 'handgeschakeld' },
  { make: 'Fiat', model: 'Panda 1.0 Hybrid', yearFrom: 2020, yearTo: 2025, fuelType: 'benzine', bodyType: 'hatchback', engineCC: 999, powerHP: 70, catalogPrice: 17900, currentMarketValue: 9500, retailValue: 11000, bpmNew: 2500, co2Emission: 112, weight: 1020, transmission: 'handgeschakeld' },
  { make: 'Fiat', model: 'Panda 0.9 TwinAir', yearFrom: 2018, yearTo: 2020, fuelType: 'benzine', bodyType: 'hatchback', engineCC: 875, powerHP: 85, catalogPrice: 16500, currentMarketValue: 7000, retailValue: 8500, bpmNew: 2200, co2Emission: 114, weight: 975, transmission: 'handgeschakeld' },
  { make: 'Fiat', model: 'Tipo 1.0 Firefly', yearFrom: 2018, yearTo: 2025, fuelType: 'benzine', bodyType: 'hatchback', engineCC: 999, powerHP: 100, catalogPrice: 24500, currentMarketValue: 11000, retailValue: 13000, bpmNew: 3900, co2Emission: 118, weight: 1230, transmission: 'handgeschakeld' },
  { make: 'Fiat', model: 'Tipo Station 1.6 MultiJet', yearFrom: 2018, yearTo: 2025, fuelType: 'diesel', bodyType: 'station', engineCC: 1598, powerHP: 130, catalogPrice: 28500, currentMarketValue: 12000, retailValue: 14000, bpmNew: 4500, co2Emission: 110, weight: 1380, transmission: 'automaat' },

  // ===========================================================================
  // MAZDA
  // ===========================================================================
  { make: 'Mazda', model: 'CX-3 2.0 SkyActiv-G', yearFrom: 2018, yearTo: 2025, fuelType: 'benzine', bodyType: 'suv', engineCC: 1998, powerHP: 121, catalogPrice: 27500, currentMarketValue: 13000, retailValue: 15000, bpmNew: 4500, co2Emission: 130, weight: 1220, transmission: 'handgeschakeld' },
  { make: 'Mazda', model: 'CX-5 2.0 SkyActiv-G', yearFrom: 2018, yearTo: 2022, fuelType: 'benzine', bodyType: 'suv', engineCC: 1998, powerHP: 165, catalogPrice: 37500, currentMarketValue: 19000, retailValue: 22000, bpmNew: 6600, co2Emission: 152, weight: 1500, transmission: 'automaat' },
  { make: 'Mazda', model: 'CX-5 2.0 SkyActiv-G', yearFrom: 2022, yearTo: 2025, fuelType: 'benzine', bodyType: 'suv', engineCC: 1998, powerHP: 165, catalogPrice: 39900, currentMarketValue: 26000, retailValue: 30000, bpmNew: 7200, co2Emission: 150, weight: 1520, transmission: 'automaat' },
  { make: 'Mazda', model: 'CX-5 2.2 SkyActiv-D', yearFrom: 2018, yearTo: 2025, fuelType: 'diesel', bodyType: 'suv', engineCC: 2191, powerHP: 184, catalogPrice: 42900, currentMarketValue: 22000, retailValue: 25500, bpmNew: 7800, co2Emission: 135, weight: 1620, transmission: 'automaat' },
  { make: 'Mazda', model: 'CX-30 2.0 SkyActiv-G', yearFrom: 2019, yearTo: 2025, fuelType: 'benzine', bodyType: 'suv', engineCC: 1998, powerHP: 150, catalogPrice: 33500, currentMarketValue: 19000, retailValue: 22000, bpmNew: 5700, co2Emission: 138, weight: 1380, transmission: 'automaat' },
  { make: 'Mazda', model: 'CX-30 e-SkyActiv X', yearFrom: 2020, yearTo: 2025, fuelType: 'benzine', bodyType: 'suv', engineCC: 1998, powerHP: 186, catalogPrice: 37500, currentMarketValue: 21000, retailValue: 24000, bpmNew: 6500, co2Emission: 132, weight: 1450, transmission: 'automaat' },
  { make: 'Mazda', model: 'Mazda3 2.0 SkyActiv-G', yearFrom: 2019, yearTo: 2025, fuelType: 'benzine', bodyType: 'hatchback', engineCC: 1998, powerHP: 150, catalogPrice: 31500, currentMarketValue: 17500, retailValue: 20000, bpmNew: 5300, co2Emission: 135, weight: 1340, transmission: 'automaat' },
  { make: 'Mazda', model: 'Mazda3 e-SkyActiv X', yearFrom: 2020, yearTo: 2025, fuelType: 'benzine', bodyType: 'hatchback', engineCC: 1998, powerHP: 186, catalogPrice: 35500, currentMarketValue: 20000, retailValue: 23000, bpmNew: 6100, co2Emission: 128, weight: 1410, transmission: 'automaat' },
];

// =============================================================================
// Helper functies
// =============================================================================

/**
 * Zoek een voertuig in de knowledge base op merk, model, jaar en optioneel brandstoftype.
 * Fuzzy matching: zoekt op substring in model naam.
 */
export function findVehicle(
  make: string,
  model: string,
  year: number,
  fuelType?: string
): VehicleKnowledge | undefined {
  const makeLower = make.toLowerCase().trim();
  const modelLower = model.toLowerCase().trim();

  return vehicleKnowledgeBase.find((v) => {
    const makeMatch = v.make.toLowerCase() === makeLower;
    const modelMatch =
      v.model.toLowerCase() === modelLower ||
      v.model.toLowerCase().includes(modelLower) ||
      modelLower.includes(v.model.toLowerCase());
    const yearMatch = year >= v.yearFrom && year <= v.yearTo;
    const fuelMatch = !fuelType || v.fuelType === fuelType.toLowerCase();

    return makeMatch && modelMatch && yearMatch && fuelMatch;
  });
}

/**
 * Haal de huidige marktwaarde (handelsinkoopwaarde) op voor een voertuig.
 * Past lineaire interpolatie toe op basis van leeftijd binnen de jaarrange.
 */
export function getMarketValue(
  make: string,
  model: string,
  year: number
): number {
  const vehicle = findVehicle(make, model, year);
  if (!vehicle) return 0;

  // Pas waarde aan op basis van positie in jaarrange
  // Nieuwere jaren dichter bij retailValue, oudere dichter bij currentMarketValue
  const rangeYears = vehicle.yearTo - vehicle.yearFrom;
  if (rangeYears === 0) return vehicle.currentMarketValue;

  const positionInRange = (year - vehicle.yearFrom) / rangeYears;
  // Nieuwer = hogere waarde relatief
  const adjustmentFactor = 0.85 + positionInRange * 0.15;
  return Math.round(vehicle.currentMarketValue * adjustmentFactor / 100) * 100;
}

/**
 * Geeft alle unieke merken in de database.
 */
export function getAllMakes(): string[] {
  const makes = new Set<string>();
  vehicleKnowledgeBase.forEach((v) => makes.add(v.make));
  return Array.from(makes).sort();
}

/**
 * Geeft alle unieke modellen voor een specifiek merk.
 */
export function getModelsByMake(make: string): string[] {
  const makeLower = make.toLowerCase().trim();
  const models = new Set<string>();
  vehicleKnowledgeBase
    .filter((v) => v.make.toLowerCase() === makeLower)
    .forEach((v) => models.add(v.model));
  return Array.from(models).sort();
}
