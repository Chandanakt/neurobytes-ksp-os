import DashboardLayout from "../../components/layout/DashboardLayout";

import ReportsStats from "../../components/reports/ReportsStats";
import RecentReports from "../../components/reports/RecentReports";
import GenerateReportCard from "../../components/reports/GenerateReportCard";

import { useReport } from "../../hooks/useReport";

export default function ReportsPage() {
  const { data, loading } = useReport();

  const executiveSummary =
    data
      ? `Analysis of recent FIR intelligence indicates recurring ${data.crimeType.toLowerCase()} activity in ${data.location}. Multiple suspects have been linked through common operational patterns and vehicle associations. Immediate monitoring is recommended.`
      : "";

  const networkFindings =
    data
      ? [
          `Vehicle ${data.vehicles[0]} appears across multiple investigations.`,
          `${data.suspects.length} suspects linked to the crime cluster.`,
          `${data.hotspots.length} hotspot zones identified.`,
        ]
      : [];

  const recommendations =
    data
      ? [
          "Initiate surveillance on identified suspects.",
          "Track associated vehicle movement.",
          "Expand intelligence gathering in hotspot regions.",
          "Coordinate with district investigation units.",
        ]
      : [];

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex justify-center items-center h-[60vh]">
          <p className="text-slate-400">
            Generating Intelligence Dossier...
          </p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">

        <h1 className="text-3xl font-bold text-[#D4AF37]">
          Karnataka State Police Intelligence Center
        </h1>

        <ReportsStats />

        <GenerateReportCard />

        <div className="bg-slate-900 border border-[#D4AF37]/30 rounded-xl p-8">

          {/* Header */}

          <div className="border-b border-slate-700 pb-6">

            <h2 className="text-3xl font-bold text-[#D4AF37]">
              KARNATAKA STATE POLICE
            </h2>

            <div className="mt-2 text-slate-400">
              Criminal Investigation Department (CID)
            </div>

            <div className="mt-1 text-red-400 font-semibold">
              CONFIDENTIAL
            </div>

            <h3 className="text-xl mt-4">
              Crime Intelligence Dossier
            </h3>

            <div className="grid md:grid-cols-4 gap-4 mt-6">

              <div>
                <p className="text-slate-400 text-sm">
                  Report ID
                </p>

                <p>{data?.reportId}</p>
              </div>

              <div>
                <p className="text-slate-400 text-sm">
                  District
                </p>

                <p>{data?.district}</p>
              </div>

              <div>
                <p className="text-slate-400 text-sm">
                  Crime Type
                </p>

                <p>{data?.crimeType}</p>
              </div>

              <div>
                <p className="text-slate-400 text-sm">
                  Risk Score
                </p>

                <p className="text-red-400">
                  {data?.riskScore}
                </p>
              </div>

            </div>

          </div>

          {/* Executive Summary */}

          <section className="mt-8">
            <h3 className="text-xl font-semibold text-[#D4AF37]">
              Executive Summary
            </h3>

            <p className="mt-3 text-slate-300">
              {executiveSummary}
            </p>
          </section>

          {/* Incident Details */}

          <section className="mt-8">
            <h3 className="text-xl font-semibold text-[#D4AF37]">
              Incident Details
            </h3>

            <div className="grid md:grid-cols-2 gap-4 mt-4">

              <div className="bg-slate-800 p-4 rounded-lg">
                Crime Type
                <div className="font-bold mt-2">
                  {data?.crimeType}
                </div>
              </div>

              <div className="bg-slate-800 p-4 rounded-lg">
                Location
                <div className="font-bold mt-2">
                  {data?.location}
                </div>
              </div>

            </div>
          </section>

          {/* Suspect Intelligence */}

          <section className="mt-8">
            <h3 className="text-xl font-semibold text-[#D4AF37]">
              Suspect Intelligence
            </h3>

            <div className="grid md:grid-cols-2 gap-4 mt-4">

              {data?.suspects?.map((suspect) => (
                <div
                  key={suspect.name}
                  className="bg-slate-800 rounded-lg p-4"
                >
                  <p className="font-semibold">
                    {suspect.name}
                  </p>

                  <p className="text-red-400 mt-2">
                    Risk: {suspect.risk}
                  </p>
                </div>
              ))}

            </div>
          </section>

          {/* Vehicle Intelligence */}

          <section className="mt-8">
            <h3 className="text-xl font-semibold text-[#D4AF37]">
              Vehicle Intelligence
            </h3>

            <div className="space-y-2 mt-4">

              {data?.vehicles?.map((vehicle) => (
                <div
                  key={vehicle}
                  className="bg-slate-800 rounded-lg p-3"
                >
                  {vehicle}
                </div>
              ))}

            </div>
          </section>

          {/* Criminal Network Findings */}

          <section className="mt-8">
            <h3 className="text-xl font-semibold text-[#D4AF37]">
              Criminal Network Findings
            </h3>

            <div className="space-y-2 mt-4">

              {networkFindings.map((finding) => (
                <div
                  key={finding}
                  className="bg-slate-800 rounded-lg p-3"
                >
                  • {finding}
                </div>
              ))}

            </div>
          </section>

          {/* Crime Hotspots */}

          <section className="mt-8">
            <h3 className="text-xl font-semibold text-[#D4AF37]">
              Crime Hotspots
            </h3>

            <div className="flex flex-wrap gap-3 mt-4">

              {data?.hotspots?.map((hotspot) => (
                <span
                  key={hotspot}
                  className="bg-red-500/10 border border-red-500/30 px-4 py-2 rounded-lg"
                >
                  {hotspot}
                </span>
              ))}

            </div>
          </section>

          {/* Risk Assessment */}

          <section className="mt-8 bg-red-500/10 border border-red-500/20 rounded-xl p-5">

            <h3 className="text-xl font-semibold text-red-400">
              Risk Assessment
            </h3>

            <p className="mt-2 text-3xl font-bold">
              {data?.riskScore}
            </p>

            <p className="text-red-400">
              HIGH RISK ACTIVITY DETECTED
            </p>

          </section>

          {/* Recommendations */}

          <section className="mt-8">

            <h3 className="text-xl font-semibold text-[#D4AF37]">
              Recommended Actions
            </h3>

            <div className="space-y-2 mt-4">

              {recommendations.map((item) => (
                <div
                  key={item}
                  className="bg-slate-800 rounded-lg p-3"
                >
                  • {item}
                </div>
              ))}

            </div>

          </section>

        </div>

        <RecentReports />

      </div>
    </DashboardLayout>
  );
}