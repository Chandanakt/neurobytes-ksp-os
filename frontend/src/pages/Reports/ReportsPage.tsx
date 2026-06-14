import DashboardLayout from "../../components/layout/DashboardLayout";

import ReportsStats from "../../components/reports/ReportsStats";
import RecentReports from "../../components/reports/RecentReports";
import GenerateReportCard from "../../components/reports/GenerateReportCard";

import { useReport } from "../../hooks/useReport";

export default function ReportsPage() {
  const { data, loading } = useReport();

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

            <h3 className="text-xl mt-2">
              {data?.reportType}
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
                  Classification
                </p>

                <p className="text-red-400">
                  {data?.classification}
                </p>
              </div>

              <div>
                <p className="text-slate-400 text-sm">
                  District
                </p>

                <p>{data?.district}</p>
              </div>

              <div>
                <p className="text-slate-400 text-sm">
                  Risk Level
                </p>

                <p className="text-red-400">
                  {data?.riskAssessment.level}
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
              {data?.executiveSummary}
            </p>
          </section>

          {/* Incident Details */}

          <section className="mt-8">
            <h3 className="text-xl font-semibold text-[#D4AF37]">
              Incident Details
            </h3>

            <div className="grid md:grid-cols-3 gap-4 mt-4">

              <div className="bg-slate-800 p-4 rounded-lg">
                Crime Type
                <div className="font-bold mt-2">
                  {data?.incidentDetails.crimeType}
                </div>
              </div>

              <div className="bg-slate-800 p-4 rounded-lg">
                Location
                <div className="font-bold mt-2">
                  {data?.incidentDetails.location}
                </div>
              </div>

              <div className="bg-slate-800 p-4 rounded-lg">
                Time Range
                <div className="font-bold mt-2">
                  {data?.incidentDetails.dateRange}
                </div>
              </div>

            </div>
          </section>

          {/* Suspects */}

          <section className="mt-8">
            <h3 className="text-xl font-semibold text-[#D4AF37]">
              Suspect Intelligence
            </h3>

            <div className="grid md:grid-cols-2 gap-4 mt-4">

              {data?.suspects.map((suspect) => (
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

          {/* Vehicles */}

          <section className="mt-8">
            <h3 className="text-xl font-semibold text-[#D4AF37]">
              Vehicle Intelligence
            </h3>

            <div className="space-y-2 mt-4">

              {data?.associatedVehicles.map(
                (vehicle) => (
                  <div
                    key={vehicle}
                    className="bg-slate-800 rounded-lg p-3"
                  >
                    {vehicle}
                  </div>
                )
              )}

            </div>
          </section>

          {/* Network Findings */}

          <section className="mt-8">
            <h3 className="text-xl font-semibold text-[#D4AF37]">
              Criminal Network Findings
            </h3>

            <div className="space-y-2 mt-4">

              {data?.networkFindings.map(
                (finding) => (
                  <div
                    key={finding}
                    className="bg-slate-800 rounded-lg p-3"
                  >
                    • {finding}
                  </div>
                )
              )}

            </div>
          </section>

          {/* Hotspots */}

          <section className="mt-8">
            <h3 className="text-xl font-semibold text-[#D4AF37]">
              Crime Hotspots
            </h3>

            <div className="flex flex-wrap gap-3 mt-4">

              {data?.hotspots.map(
                (hotspot) => (
                  <span
                    key={hotspot}
                    className="bg-red-500/10 border border-red-500/30 px-4 py-2 rounded-lg"
                  >
                    {hotspot}
                  </span>
                )
              )}

            </div>
          </section>

          {/* Risk */}

          <section className="mt-8 bg-red-500/10 border border-red-500/20 rounded-xl p-5">
            <h3 className="text-xl font-semibold text-red-400">
              Risk Assessment
            </h3>

            <p className="mt-2 text-2xl font-bold">
              Score: {data?.riskAssessment.score}
            </p>

            <p className="text-red-400">
              Threat Level:
              {" "}
              {data?.riskAssessment.level}
            </p>
          </section>

          {/* Recommendations */}

          <section className="mt-8">
            <h3 className="text-xl font-semibold text-[#D4AF37]">
              Recommended Actions
            </h3>

            <div className="space-y-2 mt-4">

              {data?.recommendations.map(
                (item) => (
                  <div
                    key={item}
                    className="bg-slate-800 rounded-lg p-3"
                  >
                    • {item}
                  </div>
                )
              )}

            </div>
          </section>

        </div>

        <RecentReports />

      </div>
    </DashboardLayout>
  );
}