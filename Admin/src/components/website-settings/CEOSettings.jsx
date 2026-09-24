import { useState } from "react";
import { FiImage, FiSave } from "react-icons/fi";

const CEOSettings = () => {
  const [formData, setFormData] = useState({
    ceoName: "",
    ceoTitle: "",
    establishedYear: "2014",
    yearsOfExperience: "22 years",
    ceoEmail: "",
    ceoPhone: "",
    ceoMessage: "",
    ceoVision: "",
    ceoMission: "Message from CEO",
  });

  const [ceoImage, setCeoImage] = useState(null);
  const [signature, setSignature] = useState(null);

  const [ceoImagePreview, setCeoImagePreview] = useState("");
  const [signaturePreview, setSignaturePreview] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const preview = URL.createObjectURL(file);

    if (type === "ceoImage") {
      setCeoImage(file);
      setCeoImagePreview(preview);
    }

    if (type === "signature") {
      setSignature(file);
      setSignaturePreview(preview);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("ceoName", formData.ceoName);
    data.append("ceoTitle", formData.ceoTitle);
    data.append("establishedYear", formData.establishedYear);
    data.append("yearsOfExperience", formData.yearsOfExperience);
    data.append("ceoEmail", formData.ceoEmail);
    data.append("ceoPhone", formData.ceoPhone);
    data.append("ceoMessage", formData.ceoMessage);
    data.append("ceoVision", formData.ceoVision);
    data.append("ceoMission", formData.ceoMission);

    if (ceoImage) {
      data.append("ceoImage", ceoImage);
    }

    if (signature) {
      data.append("signature", signature);
    }

    console.log("CEO Settings API Payload:", data);
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 px-6 py-5">
        <h2 className="text-xl font-semibold text-slate-800">
          CEO Settings
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Manage CEO information, profile and messages.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-7 p-6">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label
              htmlFor="ceoName"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              CEO Name
            </label>

            <input
              id="ceoName"
              name="ceoName"
              type="text"
              value={formData.ceoName}
              onChange={handleChange}
              placeholder="Enter CEO Name"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
            />
          </div>

          <div>
            <label
              htmlFor="ceoTitle"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              CEO Title
            </label>

            <input
              id="ceoTitle"
              name="ceoTitle"
              type="text"
              value={formData.ceoTitle}
              onChange={handleChange}
              placeholder="e.g., Founder & CEO"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
            />
          </div>

          <div>
            <label
              htmlFor="establishedYear"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Established Year
            </label>

            <input
              id="establishedYear"
              name="establishedYear"
              type="number"
              value={formData.establishedYear}
              onChange={handleChange}
              placeholder="2014"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
            />
          </div>

          <div>
            <label
              htmlFor="yearsOfExperience"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Years of Experience
            </label>

            <input
              id="yearsOfExperience"
              name="yearsOfExperience"
              type="text"
              value={formData.yearsOfExperience}
              onChange={handleChange}
              placeholder="22 years"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
            />
          </div>

          <div>
            <label
              htmlFor="ceoEmail"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              CEO Email
            </label>

            <input
              id="ceoEmail"
              name="ceoEmail"
              type="email"
              value={formData.ceoEmail}
              onChange={handleChange}
              placeholder="ceo@company.com"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
            />
          </div>

          <div>
            <label
              htmlFor="ceoPhone"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              CEO Phone
            </label>

            <input
              id="ceoPhone"
              name="ceoPhone"
              type="tel"
              value={formData.ceoPhone}
              onChange={handleChange}
              placeholder="+1 234 567 8900"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="ceoImage"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              CEO Image
            </label>

            <div className="mb-3 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-4 border-purple-200 bg-slate-50">
              {ceoImagePreview ? (
                <img
                  src={ceoImagePreview}
                  alt="CEO preview"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center gap-1 text-slate-400">
                  <FiImage size={26} />
                  <span className="text-xs">CEO Image</span>
                </div>
              )}
            </div>

            <label
              htmlFor="ceoImage"
              className="flex cursor-pointer items-center overflow-hidden rounded-xl border border-slate-300 bg-white"
            >
              <span className="bg-[#0d9488] px-4 py-3 text-sm font-semibold text-white">
                Choose File
              </span>

              <span className="truncate px-4 text-sm text-slate-500">
                {ceoImage ? ceoImage.name : "No file chosen"}
              </span>

              <input
                id="ceoImage"
                name="ceoImage"
                type="file"
                accept="image/png,image/jpeg,image/jpg"
                onChange={(e) => handleFileChange(e, "ceoImage")}
                className="hidden"
              />
            </label>

            <p className="mt-2 text-xs text-slate-400">
              Recommended: 400×400px, JPG/PNG, Max 2MB
            </p>
          </div>

          <div>
            <label
              htmlFor="signature"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              CEO Signature
            </label>

            <div className="mb-3 flex h-32 w-full items-center justify-center rounded-xl border border-slate-200 bg-slate-50">
              {signaturePreview ? (
                <img
                  src={signaturePreview}
                  alt="CEO signature preview"
                  className="max-h-24 max-w-full object-contain p-3"
                />
              ) : (
                <div className="flex flex-col items-center gap-1 text-slate-400">
                  <FiImage size={26} />
                  <span className="text-xs">CEO Signature</span>
                </div>
              )}
            </div>

            <label
              htmlFor="signature"
              className="flex cursor-pointer items-center overflow-hidden rounded-xl border border-slate-300 bg-white"
            >
              <span className="bg-[#0d9488] px-4 py-3 text-sm font-semibold text-white">
                Choose File
              </span>

              <span className="truncate px-4 text-sm text-slate-500">
                {signature ? signature.name : "No file chosen"}
              </span>

              <input
                id="signature"
                name="signature"
                type="file"
                accept="image/png"
                onChange={(e) => handleFileChange(e, "signature")}
                className="hidden"
              />
            </label>

            <p className="mt-2 text-xs text-slate-400">
              Recommended: 300×100px, PNG with transparent background, Max 1MB
            </p>
          </div>
        </div>

        <div>
          <label
            htmlFor="ceoMessage"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            CEO Message
          </label>

          <textarea
            id="ceoMessage"
            name="ceoMessage"
            rows={6}
            value={formData.ceoMessage}
            onChange={handleChange}
            placeholder="Write CEO message here..."
            className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm leading-6 text-slate-700 outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
          />
        </div>

        <div>
          <label
            htmlFor="ceoVision"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            CEO Vision
          </label>

          <textarea
            id="ceoVision"
            name="ceoVision"
            rows={6}
            value={formData.ceoVision}
            onChange={handleChange}
            placeholder="Write CEO vision here..."
            className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm leading-6 text-slate-700 outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
          />
        </div>

        <div>
          <label
            htmlFor="ceoMission"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            CEO Mission
          </label>

          <textarea
            id="ceoMission"
            name="ceoMission"
            rows={6}
            value={formData.ceoMission}
            onChange={handleChange}
            placeholder="Write CEO mission here..."
            className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm leading-6 text-slate-700 outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
          />
        </div>

        <div className="flex justify-end border-t border-slate-100 pt-5">
          <button
            type="submit"
            className="flex items-center gap-2 rounded-xl bg-[#0d9488] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0f766e]"
          >
            <FiSave size={17} />
            Save CEO Settings
          </button>
        </div>
      </form>
    </div>
  );
};

export default CEOSettings;