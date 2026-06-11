import {
  districts,
  crimeTypes,
} from "./crimeKnowledge";

export function processQuery(
  query: string
) {
  const lower =
    query.toLowerCase();

  const district =
    districts.find((d) =>
      lower.includes(d.toLowerCase())
    );

  const crime =
    crimeTypes.find((c) =>
      lower.includes(c)
    );

  return {
    district,
    crime,
  };
}