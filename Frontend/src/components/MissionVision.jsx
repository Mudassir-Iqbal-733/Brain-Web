import {
  FiFlag,
  FiEye,
  FiCheckCircle,
} from "react-icons/fi";

const MissionVision = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-100/40 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-teal-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#0d9488]">
            <FiEye size={15} />
            Our Purpose
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Mission &{" "}
            <span className="text-[#0d9488]">Vision</span>
          </h2>

          <div className="mx-auto mt-4 flex items-center justify-center gap-1">
            <span className="h-1 w-14 rounded-full bg-[#0d9488]" />
            <span className="h-1 w-6 rounded-full bg-cyan-200" />
          </div>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Guiding principles that drive us towards excellence in education
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          
          <div className="group rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#0d9488]/30 hover:bg-cyan-50/50 hover:shadow-xl hover:shadow-[#0d9488]/10 sm:p-9">
            
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-50 to-teal-50 transition-all duration-300 group-hover:bg-[#0d9488] group-hover:from-[#0d9488] group-hover:to-[#0d9488] group-hover:shadow-lg group-hover:shadow-[#0d9488]/20">
              <FiFlag
                size={29}
                strokeWidth={2}
                className="text-[#0d9488] transition-colors duration-300 group-hover:text-white"
              />
            </div>

            <h3 className="mt-7 text-2xl font-bold text-slate-950 transition-colors duration-300 group-hover:text-[#0d9488]">
              Our Mission
            </h3>

            <div className="mt-3 flex items-center gap-1">
              <span className="h-1 w-10 rounded-full bg-[#0d9488]" />
              <span className="h-1 w-5 rounded-full bg-cyan-200" />
            </div>

            <p className="mt-6 text-base leading-7 text-slate-600">
              To provide high-quality education and practical skills that
              empower students to achieve their academic and professional
              goals.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3">
                <FiCheckCircle
                  size={18}
                  className="mt-0.5 shrink-0 text-[#0d9488]"
                />

                <span className="text-sm leading-6 text-slate-600">
                  Provide high-quality education and practical learning
                </span>
              </div>

              <div className="flex items-start gap-3">
                <FiCheckCircle
                  size={18}
                  className="mt-0.5 shrink-0 text-[#0d9488]"
                />

                <span className="text-sm leading-6 text-slate-600">
                  Develop skilled and confident professionals
                </span>
              </div>

              <div className="flex items-start gap-3">
                <FiCheckCircle
                  size={18}
                  className="mt-0.5 shrink-0 text-[#0d9488]"
                />

                <span className="text-sm leading-6 text-slate-600">
                  Promote innovation, creativity, and continuous learning
                </span>
              </div>
            </div>
          </div>

          <div className="group rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#0d9488]/30 hover:bg-cyan-50/50 hover:shadow-xl hover:shadow-[#0d9488]/10 sm:p-9">
            
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-50 to-teal-50 transition-all duration-300 group-hover:bg-[#0d9488] group-hover:from-[#0d9488] group-hover:to-[#0d9488] group-hover:shadow-lg group-hover:shadow-[#0d9488]/20">
              <FiEye
                size={29}
                strokeWidth={2}
                className="text-[#0d9488] transition-colors duration-300 group-hover:text-white"
              />
            </div>

            <h3 className="mt-7 text-2xl font-bold text-slate-950 transition-colors duration-300 group-hover:text-[#0d9488]">
              Our Vision
            </h3>

            <div className="mt-3 flex items-center gap-1">
              <span className="h-1 w-10 rounded-full bg-[#0d9488]" />
              <span className="h-1 w-5 rounded-full bg-cyan-200" />
            </div>

            <p className="mt-6 text-base leading-7 text-slate-600">
              To become a trusted leader in education by providing modern
              learning opportunities, developing future-ready skills, and
              preparing students for success in a rapidly changing world.
            </p>

            <div className="mt-6 rounded-2xl border border-cyan-100 bg-cyan-50/60 p-5 transition-all duration-300 group-hover:border-teal-100 group-hover:bg-white">
              <p className="text-sm italic leading-7 text-slate-600">
                "Empowering the next generation through quality education,
                practical skills, innovation, and continuous learning."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;