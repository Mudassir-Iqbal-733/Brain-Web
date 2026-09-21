import {
  FiCalendar,
  FiClock,
  FiUserCheck,
} from "react-icons/fi";

import { FaQuoteLeft } from "react-icons/fa6";

import OwnerImage from "../assets/Owner.png";

const OwnerMessage = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-cyan-50 blur-3xl" />

      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-teal-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-10 lg:mb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#0d9488]">
            <FiUserCheck size={15} />
            Owner's Message
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            A Message from{" "}
            <span className="text-[#0d9488]">Our Owner</span>
          </h2>

          <div className="mt-4 flex items-center gap-1">
            <span className="h-1 w-14 rounded-full bg-[#0d9488]" />
            <span className="h-1 w-6 rounded-full bg-cyan-200" />
          </div>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[380px_1fr] lg:gap-14 xl:grid-cols-[420px_1fr]">
          <div className="relative mx-auto w-full max-w-[420px]">
            <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-cyan-100 via-white to-teal-100" />

            <div className="relative overflow-hidden rounded-[24px] border border-cyan-100 bg-white p-2 shadow-xl shadow-slate-200/60">
              <div className="overflow-hidden rounded-[18px] bg-slate-100">
                <img
                  src={OwnerImage}
                  alt="Dr. Muhammad Hafeez"
                  className="h-[430px] w-full object-cover object-top sm:h-[480px]"
                />
              </div>

              <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-white/70 bg-white px-5 py-2.5 text-xs font-semibold text-slate-700 shadow-lg">
                <span className="h-2 w-2 rounded-full bg-[#0d9488]" />
                Leadership & Excellence
              </div>
            </div>
          </div>

          <div className="relative">
            <FaQuoteLeft
              size={42}
              className="mb-3 text-cyan-100"
            />

            <p className="text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
              "Welcome to Agile Institute of Rehabilitation Sciences (AIRS).
              With a deep commitment to excellence in rehabilitation sciences
              education, we strive to produce competent professionals who can
              make a meaningful difference in healthcare and technology
              sectors. Our state-of-the-art facilities and experienced faculty
              ensure that every student receives the best possible education
              and training. At AIRS, we believe in nurturing talent, fostering
              innovation, and building character. Join us on this journey of
              excellence and discovery."
            </p>

            <div className="mt-7 border-t border-slate-100 pt-6">
              <h3 className="text-2xl font-bold text-slate-950">
                Dr. Muhammad Hafeez
              </h3>

              <p className="mt-1 text-sm font-semibold text-[#0d9488]">
                CEO & Head of Institute
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <FiCalendar
                    size={16}
                    className="text-[#0d9488]"
                  />
                  <span>Established 2014</span>
                </div>

                <div className="flex items-center gap-2">
                  <FiClock
                    size={16}
                    className="text-[#0d9488]"
                  />
                  <span>22 Years Experience</span>
                </div>
              </div>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-4 text-center transition-all duration-300 hover:border-teal-100 hover:bg-cyan-50">
                <div className="text-2xl font-bold text-[#0d9488]">
                  4
                </div>

                <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                  Programs
                </div>
              </div>

              <div className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-4 text-center transition-all duration-300 hover:border-teal-100 hover:bg-cyan-50">
                <div className="text-2xl font-bold text-[#0d9488]">
                  20
                </div>

                <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                  Faculty
                </div>
              </div>

              <div className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-4 text-center transition-all duration-300 hover:border-teal-100 hover:bg-cyan-50">
                <div className="text-2xl font-bold text-[#0d9488]">
                  500+
                </div>

                <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                  Students
                </div>
              </div>

              <div className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-4 text-center transition-all duration-300 hover:border-teal-100 hover:bg-cyan-50">
                <div className="text-2xl font-bold text-[#0d9488]">
                  25
                </div>

                <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                  Events
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnerMessage;