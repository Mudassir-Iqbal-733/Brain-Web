import {
  FiCode,
  FiPenTool,
  FiGlobe,
  FiSmartphone,
  FiArrowRight,
  FiClock,
  FiCpu,
} from "react-icons/fi";

import Digital1 from "../assets/Digital1.jpg";
import Digital2 from "../assets/Digital2.jpg";
import Digital3 from "../assets/Digital3.jpg";
import Digital4 from "../assets/Digital4.jpg";

const skills = [
  {
    title: "Web Development",
    description:
      "Learn modern web technologies and build responsive, professional websites.",
    image: Digital1,
    icon: FiCode,
    duration: "6 Months",
  },
  {
    title: "Graphic Design",
    description:
      "Develop creative design skills for branding, digital media, and visual content.",
    image: Digital2,
    icon: FiPenTool,
    duration: "4 Months",
  },
  {
    title: "Digital Marketing",
    description:
      "Learn practical strategies to grow businesses and brands in the digital world.",
    image: Digital3,
    icon: FiGlobe,
    duration: "3 Months",
  },
  {
    title: "Mobile App Development",
    description:
      "Learn how to create modern and useful mobile applications with practical skills.",
    image: Digital4,
    icon: FiSmartphone,
    duration: "6 Months",
  },
];

const DigitalSkills = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-50 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-teal-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#0d9488]">
            <FiCpu size={15} />
            Digital Skills
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Learn{" "}
            <span className="text-[#0d9488]">Digital Skills</span>
          </h2>

          <div className="mx-auto mt-4 flex items-center justify-center gap-1">
            <span className="h-1 w-14 rounded-full bg-[#0d9488]" />
            <span className="h-1 w-6 rounded-full bg-cyan-200" />
          </div>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Develop practical digital skills that prepare you for modern
            careers, business, and technology.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.title}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#0d9488]/30 hover:shadow-xl hover:shadow-[#0d9488]/10"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={skill.image}
                    alt={skill.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-lg transition-all duration-300 group-hover:bg-[#0d9488]">
                    <Icon
                      size={21}
                      className="text-[#0d9488] transition-colors duration-300 group-hover:text-white"
                    />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-slate-950 transition-colors duration-300 group-hover:text-[#0d9488]">
                    {skill.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {skill.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                    <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                      <FiClock
                        size={15}
                        className="text-[#0d9488]"
                      />
                      <span>{skill.duration}</span>
                    </div>

                    <a
                      href="/programs"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0d9488] transition-all duration-300 hover:text-[#0f766e]"
                    >
                      Learn More
                      <FiArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="/programs"
            className="group inline-flex items-center gap-2 rounded-full border border-[#0d9488] bg-white px-7 py-3.5 text-sm font-semibold text-[#0d9488] shadow-sm transition-all duration-300 hover:bg-[#0d9488] hover:text-white hover:shadow-lg hover:shadow-[#0d9488]/20"
          >
            View All Programs

            <FiArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DigitalSkills;