import { useState } from "react";
import { FiEdit3, FiSend, FiCheck } from "react-icons/fi";

const Apply = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    email: "",
    phone: "",
    program: "",
    qualification: "",
    message: "",
    agreement: false,
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

    console.log("Application Data:", formData);

  };

  return (
    <section className="min-h-screen bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_35px_rgba(15,23,42,0.08)]">
          <div className="bg-gradient-to-r from-[#0d9488] to-cyan-500 px-6 py-6 sm:px-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-white">
                <FiEdit3 size={22} />
              </div>

              <div>
                <h1 className="text-xl font-bold text-white sm:text-2xl">
                  Apply Now
                </h1>
                <p className="mt-1 text-xs text-white/80 sm:text-sm">
                  Fill out the form below to start your application
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-sm font-semibold text-slate-800"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>

                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
                />
              </div>

              <div>
                <label
                  htmlFor="fatherName"
                  className="mb-2 block text-sm font-semibold text-slate-800"
                >
                  Father's Name <span className="text-red-500">*</span>
                </label>

                <input
                  id="fatherName"
                  name="fatherName"
                  type="text"
                  value={formData.fatherName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your father's name"
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-800"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-slate-800"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
                />
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="program"
                className="mb-2 block text-sm font-semibold text-slate-800"
              >
                Select Program <span className="text-red-500">*</span>
              </label>

              <select
                id="program"
                name="program"
                value={formData.program}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
              >
                <option value="">-- Select a program --</option>
                <option value="DPT">
                  Doctor of Physical Therapy (DPT)
                </option>
                <option value="ADP Computer Science">
                  ADP Computer Science
                </option>
                <option value="ADP Information Technology">
                  ADP Information Technology
                </option>
                <option value="Pharmacy Technician">
                  Pharmacy Technician
                </option>
              </select>
            </div>

            <div className="mt-5">
              <label
                htmlFor="qualification"
                className="mb-2 block text-sm font-semibold text-slate-800"
              >
                Qualification
              </label>

              <input
                id="qualification"
                name="qualification"
                type="text"
                value={formData.qualification}
                onChange={handleChange}
                placeholder="e.g., FSc Pre-Medical, ICS, Matric"
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-slate-800"
              >
                Message / Additional Information
              </label>

              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Any additional information you'd like to share..."
                className="w-full resize-none rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
              />
            </div>

            <div className="mt-5">
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  name="agreement"
                  checked={formData.agreement}
                  onChange={handleChange}
                  required
                  className="mt-1 h-4 w-4 accent-[#0d9488]"
                />

                <span className="text-sm leading-6 text-slate-500">
                  I confirm that the information provided is correct and agree
                  to the terms and conditions.
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#0d9488] px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:bg-teal-700 hover:shadow-lg hover:shadow-[#0d9488]/20"
            >
              <FiSend size={17} />
              Submit Application
            </button>

            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
              <FiCheck size={14} className="text-[#0d9488]" />
              Your information will be kept secure
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Apply;