import { useState } from "react";
import { FiSave } from "react-icons/fi";
import Swal from "sweetalert2";

const emptyForm = {
  contactPhone: "",
  contactEmail: "",
  address: "",
  mapUrl: "",
  workingHours: "",
  emailRecipient: "",
  whatsappNumber: "",
  whatsappAutoMessage: "",
  successMessage: "",
  enableContactForm: false,
};

const ContactSettings = () => {
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem("contactSettings");
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

    localStorage.setItem("contactSettings", JSON.stringify(formData));

    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "success",
      title: "Contact settings saved",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-slate-800">Contact Settings</h2>
        <p className="mt-1 text-sm text-slate-500">
          Manage contact information shown on your website
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-xs font-semibold text-slate-700">
              Contact Phone
            </label>
            <input
              type="text"
              name="contactPhone"
              value={formData.contactPhone}
              onChange={handleChange}
              placeholder="+1 234 567 8900"
              className="h-11 w-full rounded-lg border border-slate-200 px-4 text-sm outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-semibold text-slate-700">
              Contact Email
            </label>
            <input
              type="email"
              name="contactEmail"
              value={formData.contactEmail}
              onChange={handleChange}
              placeholder="contact@yourstore.com"
              className="h-11 w-full rounded-lg border border-slate-200 px-4 text-sm outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold text-slate-700">
            Address
          </label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your full address..."
            rows={3}
            className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
          />
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold text-slate-700">
            Map URL (Google Maps Embed)
          </label>
          <input
            type="text"
            name="mapUrl"
            value={formData.mapUrl}
            onChange={handleChange}
            placeholder="https://www.google.com/maps/embed?pb=..."
            className="h-11 w-full rounded-lg border border-slate-200 px-4 text-sm outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
          />
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold text-slate-700">
            Working Hours
          </label>
          <textarea
            name="workingHours"
            value={formData.workingHours}
            onChange={handleChange}
            placeholder="Mon-Sat: 8:00am-4:00pm, Sun: Closed"
            rows={3}
            className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
          />
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-xs font-semibold text-slate-700">
              Email Recipient
            </label>
            <input
              type="email"
              name="emailRecipient"
              value={formData.emailRecipient}
              onChange={handleChange}
              placeholder="admin@yourstore.com"
              className="h-11 w-full rounded-lg border border-slate-200 px-4 text-sm outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-semibold text-slate-700">
              WhatsApp Number
            </label>
            <input
              type="text"
              name="whatsappNumber"
              value={formData.whatsappNumber}
              onChange={handleChange}
              placeholder="03314888596"
              className="h-11 w-full rounded-lg border border-slate-200 px-4 text-sm outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold text-slate-700">
            WhatsApp Auto Message
          </label>
          <textarea
            name="whatsappAutoMessage"
            value={formData.whatsappAutoMessage}
            onChange={handleChange}
            placeholder="Hello! I would like to know more about your services."
            rows={3}
            className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
          />
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold text-slate-700">
            Success Message
          </label>
          <input
            type="text"
            name="successMessage"
            value={formData.successMessage}
            onChange={handleChange}
            placeholder="Thank you for contacting us! We will get back to you soon."
            className="h-11 w-full rounded-lg border border-slate-200 px-4 text-sm outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
          />
        </div>

        <div className="flex items-center gap-6 border-t border-slate-200 pt-5">
          <label className="flex items-center gap-2 text-sm text-slate-700">
            <input
              type="checkbox"
              name="enableContactForm"
              checked={formData.enableContactForm}
              onChange={handleChange}
              className="h-4 w-4 rounded border-slate-300 text-[#0d9488] focus:ring-[#0d9488]"
            />
            Enable Contact Form
          </label>
        </div>

        <div className="border-t border-slate-200 pt-5">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-lg bg-[#0d9488] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0d9488]/20 transition hover:bg-[#0b7d72]"
          >
            <FiSave size={16} />
            Save Contact Settings
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactSettings;