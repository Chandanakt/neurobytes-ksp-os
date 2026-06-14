import type { CrimeRecord } from "../../types/crime";

export function detectHotspots(
  crimes: CrimeRecord[]
) {
  const districts: Record<string, number> = {};

  crimes.forEach((crime) => {
    districts[crime.district] =
      (districts[crime.district] || 0) + 1;
  });

  return Object.entries(districts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);
}