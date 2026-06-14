export async function processFIR() {

  const response = await fetch(
    "/server/fir-processor/execute"
  );

  const raw = await response.json();

  return typeof raw.output === "string"
    ? JSON.parse(raw.output)
    : raw;
}