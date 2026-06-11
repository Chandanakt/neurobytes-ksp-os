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
    <div className="flex bg-[#071321] text-white">
      <AppSidebar />

      <div className="flex-1">
        <TopNavbar />

        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}