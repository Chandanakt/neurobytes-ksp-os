import { useState } from "react";
import { FileDown } from "lucide-react";

import { generateReport } from "../../services/catalyst/reportService";
import { generateKSPReport } from "../../services/pdf/pdfGenerator";

export default function GenerateReportCard() {
  const [loading, setLoading] =
    useState(false);

  const handleGeneratePDF =
    async () => {
      try {
        setLoading(true);

        const report =
          await generateReport();

        generateKSPReport(report);
      } catch (error) {
        console.error(
          "PDF Generation Failed:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
      <h2 className="text-xl font-semibold mb-4">
        Generate Intelligence Report
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <button className="bg-slate-800 p-4 rounded-lg hover:bg-slate-700 transition">
          Investigation Summary
        </button>

        <button className="bg-slate-800 p-4 rounded-lg hover:bg-slate-700 transition">
          Criminal Network Report
        </button>

        <button className="bg-slate-800 p-4 rounded-lg hover:bg-slate-700 transition">
          Crime Trend Report
        </button>

        <button className="bg-slate-800 p-4 rounded-lg hover:bg-slate-700 transition">
          Offender Profile
        </button>

      </div>

      <button
        onClick={handleGeneratePDF}
        disabled={loading}
        className="mt-6 bg-[#D4AF37] text-black px-5 py-3 rounded-lg flex items-center gap-2 font-semibold hover:opacity-90 disabled:opacity-50"
      >
        <FileDown size={18} />

        {loading
          ? "Generating PDF..."
          : "Download KSP Dossier"}
      </button>
    </div>
  );
}