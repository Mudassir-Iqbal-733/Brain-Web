import {
  FiAward,
  FiUserCheck,
  FiMonitor,
  FiUsers,
  FiStar,
} from "react-icons/fi";

const features = [
  {
    title: "Quality Education",
    description:
      "Industry-focused learning designed to develop practical skills and prepare students for successful careers.",
    icon: FiAward,
  },
  {
    title: "Expert Faculty",
    description:
      "Learn from experienced professionals and dedicated educators with practical knowledge and expertise.",
    icon: FiUserCheck,
  },
  {
    title: "Modern Facilities",
    description:
      "Access modern labs, technology, and learning resources designed for an effective learning experience.",
    icon: FiMonitor,
  },
  {
    title: "Industry Links",
    description:
      "Build valuable connections with businesses and professionals for career growth and opportunities.",
    icon: FiUsers,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-cyan-100/40 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-teal-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#0d9488]">
            <FiStar size={15} />
            Why Choose Us
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Why Choose{" "}
            <span className="text-[#0d9488]">Brain Inspire System?</span>
          </h2>

          <div className="mx-auto mt-4 flex items-center justify-center gap-1">
            <span className="h-1 w-14 rounded-full bg-[#0d9488]" />
            <span className="h-1 w-6 rounded-full bg-cyan-200" />
          </div>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Discover what makes Brain Inspire System of Education Pvt Ltd a trusted choice for modern
            education and digital skills.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group flex min-h-[330px] flex-col items-center rounded-2xl border border-slate-100 bg-white px-6 py-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#0d9488]/30 hover:bg-cyan-50/50 hover:shadow-xl hover:shadow-[#0d9488]/10"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-50 to-teal-50 transition-all duration-300 group-hover:bg-[#0d9488] group-hover:from-[#0d9488] group-hover:to-[#0d9488] group-hover:shadow-lg group-hover:shadow-[#0d9488]/20">
                  <Icon
                    size={27}
                    strokeWidth={2}
                    className="text-[#0d9488] transition-colors duration-300 group-hover:text-white"
                  />
                </div>

                <h3 className="mt-6 text-lg font-bold text-slate-950 transition-colors duration-300 group-hover:text-[#0d9488]">
                  {feature.title}
                </h3>

                <div className="mt-3 flex items-center justify-center gap-1">
                  <span className="h-1 w-9 rounded-full bg-[#0d9488]" />
                  <span className="h-1 w-5 rounded-full bg-cyan-200" />
                </div>

                <p className="mt-5 flex-1 text-sm leading-6 text-slate-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
