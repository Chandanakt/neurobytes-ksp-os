import type { ReactNode } from "react";
import AppSidebar from "./AppSidebar";
import TopNavbar from "./TopNavbar";

type Props = {
  children: ReactNode;
};

export default function DashboardLayout({
  children,
}: Props) {
  return (
    <div className="flex min-h-screen bg-[#071321] text-white overflow-x-hidden">
      
      <AppSidebar />

      <div className="flex-1 flex flex-col min-w-0">
        
        <TopNavbar />

        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-auto">
          {children}
        </main>

      </div>

    </div>
  );
}