import { useState } from "react";
import { FiImage, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const HeaderSettings = () => {
  const [formData, setFormData] = useState("");

  const [logo, setLogo] = useState(null);
  const [logoPreview, setLogoPreview] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogoChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setLogo(file);
    setLogoPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("logo", logo || "");
    data.append("logoText", formData.logoText);
    data.append("phone", formData.phone);
    data.append("email", formData.email);
    data.append("address", formData.address);

    console.log("API Payload:", {
      logo,
      logoText: formData.logoText,
      phone: formData.phone,
      email: formData.email,
      address: formData.address,
    });

    console.log("FormData:", data);
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 px-6 py-5">
        <h2 className="text-xl font-semibold text-slate-800">
          Header Settings
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Manage your website header information.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="logo"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Logo Image
            </label>

            <div className="mb-3 flex h-20 w-28 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
              {logoPreview ? (
                <img
                  src={logoPreview}
                  alt="Logo preview"
                  className="h-full w-full object-contain p-2"
                />
              ) : (
                <div className="flex flex-col items-center gap-1 text-slate-400">
                  <FiImage size={24} />
                  <span className="text-xs">AIRS Logo</span>
                </div>
              )}
            </div>

            <label
              htmlFor="logo"
              className="flex cursor-pointer items-center overflow-hidden rounded-xl border border-slate-300 bg-white"
            >
              <span className="bg-[#0d9488] px-4 py-3 text-sm font-semibold text-white">
                Choose File
              </span>

              <span className="truncate px-4 text-sm text-slate-500">
                {logo ? logo.name : "No file chosen"}
              </span>

              <input
                id="logo"
                name="logo"
                type="file"
                accept="image/png,image/jpeg,image/jpg"
                onChange={handleLogoChange}
                className="hidden"
              />
            </label>

            <p className="mt-2 text-xs text-slate-400">
              Recommended: 200×60px, PNG/JPG, Max 2MB
            </p>
          </div>

          <div>
            <label
              htmlFor="logoText"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Logo Text
            </label>

            <input
              id="logoText"
              name="logoText"
              type="text"
              value={formData.logoText}
              onChange={handleChange}
              placeholder="Enter logo text"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Phone Number
            </label>

            <div className="relative">
              <FiPhone
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 text-sm text-slate-700 outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Email Address
            </label>

            <div className="relative">
              <FiMail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
                className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 text-sm text-slate-700 outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <label
              htmlFor="address"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Address
            </label>

            <div className="relative">
              <FiMapPin
                size={18}
                className="absolute left-4 top-4 text-slate-400"
              />

              <textarea
                id="address"
                name="address"
                rows={3}
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter website address"
                className="w-full resize-none rounded-xl border border-slate-200 py-3 pl-11 pr-4 text-sm text-slate-700 outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end border-t border-slate-100 pt-5">
          <button
            type="submit"
            className="rounded-xl bg-[#0d9488] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0f766e]"
          >
            Save Header Settings
          </button>
        </div>
      </form>
    </div>
  );
};

export default HeaderSettings;