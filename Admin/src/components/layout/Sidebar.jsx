import {
  FiGrid,
  FiBookOpen,
  FiFileText,
  FiMail,
  FiUsers,
  FiSettings,
  FiChevronDown,
  FiChevronRight,
  FiLayers,
  FiUserCheck,
  FiCalendar,
  FiMessageSquare,
  FiLogOut,
} from "react-icons/fi";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [academicsOpen, setAcademicsOpen] = useState(true);
  const [contentOpen, setContentOpen] = useState(false);
  const [inquiriesOpen, setInquiriesOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const isDashboardActive = location.pathname.startsWith("/admin/dashboard");

  const isAcademicsActive = [
    "/admin/dashboard/programs",
    "/admin/faculty",
    "/admin/students",
    "/admin/admissions",
  ].includes(location.pathname);

  const isContentActive = [
    "/admin/events",
    "/admin/testimonials",
  ].includes(location.pathname);

  const isInquiriesActive = [
    "/admin/contact-messages",
    "/admin/applications",
  ].includes(location.pathname);

  useEffect(() => {
    if (isAcademicsActive) setAcademicsOpen(true);
    if (isContentActive) setContentOpen(true);
    if (isInquiriesActive) setInquiriesOpen(true);
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    navigate("/admin/login", { replace: true });
  };

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 border-r border-slate-800 bg-slate-950 text-white lg:block">
      <style>{`
        .sidebar-scroll::-webkit-scrollbar {
          display: none;
        }
        .sidebar-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="flex h-full flex-col">
        <div className="flex h-24 shrink-0 items-center border-b border-slate-800 px-6">
          <Link to="/admin/dashboard" className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#0d9488] p-2 shadow-lg shadow-cyan-500/10">
              <span className="text-2xl font-bold text-white">A</span>
            </div>

            <div className="py-2">
              <h1 className="text-xl font-bold text-white">AIRS</h1>
              <p className="text-xs text-cyan-400">Admin Panel</p>
            </div>
          </Link>
        </div>

        <div className="sidebar-scroll flex-1 overflow-y-auto px-4 py-6">
          <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-500/60">
            Main Menu
          </p>

          <nav className="space-y-2">
            <Link
              to="/admin/dashboard"
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                isDashboardActive
                  ? "bg-[#0d9488] text-white shadow-lg shadow-[#0d9488]/25"
                  : "text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-300"
              }`}
            >
              <FiGrid size={19} />
              Dashboard
            </Link>

            <div>
              <button
                type="button"
                onClick={() => setAcademicsOpen(!academicsOpen)}
                className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                  isAcademicsActive
                    ? "bg-[#0d9488]/20 text-cyan-400"
                    : "text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-300"
                }`}
              >
                <span className="flex items-center gap-3">
                  <FiBookOpen size={19} />
                  Academics
                </span>

                {academicsOpen ? (
                  <FiChevronDown size={17} className="text-cyan-400" />
                ) : (
                  <FiChevronRight size={17} className="text-slate-500" />
                )}
              </button>

              {academicsOpen && (
                <div className="mt-1 space-y-1 border-l border-cyan-500/20 pl-4">
                  {[
                    { path: "/admin/dashboard/programs", icon: <FiLayers size={16} />, label: "Programs" },
                    { path: "/admin/faculty", icon: <FiUsers size={16} />, label: "Faculty" },
                    { path: "/admin/students", icon: <FiUserCheck size={16} />, label: "Students" },
                    { path: "/admin/admissions", icon: <FiFileText size={16} />, label: "Admissions" },
                  ].map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm transition-all duration-300 ${
                        isActive(item.path)
                          ? "bg-cyan-500/20 text-cyan-400"
                          : "text-slate-400 hover:bg-cyan-500/5 hover:text-cyan-300"
                      }`}
                    >
                      {item.icon}
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                type="button"
                onClick={() => setContentOpen(!contentOpen)}
                className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                  isContentActive
                    ? "bg-[#0d9488]/20 text-cyan-400"
                    : "text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-300"
                }`}
              >
                <span className="flex items-center gap-3">
                  <FiFileText size={19} />
                  Content
                </span>

                {contentOpen ? (
                  <FiChevronDown size={17} className={isContentActive ? "text-cyan-400" : "text-slate-500"} />
                ) : (
                  <FiChevronRight size={17} className="text-slate-500" />
                )}
              </button>

              {contentOpen && (
                <div className="mt-1 space-y-1 border-l border-cyan-500/20 pl-4">
                  {[
                    { path: "/admin/events", icon: <FiCalendar size={16} />, label: "Events" },
                    { path: "/admin/testimonials", icon: <FiMessageSquare size={16} />, label: "Testimonials" },
                  ].map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm transition-all duration-300 ${
                        isActive(item.path)
                          ? "bg-cyan-500/20 text-cyan-400"
                          : "text-slate-400 hover:bg-cyan-500/5 hover:text-cyan-300"
                      }`}
                    >
                      {item.icon}
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                type="button"
                onClick={() => setInquiriesOpen(!inquiriesOpen)}
                className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                  isInquiriesActive
                    ? "bg-[#0d9488]/20 text-cyan-400"
                    : "text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-300"
                }`}
              >
                <span className="flex items-center gap-3">
                  <FiMail size={19} />
                  Inquiries
                </span>

                {inquiriesOpen ? (
                  <FiChevronDown size={17} className={isInquiriesActive ? "text-cyan-400" : "text-slate-500"} />
                ) : (
                  <FiChevronRight size={17} className="text-slate-500" />
                )}
              </button>

              {inquiriesOpen && (
                <div className="mt-1 space-y-1 border-l border-cyan-500/20 pl-4">
                  {[
                    { path: "/admin/contact-messages", icon: <FiMail size={16} />, label: "Contact Messages" },
                    { path: "/admin/applications", icon: <FiFileText size={16} />, label: "Applications" },
                  ].map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm transition-all duration-300 ${
                        isActive(item.path)
                          ? "bg-cyan-500/20 text-cyan-400"
                          : "text-slate-400 hover:bg-cyan-500/5 hover:text-cyan-300"
                      }`}
                    >
                      {item.icon}
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/admin/admin-users"
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                isActive("/admin/admin-users")
                  ? "bg-[#0d9488] text-white shadow-lg shadow-[#0d9488]/25"
                  : "text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-300"
              }`}
            >
              <FiUsers size={19} />
              Administration
            </Link>
          </nav>
        </div>

        <div className="shrink-0 border-t border-slate-800 p-4">
          <div className="rounded-xl border border-cyan-500/15 bg-cyan-500/5 px-4 py-3">
            <p className="text-xs font-semibold text-slate-300">
              Agile Institute of Rehabilitation Sciences
            </p>

            <p className="mt-1 text-[10px] text-cyan-500/60">
              Management System
            </p>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="mt-3 flex w-full items-center justify-center gap-3 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-400 transition-all duration-300 hover:bg-red-500/20 hover:text-red-300"
          >
            <FiLogOut size={18} />
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;