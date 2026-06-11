import DashboardLayout from "../../components/layout/DashboardLayout";

import KPICard from "../../components/dashboard/KPICard";

import TrendPanel from "../../components/dashboard/CrimeTrendPanel";

import HotspotPanel from "../../components/dashboard/HotspotPanel";

import AlertFeed from "../../components/dashboard/AlertFeed";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold text-[#D4AF37]">
        Command Center
      </h1>

      <p className="text-slate-400 mt-2">
        Real-time Crime Intelligence &
        Investigation Support System
      </p>

      <div className="grid grid-cols-4 gap-4 mt-8">
        <KPICard
          title="Total FIRs"
          value="125,432"
          change="+12%"
        />

        <KPICard
          title="Active Cases"
          value="8,214"
          change="+5%"
        />

        <KPICard
          title="Solved Cases"
          value="117,218"
          change="+18%"
        />

        <KPICard
          title="Critical Alerts"
          value="24"
          change="-3%"
          positive={false}
        />
      </div>

      <div className="grid grid-cols-3 gap-6 mt-8">
        <TrendPanel />

        <HotspotPanel />

        <AlertFeed />
      </div>
    </DashboardLayout>
  );
}