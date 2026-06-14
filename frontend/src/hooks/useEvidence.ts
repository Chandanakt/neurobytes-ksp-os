import { useEffect, useState } from "react";
import type { EvidenceResponse } from "../services/catalyst/evidenceService";
import {
  getEvidence,
} from "../services/catalyst/evidenceService";

export function useEvidence() {
  const [data, setData] =
    useState<EvidenceResponse | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function load() {
      try {
        const result =
          await getEvidence();

        setData(result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return {
    data,
    loading,
  };
}