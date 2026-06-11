import type { NetworkResult } from "../types/network";

export function analyzeNetwork(
  suspectName: string
): NetworkResult {

  return {
    people: [
      {
        id: "P1",
        name: suspectName,
        role: "Primary Suspect",
      },

      {
        id: "P2",
        name: "Ravi Kumar",
        role: "Associate",
      },

      {
        id: "P3",
        name: "Suresh",
        role: "Vehicle Owner",
      },

      {
        id: "P4",
        name: "Anita",
        role: "Financial Contact",
      },
    ],

    links: [
      {
        source: "P1",
        target: "P2",
        relation: "Shared FIR",
      },

      {
        source: "P1",
        target: "P3",
        relation: "Vehicle Link",
      },

      {
        source: "P1",
        target: "P4",
        relation: "Financial Transfer",
      },
    ],

    riskScore: 87,

    findings: [
      "Shared FIR records detected",
      "Vehicle overlap found",
      "Financial relationship identified",
      "Possible organized group activity",
    ],
  };
}