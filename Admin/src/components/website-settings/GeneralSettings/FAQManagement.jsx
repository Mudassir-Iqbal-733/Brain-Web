import { useState, useEffect } from "react";
import {
  FiPlus,
  FiTrash2,
  FiEdit2,
  FiX,
  FiHelpCircle,
  FiMenu,
} from "react-icons/fi";

const FAQManagement = () => {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    question: "",
    answer: "",
    category: "",
    order: "",
    active: true,
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("faqs") || "[]");
    setItems(saved);
  }, []);

  const saveToStorage = (newItems) => {
    localStorage.setItem("faqs", JSON.stringify(newItems));
    setItems(newItems);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const newItem = { ...form, id: Date.now() };
    saveToStorage([...items, newItem]);
    setForm({ question: "", answer: "", category: "", order: "", active: true });
    setShowModal(false);
  };

  const handleDelete = (id) => {
    saveToStorage(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <div className="mb-4 flex items-center justify-between rounded-xl bg-gradient-to-r from-[#0d9488] to-cyan-500 px-4 py-3">
        <div className="flex items-center gap-2 text-white">
          <FiHelpCircle size={20} />
          <h3 className="font-bold">FAQ Management</h3>
        </div>
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-[#0d9488] hover:bg-slate-100"
        >
          <FiPlus size={16} />
          Add FAQ
        </button>
      </div>

      <div className="space-y-3">
        {items.length === 0 ? (
          <p className="rounded-xl border border-dashed border-slate-300 p-6 text-center text-sm text-slate-500">
            No FAQs yet. Click "Add FAQ" to create one.
          </p>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4"
            >
              <FiGripVertical className="mt-1 text-slate-300" size={16} />
              <div className="flex-1">
                <p className="font-semibold text-slate-800">{item.question}</p>
                <p className="mt-1 text-sm text-slate-600">{item.answer}</p>
                {item.category && (
                  <p className="mt-1 text-xs text-slate-400">
                    Category: {item.category}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                    item.active
                      ? "bg-green-100 text-green-600"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {item.active ? "Active" : "Inactive"}
                </span>
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
        <Modal title="Add New FAQ" onClose={() => setShowModal(false)}>
          <form onSubmit={handleAdd} className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Question <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={form.question}
                onChange={(e) => setForm({ ...form, question: e.target.value })}
                required
                className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-[#0d9488] focus:ring-4 focus:ring-[#0d9488]/10"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Answer <span className="text-red-500">*</span>
              </label>
              <textarea
                value={form.answer}
                onChange={(e) => setForm({ ...form, answer: e.target.value })}
                rows={4}
                required
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#0d9488] focus:ring-4 focus:ring-[#0d9488]/10"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Category
              </label>
              <input
                type="text"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                placeholder="e.g., General, Shipping, Payment"
                className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-[#0d9488] focus:ring-4 focus:ring-[#0d9488]/10"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Order
              </label>
              <input
                type="number"
                value={form.order}
                onChange={(e) => setForm({ ...form, order: e.target.value })}
                className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-[#0d9488] focus:ring-4 focus:ring-[#0d9488]/10"
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="faqActive"
                checked={form.active}
                onChange={(e) => setForm({ ...form, active: e.target.checked })}
                className="h-4 w-4 rounded border-slate-300 text-[#0d9488] focus:ring-[#0d9488]/20"
              />
              <label
                htmlFor="faqActive"
                className="text-sm font-medium text-slate-700"
              >
                Active
              </label>
            </div>

            <ModalFooter
              onCancel={() => setShowModal(false)}
              saveLabel="Save FAQ"
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

export default FAQManagement;