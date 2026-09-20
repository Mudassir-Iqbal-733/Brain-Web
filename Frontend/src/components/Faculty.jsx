import {
  FiStar,
  FiLinkedin,
  FiMail,
  FiArrowRight,
} from "react-icons/fi";

import Faculty1 from "../assets/Faculty1.jpg";
import Faculty2 from "../assets/Faculty2.jpg";
import Faculty3 from "../assets/Faculty3.jpg";
import Faculty4 from "../assets/Faculty4.jpg";

const faculty = [
  {
    name: "Dr. Muhammad Ahmed",
    role: "Head of Computer Science",
    image: Faculty1,
    experience: "12+ Years Experience",
  },
  {
    name: "Mr. Ali Hassan",
    role: "Senior Software Instructor",
    image: Faculty2,
    experience: "8+ Years Experience",
  },
  {
    name: "Mr. Usman Raza",
    role: "Web Development Instructor",
    image: Faculty3,
    experience: "7+ Years Experience",
  },
  {
    name: "Ms. Ayesha Khan",
    role: "Graphic Design Instructor",
    image: Faculty4,
    experience: "9+ Years Experience",
  },
];

const Faculty = ({ showAll = false }) => {
  const visibleFaculty = showAll ? faculty : faculty.slice(0, 4);

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-100/40 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-teal-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#0d9488]">
            <FiStar size={15} />
            Our Faculty
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Meet Our{" "}
            <span className="text-[#0d9488]">Expert Faculty</span>
          </h2>

          <div className="mx-auto mt-4 flex items-center justify-center gap-1">
            <span className="h-1 w-14 rounded-full bg-[#0d9488]" />
            <span className="h-1 w-6 rounded-full bg-cyan-200" />
          </div>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Learn from experienced instructors who bring practical knowledge,
            industry experience, and a passion for helping students succeed.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visibleFaculty.map((member) => (
            <div
              key={member.name}
              className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#0d9488]/30 hover:shadow-xl hover:shadow-[#0d9488]/10"
            >
              <div className="relative h-72 overflow-hidden bg-slate-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-70" />

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-flex rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#0d9488] backdrop-blur-sm">
                    {member.experience}
                  </span>
                </div>

                <div className="absolute right-4 top-4 flex translate-x-3 gap-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  <a
                    href="#"
                    aria-label={`${member.name} LinkedIn`}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0d9488] shadow-md transition-colors hover:bg-[#0d9488] hover:text-white"
                  >
                    <FiLinkedin size={16} />
                  </a>

                  <a
                    href="#"
                    aria-label={`Email ${member.name}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0d9488] shadow-md transition-colors hover:bg-[#0d9488] hover:text-white"
                  >
                    <FiMail size={16} />
                  </a>
                </div>
              </div>

              <div className="px-6 py-6 text-center">
                <h3 className="text-lg font-bold text-slate-950 transition-colors duration-300 group-hover:text-[#0d9488]">
                  {member.name}
                </h3>

                <div className="mx-auto mt-3 flex items-center justify-center gap-1">
                  <span className="h-1 w-9 rounded-full bg-[#0d9488]" />
                  <span className="h-1 w-5 rounded-full bg-cyan-200" />
                </div>

                <p className="mt-3 text-sm font-medium text-slate-500">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="mt-10 flex justify-center">
            <a
              href="/faculty"
              className="inline-flex items-center gap-2 rounded-full bg-[#0d9488] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0d9488]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0b7f75] hover:shadow-xl hover:shadow-[#0d9488]/25"
            >
              View All Faculty
              <FiArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Faculty;