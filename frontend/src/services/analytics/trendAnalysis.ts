import type { CrimeRecord } from "../../types/crime";

export function analyzeTrends(
  crimes: CrimeRecord[]
) {
  const grouped: Record<string, number> = {};

  crimes.forEach((crime) => {
    grouped[crime.crimeType] =
      (grouped[crime.crimeType] || 0) + 1;
  });

  return Object.entries(grouped).map(
    ([crimeType, count]) => ({
      crimeType,
      count,
    })
  );
}