import { FiChevronRight, FiHome } from "react-icons/fi";

const FacultyBanner = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-teal-500/20 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">

          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
            Our Faculty
          </span>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Meet Our{" "}
            <span className="text-cyan-400">
              Expert Faculty
            </span>
          </h1>

          <div className="mx-auto mt-5 flex items-center justify-center gap-2">
            <span className="h-1 w-14 rounded-full bg-[#0d9488]" />
            <span className="h-1 w-6 rounded-full bg-cyan-400/40" />
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Dedicated professionals committed to your academic success and
            professional growth
          </p>

          <nav
            aria-label="Breadcrumb"
            className="mt-8 flex items-center justify-center gap-2 text-sm"
          >
            <a
              href="/"
              className="flex items-center gap-1.5 text-slate-400 transition-colors hover:text-cyan-400"
            >
              <FiHome size={15} />
              Home
            </a>

            <FiChevronRight
              size={15}
              className="text-slate-600"
            />

            <span className="font-medium text-cyan-400">
              Faculty
            </span>
          </nav>

        </div>
      </div>
    </section>
  );
};

export default FacultyBanner;