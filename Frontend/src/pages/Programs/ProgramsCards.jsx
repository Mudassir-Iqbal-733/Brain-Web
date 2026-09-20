import {
  FiCode,
  FiPenTool,
  FiGlobe,
  FiSmartphone,
  FiClock,
  FiCreditCard,
  FiArrowRight,
} from "react-icons/fi";

import Digital1 from "../../assets/Digital1.jpg";
import Digital2 from "../../assets/Digital2.jpg";
import Digital3 from "../../assets/Digital3.jpg";
import Digital4 from "../../assets/Digital4.jpg";

const programs = [
  {
    title: "Web Development",
    description:
      "Learn modern web technologies and build responsive, professional websites with practical hands-on training.",
    image: Digital1,
    icon: FiCode,
    duration: "6 Months",
    totalFee: "PKR 25,000",
    installment: "PKR 4,500",
  },
  {
    title: "Graphic Design",
    description:
      "Develop creative design skills for branding, digital media, social media content, and visual communication.",
    image: Digital2,
    icon: FiPenTool,
    duration: "4 Months",
    totalFee: "PKR 20,000",
    installment: "PKR 5,000",
  },
  {
    title: "Digital Marketing",
    description:
      "Learn practical strategies for social media, search marketing, content marketing, and online business growth.",
    image: Digital3,
    icon: FiGlobe,
    duration: "3 Months",
    totalFee: "PKR 15,000",
    installment: "PKR 5,000",
  },
  {
    title: "Mobile App Development",
    description:
      "Learn how to design and develop modern mobile applications through practical development and project-based learning.",
    image: Digital4,
    icon: FiSmartphone,
    duration: "6 Months",
    totalFee: "PKR 30,000",
    installment: "PKR 5,000",
  },
];

const ProgramsCards = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-100/60 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-teal-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">

        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <span className="inline-flex rounded-full bg-cyan-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#0d9488]">
            Our Programs
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
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

                    <div className="grid gap-7 lg:grid-cols-[1fr_300px] lg:items-center">

                      <div>
                        <div className="mb-3 flex items-center gap-2">
                          <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#0d9488]">
                            Professional Program
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

                        <div className="grid grid-cols-2 gap-4">

                          <div>
                            <span className="block text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                              Total Fee
                            </span>

                            <span className="mt-1 block text-lg font-bold text-slate-900">
                              {program.totalFee}
                            </span>
                          </div>

                          <div>
                            <span className="block text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                              Monthly
                            </span>

                            <span className="mt-1 block text-lg font-bold text-[#0d9488]">
                              {program.installment}
                            </span>
                          </div>

                        </div>

                        <div className="my-4 h-px bg-cyan-100" />

                        <div className="mb-4 flex items-center gap-2">
                          <FiCreditCard
                            size={16}
                            className="text-[#0d9488]"
                          />

                          <span className="text-xs text-slate-500">
                            Easy monthly installment available
                          </span>
                        </div>

                        <a
                          href="/admission"
                          className="group/button inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#0d9488] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0f766e] hover:shadow-lg hover:shadow-[#0d9488]/20"
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