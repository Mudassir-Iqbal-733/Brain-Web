import { useState } from "react";
import { FiFileText, FiSave } from "react-icons/fi";

const FooterSettings = () => {
  const [formData, setFormData] = useState({
    footerDescription:
      "Agile Institute of Rehabilitation Sciences is a premier educational institution dedicated to excellence in rehabilitation sciences and allied health education. Affiliated with University of Sargodha.",
    copyrightText: "© 2026 Your Store. All rights reserved.",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      footerDescription: formData.footerDescription,
      copyrightText: formData.copyrightText,
    };

    console.log("Footer API Payload:", payload);
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 px-6 py-5">
        <h2 className="text-xl font-semibold text-slate-800">
          Footer Settings
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Manage your website footer information.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 p-6">
        <div>
          <label
            htmlFor="footerDescription"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Footer Description
          </label>

          <textarea
            id="footerDescription"
            name="footerDescription"
            rows={5}
            value={formData.footerDescription}
            onChange={handleChange}
            placeholder="Enter footer description"
            className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm leading-6 text-slate-700 outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
          />

          <p className="mt-2 text-xs text-slate-400">
            This description appears in the footer area.
          </p>
        </div>

        <div>
          <label
            htmlFor="copyrightText"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Copyright Text
          </label>

          <input
            id="copyrightText"
            name="copyrightText"
            type="text"
            value={formData.copyrightText}
            onChange={handleChange}
            placeholder="Enter copyright text"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
          />
        </div>

        <div className="flex justify-end border-t border-slate-100 pt-5">
          <button
            type="submit"
            className="flex items-center gap-2 rounded-xl bg-[#0d9488] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0f766e]"
          >
            <FiSave size={17} />
            Save Footer Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default FooterSettings;