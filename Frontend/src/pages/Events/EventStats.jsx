import {
  FiCalendar,
  FiGrid,
  FiClock,
} from "react-icons/fi";

const EventsStats = () => {
  const stats = [
    {
      number: "5",
      label: "Upcoming Events",
      icon: FiCalendar,
    },
    {
      number: "10",
      label: "Total Events",
      icon: FiGrid,
    },
    {
      number: "5",
      label: "Past Events",
      icon: FiClock,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-teal-50 px-5 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-teal-200/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="group rounded-2xl border border-cyan-100 bg-white/80 p-6 text-center shadow-lg shadow-cyan-100/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0d9488]/30 hover:shadow-xl hover:shadow-cyan-100/60"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-[#0d9488]/10 transition-all duration-300 group-hover:bg-[#0d9488]">
                <Icon
                  size={25}
                  className="text-[#0d9488] transition-colors duration-300 group-hover:text-white"
                />
              </div>

              <div className="mt-4 text-3xl font-bold text-slate-950 sm:text-4xl">
                {stat.number}
              </div>

              <div className="mt-1 text-sm font-semibold text-slate-500">
                {stat.label}
              </div>

              <div className="mx-auto mt-4 h-1 w-10 rounded-full bg-[#0d9488] transition-all duration-300 group-hover:w-16" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default EventsStats;