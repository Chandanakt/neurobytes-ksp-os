export interface CrimeRecord {
  id: string;
  crimeType: string;
  district: string;
  policeStation: string;
  accused: string;
  victim: string;
  date: string;
  riskScore: number;
}