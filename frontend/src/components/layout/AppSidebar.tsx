import {
  LayoutDashboard,
  Bot,
  FileText,
  Network,
  BarChart3,
  Menu,
  X,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

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

  const [open, setOpen] =
    useState(false);

  const SidebarContent = () => (
    <>
      {/* Logo */}
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
          const isActive =
            location.pathname === item.path;

          return (
            <Link
              key={item.title}
              to={item.path}
              onClick={() => setOpen(false)}
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
    </>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-slate-900 p-2 rounded-lg border border-slate-700"
      >
        <Menu size={22} />
      </button>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 bg-slate-950 border-r border-slate-800 min-h-screen flex-col">
        <SidebarContent />
      </aside>

      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-slate-950 border-r border-slate-800 z-50 transform transition-transform duration-300 lg:hidden ${
          open
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setOpen(false)}
          >
            <X size={22} />
          </button>
        </div>

        <SidebarContent />
      </aside>
    </>
  );
}