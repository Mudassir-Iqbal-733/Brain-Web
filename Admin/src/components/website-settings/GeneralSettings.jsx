import { useState } from "react";
import {
  FiSettings,
  FiHelpCircle,
  FiStar,
  FiImage,
} from "react-icons/fi";

import SiteSettings from "./GeneralSettings/SiteSettings";
import FAQManagement from "./GeneralSettings/FAQManagement";
import TestimonialManagement from "./GeneralSettings/TestimonialManagement";
import SliderManagement from "./GeneralSettings/SliderManagement";

const tabs = [
  { id: "site", label: "Site Settings", icon: FiSettings },
  { id: "faqs", label: "FAQ Management", icon: FiHelpCircle },
  { id: "testimonials", label: "Testimonials", icon: FiStar },
  { id: "sliders", label: "Slider Management", icon: FiImage },
];

const GeneralSettings = () => {
  const [activeTab, setActiveTab] = useState("site");

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200">
        <div className="flex flex-wrap gap-1 p-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                  activeTab === tab.id
                    ? "bg-[#0d9488] text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="p-6">
        {activeTab === "site" && <SiteSettings />}
        {activeTab === "faqs" && <FAQManagement />}
        {activeTab === "testimonials" && <TestimonialManagement />}
        {activeTab === "sliders" && <SliderManagement />}
      </div>
    </div>
  );
};

export default GeneralSettings;