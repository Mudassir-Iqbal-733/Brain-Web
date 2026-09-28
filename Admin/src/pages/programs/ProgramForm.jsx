import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FiX, FiSave, FiArrowLeft } from "react-icons/fi";

const emptyForm = {
  title: "",
  shortTitle: "",
  duration: "",
  award: "",
  eligibility: "",
  affiliation: "",
  recognition: "",
  ageLimit: "",
  pathway: "",
  fee: "",
  overview: "",
  whyStudy: "",
  whatYouWillStudy: "",
  careerOpportunities: "",
  specializations: "",
  admissionInfo: "",
  seoTitle: "",
  seoDescription: "",
  seoKeywords: "",
  status: "Active",
  featured: false,
  image: null,
};

const ProgramForm = ({ mode = "add", initialData = null, onSubmit }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (mode === "edit" && initialData) {
      setFormData({ ...emptyForm, ...initialData });
    }
  }, [mode, initialData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFormData({ ...formData, image: file });
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Program Title is required";
    }

    if (!formData.duration.trim()) {
      newErrors.duration = "Duration is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    onSubmit(formData);
  };

  const isEdit = mode === "edit";

  return (
    <div className="space-y-6">

      <div className="flex items-center gap-4">
        <Link
          to="/admin/dashboard/programs"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-100"
        >
          <FiArrowLeft size={18} />
        </Link>

        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            {isEdit ? "Edit Program" : "Add New Program"}
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            {isEdit
              ? "Update the program details"
              : "Create a new academic program for AIRS"}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-lg font-bold text-slate-800">
            Basic Information
          </h2>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Program Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g., Doctor of Physical Therapy"
                className={`h-12 w-full rounded-xl border bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-4 ${
                  errors.title
                    ? "border-red-300 focus:border-red-500 focus:ring-red-500/10"
                    : "border-slate-200 hover:border-teal-200 focus:border-[#0d9488] focus:ring-[#0d9488]/10"
                }`}
              />
              {errors.title && (
                <p className="mt-1 text-xs text-red-600">{errors.title}</p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Short Title
              </label>
              <input
                type="text"
                name="shortTitle"
                value={formData.shortTitle}
                onChange={handleChange}
                placeholder="e.g., DPT"
                className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-teal-200 focus:border-[#0d9488] focus:ring-4 focus:ring-[#0d9488]/10"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Duration <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                placeholder="e.g., 5 years (10 semesters)"
                className={`h-12 w-full rounded-xl border bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-4 ${
                  errors.duration
                    ? "border-red-300 focus:border-red-500 focus:ring-red-500/10"
                    : "border-slate-200 hover:border-teal-200 focus:border-[#0d9488] focus:ring-[#0d9488]/10"
                }`}
              />
              {errors.duration && (
                <p className="mt-1 text-xs text-red-600">{errors.duration}</p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Award
              </label>
              <input
                type="text"
                name="award"
                value={formData.award}
                onChange={handleChange}
                placeholder="e.g., Doctor of Physical Therapy (DPT)"
                className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-teal-200 focus:border-[#0d9488] focus:ring-4 focus:ring-[#0d9488]/10"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Eligibility
              </label>
              <textarea
                name="eligibility"
                value={formData.eligibility}
                onChange={handleChange}
                rows="3"
                placeholder="e.g., FSc Pre-Medical or equivalent"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-teal-200 focus:border-[#0d9488] focus:ring-4 focus:ring-[#0d9488]/10"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Affiliation
              </label>
              <input
                type="text"
                name="affiliation"
                value={formData.affiliation}
                onChange={handleChange}
                placeholder="e.g., University of Sargodha"
                className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-teal-200 focus:border-[#0d9488] focus:ring-4 focus:ring-[#0d9488]/10"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Recognition
              </label>
              <input
                type="text"
                name="recognition"
                value={formData.recognition}
                onChange={handleChange}
                placeholder="e.g., Allied Health Professional Council"
                className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-teal-200 focus:border-[#0d9488] focus:ring-4 focus:ring-[#0d9488]/10"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Age Limit
              </label>
              <input
                type="text"
                name="ageLimit"
                value={formData.ageLimit}
                onChange={handleChange}
                placeholder="e.g., No Age Limit"
                className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-teal-200 focus:border-[#0d9488] focus:ring-4 focus:ring-[#0d9488]/10"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Pathway
              </label>
              <input
                type="text"
                name="pathway"
                value={formData.pathway}
                onChange={handleChange}
                placeholder="e.g., Transfer to BS program"
                className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-teal-200 focus:border-[#0d9488] focus:ring-4 focus:ring-[#0d9488]/10"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Fee
              </label>
              <input
                type="text"
                name="fee"
                value={formData.fee}
                onChange={handleChange}
                placeholder="e.g., PKR 50,000/semester"
                className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-teal-200 focus:border-[#0d9488] focus:ring-4 focus:ring-[#0d9488]/10"
              />
            </div>

          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-lg font-bold text-slate-800">
            Program Content
          </h2>

          <div className="space-y-5">

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Overview
              </label>
              <textarea
                name="overview"
                value={formData.overview}
                onChange={handleChange}
                rows="4"
                placeholder="Program overview..."
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-teal-200 focus:border-[#0d9488] focus:ring-4 focus:ring-[#0d9488]/10"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Why Study This Program
              </label>
              <textarea
                name="whyStudy"
                value={formData.whyStudy}
                onChange={handleChange}
                rows="4"
                placeholder="Reasons to study this program..."
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-teal-200 focus:border-[#0d9488] focus:ring-4 focus:ring-[#0d9488]/10"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                What You'll Study
              </label>
              <textarea
                name="whatYouWillStudy"
                value={formData.whatYouWillStudy}
                onChange={handleChange}
                rows="4"
                placeholder="Curriculum highlights..."
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-teal-200 focus:border-[#0d9488] focus:ring-4 focus:ring-[#0d9488]/10"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Career Opportunities
              </label>
              <textarea
                name="careerOpportunities"
                value={formData.careerOpportunities}
                onChange={handleChange}
                rows="3"
                placeholder="Career paths..."
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-teal-200 focus:border-[#0d9488] focus:ring-4 focus:ring-[#0d9488]/10"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Specializations (comma separated)
              </label>
              <input
                type="text"
                name="specializations"
                value={formData.specializations}
                onChange={handleChange}
                placeholder="e.g., Orthopedic, Neurological, Pediatric"
                className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-teal-200 focus:border-[#0d9488] focus:ring-4 focus:ring-[#0d9488]/10"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Admission Information
              </label>
              <textarea
                name="admissionInfo"
                value={formData.admissionInfo}
                onChange={handleChange}
                rows="3"
                placeholder="Admission details..."
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-teal-200 focus:border-[#0d9488] focus:ring-4 focus:ring-[#0d9488]/10"
              />
            </div>

          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-lg font-bold text-slate-800">
            Image & SEO
          </h2>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Program Image
              </label>

              <div className="flex items-center gap-3">
                <input
                  type="file"
                  id="program-image"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />

                <label
                  htmlFor="program-image"
                  className="cursor-pointer rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Choose File
                </label>

                <span className="text-sm text-slate-500">
                  {formData.image && typeof formData.image !== "string"
                    ? formData.image.name
                    : formData.image
                    ? "Current image"
                    : "No file chosen"}
                </span>
              </div>

              <p className="mt-2 text-xs text-slate-500">
                Recommended: 800×500px, JPG/PNG, Max 5MB
              </p>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                SEO Title
              </label>
              <input
                type="text"
                name="seoTitle"
                value={formData.seoTitle}
                onChange={handleChange}
                placeholder="SEO Title"
                className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-teal-200 focus:border-[#0d9488] focus:ring-4 focus:ring-[#0d9488]/10"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                SEO Description
              </label>
              <textarea
                name="seoDescription"
                value={formData.seoDescription}
                onChange={handleChange}
                rows="3"
                placeholder="Meta description for SEO"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-teal-200 focus:border-[#0d9488] focus:ring-4 focus:ring-[#0d9488]/10"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                SEO Keywords
              </label>
              <input
                type="text"
                name="seoKeywords"
                value={formData.seoKeywords}
                onChange={handleChange}
                placeholder="keyword1, keyword2, keyword3"
                className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-teal-200 focus:border-[#0d9488] focus:ring-4 focus:ring-[#0d9488]/10"
              />
            </div>

          </div>

          <div className="mt-6 flex items-center gap-6 border-t border-slate-100 pt-5">
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                name="status"
                checked={formData.status === "Active"}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    status: e.target.checked ? "Active" : "Inactive",
                  })
                }
                className="h-5 w-5 rounded border-slate-300 text-[#0d9488] focus:ring-[#0d9488]"
              />
              <span className="text-sm font-semibold text-slate-700">
                Active
              </span>
            </label>

            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
                className="h-5 w-5 rounded border-slate-300 text-[#0d9488] focus:ring-[#0d9488]"
              />
              <span className="text-sm font-semibold text-slate-700">
                Featured
              </span>
            </label>
          </div>

        </div>

        <div className="flex items-center justify-end gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

          <button
            type="button"
            onClick={() => navigate("/admin/dashboard/programs")}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            <FiX size={16} />
            Cancel
          </button>

          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-xl bg-[#0d9488] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0d9488]/20 transition hover:bg-[#0b7d72]"
          >
            <FiSave size={16} />
            {isEdit ? "Update Program" : "Create Program"}
          </button>

        </div>

      </form>

    </div>
  );
};

export default ProgramForm;