import { FileText, Shield, AlertTriangle } from "lucide-react";

export default function ReportsStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

      <div className="bg-slate-900 p-5 rounded-xl">
        <FileText className="mb-2 text-cyan-400" />
        <h3 className="text-2xl font-bold">124</h3>
        <p className="text-slate-400">
          Reports Generated
        </p>
      </div>

      <div className="bg-slate-900 p-5 rounded-xl">
        <Shield className="mb-2 text-green-400" />
        <h3 className="text-2xl font-bold">42</h3>
        <p className="text-slate-400">
          Active Cases
        </p>
      </div>

      <div className="bg-slate-900 p-5 rounded-xl">
        <AlertTriangle className="mb-2 text-red-400" />
        <h3 className="text-2xl font-bold">18</h3>
        <p className="text-slate-400">
          High Risk Cases
        </p>
      </div>

    </div>
  );
}