
import { Outlet, useNavigate } from "react-router-dom";

const DashboardLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    navigate("/admin/login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="flex h-16 items-center justify-between border-b border-slate-800 bg-slate-900 px-6">
        <div>
          <h1 className="text-lg font-bold text-cyan-400">
            Brain Inspire
          </h1>
          <p className="text-xs text-slate-400">Admin Panel</p>
        </div>

        <button
          onClick={handleLogout}
          className="rounded-full bg-cyan-600 px-5 py-2 text-sm font-semibold transition hover:bg-cyan-700"
        >
          Logout
        </button>
      </header>

      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;

