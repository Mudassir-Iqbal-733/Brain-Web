import { useState } from "react";
import { FiSave } from "react-icons/fi";

const ContactSettings = () => {
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    address: "",
    mapUrl: "",
    workingHours: "",
    emailRecipient: "",
    whatsapp: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Settings Saved:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Contact Phone
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:border-teal-200 focus:border-[#0d9488] focus:ring-4 focus:ring-[#0d9488]/10"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Contact Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:border-teal-200 focus:border-[#0d9488] focus:ring-4 focus:ring-[#0d9488]/10"
          />
        </div>

      </div>

      <div className="mt-6">
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Address
        </label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          rows={4}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:border-teal-200 focus:border-[#0d9488] focus:ring-4 focus:ring-[#0d9488]/10"
        />
      </div>

      <div className="mt-6">
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Map URL (Google Maps Embed)
        </label>
        <input
          type="text"
          name="mapUrl"
          value={formData.mapUrl}
          onChange={handleChange}
          placeholder="https://www.google.com/maps/embed?pb=..."
          className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:border-teal-200 focus:border-[#0d9488] focus:ring-4 focus:ring-[#0d9488]/10"
        />
      </div>

      <div className="mt-6">
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Working Hours
        </label>
        <textarea
          name="workingHours"
          value={formData.workingHours}
          onChange={handleChange}
          rows={3}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:border-teal-200 focus:border-[#0d9488] focus:ring-4 focus:ring-[#0d9488]/10"
        />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Email Recipient
          </label>
          <input
            type="email"
            name="emailRecipient"
            value={formData.emailRecipient}
            onChange={handleChange}
            placeholder="admin@yourstore.com"
            className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:border-teal-200 focus:border-[#0d9488] focus:ring-4 focus:ring-[#0d9488]/10"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            WhatsApp Number
          </label>
          <input
            type="text"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:border-teal-200 focus:border-[#0d9488] focus:ring-4 focus:ring-[#0d9488]/10"
          />
        </div>

      </div>

      <div className="mt-8 flex justify-end">
        <button
          type="submit"
          className="flex items-center gap-2 rounded-xl bg-[#0d9488] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0d9488]/20 transition-all duration-200 hover:bg-[#0b7d72]"
        >
          <FiSave size={18} />
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default ContactSettings;