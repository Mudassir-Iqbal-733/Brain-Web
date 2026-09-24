import { Outlet } from "react-router-dom";
import WebsiteSettingsTabs from "../../components/website-settings/WebsiteSettingsTabs";

const WebsiteSettingsLayout = () => {
  return (
    <div className="space-y-6">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="bg-linear-to-r from-[#0d9488] to-cyan-500 px-6 py-5">
          <h1 className="text-2xl font-bold text-white">
            Website Settings
          </h1>

          <p className="mt-1 text-sm text-white/80">
            Manage your AIRS website settings
          </p>
        </div>

        <WebsiteSettingsTabs />
      </div>

      <Outlet />
    </div>
  );
};

export default WebsiteSettingsLayout;