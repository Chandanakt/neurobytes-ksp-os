import type { CrimeRecord } from "../types/crime";

export const crimeData: CrimeRecord[] = [
  {
    id: "FIR-2026-001",
    crimeType: "Theft",
    district: "Mysuru",
    policeStation: "Vijayanagar",
    accused: "Ramesh",
    victim: "Suresh",
    date: "2026-06-01",
    riskScore: 82,
  },

  {
    id: "FIR-2026-002",
    crimeType: "Cyber Crime",
    district: "Bengaluru",
    policeStation: "Whitefield",
    accused: "Unknown",
    victim: "Anitha",
    date: "2026-06-02",
    riskScore: 91,
  },

  {
    id: "FIR-2026-003",
    crimeType: "Theft",
    district: "Mysuru",
    policeStation: "Nazarbad",
    accused: "Ravi",
    victim: "Kumar",
    date: "2026-06-05",
    riskScore: 72,
  },

  {
    id: "FIR-2026-004",
    crimeType: "Fraud",
    district: "Mandya",
    policeStation: "Mandya Rural",
    accused: "Prakash",
    victim: "Lakshmi",
    date: "2026-06-07",
    riskScore: 78,
  },
];