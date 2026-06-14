export async function extractOCR() {

  const response = await fetch(
    "/server/ocr-engine/execute"
  );

  const raw = await response.json();

  return typeof raw.output === "string"
    ? JSON.parse(raw.output)
    : raw;
}