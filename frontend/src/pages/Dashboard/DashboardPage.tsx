import DashboardLayout from "../../components/layout/DashboardLayout";

import KPICard from "../../components/dashboard/KPICard";
import TrendPanel from "../../components/dashboard/CrimeTrendPanel";
import HotspotPanel from "../../components/dashboard/HotspotPanel";
import AlertFeed from "../../components/dashboard/AlertFeed";

import { useAnalytics } from "../../hooks/useAnalytics";

export default function DashboardPage() {
  const { data, loading } = useAnalytics();

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex justify-center items-center h-[60vh]">
          <p className="text-slate-400">
            Loading Crime Intelligence...
          </p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold text-[#D4AF37]">
        Command Center
      </h1>

      <p className="text-slate-400 mt-2">
        Real-time Crime Intelligence &
        Investigation Support System
      </p>
        
      {/* KPI Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-8">

        <KPICard
          title="Total FIRs"
          value={
            data?.totalCrimes?.toLocaleString() || "0"
          }
          change="+12%"
        />

        <KPICard
          title="Active Cases"
          value={
            data?.activeCases?.toLocaleString() || "0"
          }
          change="+5%"
        />

        <KPICard
          title="Repeat Offenders"
          value={
            data?.repeatOffenders?.toLocaleString() || "0"
          }
          change="+8%"
        />

        <KPICard
          title="Forecast Risk"
          value={
            data?.forecast?.riskLevel || "Unknown"
          }
          change="+3%"
          positive={false}
        />

      </div>

      {/* Analytics Panels */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">

        <TrendPanel />

        <HotspotPanel />

        <AlertFeed />

      </div>

      {/* Forecast Section */}

      <div className="mt-8 bg-slate-900 rounded-xl p-6 border border-slate-800">

        <h2 className="text-xl font-semibold text-[#D4AF37]">
          Predictive Intelligence
        </h2>

        <div className="mt-4">

          <p className="text-slate-400">
            Predicted Crime Volume Next Month
          </p>

          <p className="text-3xl font-bold mt-2">
            {data?.forecast?.nextMonthCrimes?.toLocaleString() || "0"}
          </p>

          <p className="text-red-400 mt-2">
            Risk Level: {data?.forecast?.riskLevel}
          </p>

        </div>

      </div>
    </DashboardLayout>
  );
}