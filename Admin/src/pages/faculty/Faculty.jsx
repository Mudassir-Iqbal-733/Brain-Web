import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiPlus, FiEdit2, FiTrash2 } from "react-icons/fi";
import Swal from "sweetalert2";
import SearchFilter from "../../components/common/SearchFilter";

const initialFaculty = [
  {
    id: 1,
    name: "Assistant Professor Muhammad Umair Hassan PT",
    designation: "Campus Coordinator",
    qualification: "MS-SPT* | DPT",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=faces",
    active: true,
    featured: false,
  },
  {
    id: 2,
    name: "Dr. Abdullah Zahid PT",
    designation: "Demonstrator",
    qualification: "DPT",
    image: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=400&h=400&fit=crop&crop=faces",
    active: true,
    featured: false,
  },
  {
    id: 3,
    name: "Dr. Anam Amin PT",
    designation: "Assistant Professor",
    qualification: "MSPT | DPT",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=faces",
    active: true,
    featured: false,
  },
];

const Faculty = () => {
  const navigate = useNavigate();

  const [faculty, setFaculty] = useState(() => {
    const saved = localStorage.getItem("facultyList");
    return saved ? JSON.parse(saved) : initialFaculty;
  });

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [featuredFilter, setFeaturedFilter] = useState("all");

  const filteredFaculty = faculty.filter((item) => {
    const matchSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.designation.toLowerCase().includes(search.toLowerCase());

    const matchStatus =
      statusFilter === "all" ||
      (statusFilter === "active" && item.active) ||
      (statusFilter === "inactive" && !item.active);

    const matchFeatured =
      featuredFilter === "all" ||
      (featuredFilter === "featured" && item.featured) ||
      (featuredFilter === "not-featured" && !item.featured);

    return matchSearch && matchStatus && matchFeatured;
  });

  const handleReset = () => {
    setSearch("");
    setStatusFilter("all");
    setFeaturedFilter("all");
  };

  const handleDelete = async (id, name) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      html: `You want to delete <strong>${name}</strong>?<br/>This action cannot be undone.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Delete",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#64748b",
      reverseButtons: true,
      customClass: {
        popup: "rounded-2xl",
        confirmButton: "rounded-lg px-5 py-2.5 text-sm font-semibold",
        cancelButton: "rounded-lg px-5 py-2.5 text-sm font-semibold",
      },
    });

    if (result.isConfirmed) {
      const updated = faculty.filter((item) => item.id !== id);
      setFaculty(updated);
      localStorage.setItem("facultyList", JSON.stringify(updated));

      Swal.fire({
        title: "Deleted!",
        text: "Faculty member has been deleted successfully.",
        icon: "success",
        confirmButtonColor: "#0d9488",
        timer: 2000,
        timerProgressBar: true,
        customClass: {
          popup: "rounded-2xl",
          confirmButton: "rounded-lg px-5 py-2.5 text-sm font-semibold",
        },
      });
    }
  };

  const totalFaculty = faculty.length;
  const activeMembers = faculty.filter((item) => item.active).length;
  const featuredMembers = faculty.filter((item) => item.featured).length;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Faculty / Staff
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Manage faculty members and staff
          </p>
        </div>

        <Link
          to="/admin/faculty/add"
          className="flex items-center gap-2 rounded-xl bg-[#0d9488] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0d9488]/20 transition hover:bg-[#0b7d72]"
        >
          <FiPlus size={18} />
          Add Faculty Member
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border-l-4 border-[#0d9488] bg-white px-5 py-4 shadow-sm">
          <p className="text-xs font-medium text-slate-500">Total Faculty</p>
          <p className="mt-1 text-2xl font-bold text-slate-900">
            {totalFaculty}
          </p>
        </div>

        <div className="rounded-xl border-l-4 border-green-500 bg-white px-5 py-4 shadow-sm">
          <p className="text-xs font-medium text-slate-500">Active Members</p>
          <p className="mt-1 text-2xl font-bold text-slate-900">
            {activeMembers}
          </p>
        </div>

        <div className="rounded-xl border-l-4 border-yellow-500 bg-white px-5 py-4 shadow-sm">
          <p className="text-xs font-medium text-slate-500">Featured Members</p>
          <p className="mt-1 text-2xl font-bold text-slate-900">
            {featuredMembers}
          </p>
        </div>
      </div>

      <SearchFilter
        search={search}
        setSearch={setSearch}
        searchPlaceholder="Search by name, designation..."
        filters={[
          {
            name: "status",
            label: "Status",
            value: statusFilter,
            onChange: setStatusFilter,
            options: [
              { value: "all", label: "All" },
              { value: "active", label: "Active" },
              { value: "inactive", label: "Inactive" },
            ],
          },
          {
            name: "featured",
            label: "Featured",
            value: featuredFilter,
            onChange: setFeaturedFilter,
            options: [
              { value: "all", label: "All" },
              { value: "featured", label: "Featured" },
              { value: "not-featured", label: "Not Featured" },
            ],
          },
        ]}
        onReset={handleReset}
      />

      {filteredFaculty.length === 0 ? (
        <div className="rounded-xl border border-slate-200 bg-white p-10 text-center shadow-sm">
          <p className="text-slate-500">No faculty members found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredFaculty.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover"
                />

                {item.active && (
                  <span className="absolute bottom-3 left-3 rounded-md bg-green-500 px-2 py-1 text-[10px] font-bold uppercase text-white">
                    Active
                  </span>
                )}

                {item.featured && (
                  <span className="absolute top-3 right-3 rounded-md bg-yellow-500 px-2 py-1 text-[10px] font-bold uppercase text-white">
                    Featured
                  </span>
                )}
              </div>

              <div className="p-5">
                <h3 className="text-base font-bold text-slate-900">
                  {item.name}
                </h3>

                {item.designation && (
                  <p className="mt-1 text-sm font-medium text-[#0d9488]">
                    {item.designation}
                  </p>
                )}

                {item.qualification && (
                  <p className="mt-1 text-xs text-slate-500">
                    {item.qualification}
                  </p>
                )}

                <div className="mt-4 flex items-center justify-end gap-3">
                  <Link
                    to={`/admin/faculty/edit/${item.id}`}
                    className="text-blue-600 transition hover:text-blue-800"
                  >
                    <FiEdit2 size={17} />
                  </Link>

                  <button
                    type="button"
                    onClick={() => handleDelete(item.id, item.name)}
                    className="text-red-600 transition hover:text-red-800"
                  >
                    <FiTrash2 size={17} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Faculty;