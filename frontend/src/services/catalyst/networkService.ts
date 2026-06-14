export interface NetworkResponse {
  success: boolean;

  nodes: any[];
  edges: any[];

  insights: string[];

  riskScore: number;
}

export async function getNetworkAnalysis() {
  const response = await fetch(
    "/server/network-analysis/execute"
  );

  const raw = await response.json();

  return typeof raw.output === "string"
    ? JSON.parse(raw.output)
    : raw;
}