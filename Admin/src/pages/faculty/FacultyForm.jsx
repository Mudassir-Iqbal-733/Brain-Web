import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import {
  FiUserPlus,
  FiX,
  FiSave,
  FiArrowLeft,
} from "react-icons/fi";
import {
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const emptyForm = {
  name: "",
  designation: "",
  department: "",
  qualification: "",
  biography: "",
  image: "",
  email: "",
  phone: "",
  seoTitle: "",
  seoDescription: "",
  linkedin: "",
  facebook: "",
  twitter: "",
  instagram: "",
  active: true,
  featured: false,
};

const FacultyForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);

  const [formData, setFormData] = useState(emptyForm);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isEdit) {
      const saved = localStorage.getItem("facultyList");
      const list = saved ? JSON.parse(saved) : [];
      const found = list.find((item) => String(item.id) === String(id));

      if (found) {
        setFormData({ ...emptyForm, ...found });
      } else {
        setError("Faculty member not found");
      }
    }
  }, [id, isEdit]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!formData.name.trim()) {
      setError("Full Name is required");
      return;
    }

    const saved = localStorage.getItem("facultyList");
    const list = saved ? JSON.parse(saved) : [];

    if (isEdit) {
      const updated = list.map((item) =>
        String(item.id) === String(id)
          ? { ...formData, id: item.id }
          : item
      );
      localStorage.setItem("facultyList", JSON.stringify(updated));
    } else {
      const newItem = { ...formData, id: Date.now() };
      localStorage.setItem(
        "facultyList",
        JSON.stringify([...list, newItem])
      );
    }

    navigate("/admin/dashboard/faculty", { replace: true });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link
            to="/admin/dashboard/faculty"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50"
          >
            <FiArrowLeft size={18} />
          </Link>

          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              {isEdit ? "Edit Faculty Member" : "Add Faculty Member"}
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              {isEdit
                ? "Update faculty member details"
                : "Add a new faculty or staff member"}
            </p>
          </div>
        </div>
      </div>

      {error && (
        <div className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-5 flex items-center gap-2 text-sm font-bold text-slate-800">
            <FiUserPlus size={16} className="text-[#0d9488]" />
            Basic Information
          </h2>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs font-semibold text-slate-700">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g., Dr. Muhammad Ali"
                className="h-11 w-full rounded-lg border border-slate-200 px-4 text-sm outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold text-slate-700">
                Designation
              </label>
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                placeholder="e.g., Professor, HOD"
                className="h-11 w-full rounded-lg border border-slate-200 px-4 text-sm outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold text-slate-700">
                Department
              </label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                placeholder="e.g., Physical Therapy"
                className="h-11 w-full rounded-lg border border-slate-200 px-4 text-sm outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold text-slate-700">
                Qualification
              </label>
              <input
                type="text"
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                placeholder="e.g., Ph.D., DPT, M.Sc."
                className="h-11 w-full rounded-lg border border-slate-200 px-4 text-sm outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
              />
            </div>
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-xs font-semibold text-slate-700">
              Biography
            </label>
            <textarea
              name="biography"
              value={formData.biography}
              onChange={handleChange}
              placeholder="Faculty bio..."
              rows={4}
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-sm font-bold text-slate-800">
            Contact & Media
          </h2>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs font-semibold text-slate-700">
                Profile Image
              </label>
              <input
                type="file"
                accept="image/*"
                className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none transition file:mr-3 file:rounded-md file:border-0 file:bg-slate-100 file:px-3 file:py-1 file:text-xs file:font-semibold file:text-slate-700 hover:file:bg-slate-200"
              />
              <p className="mt-1 text-[11px] text-slate-400">
                Recommended: 400×400px, JPG/PNG, Max 5MB
              </p>
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold text-slate-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="faculty@airs.edu.pk"
                className="h-11 w-full rounded-lg border border-slate-200 px-4 text-sm outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold text-slate-700">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+92 300 1234567"
                className="h-11 w-full rounded-lg border border-slate-200 px-4 text-sm outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold text-slate-700">
                SEO Title
              </label>
              <input
                type="text"
                name="seoTitle"
                value={formData.seoTitle}
                onChange={handleChange}
                placeholder="SEO Title"
                className="h-11 w-full rounded-lg border border-slate-200 px-4 text-sm outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
              />
            </div>
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-xs font-semibold text-slate-700">
              SEO Description
            </label>
            <textarea
              name="seoDescription"
              value={formData.seoDescription}
              onChange={handleChange}
              placeholder="Meta description"
              rows={3}
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-sm font-bold text-slate-800">
            Social Links
          </h2>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 flex items-center gap-2 text-xs font-semibold text-blue-600">
                <FaLinkedin size={14} />
                LinkedIn
              </label>
              <input
                type="text"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                placeholder="https://linkedin.com/in/username"
                className="h-11 w-full rounded-lg border border-slate-200 px-4 text-sm outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
              />
            </div>

            <div>
              <label className="mb-2 flex items-center gap-2 text-xs font-semibold text-blue-700">
                <FaFacebook size={14} />
                Facebook
              </label>
              <input
                type="text"
                name="facebook"
                value={formData.facebook}
                onChange={handleChange}
                placeholder="https://facebook.com/username"
                className="h-11 w-full rounded-lg border border-slate-200 px-4 text-sm outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
              />
            </div>

            <div>
              <label className="mb-2 flex items-center gap-2 text-xs font-semibold text-sky-500">
                <FaTwitter size={14} />
                Twitter
              </label>
              <input
                type="text"
                name="twitter"
                value={formData.twitter}
                onChange={handleChange}
                placeholder="https://twitter.com/username"
                className="h-11 w-full rounded-lg border border-slate-200 px-4 text-sm outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
              />
            </div>

            <div>
              <label className="mb-2 flex items-center gap-2 text-xs font-semibold text-pink-600">
                <FaInstagram size={14} />
                Instagram
              </label>
              <input
                type="text"
                name="instagram"
                value={formData.instagram}
                onChange={handleChange}
                placeholder="https://instagram.com/username"
                className="h-11 w-full rounded-lg border border-slate-200 px-4 text-sm outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
              />
            </div>
          </div>

          <div className="mt-6 flex items-center gap-6 border-t border-slate-200 pt-5">
            <label className="flex items-center gap-2 text-sm text-slate-700">
              <input
                type="checkbox"
                name="active"
                checked={formData.active}
                onChange={handleChange}
                className="h-4 w-4 rounded border-slate-300 text-[#0d9488] focus:ring-[#0d9488]"
              />
              Active
            </label>

            <label className="flex items-center gap-2 text-sm text-slate-700">
              <input
                type="checkbox"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
                className="h-4 w-4 rounded border-slate-300 text-[#0d9488] focus:ring-[#0d9488]"
              />
              Featured
            </label>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => navigate("/admin/dashboard/faculty")}
            className="flex items-center gap-2 rounded-lg bg-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-300"
          >
            <FiX size={16} />
            Cancel
          </button>

          <button
            type="submit"
            className="flex items-center gap-2 rounded-lg bg-[#0d9488] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0d9488]/20 transition hover:bg-[#0b7d72]"
          >
            <FiSave size={16} />
            {isEdit ? "Update Faculty" : "Add Faculty"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FacultyForm;