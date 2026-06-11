import {
  sampleCases,
} from "./crimeKnowledge";

export function generateResponse(
  district?: string,
  crime?: string
) {
  const match =
    sampleCases.find(
      (c) =>
        c.district === district &&
        c.type === crime
    );

  if (!match) {
    return {
      answer:
        "No matching records found.",
      evidence: [],
    };
  }

  return {
    answer:
      `Found ${match.count} ${crime} cases in ${district}.`,
    evidence: [
      "District Crime Registry",
      "SCRB Records",
    ],
  };
}