import {
  Brain,
  AlertTriangle,
  User,
  MapPin,
  Car,
  Phone,
} from "lucide-react";

export default function FIRAnalysisPanel() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 h-full">
      <div className="flex items-center gap-3 mb-5">
        <Brain className="text-cyan-400" />
        <h2 className="text-xl font-semibold">
          AI Crime Analysis
        </h2>
      </div>

      {/* AI Summary */}
      <div className="bg-slate-800 rounded-lg p-4">
        <h3 className="font-semibold mb-2">
          AI Summary
        </h3>

        <p className="text-slate-300 text-sm leading-6">
          Theft reported in Mysuru South.
          Two suspects identified.
          Similar incidents observed in
          nearby police stations within the
          last 30 days.
        </p>
      </div>

      {/* Risk Score */}
      <div className="bg-red-950 border border-red-500 rounded-lg p-4 mt-4">
        <div className="flex items-center gap-2">
          <AlertTriangle className="text-red-400" />

          <h3 className="font-semibold">
            Risk Assessment
          </h3>
        </div>

        <div className="text-5xl font-bold mt-3 text-red-400">
          84
        </div>

        <p className="mt-2 text-red-300">
          High Risk Case
        </p>
      </div>

      {/* Extracted Entities */}
      <div className="mt-5">
        <h3 className="font-semibold mb-3">
          Extracted Entities
        </h3>

        <div className="space-y-3">
          <div className="bg-slate-800 p-3 rounded-lg flex items-center gap-3">
            <User size={18} />
            <span>Ramesh Kumar</span>
          </div>

          <div className="bg-slate-800 p-3 rounded-lg flex items-center gap-3">
            <MapPin size={18} />
            <span>Mysuru South</span>
          </div>

          <div className="bg-slate-800 p-3 rounded-lg flex items-center gap-3">
            <Car size={18} />
            <span>KA09AB1234</span>
          </div>

          <div className="bg-slate-800 p-3 rounded-lg flex items-center gap-3">
            <Phone size={18} />
            <span>9876543210</span>
          </div>
        </div>
      </div>
    </div>
  );
}