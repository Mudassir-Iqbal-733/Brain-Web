import { FiArrowRight, FiCheckCircle, FiPlayCircle } from "react-icons/fi";

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-teal-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#0d9488]/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#0d9488] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#0d9488]" />
              Agile Institute of Rehabilitation Sciences
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Empowering
              <span className="block text-[#0d9488]">
                Future Professionals
              </span>
            </h1>

            <div className="mt-5 flex items-center gap-2">
              <span className="h-1 w-14 rounded-full bg-[#0d9488]" />
              <span className="h-1 w-6 rounded-full bg-cyan-200" />
            </div>

            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              Agile Institute of Rehabilitation Sciences is dedicated to providing
              quality education, practical skills, and industry-focused
              training to help students build successful careers in the
              digital world.
            </p>

            <div className="mt-7 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                <FiCheckCircle
                  className="shrink-0 text-[#0d9488]"
                  size={17}
                />
                Quality Education
              </div>

              <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                <FiCheckCircle
                  className="shrink-0 text-[#0d9488]"
                  size={17}
                />
                Expert Faculty
              </div>

              <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                <FiCheckCircle
                  className="shrink-0 text-[#0d9488]"
                  size={17}
                />
                Practical Training
              </div>

              <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                <FiCheckCircle
                  className="shrink-0 text-[#0d9488]"
                  size={17}
                />
                Career Focused
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/programs"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0d9488] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0d9488]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0b7f75] hover:shadow-xl hover:shadow-[#0d9488]/30"
              >
                Explore Programs
                <FiArrowRight size={17} />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0d9488]/20 bg-white px-6 py-3.5 text-sm font-semibold text-[#0d9488] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0d9488] hover:bg-[#0d9488] hover:text-white"
              >
                <FiPlayCircle size={17} />
                Get Started
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-200/40 to-teal-200/40 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-3 shadow-2xl shadow-slate-200/70">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#0d9488] to-cyan-600 px-6 py-10 sm:px-8 sm:py-12">

                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10" />
                <div className="absolute -bottom-20 -left-16 h-52 w-52 rounded-full bg-white/10" />

                <div className="relative">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                    Learn • Grow • Succeed
                  </p>

                  <h2 className="mt-4 max-w-sm text-3xl font-bold leading-tight text-white sm:text-4xl">
                    Building Skills.
                    <span className="block text-cyan-100">
                      Creating Futures.
                    </span>
                  </h2>

                  <p className="mt-5 max-w-md text-sm leading-7 text-white/80">
                    Learn from experienced instructors and gain practical
                    knowledge designed to prepare you for real-world
                    opportunities.
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                      <h3 className="text-2xl font-bold text-white">10+</h3>
                      <p className="mt-1 text-xs text-white/70">
                        Professional Courses
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                      <h3 className="text-2xl font-bold text-white">500+</h3>
                      <p className="mt-1 text-xs text-white/70">
                        Students Trained
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                      <h3 className="text-2xl font-bold text-white">10+</h3>
                      <p className="mt-1 text-xs text-white/70">
                        Expert Instructors
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                      <h3 className="text-2xl font-bold text-white">100%</h3>
                      <p className="mt-1 text-xs text-white/70">
                        Practical Focus
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-50 text-[#0d9488]">
                  <FiCheckCircle size={20} />
                </div>

                <div>
                  <p className="text-xs font-medium text-slate-500">
                    Focused on
                  </p>

                  <p className="text-sm font-bold text-slate-900">
                    Student Success
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;