import DashboardLayout from "../../components/layout/DashboardLayout";
import CriminalNetworkGraph from "../../components/network/CriminalNetworkGraph";
import NetworkInsights from "../../components/network/NetworkInsights";
//import NetworkFindings from "../../components/network/NetworkFindings";

import { useNetworkAnalysis } from "../../hooks/useNetworkAnalysis";

export default function NetworkPage() {
  const { data, loading } = useNetworkAnalysis();

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex justify-center items-center h-[60vh]">
          <p className="text-slate-400">
            Loading Network Intelligence...
          </p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* Header */}

        <div>
          <h1 className="text-4xl font-bold text-[#D4AF37]">
            Criminal Network Analysis
          </h1>

          <p className="text-slate-400 mt-2">
            Discover hidden links between accused,
            victims, vehicles, phone numbers,
            financial accounts, locations and
            crime incidents.
          </p>
        </div>

        {/* KPI Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <p className="text-slate-400 text-sm">
              Connected Entities
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {data?.nodes?.length || 0}
            </h2>

            <p className="text-green-400 mt-2 text-sm">
              Live
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <p className="text-slate-400 text-sm">
              Relationships
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {data?.edges?.length || 0}
            </h2>

            <p className="text-green-400 mt-2 text-sm">
              Active
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <p className="text-slate-400 text-sm">
              Risk Score
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {data?.riskScore || 0}
            </h2>

            <p className="text-red-400 mt-2 text-sm">
              High Risk
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <p className="text-slate-400 text-sm">
              AI Findings
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {data?.insights?.length || 0}
            </h2>

            <p className="text-green-400 mt-2 text-sm">
              Generated
            </p>
          </div>

        </div>

        {/* Graph + Insights */}

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">

          <div className="xl:col-span-3">
            <CriminalNetworkGraph />
          </div>

          <div>
            <NetworkInsights />
          </div>

        </div>

        {/* Catalyst Findings */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">

            <h3 className="text-xl font-semibold text-[#D4AF37]">
              AI Intelligence Findings
            </h3>

            <div className="space-y-3 mt-4">

              {data?.insights?.map(
                (insight: string) => (
                  <div
                    key={insight}
                    className="bg-slate-800 p-3 rounded-lg"
                  >
                    {insight}
                  </div>
                )
              )}

            </div>

          </div>

          <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">

            <h3 className="text-xl font-semibold text-[#D4AF37]">
              Connected Entities
            </h3>

            <div className="space-y-3 mt-4">

              {data?.nodes?.map((node: any) => (
                <div
                  key={node.id}
                  className="bg-slate-800 rounded-lg p-3"
                >
                  <p className="font-semibold">
                    {node.label}
                  </p>

                  <p className="text-sm text-slate-400">
                    {node.type}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>

        {/* Relationship Table */}

        <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">

          <h3 className="text-xl font-semibold text-[#D4AF37]">
            Relationship Analysis
          </h3>

          <div className="mt-4 overflow-x-auto">

            <table className="w-full">

              <thead>
                <tr className="border-b border-slate-700">

                  <th className="text-left py-3">
                    Source
                  </th>

                  <th className="text-left py-3">
                    Target
                  </th>

                  <th className="text-left py-3">
                    Relationship
                  </th>

                </tr>
              </thead>

              <tbody>

                {data?.edges?.map(
                  (edge: any, index: number) => (
                    <tr
                      key={index}
                      className="border-b border-slate-800"
                    >
                      <td className="py-3">
                        {edge.source}
                      </td>

                      <td className="py-3">
                        {edge.target}
                      </td>

                      <td className="py-3 text-[#00C2FF]">
                        {edge.relation}
                      </td>
                    </tr>
                  )
                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}