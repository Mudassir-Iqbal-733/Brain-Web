import {
  FiAward,
  FiBookOpen,
  FiHeart,
  FiUsers,
} from "react-icons/fi";

const CoreValues = () => {
  const values = [
    {
      icon: FiAward,
      title: "Excellence",
      description:
        "We strive for excellence in education by maintaining high standards and continuously improving our learning experience.",
    },
    {
      icon: FiBookOpen,
      title: "Quality Education",
      description:
        "We believe in providing practical, relevant, and quality education that prepares students for real-world opportunities.",
    },
    {
      icon: FiHeart,
      title: "Integrity",
      description:
        "We promote honesty, responsibility, and ethical values while creating a positive and respectful learning environment.",
    },
    {
      icon: FiUsers,
      title: "Student Success",
      description:
        "Our students are at the heart of everything we do. We support their growth, confidence, skills, and career goals.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-teal-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0d9488]/10 bg-teal-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#0d9488]">
            <span className="h-2 w-2 rounded-full bg-[#0d9488]" />
            What We Believe In
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Our Core <span className="text-[#0d9488]">Values</span>
          </h2>

          <div className="mx-auto mt-4 flex items-center justify-center gap-2">
            <span className="h-1 w-14 rounded-full bg-[#0d9488]" />
            <span className="h-1 w-6 rounded-full bg-cyan-200" />
          </div>

          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
            At Agile Institute of Rehabilitation Sciences, our core values guide the way
            we teach, support our students, and build a better learning
            experience for everyone.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <div
                key={index}
                className="group relative rounded-2xl border border-slate-100 bg-slate-50 p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#0d9488]/20 hover:bg-white hover:shadow-xl hover:shadow-slate-200/60"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 text-[#0d9488] transition-all duration-300 group-hover:bg-[#0d9488] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#0d9488]/20">
                  <Icon size={28} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {value.description}
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

export default CoreValues;