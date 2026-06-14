import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import DashboardPage from "../pages/Dashboard/DashboardPage";
import CopilotPage from "../pages/Copilot/CopilotPage";
import FIRPage from "../pages/FIR/FIRPage";
import NetworkPage from "../pages/Network/NetworkPage";
import ReportsPage from "../pages/Reports/ReportsPage";
import LoginPage from "../pages/Login/LoginPage";

import ProtectedRoute from "./ProtectedRoute";

export default function AppRouter() {
  return (
    <BrowserRouter basename="/app">
      <Routes>

        {/* Login */}
        <Route
          path="/login"
          element={<LoginPage />}
        />

        {/* Dashboard */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />

        {/* AI Copilot */}
        <Route
          path="/copilot"
          element={
            <ProtectedRoute>
              <CopilotPage />
            </ProtectedRoute>
          }
        />

        {/* FIR Intelligence */}
        <Route
          path="/fir"
          element={
            <ProtectedRoute>
              <FIRPage />
            </ProtectedRoute>
          }
        />

        {/* Criminal Network Analysis */}
        <Route
          path="/network"
          element={
            <ProtectedRoute>
              <NetworkPage />
            </ProtectedRoute>
          }
        />

        {/* Intelligence Reports */}
        <Route
          path="/reports"
          element={
            <ProtectedRoute>
              <ReportsPage />
            </ProtectedRoute>
          }
        />

        {/* Fallback */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}