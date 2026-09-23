
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    navigate("/admin/login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-slate-950 p-8 text-white">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-cyan-400">Admin Portal</p>
          <h1 className="mt-1 text-3xl font-bold">Dashboard</h1>
        </div>

        <button
          onClick={handleLogout}
          className="rounded-full bg-cyan-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-700"
        >
          Logout
        </button>
      </div>

      <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-xl font-semibold">Welcome to Dashboard</h2>
        <p className="mt-2 text-sm text-slate-400">
          Manage your Brain Inspire website from here.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
