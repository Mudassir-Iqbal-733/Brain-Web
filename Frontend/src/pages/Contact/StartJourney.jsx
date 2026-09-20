import { FiArrowRight, FiPhone } from "react-icons/fi";

const StartJourney = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-teal-50">
      <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-teal-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-cyan-100 bg-white/80 px-6 py-12 text-center shadow-xl shadow-cyan-100/40 backdrop-blur-sm sm:px-10 lg:px-16">

          <span className="inline-flex items-center rounded-full bg-[#0d9488]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#0d9488]">
            Start Your Journey
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Ready to Join{" "}
            <span className="text-[#0d9488]">
              Brain Inspire?
            </span>
          </h2>

          <div className="mx-auto mt-5 flex items-center justify-center gap-2">
            <span className="h-1 w-14 rounded-full bg-[#0d9488]" />
            <span className="h-1 w-6 rounded-full bg-cyan-200" />
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Take the first step towards a rewarding career. Apply now and
            become part of Brain Inspire System of Education.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <a
              href="/admission"
              className="group inline-flex min-w-[160px] items-center justify-center gap-2 rounded-full bg-[#0d9488] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal-200 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0b7f75] hover:shadow-xl"
            >
              Apply Now
              <FiArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="tel:+92622888596"
              className="group inline-flex min-w-[160px] items-center justify-center gap-2 rounded-full border border-[#0d9488]/30 bg-[#0d9488]/5 px-7 py-3.5 text-sm font-semibold text-[#0d9488] transition-all duration-300 hover:-translate-y-1 hover:border-[#0d9488] hover:bg-[#0d9488] hover:text-white"
            >
              <FiPhone size={17} />
              Call Us
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default StartJourney;