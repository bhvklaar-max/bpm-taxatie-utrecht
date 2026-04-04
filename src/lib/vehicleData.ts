export interface VehicleRef {
  make: string;
  model: string;
  year: number;
  fuel_type: string;
  catalogPrice: number;
  marketValue: number;
}

export const vehicleData: VehicleRef[] = [
  { make: "BMW", model: "318i Sedan", year: 2024, fuel_type: "benzine", catalogPrice: 45900, marketValue: 38500 },
  { make: "BMW", model: "320i Sedan", year: 2023, fuel_type: "benzine", catalogPrice: 49900, marketValue: 39900 },
  { make: "BMW", model: "320d Sedan", year: 2022, fuel_type: "diesel", catalogPrice: 52500, marketValue: 37500 },
  { make: "BMW", model: "330e Sedan", year: 2023, fuel_type: "hybride", catalogPrice: 58900, marketValue: 45000 },
  { make: "BMW", model: "520i Sedan", year: 2023, fuel_type: "benzine", catalogPrice: 62900, marketValue: 49500 },
  { make: "BMW", model: "520d Sedan", year: 2021, fuel_type: "diesel", catalogPrice: 59900, marketValue: 38900 },
  { make: "BMW", model: "X3 xDrive20i", year: 2023, fuel_type: "benzine", catalogPrice: 59900, marketValue: 48500 },
  { make: "BMW", model: "X3 xDrive20d", year: 2022, fuel_type: "diesel", catalogPrice: 63500, marketValue: 45000 },
  { make: "BMW", model: "X5 xDrive40i", year: 2022, fuel_type: "benzine", catalogPrice: 89900, marketValue: 68000 },
  { make: "BMW", model: "X5 xDrive30d", year: 2021, fuel_type: "diesel", catalogPrice: 85900, marketValue: 58000 },
  { make: "Mercedes-Benz", model: "C180 Sedan", year: 2023, fuel_type: "benzine", catalogPrice: 48900, marketValue: 39900 },
  { make: "Mercedes-Benz", model: "C200 Sedan", year: 2022, fuel_type: "benzine", catalogPrice: 52500, marketValue: 38500 },
  { make: "Mercedes-Benz", model: "C220d Sedan", year: 2023, fuel_type: "diesel", catalogPrice: 55900, marketValue: 43000 },
  { make: "Mercedes-Benz", model: "E200 Sedan", year: 2023, fuel_type: "benzine", catalogPrice: 65900, marketValue: 52000 },
  { make: "Mercedes-Benz", model: "E220d Sedan", year: 2022, fuel_type: "diesel", catalogPrice: 68500, marketValue: 48500 },
  { make: "Mercedes-Benz", model: "GLC 200", year: 2023, fuel_type: "benzine", catalogPrice: 62900, marketValue: 51000 },
  { make: "Mercedes-Benz", model: "GLC 220d", year: 2022, fuel_type: "diesel", catalogPrice: 65500, marketValue: 47500 },
  { make: "Audi", model: "A3 Sportback 30 TFSI", year: 2023, fuel_type: "benzine", catalogPrice: 38900, marketValue: 31000 },
  { make: "Audi", model: "A4 Avant 35 TFSI", year: 2023, fuel_type: "benzine", catalogPrice: 48500, marketValue: 38000 },
  { make: "Audi", model: "A4 Avant 35 TDI", year: 2022, fuel_type: "diesel", catalogPrice: 50900, marketValue: 36500 },
  { make: "Audi", model: "A6 Sedan 45 TFSI", year: 2022, fuel_type: "benzine", catalogPrice: 62900, marketValue: 45000 },
  { make: "Audi", model: "Q5 40 TFSI", year: 2023, fuel_type: "benzine", catalogPrice: 59900, marketValue: 48500 },
  { make: "Audi", model: "Q5 40 TDI", year: 2022, fuel_type: "diesel", catalogPrice: 62500, marketValue: 46000 },
  { make: "Volkswagen", model: "Golf 1.5 TSI", year: 2023, fuel_type: "benzine", catalogPrice: 35900, marketValue: 28500 },
  { make: "Volkswagen", model: "Golf 2.0 TDI", year: 2022, fuel_type: "diesel", catalogPrice: 38500, marketValue: 27000 },
  { make: "Volkswagen", model: "Polo 1.0 TSI", year: 2023, fuel_type: "benzine", catalogPrice: 26900, marketValue: 21500 },
  { make: "Volkswagen", model: "Tiguan 1.5 TSI", year: 2023, fuel_type: "benzine", catalogPrice: 42900, marketValue: 35000 },
  { make: "Volkswagen", model: "Tiguan 2.0 TDI", year: 2022, fuel_type: "diesel", catalogPrice: 46500, marketValue: 33500 },
  { make: "Volkswagen", model: "Passat Variant 1.5 TSI", year: 2023, fuel_type: "benzine", catalogPrice: 41900, marketValue: 33000 },
  { make: "Volkswagen", model: "ID.4 Pro", year: 2023, fuel_type: "elektrisch", catalogPrice: 44900, marketValue: 33500 },
  { make: "Toyota", model: "Corolla 1.8 Hybrid", year: 2023, fuel_type: "hybride", catalogPrice: 32900, marketValue: 27500 },
  { make: "Toyota", model: "RAV4 2.5 Hybrid", year: 2023, fuel_type: "hybride", catalogPrice: 45900, marketValue: 38500 },
  { make: "Toyota", model: "Yaris 1.5 Hybrid", year: 2023, fuel_type: "hybride", catalogPrice: 26500, marketValue: 22000 },
  { make: "Volvo", model: "XC60 B5 AWD", year: 2023, fuel_type: "benzine", catalogPrice: 59900, marketValue: 47500 },
  { make: "Volvo", model: "XC60 D4", year: 2021, fuel_type: "diesel", catalogPrice: 55900, marketValue: 36500 },
  { make: "Volvo", model: "XC90 B5 AWD", year: 2022, fuel_type: "benzine", catalogPrice: 75900, marketValue: 55000 },
  { make: "Volvo", model: "V60 B4", year: 2023, fuel_type: "benzine", catalogPrice: 48900, marketValue: 39000 },
  { make: "Ford", model: "Focus 1.0 EcoBoost", year: 2023, fuel_type: "benzine", catalogPrice: 32500, marketValue: 25000 },
  { make: "Ford", model: "Fiesta 1.0 EcoBoost", year: 2022, fuel_type: "benzine", catalogPrice: 24900, marketValue: 18500 },
  { make: "Ford", model: "Kuga 1.5 EcoBoost", year: 2023, fuel_type: "benzine", catalogPrice: 39900, marketValue: 32000 },
  { make: "Tesla", model: "Model 3 Long Range", year: 2023, fuel_type: "elektrisch", catalogPrice: 52990, marketValue: 39000 },
  { make: "Tesla", model: "Model Y Long Range", year: 2023, fuel_type: "elektrisch", catalogPrice: 55990, marketValue: 42000 },
  { make: "Peugeot", model: "308 1.2 PureTech", year: 2023, fuel_type: "benzine", catalogPrice: 33900, marketValue: 26500 },
  { make: "Renault", model: "Clio 1.0 TCe", year: 2023, fuel_type: "benzine", catalogPrice: 24900, marketValue: 19500 },
  { make: "Skoda", model: "Octavia Combi 1.5 TSI", year: 2023, fuel_type: "benzine", catalogPrice: 35500, marketValue: 28500 },
];
