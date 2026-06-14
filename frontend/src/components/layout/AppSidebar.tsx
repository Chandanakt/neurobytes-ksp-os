import {
  LayoutDashboard,
  Bot,
  FileText,
  Network,
  BarChart3,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";

const items = [
  {
    title: "Command Center",
    icon: LayoutDashboard,
    path: "/",
  },
  {
    title: "AI Copilot",
    icon: Bot,
    path: "/copilot",
  },
  {
    title: "FIR Center",
    icon: FileText,
    path: "/fir",
  },
  {
    title: "Network Analysis",
    icon: Network,
    path: "/network",
  },
  {
    title: "Reports",
    icon: BarChart3,
    path: "/reports",
  },
];

export default function AppSidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-slate-950 border-r border-slate-800 min-h-screen">
      {/* Logo Section */}
      <div className="p-6 border-b border-slate-800">
        <h2 className="text-xl font-bold text-[#D4AF37]">
          NeuroBytes
        </h2>

        <p className="text-xs text-slate-400 mt-1">
          KSP Intelligence OS
        </p>
      </div>

      {/* Navigation */}
      <div className="p-3 space-y-2">
        {items.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.title}
              to={item.path}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                isActive
                  ? "bg-[#0A2342] text-[#D4AF37] border border-[#D4AF37]/30"
                  : "hover:bg-slate-900 text-slate-300"
              }`}
            >
              <item.icon size={18} />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}