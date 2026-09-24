import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../../components/layout/Sidebar";
import MobileSidebar from "../../components/layout/MobileSidebar";
import Header from "../../components/layout/Header";

const DashboardLayout = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />

      <MobileSidebar
        open={mobileSidebarOpen}
        setOpen={setMobileSidebarOpen}
      />

      <div className="lg:pl-72">
        <Header setMobileSidebarOpen={setMobileSidebarOpen} />

        <main className="min-h-[calc(100vh-80px)] p-5 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;