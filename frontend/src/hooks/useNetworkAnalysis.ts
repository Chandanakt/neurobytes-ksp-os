import { useEffect, useState } from "react";
import type { NetworkResponse } from "../services/catalyst/networkService";
import {
  getNetworkAnalysis,
} from "../services/catalyst/networkService";

export function useNetworkAnalysis() {
  const [data, setData] =
    useState<NetworkResponse | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function load() {
      const result =
        await getNetworkAnalysis();

      setData(result);

      setLoading(false);
    }

    load();
  }, []);

  return {
    data,
    loading,
  };
}