import { useEffect, useState } from "react";
import type { AnalyticsResponse } from "../services/catalyst/analyticsService";
import {
  getAnalytics,
} from "../services/catalyst/analyticsService";

export function useAnalytics() {
  const [data, setData] =
    useState<AnalyticsResponse | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function loadAnalytics() {
      try {
        const analytics =
          await getAnalytics();
        console.log(
        "Analytics from API:",
        JSON.stringify(analytics, null, 2)
        );
                setData(analytics);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadAnalytics();
  }, []);

  return {
    data,
    loading,
  };
}