import {
  FiActivity,
  FiCode,
  FiCpu,
  FiHeart,
  FiClock,
  FiArrowRight,
  FiBookOpen,
} from "react-icons/fi";

import DPT from "../../assets/DPT.png";
import CS from "../../assets/CS.png";
import IT from "../../assets/IT.png";
import Pharmacy from "../../assets/Pharmacy.png";

const programs = [
  {
    title: "Doctor of Physical Therapy (DPT)",
    description:
      "Develop professional knowledge and practical skills in physical therapy and rehabilitation sciences for a rewarding healthcare career.",
    image: DPT,
    icon: FiActivity,
    duration: "10 Semesters (5 Years)",
  },
  {
    title: "ADP CS",
    description:
      "Build a strong foundation in computer science with practical knowledge of programming, software development, databases, and modern technologies.",
    image: CS,
    icon: FiCode,
    duration: "4 Semesters (2 Years)",
  },
  {
    title: "ADP IT",
    description:
      "Gain practical information technology skills covering modern computing, networks, databases, systems, and digital technologies.",
    image: IT,
    icon: FiCpu,
    duration: "4 Semesters (2 Years)",
  },
  {
    title: "Pharmacy Technician",
    description:
      "Develop essential pharmaceutical knowledge and practical skills to support professional pharmacy services and healthcare delivery.",
    image: Pharmacy,
    icon: FiHeart,
    duration: "2 Years",
  },
];

const ProgramsCards = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-100/60 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-teal-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#0d9488]">
            <FiBookOpen size={15} />
            Our Programs
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Discover Our{" "}
            <span className="text-[#0d9488]">Programs</span>
          </h2>

          <div className="mx-auto mt-4 flex items-center justify-center gap-1">
            <span className="h-1 w-14 rounded-full bg-[#0d9488]" />
            <span className="h-1 w-6 rounded-full bg-cyan-200" />
          </div>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Choose a career-focused program and develop practical skills
            designed for today's professional world.
          </p>
        </div>

        <div className="space-y-6">
          {programs.map((program) => {
            const Icon = program.icon;

            return (
              <article
                key={program.title}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0d9488]/30 hover:shadow-xl hover:shadow-[#0d9488]/10"
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="relative h-60 w-full shrink-0 overflow-hidden lg:h-auto lg:w-[290px]">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-slate-950/10 to-transparent" />

                    <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-lg">
                      <Icon
                        size={21}
                        className="text-[#0d9488]"
                      />
                    </div>

                    <div className="absolute bottom-5 left-5">
                      <span className="rounded-full bg-[#0d9488] px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg">
                        {program.duration}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col justify-center p-6 sm:p-7 lg:p-8">
                    <div className="grid gap-7 lg:grid-cols-[1fr_230px] lg:items-center">
                      <div>
                        <div className="mb-3 flex items-center gap-2">
                          <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#0d9488]">
                            Academic Program
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold text-slate-950 transition-colors duration-300 group-hover:text-[#0d9488] sm:text-3xl">
                          {program.title}
                        </h3>

                        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                          {program.description}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-3">
                          <div className="inline-flex items-center gap-2 rounded-lg bg-slate-50 px-4 py-2.5">
                            <FiClock
                              size={16}
                              className="text-[#0d9488]"
                            />

                            <div>
                              <span className="block text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                                Duration
                              </span>

                              <span className="text-sm font-semibold text-slate-700">
                                {program.duration}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-xl border border-cyan-100 bg-cyan-50/50 p-5">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
                          <Icon
                            size={23}
                            className="text-[#0d9488]"
                          />
                        </div>

                        <p className="mt-4 text-sm leading-6 text-slate-500">
                          Explore this program and take the next step toward
                          your professional career.
                        </p>

                        <a
                          href="/admission"
                          className="group/button mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#0d9488] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0f766e] hover:shadow-lg hover:shadow-[#0d9488]/20"
                        >
                          Apply Now

                          <FiArrowRight
                            size={16}
                            className="transition-transform duration-300 group-hover/button:translate-x-1"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramsCards;