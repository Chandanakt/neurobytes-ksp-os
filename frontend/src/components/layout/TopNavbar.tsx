import {
  Bell,
  Search,
  LogOut,
} from "lucide-react";

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
    <header className="h-16 bg-slate-950 border-b border-slate-800 flex items-center justify-between px-3 md:px-6">

      {/* Left Section */}

      <div className="flex items-center gap-3 md:gap-4 min-w-0">

        <img

            src="/Karnataka-Police.png"

            alt="Karnataka State Police"

            className="h-12 w-12 md:h-14 md:w-14 object-contain shrink-0 bg-white rounded-full p-1"

          />

        <div className="min-w-0">

          <h1 className="font-bold text-white text-sm md:text-base truncate">
            Karnataka State Police
          </h1>

          

        </div>

      </div>

      {/* Right Section */}

      <div className="flex items-center gap-2 md:gap-4">

        {/* Search Bar - Hidden on Mobile */}

        <div className="hidden md:flex items-center bg-slate-900 rounded-lg px-3 py-2 w-72 lg:w-96">

          <Search size={18} />

          <input
            className="bg-transparent outline-none ml-2 w-full text-white text-sm"
            placeholder="Search FIRs, suspects, locations..."
          />

        </div>

        {/* Notification */}

        <button className="p-2 hover:bg-slate-900 rounded-lg transition">
          <Bell
            size={20}
            className="text-white"
          />
        </button>

        {/* User Email */}

        <div className="hidden lg:flex bg-slate-900 px-4 py-2 rounded-full text-sm max-w-[220px] truncate">
          {user?.email || "Inspector"}
        </div>

        {/* Logout */}

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-2 md:px-4 py-2 rounded-lg transition-colors"
        >
          <LogOut size={16} />

          <span className="hidden md:inline">
            Logout
          </span>

        </button>

      </div>

    </header>
  );
}