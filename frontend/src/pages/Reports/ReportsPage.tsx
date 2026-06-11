import DashboardLayout from "@/components/layout/DashboardLayout";

import ReportsStats from "@/components/reports/ReportsStats";
import RecentReports from "@/components/reports/RecentReports";
import GenerateReportCard from "@/components/reports/GenerateReportCard";

export default function ReportsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">

        <h1 className="text-3xl font-bold">
          Intelligence Reports Center
        </h1>

        <ReportsStats />

        <GenerateReportCard />

        <RecentReports />

      </div>
    </DashboardLayout>
  );
}