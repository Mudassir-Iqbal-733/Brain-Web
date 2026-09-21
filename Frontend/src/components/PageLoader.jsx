import { Spinner } from "@/components/ui/spinner";

const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center overflow-hidden bg-slate-950">
      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />

      <div className="relative flex flex-col items-center px-6 text-center">
        <div className="relative flex h-20 w-20 items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-cyan-400/10" />

          <Spinner className="size-10 text-cyan-400" />
        </div>

        <h1 className="mt-8 max-w-3xl text-xl font-bold tracking-wide text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.55)] sm:text-2xl lg:text-3xl">
          Agile Institute of Rehabilitation Sciences
        </h1>

        <p className="mt-2 text-sm font-medium text-teal-400 sm:text-base">
          AIRS
        </p>

        <div className="mt-5 flex items-center justify-center gap-2">
          <span className="h-1 w-14 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.7)]" />
          <span className="h-1 w-6 rounded-full bg-teal-400/60 shadow-[0_0_8px_rgba(45,212,191,0.5)]" />
        </div>

        <p className="mt-5 text-xs font-medium uppercase tracking-[0.25em] text-slate-500">
          Loading
        </p>
      </div>
    </div>
  );
};

export default PageLoader;