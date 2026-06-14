export function predictNextMonth(
  currentCrimes: number
) {
  return Math.round(
    currentCrimes * 1.12
  );
}