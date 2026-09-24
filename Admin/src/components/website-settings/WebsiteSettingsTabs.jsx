import {
  FiBell,
  FiFileText,
  FiGlobe,
  FiImage,
  FiMail,
  FiSearch,
  FiShare2,
  FiUser,
} from "react-icons/fi";
import { NavLink } from "react-router-dom";

const settingsTabs = [
  {
    label: "Header",
    path: "/admin/dashboard/header",
    icon: FiImage,
  },
  {
    label: "Footer",
    path: "/admin/dashboard/footer",
    icon: FiFileText,
  },
  {
    label: "CEO",
    path: "/admin/dashboard/ceo",
    icon: FiUser,
  },
  {
    label: "General",
    path: "/admin/dashboard/general",
    icon: FiGlobe,
  },
  {
    label: "SEO",
    path: "/admin/dashboard/seo",
    icon: FiSearch,
  },
  {
    label: "Social Media",
    path: "/admin/dashboard/social-media",
    icon: FiShare2,
  },
  {
    label: "Contact",
    path: "/admin/dashboard/contact",
    icon: FiMail,
  },
  {
    label: "Newsletter",
    path: "/admin/dashboard/newsletter",
    icon: FiMail,
  },
  {
    label: "Announcement",
    path: "/admin/dashboard/announcement",
    icon: FiBell,
  },
];

const WebsiteSettingsTabs = () => {
  return (
    <div className="border-b border-slate-200 bg-white">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {settingsTabs.map((tab) => {
          const Icon = tab.icon;

          return (
            <NavLink
              key={tab.path}
              to={tab.path}
              className={({ isActive }) =>
                `flex min-h-14.5 items-center justify-center gap-2 border-b-2 px-3 py-3 text-sm font-medium transition ${
                  isActive
                    ? "border-[#0d9488] bg-[#0d9488]/5 text-[#0d9488]"
                    : "border-transparent text-slate-600 hover:bg-slate-50 hover:text-[#0d9488]"
                }`
              }
            >
              <Icon size={17} />
              <span>{tab.label}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default WebsiteSettingsTabs;