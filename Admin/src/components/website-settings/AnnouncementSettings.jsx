import { useState, useEffect } from "react";
import { FiSave } from "react-icons/fi";
import Swal from "sweetalert2";

const emptyForm = {
  announcementText: "",
  type: "Info",
  backgroundColor: "#3b82f6",
  textColor: "#ffffff",
  linkText: "",
  linkUrl: "",
  startDate: "",
  endDate: "",
  enableAnnouncement: false,
  dismissible: false,
};

const AnnouncementSettings = () => {
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem("announcementSettings");
    return saved ? { ...emptyForm, ...JSON.parse(saved) } : emptyForm;
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("announcementSettings", JSON.stringify(formData));

    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "success",
      title: "Announcement settings saved",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-slate-800">
          Announcement Settings
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Manage the announcement bar shown on your website
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="mb-2 block text-xs font-semibold text-slate-700">
            Announcement Text
          </label>
          <textarea
            name="announcementText"
            value={formData.announcementText}
            onChange={handleChange}
            placeholder="Enter announcement text..."
            rows={4}
            className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
          />
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-xs font-semibold text-slate-700">
              Type
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="h-11 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
            >
              <option value="Info">Info</option>
              <option value="Success">Success</option>
              <option value="Warning">Warning</option>
              <option value="Error">Error</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-xs font-semibold text-slate-700">
              Background Color
            </label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                name="backgroundColor"
                value={formData.backgroundColor}
                onChange={handleChange}
                className="h-11 w-14 cursor-pointer rounded-lg border border-slate-200 p-1"
              />
              <input
                type="text"
                name="backgroundColor"
                value={formData.backgroundColor}
                onChange={handleChange}
                className="h-11 flex-1 rounded-lg border border-slate-200 px-4 text-sm outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-xs font-semibold text-slate-700">
              Text Color
            </label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                name="textColor"
                value={formData.textColor}
                onChange={handleChange}
                className="h-11 w-14 cursor-pointer rounded-lg border border-slate-200 p-1"
              />
              <input
                type="text"
                name="textColor"
                value={formData.textColor}
                onChange={handleChange}
                className="h-11 flex-1 rounded-lg border border-slate-200 px-4 text-sm outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-xs font-semibold text-slate-700">
              Link Text
            </label>
            <input
              type="text"
              name="linkText"
              value={formData.linkText}
              onChange={handleChange}
              placeholder="Learn More"
              className="h-11 w-full rounded-lg border border-slate-200 px-4 text-sm outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold text-slate-700">
            Link URL
          </label>
          <input
            type="text"
            name="linkUrl"
            value={formData.linkUrl}
            onChange={handleChange}
            placeholder="https://..."
            className="h-11 w-full rounded-lg border border-slate-200 px-4 text-sm outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
          />
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-xs font-semibold text-slate-700">
              Start Date
            </label>
            <input
              type="datetime-local"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="h-11 w-full rounded-lg border border-slate-200 px-4 text-sm outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-semibold text-slate-700">
              End Date
            </label>
            <input
              type="datetime-local"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="h-11 w-full rounded-lg border border-slate-200 px-4 text-sm outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
            />
          </div>
        </div>

        <div className="flex items-center gap-6 border-t border-slate-200 pt-5">
          <label className="flex items-center gap-2 text-sm text-slate-700">
            <input
              type="checkbox"
              name="enableAnnouncement"
              checked={formData.enableAnnouncement}
              onChange={handleChange}
              className="h-4 w-4 rounded border-slate-300 text-[#0d9488] focus:ring-[#0d9488]"
            />
            Enable Announcement
          </label>

          <label className="flex items-center gap-2 text-sm text-slate-700">
            <input
              type="checkbox"
              name="dismissible"
              checked={formData.dismissible}
              onChange={handleChange}
              className="h-4 w-4 rounded border-slate-300 text-[#0d9488] focus:ring-[#0d9488]"
            />
            Dismissible
          </label>
        </div>

        <div className="border-t border-slate-200 pt-5">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-lg bg-[#0d9488] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0d9488]/20 transition hover:bg-[#0b7d72]"
          >
            <FiSave size={16} />
            Save Announcement Settings
          </button>
        </div>
      </form>
    </div>
  );
};

export default AnnouncementSettings;