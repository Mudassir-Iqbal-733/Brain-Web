import { useState, useEffect } from "react";
import {
  FiPlus,
  FiTrash2,
  FiEdit2,
  FiX,
  FiImage,
  FiMenu,
} from "react-icons/fi";

const SliderManagement = () => {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    title: "",
    subtitle: "",
    image: "",
    buttonText: "",
    buttonLink: "",
    active: true,
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("sliders") || "[]");
    setItems(saved);
  }, []);

  const saveToStorage = (newItems) => {
    localStorage.setItem("sliders", JSON.stringify(newItems));
    setItems(newItems);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const newItem = { ...form, id: Date.now() };
    saveToStorage([...items, newItem]);
    setForm({
      title: "",
      subtitle: "",
      image: "",
      buttonText: "",
      buttonLink: "",
      active: true,
    });
    setShowModal(false);
  };

  const handleDelete = (id) => {
    saveToStorage(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <div className="mb-4 flex items-center justify-between rounded-xl bg-gradient-to-r from-[#0d9488] to-cyan-500 px-4 py-3">
        <div className="flex items-center gap-2 text-white">
          <FiImage size={20} />
          <h3 className="font-bold">Slider Management</h3>
        </div>
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-[#0d9488] hover:bg-slate-100"
        >
          <FiPlus size={16} />
          Add New Slider
        </button>
      </div>

      <div className="space-y-3">
        {items.length === 0 ? (
          <p className="rounded-xl border border-dashed border-slate-300 p-6 text-center text-sm text-slate-500">
            No sliders yet. Click "Add New Slider" to create one.
          </p>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4"
            >
              <FiGripVertical className="text-slate-300" size={16} />
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-14 w-20 rounded-lg object-cover"
                />
              ) : (
                <div className="flex h-14 w-20 items-center justify-center rounded-lg bg-slate-100">
                  <FiImage className="text-slate-400" size={20} />
                </div>
              )}
              <div className="flex-1">
                <p className="font-semibold text-slate-800">{item.title}</p>
                <p className="text-xs text-slate-500">{item.subtitle}</p>
                <span
                  className={`mt-1 inline-block rounded-full px-2 py-0.5 text-xs font-semibold ${
                    item.active
                      ? "bg-green-100 text-green-600"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {item.active ? "Active" : "Inactive"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-blue-500 hover:text-blue-700">
                  <FiEdit2 size={16} />
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FiTrash2 size={16} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {showModal && (
        <Modal title="Add New Slider" onClose={() => setShowModal(false)}>
          <form onSubmit={handleAdd} className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Title
              </label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-[#0d9488] focus:ring-4 focus:ring-[#0d9488]/10"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Subtitle
              </label>
              <input
                type="text"
                value={form.subtitle}
                onChange={(e) =>
                  setForm({ ...form, subtitle: e.target.value })
                }
                className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-[#0d9488] focus:ring-4 focus:ring-[#0d9488]/10"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Image <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setForm({ ...form, image: e.target.files?.[0]?.name || "" })
                }
                required
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm"
              />
              <p className="mt-1 text-xs text-slate-400">
                Recommended: 1920×450px, JPG/PNG, Max 5MB
              </p>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Button Text
              </label>
              <input
                type="text"
                value={form.buttonText}
                onChange={(e) =>
                  setForm({ ...form, buttonText: e.target.value })
                }
                className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-[#0d9488] focus:ring-4 focus:ring-[#0d9488]/10"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Button Link
              </label>
              <input
                type="text"
                value={form.buttonLink}
                onChange={(e) =>
                  setForm({ ...form, buttonLink: e.target.value })
                }
                className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-[#0d9488] focus:ring-4 focus:ring-[#0d9488]/10"
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="sliderActive"
                checked={form.active}
                onChange={(e) => setForm({ ...form, active: e.target.checked })}
                className="h-4 w-4 rounded border-slate-300 text-[#0d9488] focus:ring-[#0d9488]/20"
              />
              <label
                htmlFor="sliderActive"
                className="text-sm font-medium text-slate-700"
              >
                Active
              </label>
            </div>

            <ModalFooter
              onCancel={() => setShowModal(false)}
              saveLabel="Save Slider"
            />
          </form>
        </Modal>
      )}
    </div>
  );
};

const Modal = ({ title, onClose, children }) => (
  <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 p-4">
    <div className="my-8 w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl">
      <div className="flex items-center justify-between bg-gradient-to-r from-[#0d9488] to-cyan-500 px-6 py-4">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <button
          type="button"
          onClick={onClose}
          className="text-white/80 hover:text-white"
        >
          <FiX size={20} />
        </button>
      </div>
      <div className="p-6">{children}</div>
    </div>
  </div>
);

const ModalFooter = ({ onCancel, saveLabel }) => (
  <div className="flex justify-end gap-3 border-t border-slate-100 pt-4">
    <button
      type="button"
      onClick={onCancel}
      className="rounded-xl border border-slate-200 bg-slate-100 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-200"
    >
      Cancel
    </button>
    <button
      type="submit"
      className="rounded-xl bg-[#0d9488] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0b7d72]"
    >
      {saveLabel}
    </button>
  </div>
);

export default SliderManagement;