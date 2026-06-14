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
    <div className="flex min-h-screen bg-[#071321] text-white">
      <AppSidebar />

      <div className="flex-1 flex flex-col">
        <TopNavbar />

        <main className="flex-1 p-8 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}