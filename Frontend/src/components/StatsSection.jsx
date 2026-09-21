import { useEffect, useState } from "react";
import {
  FiBookOpen,
  FiUserCheck,
  FiUsers,
  FiCalendar,
} from "react-icons/fi";

const stats = [
  {
    value: 4,
    label: "Academic Programs",
    icon: FiBookOpen,
  },
  {
    value: 20,
    label: "Expert Faculty",
    icon: FiUsers,
  },
  {
    value: 500,
    label: "Enrolled Students",
    icon: FiUserCheck,
  },
  {
    value: 25,
    label: "Events Annually",
    icon: FiCalendar,
  },
];

const StatCard = ({ stat }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const duration = 1500;
    const increment = stat.value / (duration / 30);

    const timer = setInterval(() => {
      current += increment;

      if (current >= stat.value) {
        setCount(stat.value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [stat.value]);

  const Icon = stat.icon;

  return (
    <div className="group flex min-h-[185px] flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white px-5 py-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0d9488]/20 hover:bg-cyan-50/50 hover:shadow-lg hover:shadow-[#0d9488]/10">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 transition-all duration-300 group-hover:bg-[#0d9488] group-hover:shadow-md group-hover:shadow-[#0d9488]/20">
        <Icon
          size={26}
          strokeWidth={2.2}
          className="text-[#0d9488] transition-colors duration-300 group-hover:text-white"
        />
      </div>

      <div className="text-4xl font-bold leading-none text-slate-950 transition-colors duration-300 group-hover:text-[#0d9488]">
        {count}
        <span className="text-[#0d9488]">+</span>
      </div>

      <p className="mt-2 text-sm font-medium text-slate-500 transition-colors duration-300 group-hover:text-slate-600">
        {stat.label}
      </p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.label} stat={stat} />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;