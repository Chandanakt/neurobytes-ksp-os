export interface ReportResponse {
  success: boolean;

  reportId: string;
  classification: string;
  district: string;
  generatedAt: string;
  reportType: string;

  executiveSummary: string;

  incidentDetails: {
    crimeType: string;
    location: string;
    dateRange: string;
  };

  suspects: {
    name: string;
    risk: string;
  }[];

  associatedVehicles: string[];

  hotspots: string[];

  networkFindings: string[];

  riskAssessment: {
    score: number;
    level: string;
  };

  recommendations: string[];
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