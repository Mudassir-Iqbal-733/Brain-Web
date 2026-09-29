import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import {
  FiCalendar,
  FiX,
  FiSave,
  FiArrowLeft,
} from "react-icons/fi";

const emptyForm = {
  title: "",
  description: "",
  date: "",
  venue: "",
  startTime: "",
  endTime: "",
  image: "",
  registrationLink: "",
  seoTitle: "",
  seoDescription: "",
  active: true,
  featured: false,
};

const EventForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);

  const [formData, setFormData] = useState(emptyForm);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isEdit) {
      const saved = localStorage.getItem("eventsList");
      const list = saved ? JSON.parse(saved) : [];
      const found = list.find((item) => String(item.id) === String(id));

      if (found) {
        setFormData({ ...emptyForm, ...found });
      } else {
        setError("Event not found");
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

    if (!formData.title.trim()) {
      setError("Event Title is required");
      return;
    }

    const saved = localStorage.getItem("eventsList");
    const list = saved ? JSON.parse(saved) : [];

    if (isEdit) {
      const updated = list.map((item) =>
        String(item.id) === String(id)
          ? { ...formData, id: item.id }
          : item
      );
      localStorage.setItem("eventsList", JSON.stringify(updated));
    } else {
      const newItem = { ...formData, id: Date.now() };
      localStorage.setItem(
        "eventsList",
        JSON.stringify([...list, newItem])
      );
    }

    navigate("/admin/dashboard/events", { replace: true });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link
            to="/admin/dashboard/events"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50"
          >
            <FiArrowLeft size={18} />
          </Link>

          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              {isEdit ? "Edit Event" : "Add New Event"}
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              {isEdit
                ? "Update event details"
                : "Create a new event for your website"}
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
            <FiCalendar size={16} className="text-[#0d9488]" />
            Event Information
          </h2>

          <div className="space-y-5">
            <div>
              <label className="mb-2 block text-xs font-semibold text-slate-700">
                Event Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter event title"
                className="h-11 w-full rounded-lg border border-slate-200 px-4 text-sm outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold text-slate-700">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Event description..."
                rows={5}
                className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
              />
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-semibold text-slate-700">
                  Event Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="h-11 w-full rounded-lg border border-slate-200 px-4 text-sm outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold text-slate-700">
                  Venue
                </label>
                <input
                  type="text"
                  name="venue"
                  value={formData.venue}
                  onChange={handleChange}
                  placeholder="Event venue"
                  className="h-11 w-full rounded-lg border border-slate-200 px-4 text-sm outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold text-slate-700">
                  Start Time
                </label>
                <input
                  type="time"
                  name="startTime"
                  value={formData.startTime}
                  onChange={handleChange}
                  className="h-11 w-full rounded-lg border border-slate-200 px-4 text-sm outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold text-slate-700">
                  End Time
                </label>
                <input
                  type="time"
                  name="endTime"
                  value={formData.endTime}
                  onChange={handleChange}
                  className="h-11 w-full rounded-lg border border-slate-200 px-4 text-sm outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-sm font-bold text-slate-800">
            Media & Links
          </h2>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs font-semibold text-slate-700">
                Featured Image
              </label>
              <input
                type="file"
                accept="image/*"
                className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none transition file:mr-3 file:rounded-md file:border-0 file:bg-slate-100 file:px-3 file:py-1 file:text-xs file:font-semibold file:text-slate-700 hover:file:bg-slate-200"
              />
              <p className="mt-1 text-[11px] text-slate-400">
                Recommended: 1200×600px, JPG/PNG, Max 5MB
              </p>
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold text-slate-700">
                Registration Link
              </label>
              <input
                type="text"
                name="registrationLink"
                value={formData.registrationLink}
                onChange={handleChange}
                placeholder="https://..."
                className="h-11 w-full rounded-lg border border-slate-200 px-4 text-sm outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
              />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-sm font-bold text-slate-800">SEO</h2>

          <div className="space-y-5">
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

            <div>
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
            onClick={() => navigate("/admin/dashboard/events")}
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
            {isEdit ? "Update Event" : "Create Event"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;