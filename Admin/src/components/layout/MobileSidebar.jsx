import {
  FiBookOpen,
  FiCalendar,
  FiChevronDown,
  FiChevronRight,
  FiFileText,
  FiGrid,
  FiLayers,
  FiMail,
  FiMessageSquare,
  FiSettings,
  FiUserCheck,
  FiUsers,
  FiX,
} from "react-icons/fi";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// import logo from "../../assets/logo.png";

const MobileSidebar = ({ open, setOpen }) => {
  const location = useLocation();

  const [academicsOpen, setAcademicsOpen] = useState(true);
  const [contentOpen, setContentOpen] = useState(false);
  const [inquiriesOpen, setInquiriesOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const closeSidebar = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        onClick={closeSidebar}
        className={`fixed inset-0 z-40 bg-slate-950/60 transition-opacity lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col bg-slate-950 text-white shadow-2xl transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-20 items-center justify-between border-b border-slate-800 px-5">
          <Link
            to="/admin/dashboard"
            onClick={closeSidebar}
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-white">
              <img
                // src={logo}
                alt="AIRS"
                className="h-full w-full object-contain p-1"
              />
            </div>

            <div>
              <h1 className="text-lg font-bold">AIRS</h1>
              <p className="text-xs text-slate-400">Admin Panel</p>
            </div>
          </Link>

          <button
            type="button"
            onClick={closeSidebar}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition hover:bg-white/5 hover:text-white"
            aria-label="Close menu"
          >
            <FiX size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-6">
          <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-wider text-slate-500">
            Main Menu
          </p>

          <nav className="space-y-2">
            <Link
              to="/admin/dashboard"
              onClick={closeSidebar}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold ${
                isActive("/admin/dashboard")
                  ? "bg-[#0d9488] text-white"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              <FiGrid size={19} />
              Dashboard
            </Link>

            <div>
              <button
                type="button"
                onClick={() => setAcademicsOpen(!academicsOpen)}
                className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-slate-300 hover:bg-white/5 hover:text-white"
              >
                <span className="flex items-center gap-3">
                  <FiBookOpen size={19} />
                  Academics
                </span>

                {academicsOpen ? (
                  <FiChevronDown size={17} />
                ) : (
                  <FiChevronRight size={17} />
                )}
              </button>

              {academicsOpen && (
                <div className="mt-1 space-y-1 pl-4">
                  <Link
                    to="/admin/programs"
                    onClick={closeSidebar}
                    className={`flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm ${
                      isActive("/admin/programs")
                        ? "bg-cyan-500/10 text-cyan-400"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <FiLayers size={16} />
                    Programs
                  </Link>

                  <Link
                    to="/admin/faculty"
                    onClick={closeSidebar}
                    className={`flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm ${
                      isActive("/admin/faculty")
                        ? "bg-cyan-500/10 text-cyan-400"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <FiUsers size={16} />
                    Faculty
                  </Link>

                  <Link
                    to="/admin/students"
                    onClick={closeSidebar}
                    className={`flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm ${
                      isActive("/admin/students")
                        ? "bg-cyan-500/10 text-cyan-400"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <FiUserCheck size={16} />
                    Students
                  </Link>

                  <Link
                    to="/admin/admissions"
                    onClick={closeSidebar}
                    className={`flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm ${
                      isActive("/admin/admissions")
                        ? "bg-cyan-500/10 text-cyan-400"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <FiFileText size={16} />
                    Admissions
                  </Link>
                </div>
              )}
            </div>

            <div>
              <button
                type="button"
                onClick={() => setContentOpen(!contentOpen)}
                className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-slate-300 hover:bg-white/5 hover:text-white"
              >
                <span className="flex items-center gap-3">
                  <FiFileText size={19} />
                  Content
                </span>

                {contentOpen ? (
                  <FiChevronDown size={17} />
                ) : (
                  <FiChevronRight size={17} />
                )}
              </button>

              {contentOpen && (
                <div className="mt-1 space-y-1 pl-4">
                  <Link
                    to="/admin/events"
                    onClick={closeSidebar}
                    className={`flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm ${
                      isActive("/admin/events")
                        ? "bg-cyan-500/10 text-cyan-400"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <FiCalendar size={16} />
                    Events
                  </Link>

                  <Link
                    to="/admin/testimonials"
                    onClick={closeSidebar}
                    className={`flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm ${
                      isActive("/admin/testimonials")
                        ? "bg-cyan-500/10 text-cyan-400"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <FiMessageSquare size={16} />
                    Testimonials
                  </Link>

                  <Link
                    to="/admin/settings"
                    onClick={closeSidebar}
                    className={`flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm ${
                      isActive("/admin/settings")
                        ? "bg-cyan-500/10 text-cyan-400"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <FiSettings size={16} />
                    Website Settings
                  </Link>
                </div>
              )}
            </div>

            <div>
              <button
                type="button"
                onClick={() => setInquiriesOpen(!inquiriesOpen)}
                className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-slate-300 hover:bg-white/5 hover:text-white"
              >
                <span className="flex items-center gap-3">
                  <FiMail size={19} />
                  Inquiries
                </span>

                {inquiriesOpen ? (
                  <FiChevronDown size={17} />
                ) : (
                  <FiChevronRight size={17} />
                )}
              </button>

              {inquiriesOpen && (
                <div className="mt-1 space-y-1 pl-4">
                  <Link
                    to="/admin/contact-messages"
                    onClick={closeSidebar}
                    className={`flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm ${
                      isActive("/admin/contact-messages")
                        ? "bg-cyan-500/10 text-cyan-400"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <FiMail size={16} />
                    Contact Messages
                  </Link>

                  <Link
                    to="/admin/applications"
                    onClick={closeSidebar}
                    className={`flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm ${
                      isActive("/admin/applications")
                        ? "bg-cyan-500/10 text-cyan-400"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <FiFileText size={16} />
                    Applications
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/admin/admin-users"
              onClick={closeSidebar}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold ${
                isActive("/admin/admin-users")
                  ? "bg-[#0d9488] text-white"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              <FiUsers size={19} />
              Administration
            </Link>
          </nav>
        </div>

        <div className="border-t border-slate-800 p-4">
          <div className="rounded-xl border border-[#0d9488]/10 bg-[#0d9488]/5 px-4 py-3">
            <p className="text-xs font-semibold text-slate-300">
              Agile Institute of Rehabilitation Sciences
            </p>
            <p className="mt-1 text-[10px] text-slate-500">
              Management System
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default MobileSidebar;