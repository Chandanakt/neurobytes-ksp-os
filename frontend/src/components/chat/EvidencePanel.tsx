import type { CrimeRecord } from "../../types/crime";

type Props = {
  confidence: number;
  reasoning: string[];
  evidence: CrimeRecord[];
  leads?: string[];
};

export default function EvidencePanel({
  confidence,
  reasoning,
  evidence,
  leads,
}: Props) {
  const getConfidenceColor = () => {
    if (confidence >= 90) return "text-green-400";
    if (confidence >= 75) return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <div className="bg-slate-900 rounded-xl p-6 mt-6 border border-slate-800">

      {/* Header */}

      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-[#D4AF37]">
          Explainable AI Analysis
        </h3>

        <div className="bg-slate-800 px-3 py-1 rounded-lg">
          <span className="text-sm text-slate-400">
            Confidence:
          </span>

          <span
            className={`ml-2 font-bold ${getConfidenceColor()}`}
          >
            {confidence}%
          </span>
        </div>
      </div>

      {/* Reasoning */}

      <div className="mt-6">
        <h4 className="font-semibold text-white mb-3">
          AI Reasoning Path
        </h4>

        <ul className="space-y-2">
          {reasoning.map((item) => (
            <li
              key={item}
              className="text-slate-300 flex gap-2"
            >
              <span className="text-[#00C2FF]">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Evidence */}

      <div className="mt-6">
        <h4 className="font-semibold text-white mb-3">
          Supporting Evidence
        </h4>

        {evidence.length === 0 ? (
          <div className="bg-slate-800 rounded-lg p-4 text-slate-400">
            No supporting records available.
          </div>
        ) : (
          <div className="space-y-3">
            {evidence.map((record) => (
              <div
                key={record.id}
                className="bg-slate-800 rounded-lg p-4 border border-slate-700"
              >
                <div className="flex justify-between items-center">

                  <div>
                    <p className="font-semibold text-white">
                      {record.id}
                    </p>

                    <p className="text-sm text-slate-400 mt-1">
                      {record.crimeType} • {record.district}
                    </p>
                  </div>

                  <span className="bg-[#0A2342] text-[#00C2FF] px-3 py-1 rounded-full text-xs">
                    Evidence
                  </span>

                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Investigation Leads */}

      {leads && leads.length > 0 && (
        <div className="mt-6">
          <h4 className="font-semibold text-white mb-3">
            Suggested Investigation Leads
          </h4>

          <div className="bg-slate-800 rounded-lg p-4">
            <ul className="space-y-2">
              {leads.map((lead) => (
                <li
                  key={lead}
                  className="text-slate-300 flex gap-2"
                >
                  <span className="text-[#D4AF37]">
                    →
                  </span>

                  <span>{lead}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Audit Section */}

      <div className="mt-6 border-t border-slate-800 pt-4">

        <p className="text-xs text-slate-500">
          AI responses are generated using crime intelligence
          correlations, historical records, criminal network
          analysis, and explainable reasoning pathways.
        </p>

      </div>

    </div>
  );
}