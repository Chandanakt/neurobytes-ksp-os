import { FileDown } from "lucide-react";

export default function GenerateReportCard() {
  return (
    <div className="bg-slate-900 rounded-xl p-6">

      <h2 className="text-xl font-semibold mb-4">
        Generate Intelligence Report
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <button className="bg-slate-800 p-4 rounded-lg">
          Investigation Summary
        </button>

        <button className="bg-slate-800 p-4 rounded-lg">
          Criminal Network Report
        </button>

        <button className="bg-slate-800 p-4 rounded-lg">
          Crime Trend Report
        </button>

        <button className="bg-slate-800 p-4 rounded-lg">
          Offender Profile
        </button>

      </div>

      <button className="mt-6 bg-[#D4AF37] text-black px-4 py-2 rounded-lg flex items-center gap-2">
        <FileDown size={18} />
        Generate PDF Dossier
      </button>

    </div>
  );
}