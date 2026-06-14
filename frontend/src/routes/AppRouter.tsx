import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import DashboardPage
from "../pages/Dashboard/DashboardPage";

import CopilotPage
from "../pages/Copilot/CopilotPage";

import FIRPage
from "../pages/FIR/FIRPage";

import NetworkPage
from "../pages/Network/NetworkPage";

import ReportsPage
from "../pages/Reports/ReportsPage";

import LoginPage
from "../pages/Login/LoginPage";

import ProtectedRoute
from "./ProtectedRoute";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/copilot"
          element={
            <ProtectedRoute>
              <CopilotPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/fir"
          element={
            <ProtectedRoute>
              <FIRPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/network"
          element={
            <ProtectedRoute>
              <NetworkPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/reports"
          element={
            <ProtectedRoute>
              <ReportsPage />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}