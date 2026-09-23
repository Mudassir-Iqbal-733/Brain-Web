const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-[99999] flex min-h-screen items-center justify-center overflow-hidden bg-[#020b10]">
      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />

      <div className="relative flex flex-col items-center text-center">
        <div className="relative h-20 w-20 sm:h-24 sm:w-24">
          <div className="absolute inset-0 rounded-full border-2 border-cyan-400/20" />

          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-cyan-400 border-r-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.5)]" />

          <div className="absolute inset-[7px] rounded-full border border-teal-400/20" />
        </div>

        <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          <span className="text-cyan-400">A</span>
          IRS
        </h1>

        <p className="mt-3 text-xs font-medium tracking-[0.22em] text-slate-400 sm:text-sm">
          Agile Institute of Rehabilitation Sciences
        </p>

        <div className="mt-6 flex items-center gap-3">
          <span className="h-0.5 w-10 rounded-full bg-cyan-400/40" />

          <span className="h-1.5 w-14 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />

          <span className="h-0.5 w-10 rounded-full bg-cyan-400/40" />
        </div>
      </div>
    </div>
  );
};

export default PageLoader;