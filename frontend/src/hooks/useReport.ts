import { useEffect, useState } from "react";
import type { ReportResponse } from "../services/catalyst/reportService";
import {
  generateReport,
} from "../services/catalyst/reportService";

export function useReport() {
  const [data, setData] =
    useState<ReportResponse | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function load() {
      const report =
        await generateReport();

      setData(report);

      setLoading(false);
    }

    load();
  }, []);

  return {
    data,
    loading,
  };
}