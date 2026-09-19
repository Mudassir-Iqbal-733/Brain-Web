import {
  FiArrowRight,
  FiCheckCircle,
  FiPhone,
  FiStar,
} from "react-icons/fi";

const FinalCTA = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-teal-50 py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-cyan-200/40 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-teal-200/40 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-8">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#0d9488]/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#0d9488] shadow-sm">
          <FiStar size={14} />
          Start Your Journey
        </div>

        <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
          Ready to{" "}
          <span className="text-[#0d9488]">Shape Your Future?</span>
        </h2>

        <div className="mx-auto mt-4 flex items-center justify-center gap-1">
          <span className="h-1 w-14 rounded-full bg-[#0d9488]" />
          <span className="h-1 w-6 rounded-full bg-cyan-200" />
        </div>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
          Start your journey with Brain Software and gain the practical
          knowledge and digital skills you need to build a successful career.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="/programs"
            className="inline-flex min-w-[150px] items-center justify-center gap-2 rounded-full bg-[#0d9488] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0d9488]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0b7f75] hover:shadow-xl hover:shadow-[#0d9488]/30"
          >
            Explore Programs
            <FiArrowRight size={17} />
          </a>

          <a
            href="/contact"
            className="inline-flex min-w-[150px] items-center justify-center gap-2 rounded-full border border-[#0d9488]/20 bg-white px-6 py-3.5 text-sm font-semibold text-[#0d9488] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0d9488] hover:bg-[#0d9488] hover:text-white hover:shadow-lg hover:shadow-[#0d9488]/20"
          >
            <FiPhone size={16} />
            Contact Us
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <FiCheckCircle className="text-[#0d9488]" size={14} />
            Quality Education
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <FiCheckCircle className="text-[#0d9488]" size={14} />
            Expert Faculty
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <FiCheckCircle className="text-[#0d9488]" size={14} />
            Practical Skills
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <FiCheckCircle className="text-[#0d9488]" size={14} />
            Career Focused
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;