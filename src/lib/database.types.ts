export type ClientType = 'particulier' | 'zakelijk';
export type VehicleType = 'auto' | 'motor' | 'camper' | 'oldtimer' | 'bus';
export type FuelType = 'benzine' | 'diesel' | 'elektrisch' | 'hybride' | 'lpg';
export type AppraisalStatus = 'aangevraagd' | 'ingepland' | 'inspectie' | 'rapport' | 'afgerond';
export type AppointmentStatus = 'gepland' | 'bevestigd' | 'voltooid' | 'geannuleerd';
export type Severity = 'licht' | 'matig' | 'zwaar';
export type ConditionRating = 'uitstekend' | 'goed' | 'redelijk' | 'matig' | 'slecht';
export type UserRole = 'admin' | 'taxateur';

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  type: ClientType;
  company_name?: string;
  kvk_number?: string;
  created_at: string;
}

export interface Vehicle {
  id: string;
  client_id: string;
  vin: string;
  license_plate: string;
  make: string;
  model: string;
  year: number;
  fuel_type: FuelType;
  mileage: number;
  engine_cc?: number;
  body_type?: string;
  color: string;
  vehicle_type: VehicleType;
  import_country: string;
  first_registration_date?: string;
  created_at: string;
}

export interface Appraisal {
  id: string;
  vehicle_id: string;
  client_id: string;
  status: AppraisalStatus;
  appointment_date?: string;
  inspection_date?: string;
  inspector_notes?: string;
  condition_exterior?: ConditionRating;
  condition_interior?: ConditionRating;
  condition_technical?: ConditionRating;
  condition_maintenance?: ConditionRating;
  base_value?: number;
  damage_deductions?: number;
  wear_deductions?: number;
  final_value?: number;
  bpm_amount?: number;
  report_pdf_url?: string;
  created_at: string;
  updated_at: string;
}

export interface AppraisalPhoto {
  id: string;
  appraisal_id: string;
  photo_url: string;
  photo_type: string;
  description?: string;
  created_at: string;
}

export interface DamageItem {
  id: string;
  appraisal_id: string;
  location: string;
  description: string;
  severity: Severity;
  deduction_amount: number;
  photo_id?: string;
}

export interface VehicleReference {
  id: string;
  make: string;
  model: string;
  year: number;
  variant?: string;
  fuel_type: FuelType;
  catalog_price: number;
  market_value: number;
  bpm_table_value?: number;
  source?: string;
  last_updated: string;
}

export interface Appointment {
  id: string;
  client_id: string;
  vehicle_id?: string;
  appraisal_id?: string;
  scheduled_date: string;
  scheduled_time: string;
  duration_minutes: number;
  status: AppointmentStatus;
  notes?: string;
  created_at: string;
}

export interface Profile {
  id: string;
  user_id: string;
  full_name: string;
  role: UserRole;
  phone?: string;
  created_at: string;
}
