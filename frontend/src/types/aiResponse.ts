import type { CrimeRecord } from "./crime";

export interface AIResponse {
  summary: string;
  confidence: number;
  reasoning: string[];
  evidence: CrimeRecord[];
}