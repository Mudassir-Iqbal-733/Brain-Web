import { FiHome, FiChevronRight } from "react-icons/fi";

const ContactBanner = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="absolute -left-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute -right-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-teal-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#0d9488]">
            Agile Institute of Rehabilitation Sciences
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Contact <span className="text-[#0d9488]">Us</span>
          </h1>

          <div className="mx-auto mt-4 flex items-center justify-center gap-2">
            <span className="h-1 w-14 rounded-full bg-[#0d9488]" />
            <span className="h-1 w-6 rounded-full bg-cyan-400/40" />
          </div>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Have a question or need more information? Get in touch with
           Agile Institute of Rehabilitation Sciences. We are here to help you
            take the next step in your learning journey.
          </p>

          <div className="mt-6 flex items-center justify-center gap-2 text-sm">
            <a
              href="/"
              className="inline-flex items-center gap-1.5 text-slate-400 transition-colors hover:text-[#0d9488]"
            >
              <FiHome size={15} />
              Home
            </a>

            <FiChevronRight size={15} className="text-slate-600" />

            <span className="font-medium text-[#0d9488]">
              Contact Us
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;