import { FiStar, FiMessageCircle } from "react-icons/fi";

const testimonials = [
  {
    name: "Muhammad Hamza",
    course: "Web Development Student",
    initials: "MH",
    rating: 5,
    review:
      "Brain Software helped me turn my interest in web development into practical skills. The instructors are supportive, knowledgeable, and always ready to help.",
  },
  {
    name: "Ayesha Malik",
    course: "Graphic Design Student",
    initials: "AM",
    rating: 5,
    review:
      "I really enjoyed my learning experience here. The practical projects and friendly teaching environment helped me become more confident in my skills.",
  },
  {
    name: "Abdullah Khan",
    course: "Software Development Student",
    initials: "AK",
    rating: 5,
    review:
      "The courses are well structured and focused on real-world skills. I learned a lot through practical assignments and guidance from experienced instructors.",
  },
];

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-cyan-100/40 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-teal-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#0d9488]">
            <FiMessageCircle size={15} />
           Testinomials
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            What Our{" "}
            <span className="text-[#0d9488]">Students Say</span>
          </h2>

          <div className="mx-auto mt-4 flex items-center justify-center gap-1">
            <span className="h-1 w-14 rounded-full bg-[#0d9488]" />
            <span className="h-1 w-6 rounded-full bg-cyan-200" />
          </div>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Hear from our students about their learning experience, skills,
            and journey at Brain Software.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="group relative flex flex-col rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#0d9488]/30 hover:shadow-xl hover:shadow-[#0d9488]/10 sm:p-8"
            >
              <div className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-cyan-50 text-[#0d9488] transition-all duration-300 group-hover:bg-[#0d9488] group-hover:text-white">
                <FiMessageCircle size={21} />
              </div>

              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <FiStar
                    key={index}
                    size={16}
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="mt-6 flex-1 text-[15px] leading-7 text-slate-600">
                “{testimonial.review}”
              </p>

              <div className="mt-7 border-t border-slate-100 pt-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-50 to-teal-50 text-sm font-bold text-[#0d9488]">
                    {testimonial.initials}
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-slate-950 transition-colors duration-300 group-hover:text-[#0d9488]">
                      {testimonial.name}
                    </h3>

                    <p className="mt-1 text-xs font-medium text-slate-500">
                      {testimonial.course}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
          <div className="flex items-center gap-1 text-amber-400">
            {Array.from({ length: 5 }).map((_, index) => (
              <FiStar
                key={index}
                size={17}
                fill="currentColor"
              />
            ))}
          </div>

          <p className="text-sm font-medium text-slate-500">
            Trusted by students building their future with practical skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

