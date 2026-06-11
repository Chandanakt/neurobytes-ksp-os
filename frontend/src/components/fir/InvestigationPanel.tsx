import {
  Search,
  Network,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";

export default function InvestigationPanel() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 h-full">
      <div className="flex items-center gap-3 mb-5">
        <Search className="text-[#D4AF37]" />
        <h2 className="text-xl font-semibold">
          Investigation Support
        </h2>
      </div>

      {/* Similar Cases */}
      <div>
        <h3 className="font-semibold mb-3">
          Similar Cases Found
        </h3>

        <div className="space-y-3">
          <div className="bg-slate-800 rounded-lg p-3">
            FIR-2026-102
          </div>

          <div className="bg-slate-800 rounded-lg p-3">
            FIR-2026-144
          </div>

          <div className="bg-slate-800 rounded-lg p-3">
            FIR-2026-201
          </div>
        </div>
      </div>

      {/* Investigation Leads */}
      <div className="mt-6">
        <h3 className="font-semibold mb-3">
          Recommended Leads
        </h3>

        <div className="space-y-3">
          <div className="bg-slate-800 rounded-lg p-3 flex items-center gap-3">
            <Network size={18} />
            Vehicle linked to another FIR
          </div>

          <div className="bg-slate-800 rounded-lg p-3 flex items-center gap-3">
            <ShieldAlert size={18} />
            Repeat offender match found
          </div>

          <div className="bg-slate-800 rounded-lg p-3 flex items-center gap-3">
            <ArrowRight size={18} />
            Nearby theft cluster detected
          </div>

          <div className="bg-slate-800 rounded-lg p-3 flex items-center gap-3">
            <ArrowRight size={18} />
            Suspect phone number appears in
            another investigation
          </div>
        </div>
      </div>

      {/* AI Recommendation */}
      <div className="mt-6 bg-cyan-950 border border-cyan-600 rounded-lg p-4">
        <h3 className="font-semibold text-cyan-300">
          AI Recommendation
        </h3>

        <p className="text-sm mt-2 text-cyan-100">
          Prioritize vehicle ownership
          verification and cross-check with
          theft cases registered in Mysuru
          and Mandya districts.
        </p>
      </div>
    </div>
  );
}