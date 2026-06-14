import { useState } from "react";
import { FileDown } from "lucide-react";
import { generateReport } from "../../services/catalyst/reportService";

export default function GenerateReportCard() {
  const [loading, setLoading] = useState(false);

  const [report, setReport] = useState<any>(null);

  const handleGenerate = async () => {
    try {
      setLoading(true);

      const data = await generateReport();

      setReport(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

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

      <button
        onClick={handleGenerate}
        disabled={loading}
        className="mt-6 bg-[#D4AF37] text-black px-4 py-2 rounded-lg flex items-center gap-2"
      >
        <FileDown size={18} />

        {loading
          ? "Generating..."
          : "Generate PDF Dossier"}
      </button>

      {report && (
        <div className="mt-6 bg-slate-800 p-4 rounded-lg">
          <h3 className="font-bold text-lg">
            {report.title}
          </h3>

          <p className="text-slate-300 mt-2">
            {report.summary}
          </p>

          <div className="mt-4">
            <h4 className="font-semibold">
              Suspects
            </h4>

            {report.suspects.map(
              (suspect: any, index: number) => (
                <div
                  key={index}
                  className="mt-2"
                >
                  {suspect.name} - {suspect.risk}
                </div>
              )
            )}
          </div>

          <div className="mt-4">
            <h4 className="font-semibold">
              Recommendations
            </h4>

            {report.recommendations.map(
              (
                recommendation: string,
                index: number
              ) => (
                <div
                  key={index}
                  className="mt-2"
                >
                  • {recommendation}
                </div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}