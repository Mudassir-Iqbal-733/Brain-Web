import { useState } from "react";
import { programs } from "../data/programs";
import { submitApplication } from "../services/applicationService";

const initialFormData = {
  program: "",
  fullName: "",
  fatherName: "",
  dateOfBirth: "",
  gender: "",
  cnic: "",
  email: "",
  phone: "",
  whatsapp: "",
  city: "",
  address: "",
  qualification: "",
  passingYear: "",
  percentage: "",
  institution: "",
  campus: "",
  source: "",
  message: "",
};

const Apply = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-800 outline-none transition focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100";

  const labelClass =
    "mb-2 block text-sm font-semibold text-slate-700";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setSuccess(null);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.program) {
      newErrors.program = "Please select a program";
    }

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.fatherName.trim()) {
      newErrors.fatherName = "Father name is required";
    }

    if (!formData.cnic.trim()) {
      newErrors.cnic = "CNIC is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.qualification) {
      newErrors.qualification = "Please select your qualification";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccess(null);

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await submitApplication(formData);

      setSuccess(response);
      setFormData(initialFormData);
      setErrors({});
    } catch (error) {
      setErrors({
        submit: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-cyan-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <span className="inline-block rounded-full bg-cyan-800 px-4 py-2 text-sm font-semibold">
            ADMISSIONS
          </span>

          <h1 className="mt-5 max-w-3xl text-4xl font-bold md:text-5xl">
            Start Your Journey With Us
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-cyan-100">
            Complete the application form below and take the first step toward
            achieving your academic and professional goals.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl bg-white p-5 shadow-xl shadow-slate-200/60 sm:p-8 md:p-10">
            <div className="mb-10">
              <span className="text-sm font-bold uppercase tracking-wider text-cyan-700">
                Application Form
              </span>

              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                Apply for Admission
              </h2>

              <p className="mt-2 text-slate-500">
                Please provide your details carefully.
              </p>
            </div>

            {success && (
              <div className="mb-8 rounded-2xl border border-green-200 bg-green-50 p-5">
                <h3 className="font-bold text-green-800">
                  Application Submitted Successfully
                </h3>

                <p className="mt-1 text-sm text-green-700">
                  Your application ID is{" "}
                  <span className="font-bold">
                    {success.applicationId}
                  </span>
                </p>
              </div>
            )}

            {errors.submit && (
              <div className="mb-8 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700">
                {errors.submit}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-10">
              <section>
                <h3 className="mb-6 border-b border-slate-100 pb-3 text-xl font-bold text-slate-900">
                  Program Information
                </h3>

                <div>
                  <label className={labelClass}>
                    Select Program{" "}
                    <span className="text-red-500">*</span>
                  </label>

                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select a program</option>

                    {programs.map((program) => (
                      <option key={program.id} value={program.id}>
                        {program.name}
                      </option>
                    ))}
                  </select>

                  {errors.program && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.program}
                    </p>
                  )}
                </div>
              </section>

              <section>
                <h3 className="mb-6 border-b border-slate-100 pb-3 text-xl font-bold text-slate-900">
                  Personal Information
                </h3>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className={labelClass}>
                      Full Name <span className="text-red-500">*</span>
                    </label>

                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={inputClass}
                    />

                    {errors.fullName && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className={labelClass}>
                      Father Name <span className="text-red-500">*</span>
                    </label>

                    <input
                      type="text"
                      name="fatherName"
                      value={formData.fatherName}
                      onChange={handleChange}
                      placeholder="Enter father's name"
                      className={inputClass}
                    />

                    {errors.fatherName && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.fatherName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className={labelClass}>
                      Date of Birth
                    </label>

                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>Gender</label>

                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>
                      CNIC / B-Form{" "}
                      <span className="text-red-500">*</span>
                    </label>

                    <input
                      type="text"
                      name="cnic"
                      value={formData.cnic}
                      onChange={handleChange}
                      placeholder="XXXXX-XXXXXXX-X"
                      className={inputClass}
                    />

                    {errors.cnic && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.cnic}
                      </p>
                    )}
                  </div>
                </div>
              </section>

              <section>
                <h3 className="mb-6 border-b border-slate-100 pb-3 text-xl font-bold text-slate-900">
                  Contact Information
                </h3>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className={labelClass}>
                      Email <span className="text-red-500">*</span>
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={inputClass}
                    />

                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className={labelClass}>
                      Phone <span className="text-red-500">*</span>
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="03XX-XXXXXXX"
                      className={inputClass}
                    />

                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className={labelClass}>WhatsApp</label>

                    <input
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="03XX-XXXXXXX"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>City</label>

                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Enter your city"
                      className={inputClass}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className={labelClass}>Address</label>

                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Enter your complete address"
                      rows="3"
                      className={inputClass}
                    />
                  </div>
                </div>
              </section>

              <section>
                <h3 className="mb-6 border-b border-slate-100 pb-3 text-xl font-bold text-slate-900">
                  Academic Information
                </h3>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className={labelClass}>
                      Last Qualification{" "}
                      <span className="text-red-500">*</span>
                    </label>

                    <select
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select qualification</option>
                      <option value="matric">Matric</option>
                      <option value="intermediate">
                        Intermediate
                      </option>
                      <option value="bachelors">
                        Bachelor's
                      </option>
                      <option value="masters">Master's</option>
                      <option value="other">Other</option>
                    </select>

                    {errors.qualification && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.qualification}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className={labelClass}>
                      Passing Year
                    </label>

                    <input
                      type="number"
                      name="passingYear"
                      value={formData.passingYear}
                      onChange={handleChange}
                      placeholder="2026"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>
                      Percentage / Marks
                    </label>

                    <input
                      type="text"
                      name="percentage"
                      value={formData.percentage}
                      onChange={handleChange}
                      placeholder="e.g. 75%"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>
                      Previous Institution
                    </label>

                    <input
                      type="text"
                      name="institution"
                      value={formData.institution}
                      onChange={handleChange}
                      placeholder="School / College / University"
                      className={inputClass}
                    />
                  </div>
                </div>
              </section>

              <section>
                <h3 className="mb-6 border-b border-slate-100 pb-3 text-xl font-bold text-slate-900">
                  Additional Information
                </h3>

                <div className="space-y-6">
                  <div>
                    <label className={labelClass}>Campus</label>

                    <select
                      name="campus"
                      value={formData.campus}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select campus</option>
                      <option value="main">Main Campus</option>
                      <option value="other">Other Campus</option>
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>
                      How did you hear about us?
                    </label>

                    <select
                      name="source"
                      value={formData.source}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select an option</option>
                      <option value="google">Google</option>
                      <option value="facebook">Facebook</option>
                      <option value="instagram">Instagram</option>
                      <option value="friend">
                        Friend / Family
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>
                      Additional Message
                    </label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Anything else you would like us to know?"
                      rows="4"
                      className={inputClass}
                    />
                  </div>
                </div>
              </section>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-cyan-700 px-6 py-4 font-bold text-white transition hover:bg-cyan-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting
                  ? "Submitting Application..."
                  : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Apply;