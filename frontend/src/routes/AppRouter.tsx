import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardPage from "../pages/Dashboard/DashboardPage";
import CopilotPage from "../pages/Copilot/CopilotPage";
import FIRPage from "../pages/FIR/FIRPage";
import NetworkPage from "../pages/Network/NetworkPage";
import ReportsPage from "../pages/Reports/ReportsPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Command Center */}
        <Route path="/" element={<DashboardPage />} />

        {/* AI Copilot */}
        <Route path="/copilot" element={<CopilotPage />} />

        {/* FIR Intelligence Center */}
        <Route path="/fir" element={<FIRPage />} />

        {/* Criminal Network Analysis */}
        <Route path="/network" element={<NetworkPage />} />

        {/* Reports & Dossiers */}
        <Route path="/reports" element={<ReportsPage />} />
      </Routes>
    </BrowserRouter>
  );
}