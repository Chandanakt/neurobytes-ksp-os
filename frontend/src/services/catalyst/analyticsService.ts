export interface AnalyticsResponse {
  success: boolean;
  totalCrimes: number;
  activeCases: number;
  repeatOffenders: number;
  hotspots: string[];
  crimeTrends: {
    crimeType: string;
    count: number;
  }[];
  forecast: {
    nextMonthCrimes: number;
    riskLevel: string;
  };
}

const ANALYTICS_URL = "/server/analytics-engine/execute";

export async function getAnalytics(): Promise<AnalyticsResponse> {
  try {
    const response = await fetch(
      ANALYTICS_URL
    );

    if (!response.ok) {
      throw new Error(
        `HTTP Error: ${response.status}`
      );
    }

    const raw = await response.json();

    const analytics =
      typeof raw.output === "string"
        ? JSON.parse(raw.output)
        : raw;

    console.log(
      "Parsed Analytics:",
      analytics
    );

    return analytics;
  } catch (error) {
    console.error(
      "Failed to fetch analytics:",
      error
    );

    return {
      success: false,
      totalCrimes: 0,
      activeCases: 0,
      repeatOffenders: 0,
      hotspots: [],
      crimeTrends: [],
      forecast: {
        nextMonthCrimes: 0,
        riskLevel: "Unknown",
      },
    };
  }
}