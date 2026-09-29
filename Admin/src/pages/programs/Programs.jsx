import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  FiPlus,
  FiEdit,
  FiEye,
  FiTrash2,
} from "react-icons/fi";
import SearchFilter from "../../components/common/SearchFilter";

const initialPrograms = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=100&h=100&fit=crop",
    title: "ADP CS",
    duration: "4 Semesters (2 Years)",
    award: "N/A",
    status: "Active",
    featured: false,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&h=100&fit=crop",
    title: "ADP IT",
    duration: "4 Semesters (2 Years)",
    award: "N/A",
    status: "Active",
    featured: false,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop",
    title: "Doctor of Physical Therapy (DPT)",
    duration: "10 Semesters (5 Years)",
    award: "N/A",
    status: "Active",
    featured: false,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=100&h=100&fit=crop",
    title: "Pharmacy Technician",
    duration: "2 Years",
    award: "N/A",
    status: "Active",
    featured: false,
  },
];

const Programs = () => {
  const navigate = useNavigate();

  const [programs, setPrograms] = useState(initialPrograms);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [featuredFilter, setFeaturedFilter] = useState("All");

  const filteredPrograms = programs.filter((program) => {
    const matchesSearch = program.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || program.status === statusFilter;

    const matchesFeatured =
      featuredFilter === "All" ||
      (featuredFilter === "Yes" && program.featured) ||
      (featuredFilter === "No" && !program.featured);

    return matchesSearch && matchesStatus && matchesFeatured;
  });

  const totalPrograms = programs.length;
  const activePrograms = programs.filter((p) => p.status === "Active").length;
  const featuredPrograms = programs.filter((p) => p.featured).length;

  const handleReset = () => {
    setSearch("");
    setStatusFilter("All");
    setFeaturedFilter("All");
  };

  const handleDelete = async (program) => {
    const result = await Swal.fire({
      title: "Delete Program?",
      html: `Are you sure you want to delete <strong>"${program.title}"</strong>?<br/><br/><span style="font-size:12px;color:#dc2626;">This action cannot be undone.</span>`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#64748b",
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
      reverseButtons: true,
      focusCancel: true,
    });

    if (result.isConfirmed) {
      setPrograms(programs.filter((p) => p.id !== program.id));

      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: "Program deleted successfully",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            Academic Programs
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage all academic programs offered by AIRS
          </p>
        </div>

        <Link
          to="/admin/programs/add"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0d9488] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0d9488]/20 transition hover:bg-[#0b7d72]"
        >
          <FiPlus size={18} />
          Add New Program
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-xl border-l-4 border-[#0d9488] bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Total Programs</p>
          <p className="mt-1 text-3xl font-bold text-slate-800">
            {totalPrograms}
          </p>
        </div>

        <div className="rounded-xl border-l-4 border-green-500 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Active Programs</p>
          <p className="mt-1 text-3xl font-bold text-slate-800">
            {activePrograms}
          </p>
        </div>

        <div className="rounded-xl border-l-4 border-yellow-500 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">
            Featured Programs
          </p>
          <p className="mt-1 text-3xl font-bold text-slate-800">
            {featuredPrograms}
          </p>
        </div>
      </div>

      <SearchFilter
        search={search}
        setSearch={setSearch}
        searchPlaceholder="Search programs..."
        filters={[
          {
            name: "status",
            label: "Status",
            value: statusFilter,
            onChange: setStatusFilter,
            options: [
              { value: "All", label: "All" },
              { value: "Active", label: "Active" },
              { value: "Inactive", label: "Inactive" },
            ],
          },
          {
            name: "featured",
            label: "Featured",
            value: featuredFilter,
            onChange: setFeaturedFilter,
            options: [
              { value: "All", label: "All" },
              { value: "Yes", label: "Yes" },
              { value: "No", label: "No" },
            ],
          },
        ]}
        onReset={handleReset}
      />

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-600">
                  #
                </th>
                <th className="px-4 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-600">
                  Image
                </th>
                <th className="px-4 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-600">
                  Title
                </th>
                <th className="px-4 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-600">
                  Duration
                </th>
                <th className="px-4 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-600">
                  Award
                </th>
                <th className="px-4 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-600">
                  Status
                </th>
                <th className="px-4 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-600">
                  Featured
                </th>
                <th className="px-4 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-600">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredPrograms.map((program, index) => (
                <tr
                  key={program.id}
                  className="border-b border-slate-100 transition hover:bg-slate-50"
                >
                  <td className="px-4 py-4 text-sm text-slate-700">
                    {index + 1}
                  </td>

                  <td className="px-4 py-4">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="h-12 w-12 rounded-lg object-cover"
                    />
                  </td>

                  <td className="px-4 py-4 text-sm font-semibold text-slate-800">
                    {program.title}
                  </td>

                  <td className="px-4 py-4 text-sm text-slate-600">
                    {program.duration}
                  </td>

                  <td className="px-4 py-4 text-sm text-slate-600">
                    {program.award}
                  </td>

                  <td className="px-4 py-4">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                        program.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {program.status}
                    </span>
                  </td>

                  <td className="px-4 py-4 text-sm text-slate-500">
                    {program.featured ? "Yes" : "—"}
                  </td>

                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() =>
                          navigate(`/admin/programs/edit/${program.id}`)
                        }
                        className="text-blue-600 transition hover:text-blue-800"
                        title="Edit"
                      >
                        <FiEdit size={17} />
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          navigate(`/admin/programs/view/${program.id}`)
                        }
                        className="text-slate-600 transition hover:text-slate-800"
                        title="View"
                      >
                        <FiEye size={17} />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDelete(program)}
                        className="text-red-600 transition hover:text-red-800"
                        title="Delete"
                      >
                        <FiTrash2 size={17} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredPrograms.length === 0 && (
                <tr>
                  <td
                    colSpan="8"
                    className="px-4 py-12 text-center text-sm text-slate-500"
                  >
                    No programs found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Programs;