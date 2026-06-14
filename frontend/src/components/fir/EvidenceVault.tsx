import { Archive } from "lucide-react";

import { useEvidence }
from "../../hooks/useEvidence";

export default function EvidenceVault() {

  const { data, loading } =
    useEvidence();

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

      <div className="flex items-center gap-3 mb-4">

        <Archive className="text-[#D4AF37]" />

        <h2 className="text-xl font-semibold">
          Evidence Vault
        </h2>

      </div>

      {loading ? (

        <p className="text-slate-400">
          Loading Evidence...
        </p>

      ) : (

        <div className="space-y-4">

          <div className="bg-slate-800 rounded-lg p-4">

            <p className="text-slate-400 text-sm">
              Evidence ID
            </p>

            <p className="font-bold">
              {data?.evidenceId}
            </p>

          </div>

          <div className="bg-slate-800 rounded-lg p-4">

            <p className="text-slate-400 text-sm">
              File Name
            </p>

            <p>
              {data?.fileName}
            </p>

          </div>

          <div className="bg-slate-800 rounded-lg p-4">

            <p className="text-slate-400 text-sm">
              Classification
            </p>

            <p className="text-red-400">
              {data?.classification}
            </p>

          </div>

          <div className="bg-slate-800 rounded-lg p-4">

            <p className="text-slate-400 text-sm">
              Status
            </p>

            <p className="text-green-400">
              {data?.status}
            </p>

          </div>

        </div>

      )}

    </div>
  );
}