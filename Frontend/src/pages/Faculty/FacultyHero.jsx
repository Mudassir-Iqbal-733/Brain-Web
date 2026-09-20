import {
  FiAward,
  FiBookOpen,
  FiUsers,
  FiBriefcase,
} from "react-icons/fi";

const FacultyHero = () => {
  const stats = [
    {
      value: "25+",
      label: "Expert Faculty",
      icon: FiUsers,
    },
    {
      value: "10+",
      label: "Years Experience",
      icon: FiBriefcase,
    },
    {
      value: "4",
      label: "Specialized Programs",
      icon: FiBookOpen,
    },
    {
      value: "1000+",
      label: "Students Guided",
      icon: FiAward,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50">
      <div className="pointer-events-none absolute -left-40 top-0 h-80 w-80 rounded-full bg-cyan-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-teal-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#0d9488]/30 hover:shadow-xl hover:shadow-teal-100/50 sm:p-6"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan-50 transition-transform duration-500 group-hover:scale-150" />

                <div className="relative">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0d9488]/10 text-[#0d9488] transition-all duration-300 group-hover:bg-[#0d9488] group-hover:text-white">
                    <Icon size={20} />
                  </div>

                  <h3 className="mt-5 text-3xl font-bold text-slate-950 sm:text-4xl">
                    {stat.value}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-slate-500">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FacultyHero;