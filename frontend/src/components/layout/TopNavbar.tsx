import { Bell, Search, Shield, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

export default function TopNavbar() {
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="h-16 bg-slate-950 border-b border-slate-800 flex items-center justify-between px-6">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <Shield className="text-[#D4AF37]" />

        <div>
          <h1 className="font-bold text-white">
            Karnataka State Police
          </h1>

          <p className="text-xs text-slate-400">
            NeuroBytes KSP OS
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <div className="flex items-center bg-slate-900 rounded-lg px-3 py-2 w-96">
          <Search size={18} />

          <input
            className="bg-transparent outline-none ml-2 w-full text-white"
            placeholder="Search FIRs, suspects, locations..."
          />
        </div>

        <Bell className="text-white cursor-pointer" />

        {/* Logged-in User */}
        <div className="bg-slate-900 px-4 py-2 rounded-full text-sm">
          {user?.email || "Inspector"}
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors"
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </header>
  );
}