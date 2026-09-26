import { useState } from "react";
import { FiSave } from "react-icons/fi";

const NewsletterSettings = () => {
  const [formData, setFormData] = useState({
    title: "Subscribe to our Newsletter",
    provider: "Mailchimp",
    description: "Stay updated with our latest news and offers.",
    apiKey: "••••••••",
    listId: "admin@airs.edu.pk",
    successMessage: "Thank you for subscribing!",
    errorMessage: "Something went wrong. Please try again.",
    enabled: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter Settings Saved:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:border-teal-200 focus:border-[#0d9488] focus:ring-4 focus:ring-[#0d9488]/10"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Provider
          </label>
          <select
            name="provider"
            value={formData.provider}
            onChange={handleChange}
            className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition-all hover:border-teal-200 focus:border-[#0d9488] focus:ring-4 focus:ring-[#0d9488]/10"
          >
            <option value="Mailchimp">Mailchimp</option>
            <option value="SendGrid">SendGrid</option>
            <option value="ConvertKit">ConvertKit</option>
            <option value="Brevo">Brevo</option>
            <option value="Custom">Custom</option>
          </select>
        </div>

      </div>

      <div className="mt-6">
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Description
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={3}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:border-teal-200 focus:border-[#0d9488] focus:ring-4 focus:ring-[#0d9488]/10"
        />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            API Key
          </label>
          <input
            type="password"
            name="apiKey"
            value={formData.apiKey}
            onChange={handleChange}
            className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:border-teal-200 focus:border-[#0d9488] focus:ring-4 focus:ring-[#0d9488]/10"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            List ID
          </label>
          <input
            type="text"
            name="listId"
            value={formData.listId}
            onChange={handleChange}
            className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:border-teal-200 focus:border-[#0d9488] focus:ring-4 focus:ring-[#0d9488]/10"
          />
        </div>

      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Success Message
          </label>
          <input
            type="text"
            name="successMessage"
            value={formData.successMessage}
            onChange={handleChange}
            className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:border-teal-200 focus:border-[#0d9488] focus:ring-4 focus:ring-[#0d9488]/10"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Error Message
          </label>
          <input
            type="text"
            name="errorMessage"
            value={formData.errorMessage}
            onChange={handleChange}
            className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:border-teal-200 focus:border-[#0d9488] focus:ring-4 focus:ring-[#0d9488]/10"
          />
        </div>

      </div>

      <div className="mt-6 flex items-center gap-3">
        <input
          type="checkbox"
          id="enabled"
          name="enabled"
          checked={formData.enabled}
          onChange={handleChange}
          className="h-4 w-4 rounded border-slate-300 text-[#0d9488] focus:ring-[#0d9488]/20"
        />
        <label htmlFor="enabled" className="text-sm font-medium text-slate-700">
          Enable Newsletter
        </label>
      </div>

      <div className="mt-8">
        <button
          type="submit"
          className="flex items-center gap-2 rounded-xl bg-[#0d9488] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0d9488]/20 transition-all duration-200 hover:bg-[#0b7d72]"
        >
          <FiSave size={18} />
          Save Newsletter Settings
        </button>
      </div>

    </form>
  );
};

export default NewsletterSettings;