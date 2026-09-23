import { Link } from "react-router-dom";
import {
  FiActivity,
  FiCode,
  FiCpu,
  FiHeart,
  FiArrowRight,
  FiClock,
  FiBookOpen,
} from "react-icons/fi";

import DPT from "../assets/DPT.png";
import CS from "../assets/CS.png";
import IT from "../assets/IT.png";
import Pharmacy from "../assets/Pharmacy.png";

const programs = [
  {
    title: "Doctor of Physical Therapy (DPT)",
    slug: "dpt",
    image: DPT,
    icon: FiActivity,
    duration: "10 Semesters (5 Years)",
  },
  {
    title: "ADP CS",
    slug: "adp-cs",
    image: CS,
    icon: FiCode,
    duration: "4 Semesters (2 Years)",
  },
  {
    title: "ADP IT",
    slug: "adp-it",
    image: IT,
    icon: FiCpu,
    duration: "4 Semesters (2 Years)",
  },
  {
    title: "Pharmacy Technician",
    slug: "pharmacy-technician",
    image: Pharmacy,
    icon: FiHeart,
    duration: "2 Years",
  },
];

const AcademicPrograms = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-50 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-teal-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#0d9488]">
            <FiBookOpen size={15} />
            Our Programs
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Academic{" "}
            <span className="text-[#0d9488]">Programs</span>
          </h2>

          <div className="mx-auto mt-4 flex items-center justify-center gap-1">
            <span className="h-1 w-14 rounded-full bg-[#0d9488]" />
            <span className="h-1 w-6 rounded-full bg-cyan-200" />
          </div>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Choose from our diverse range of programs designed to launch your
            career in healthcare and technology
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => {
            const Icon = program.icon;

            return (
              <div
                key={program.title}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#0d9488]/30 hover:shadow-xl hover:shadow-[#0d9488]/10"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-lg transition-all duration-300 group-hover:bg-[#0d9488]">
                    <Icon
                      size={21}
                      className="text-[#0d9488] transition-colors duration-300 group-hover:text-white"
                    />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold leading-7 text-slate-950 transition-colors duration-300 group-hover:text-[#0d9488]">
                    {program.title}
                  </h3>

                  <div className="mt-3 flex items-center gap-1.5 text-xs font-medium text-slate-500">
                    <FiClock size={15} className="text-[#0d9488]" />
                    <span>{program.duration}</span>
                  </div>

                  <div className="mt-auto pt-7">
                    <Link
                      to={`/programs/${program.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0d9488] transition-all duration-300 hover:text-[#0f766e]"
                    >
                      Learn More

                      <FiArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/programs"
            className="group inline-flex items-center gap-2 rounded-full border border-[#0d9488] bg-white px-7 py-3.5 text-sm font-semibold text-[#0d9488] shadow-sm transition-all duration-300 hover:bg-[#0d9488] hover:text-white hover:shadow-lg hover:shadow-[#0d9488]/20"
          >
            View All Programs

            <FiArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AcademicPrograms;