export interface EvidenceResponse {
  success: boolean;
  evidenceId: string;
  fileName: string;
  classification: string;
  uploadedAt: string;
  status: string;
  storageType: string;
}

export async function getEvidence(): Promise<EvidenceResponse> {
  const response = await fetch(
    "/server/evidence-vault/execute"
  );

  const raw = await response.json();

  return typeof raw.output === "string"
    ? JSON.parse(raw.output)
    : raw;
}