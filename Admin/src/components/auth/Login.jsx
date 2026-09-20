import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (
      email === "admin@brain.edu.pk" &&
      password === "Brain@2026#Admin"
    ) {
      localStorage.setItem("adminLoggedIn", "true");
      navigate("/admin/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen bg-cyan-50/40 flex items-center justify-center px-4 py-8">

      <div className="w-full max-w-5xl overflow-hidden rounded-3xl bg-white border border-cyan-100 shadow-[0_20px_70px_rgba(8,145,178,0.12)] lg:grid lg:grid-cols-2">

        <div className="relative hidden overflow-hidden bg-gradient-to-br from-cyan-700 via-cyan-600 to-teal-600 p-12 xl:p-16 lg:flex flex-col justify-between">

          <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full border-[50px] border-white/10" />

          <div className="absolute -bottom-36 -left-28 h-96 w-96 rounded-full border-[60px] border-white/10" />

          <div className="absolute right-16 bottom-24 h-20 w-20 rounded-full bg-white/5" />

          <div className="relative z-10">

            <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-cyan-700 shadow-lg">
              <div className="text-center text-[10px] font-extrabold leading-[11px] tracking-tight">
                BRAIN
                <br />
                INSPIRE
              </div>
            </div>

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-cyan-100">
              Pakistan&apos;s Leading Institute
            </p>

            <h1 className="max-w-md text-4xl font-bold leading-[1.15] text-white xl:text-5xl">
              Welcome to Brain Inspire Admin Portal
            </h1>

            <p className="mt-6 max-w-md text-base leading-7 text-cyan-50">
              Manage admissions, faculty, programs, students and
              website content from one secure dashboard.
            </p>

          </div>

          <div className="relative z-10 flex items-center gap-3 text-sm text-cyan-100">
            <span className="h-2 w-2 rounded-full bg-cyan-200" />
            Admin Management System
          </div>

        </div>

        <div className="flex items-center justify-center px-6 py-10 sm:px-10 lg:px-12 xl:px-16">

          <div className="w-full max-w-md">

            <div className="mb-8 flex lg:hidden">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-600 to-teal-600 text-white shadow-md">
                <div className="text-center text-[9px] font-extrabold leading-[10px]">
                  BRAIN
                  <br />
                  INSPIRE
                </div>
              </div>
            </div>

            <div className="mb-8">

              <div className="mb-3 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-500" />

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">
                  Admin Portal
                </p>
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Sign in to your account
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Enter your credentials to access the Brain Inspire
                administration dashboard.
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

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@brain.edu.pk"
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:border-cyan-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10"
                  required
                />

              </div>

              <div>

                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Password
                </label>

                <div className="relative">

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 pr-16 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:border-cyan-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10"
                    required
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-cyan-700 transition hover:text-cyan-500"
                  >
                    {showPassword ? "Hide" : "Show"}
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
                className="h-12 w-full rounded-full bg-gradient-to-r from-cyan-600 to-teal-600 px-5 text-sm font-bold text-white shadow-lg shadow-cyan-600/20 transition-all duration-200 hover:from-cyan-700 hover:to-teal-700 hover:shadow-cyan-600/30 focus:outline-none focus:ring-4 focus:ring-cyan-500/20 active:scale-[0.99]"
              >
                Sign In
              </button>

            </form>

            <div className="mt-8 border-t border-slate-100 pt-5 text-center">
              <p className="text-xs text-slate-400">
                Brain Inspire System of Education © 2026
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Login;

