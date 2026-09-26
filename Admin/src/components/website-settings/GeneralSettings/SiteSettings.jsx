import { useState, useEffect } from "react";
import { FiSave } from "react-icons/fi";

const SiteSettings = () => {
  const [form, setForm] = useState({
    siteName: "Agile Institute of Rehabilitation Sciences",
    siteTagline: "Agile",
    siteDescription: "",
    favicon: "",
    timezone: "UTC",
    currency: "USD",
    language: "English",
    maintenanceMode: false,
    maintenanceMessage:
      "We are currently under maintenance. Please check back later.",
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("siteSettings") || "null");
    if (saved) setForm(saved);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem("siteSettings", JSON.stringify(form));
    alert("Site Settings Saved!");
  };

  return (
    <form onSubmit={handleSave} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Site Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="siteName"
            value={form.siteName}
            onChange={handleChange}
            required
            className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-[#0d9488] focus:ring-4 focus:ring-[#0d9488]/10"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Site Tagline
          </label>
          <input
            type="text"
            name="siteTagline"
            value={form.siteTagline}
            onChange={handleChange}
            className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-[#0d9488] focus:ring-4 focus:ring-[#0d9488]/10"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Site Description
        </label>
        <textarea
          name="siteDescription"
          value={form.siteDescription}
          onChange={handleChange}
          rows={3}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#0d9488] focus:ring-4 focus:ring-[#0d9488]/10"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Favicon
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setForm({ ...form, favicon: e.target.files?.[0]?.name || "" })
            }
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm"
          />
          <p className="mt-1 text-xs text-slate-400">
            Recommended: 32×32px or 64×64px, ICO/PNG, Max 1MB
          </p>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Timezone
          </label>
          <select
            name="timezone"
            value={form.timezone}
            onChange={handleChange}
            className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-[#0d9488] focus:ring-4 focus:ring-[#0d9488]/10"
          >
            <option value="UTC">UTC</option>
            <option value="Asia/Karachi">Asia/Karachi (PKT)</option>
            <option value="Asia/Dubai">Asia/Dubai</option>
            <option value="America/New_York">America/New_York</option>
            <option value="Europe/London">Europe/London</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Currency
          </label>
          <input
            type="text"
            name="currency"
            value={form.currency}
            onChange={handleChange}
            className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-[#0d9488] focus:ring-4 focus:ring-[#0d9488]/10"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Language
          </label>
          <select
            name="language"
            value={form.language}
            onChange={handleChange}
            className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-[#0d9488] focus:ring-4 focus:ring-[#0d9488]/10"
          >
            <option value="English">English</option>
            <option value="Urdu">Urdu</option>
            <option value="Arabic">Arabic</option>
          </select>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id="maintenanceMode"
          name="maintenanceMode"
          checked={form.maintenanceMode}
          onChange={handleChange}
          className="h-4 w-4 rounded border-slate-300 text-[#0d9488] focus:ring-[#0d9488]/20"
        />
        <label
          htmlFor="maintenanceMode"
          className="text-sm font-medium text-slate-700"
        >
          Enable Maintenance Mode
        </label>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Maintenance Message
        </label>
        <textarea
          name="maintenanceMessage"
          value={form.maintenanceMessage}
          onChange={handleChange}
          rows={3}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#0d9488] focus:ring-4 focus:ring-[#0d9488]/10"
        />
      </div>

      <button
        type="submit"
        className="flex items-center gap-2 rounded-xl bg-[#0d9488] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0b7d72]"
      >
        <FiSave size={16} />
        Save Site Settings
      </button>
    </form>
  );
};

export default SiteSettings;