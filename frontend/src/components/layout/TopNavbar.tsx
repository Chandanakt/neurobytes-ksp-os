import { Bell, Search, Shield } from "lucide-react";

export default function TopNavbar() {
  return (
    <header className="h-16 bg-slate-950 border-b border-slate-800 flex items-center justify-between px-6">
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

      <div className="flex items-center gap-4">
        <div className="flex items-center bg-slate-900 rounded-lg px-3 py-2 w-96">
          <Search size={18} />
          <input
            className="bg-transparent outline-none ml-2 w-full"
            placeholder="Search FIRs, suspects, locations..."
          />
        </div>

        <Bell />

        <div className="bg-[#D4AF37] text-black px-4 py-2 rounded-full font-semibold">
          Inspector
        </div>
      </div>
    </header>
  );
}