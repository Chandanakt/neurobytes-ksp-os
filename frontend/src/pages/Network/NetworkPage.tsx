import DashboardLayout from "../../components/layout/DashboardLayout";
import CriminalNetworkGraph from "../../components/network/CriminalNetworkGraph";
import NetworkInsights from "../../components/network/NetworkInsights";
import NetworkFindings from "../../components/network/NetworkFindings";

import { analyzeNetwork } from "../../services/networkAnalysis";

export default function NetworkPage() {
  const network = analyzeNetwork("Ramesh Kumar");

  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* Header */}

        <div>
          <h1 className="text-4xl font-bold text-[#D4AF37]">
            Criminal Network Analysis
          </h1>

          <p className="text-slate-400 mt-2">
            Discover hidden links between accused, victims,
            vehicles, phone numbers, financial accounts,
            locations and crime incidents.
          </p>
        </div>

        {/* KPI Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <p className="text-slate-400 text-sm">
              Connected Entities
            </p>

            <h2 className="text-3xl font-bold mt-2">
              124
            </h2>

            <p className="text-green-400 mt-2 text-sm">
              +18%
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <p className="text-slate-400 text-sm">
              Organized Groups
            </p>

            <h2 className="text-3xl font-bold mt-2">
              12
            </h2>

            <p className="text-green-400 mt-2 text-sm">
              +3
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <p className="text-slate-400 text-sm">
              Repeat Offenders
            </p>

            <h2 className="text-3xl font-bold mt-2">
              89
            </h2>

            <p className="text-red-400 mt-2 text-sm">
              High Risk
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <p className="text-slate-400 text-sm">
              Active Investigations
            </p>

            <h2 className="text-3xl font-bold mt-2">
              46
            </h2>

            <p className="text-green-400 mt-2 text-sm">
              Ongoing
            </p>
          </div>

        </div>

        {/* Main Section */}

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">

          {/* Graph */}

          <div className="xl:col-span-3">
            <CriminalNetworkGraph />
          </div>

          {/* AI Insights */}

          <div>
            <NetworkInsights />
          </div>

        </div>

        {/* Network Intelligence Findings */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <NetworkFindings
            findings={network.findings}
            riskScore={network.riskScore}
          />

          <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">

            <h3 className="text-xl font-semibold text-[#D4AF37]">
              Connected Individuals
            </h3>

            <div className="mt-4 space-y-3">

              {network.people.map((person) => (
                <div
                  key={person.id}
                  className="bg-slate-800 rounded-lg p-3"
                >
                  <p className="font-semibold">
                    {person.name}
                  </p>

                  <p className="text-sm text-slate-400">
                    {person.role}
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

                {network.links.map((link, index) => (
                  <tr
                    key={index}
                    className="border-b border-slate-800"
                  >
                    <td className="py-3">
                      {link.source}
                    </td>

                    <td className="py-3">
                      {link.target}
                    </td>

                    <td className="py-3 text-[#00C2FF]">
                      {link.relation}
                    </td>
                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}