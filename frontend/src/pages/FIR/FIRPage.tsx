import DashboardLayout from "../../components/layout/DashboardLayout";
import FIRUploadCard from "@/components/fir/FIRUploadCard";
import FIRAnalysisPanel from "@/components/fir/FIRAnalysisPanel";
import InvestigationPanel from "@/components/fir/InvestigationPanel";

export default function FIRPage() {
  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold text-[#D4AF37]">
        FIR Intelligence Center
      </h1>

      <p className="text-slate-400 mt-2">
        Upload FIRs and receive AI-powered investigation support.
      </p>

      <div className="grid grid-cols-3 gap-6 mt-8">
        <FIRUploadCard />
        <FIRAnalysisPanel />
        <InvestigationPanel />
      </div>
    </DashboardLayout>
  );
}