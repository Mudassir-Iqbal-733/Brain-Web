import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiCalendar,
  FiMapPin,
} from "react-icons/fi";
import Swal from "sweetalert2";
import SearchFilter from "../../components/common/SearchFilter";

const initialEvents = [];

const Events = () => {
  const navigate = useNavigate();

  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem("eventsList");
    return saved ? JSON.parse(saved) : initialEvents;
  });

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredEvents = events.filter((item) => {
    const matchSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      (item.venue || "").toLowerCase().includes(search.toLowerCase());

    const matchStatus =
      statusFilter === "all" ||
      (statusFilter === "active" && item.active) ||
      (statusFilter === "inactive" && !item.active);

    return matchSearch && matchStatus;
  });

  const handleReset = () => {
    setSearch("");
    setStatusFilter("all");
  };

  const handleDelete = async (id, title) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      html: `You want to delete <strong>${title}</strong>?<br/>This action cannot be undone.`,
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
      const updated = events.filter((item) => item.id !== id);
      setEvents(updated);
      localStorage.setItem("eventsList", JSON.stringify(updated));

      Swal.fire({
        title: "Deleted!",
        text: "Event has been deleted successfully.",
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

  const totalEvents = events.length;
  const activeEvents = events.filter((item) => item.active).length;
  const upcomingEvents = events.filter((item) => {
    if (!item.date) return false;
    return new Date(item.date) >= new Date();
  }).length;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Events</h1>
          <p className="mt-1 text-sm text-slate-500">
            Manage events and activities
          </p>
        </div>

        <Link
          to="/admin/events/add"
          className="flex items-center gap-2 rounded-xl bg-[#0d9488] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0d9488]/20 transition hover:bg-[#0b7d72]"
        >
          <FiPlus size={18} />
          Add Event
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border-l-4 border-[#0d9488] bg-white px-5 py-4 shadow-sm">
          <p className="text-xs font-medium text-slate-500">Total Events</p>
          <p className="mt-1 text-2xl font-bold text-slate-900">
            {totalEvents}
          </p>
        </div>

        <div className="rounded-xl border-l-4 border-green-500 bg-white px-5 py-4 shadow-sm">
          <p className="text-xs font-medium text-slate-500">Active Events</p>
          <p className="mt-1 text-2xl font-bold text-slate-900">
            {activeEvents}
          </p>
        </div>

        <div className="rounded-xl border-l-4 border-yellow-500 bg-white px-5 py-4 shadow-sm">
          <p className="text-xs font-medium text-slate-500">Upcoming Events</p>
          <p className="mt-1 text-2xl font-bold text-slate-900">
            {upcomingEvents}
          </p>
        </div>
      </div>

      <SearchFilter
        search={search}
        setSearch={setSearch}
        searchPlaceholder="Search events..."
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
        ]}
        onReset={handleReset}
      />

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-slate-200 bg-slate-50">
              <tr>
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                  Image
                </th>
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                  Title
                </th>
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                  Date
                </th>
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                  Venue
                </th>
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                  Status
                </th>
                <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wider text-slate-600">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {filteredEvents.length === 0 ? (
                <tr>
                  <td colSpan="6" className="px-5 py-16 text-center">
                    <FiCalendar
                      size={42}
                      className="mx-auto mb-3 text-slate-300"
                    />

                    <p className="text-sm text-slate-500">
                      No events found.{" "}
                      <Link
                        to="/admin/dashboard/events/add"
                        className="font-semibold text-[#0d9488] hover:underline"
                      >
                        Create your first event
                      </Link>
                    </p>
                  </td>
                </tr>
              ) : (
                filteredEvents.map((item) => (
                  <tr key={item.id} className="transition hover:bg-slate-50">
                    <td className="px-5 py-3">
                      <div className="h-12 w-16 overflow-hidden rounded-lg bg-slate-100">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-slate-300">
                            <FiCalendar size={18} />
                          </div>
                        )}
                      </div>
                    </td>

                    <td className="px-5 py-3">
                      <p className="text-sm font-semibold text-slate-900">
                        {item.title}
                      </p>
                    </td>

                    <td className="px-5 py-3">
                      <p className="text-sm text-slate-600">
                        {item.date
                          ? new Date(item.date).toLocaleDateString("en-GB", {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            })
                          : "—"}
                      </p>
                    </td>

                    <td className="px-5 py-3">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        {item.venue ? (
                          <>
                            <FiMapPin size={14} className="text-slate-400" />
                            {item.venue}
                          </>
                        ) : (
                          "—"
                        )}
                      </div>
                    </td>

                    <td className="px-5 py-3">
                      {item.active ? (
                        <span className="rounded-md bg-green-100 px-2.5 py-1 text-[11px] font-semibold text-green-700">
                          Active
                        </span>
                      ) : (
                        <span className="rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-500">
                          Inactive
                        </span>
                      )}
                    </td>

                    <td className="px-5 py-3">
                      <div className="flex items-center justify-end gap-3">
                        <Link
                          to={`/admin/dashboard/events/edit/${item.id}`}
                          className="text-blue-600 transition hover:text-blue-800"
                        >
                          <FiEdit2 size={17} />
                        </Link>

                        <button
                          type="button"
                          onClick={() => handleDelete(item.id, item.title)}
                          className="text-red-600 transition hover:text-red-800"
                        >
                          <FiTrash2 size={17} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Events;