import {
  FiMonitor,
  FiWifi,
  FiBookOpen,
  FiUsers,
  FiCoffee,
  FiShield,
} from "react-icons/fi";

const CampusFacilities = () => {
  const facilities = [
    {
      icon: FiMonitor,
      title: "Modern Labs",
      description:
        "Fully equipped rehabilitation and computer labs with latest technology",
    },
    {
      icon: FiBookOpen,
      title: "Library",
      description:
        "Extensive collection of books, journals, and digital resources",
    },
    {
      icon: FiWifi,
      title: "Wi-Fi Campus",
      description:
        "High-speed internet connectivity across the entire campus",
    },
    {
      icon: FiShield,
      title: "Clinical Training",
      description:
        "Hands-on clinical training at affiliated hospitals and clinics",
    },
    {
      icon: FiCoffee,
      title: "Student Lounge",
      description:
        "Comfortable spaces for student collaboration and relaxation",
    },
    {
      icon: FiUsers,
      title: "Transport",
      description:
        "Convenient transport facilities for students and staff",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-teal-50 py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-teal-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0d9488]/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#0d9488] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#0d9488]" />
            Our Facilities
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Our Campus <span className="text-[#0d9488]">Facilities</span>
          </h2>

          <div className="mx-auto mt-4 flex items-center justify-center gap-2">
            <span className="h-1 w-14 rounded-full bg-[#0d9488]" />
            <span className="h-1 w-6 rounded-full bg-cyan-200" />
          </div>

          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
            State-of-the-art facilities designed to enhance your learning
            experience
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility) => {
            const Icon = facility.icon;

            return (
              <div
                key={facility.title}
                className="group rounded-2xl border border-white bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#0d9488]/20 hover:shadow-xl hover:shadow-teal-200/40"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 text-[#0d9488] transition-all duration-300 group-hover:bg-[#0d9488] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#0d9488]/20">
                  <Icon size={28} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {facility.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {facility.description}
                </p>

                <div className="mx-auto mt-5 h-1 w-8 rounded-full bg-[#0d9488]/20 transition-all duration-300 group-hover:w-14 group-hover:bg-[#0d9488]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CampusFacilities;