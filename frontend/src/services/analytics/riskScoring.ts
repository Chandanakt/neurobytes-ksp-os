export function calculateRiskScore(
  incidents: number,
  repeatOffenders: number
) {
  return Math.min(
    100,
    incidents * 3 +
      repeatOffenders * 10
  );
}