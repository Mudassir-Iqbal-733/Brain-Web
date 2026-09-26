import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (email === "admin@brain.edu.pk" && password === "Brain") {
      localStorage.setItem("adminLoggedIn", "true");
      navigate("/admin/dashboard", { replace: true });
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-6xl overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-[0_20px_70px_rgba(0,0,0,0.08)] lg:grid lg:grid-cols-2">

        <div className="relative hidden overflow-hidden bg-[#0d9488] p-12 xl:p-16 lg:flex flex-col justify-between">

          <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full border-[50px] border-white/10" />
          <div className="absolute -bottom-36 -left-28 h-96 w-96 rounded-full border-[60px] border-white/10" />
          <div className="absolute right-16 bottom-24 h-20 w-20 rounded-full bg-white/5" />

          <div className="relative z-10">
            <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#0d9488] shadow-lg">
              <div className="text-center text-[10px] font-extrabold leading-[11px] tracking-tight">
                AIRS
              </div>
            </div>

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-teal-100">
              Agile Institute of Rehabilitation Sciences
            </p>

            <h1 className="max-w-md text-4xl font-bold leading-[1.15] text-white xl:text-5xl">
              Welcome to AIRS Admin Portal
            </h1>

            <p className="mt-6 max-w-md text-base leading-7 text-teal-50">
              Manage admissions, faculty, programs, students and
              website content from one secure dashboard.
            </p>
          </div>

          <div className="relative z-10 flex items-center gap-3 text-sm text-teal-100">
            <span className="h-2 w-2 rounded-full bg-teal-200" />
            Admin Management System
          </div>
        </div>

        <div className="flex items-center justify-center px-6 py-10 sm:px-10 lg:px-12 xl:px-16">
          <div className="w-full max-w-md">

            <div className="mb-8 flex lg:hidden">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0d9488] text-white shadow-md">
                <div className="text-center text-[9px] font-extrabold leading-[10px]">
                  AIRS
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="mb-3 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#0d9488]" />
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0d9488]">
                  Admin Portal
                </p>
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Sign in to your account
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Enter your credentials to access the AIRS administration dashboard.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email Address
                </label>

                <div className="relative">
                  <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@brain.edu.pk"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-12 pr-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:border-teal-200 focus:border-[#0d9488] focus:ring-4 focus:ring-[#0d9488]/10"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Password
                </label>

                <div className="relative">
                  <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-12 pr-16 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:border-teal-200 focus:border-[#0d9488] focus:ring-4 focus:ring-[#0d9488]/10"
                    required
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-[#0d9488]"
                  >
                    {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="flex items-center rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="h-12 w-full rounded-full bg-[#0d9488] px-5 text-sm font-bold text-white shadow-lg shadow-[#0d9488]/20 transition-all duration-200 hover:bg-[#0b7d72] hover:shadow-[#0d9488]/30 focus:outline-none focus:ring-4 focus:ring-[#0d9488]/20 active:scale-[0.99]"
              >
                Sign In
              </button>

            </form>

            <div className="mt-8 border-t border-slate-100 pt-5 text-center">
              <p className="text-xs text-slate-400">
                AIRS System of Education © 2026
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;