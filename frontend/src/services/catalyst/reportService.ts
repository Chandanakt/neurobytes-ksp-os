export interface ReportResponse {
  success: boolean;

  reportId: string;

  district: string;

  crimeType: string;

  location: string;

  riskScore: number;

  suspects: {
    name: string;
    risk: string;
  }[];

  vehicles: string[];

  hotspots: string[];
}

export async function generateReport(): Promise<ReportResponse> {
  const response = await fetch(
    "/server/report-generator/execute"
  );

  const raw = await response.json();

  return typeof raw.output === "string"
    ? JSON.parse(raw.output)
    : raw;
}