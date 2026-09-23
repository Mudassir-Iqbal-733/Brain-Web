import {
  FiFileText,
  FiFile,
  FiUsers,
  FiCheckCircle,
  FiShare2,
} from "react-icons/fi";

const steps = [
  {
    number: "1",
    icon: FiFileText,
    title: "Submit Application",
    description:
      "Fill out the online application form with your details",
  },
  {
    number: "2",
    icon: FiFile,
    title: "Submit Documents",
    description:
      "Upload required academic documents and certificates",
  },
  {
    number: "3",
    icon: FiUsers,
    title: "Interview",
    description:
      "Attend the admission interview and counseling session",
  },
  {
    number: "4",
    icon: FiCheckCircle,
    title: "Confirmation",
    description:
      "Receive admission confirmation and enrollment details",
  },
];

const AdmissionProcess = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cyan-50/70 via-white to-white py-16 sm:py-20 lg:py-24">
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-teal-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-white px-4 py-1.5 shadow-sm">
            <FiShare2 size={14} className="text-cyan-500" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-600">
              How To Apply
            </span>
          </div>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Admission{" "}
            <span className="text-[#0d9488]">
              Process
            </span>
          </h2>

          <div className="mx-auto mt-4 flex items-center justify-center gap-2">
            <span className="h-1 w-14 rounded-full bg-[#0d9488]" />
            <span className="h-1 w-6 rounded-full bg-cyan-300" />
          </div>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-700 sm:text-base">
            Follow these simple steps to join the AIRS family
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative rounded-2xl border border-slate-100 bg-white px-6 pb-8 pt-12 text-center shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-100 hover:shadow-[0_18px_40px_rgba(13,148,136,0.12)]"
              >
                <div className="absolute left-1/2 top-0 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 via-[#0d9488] to-teal-500 text-base font-bold text-white shadow-lg shadow-cyan-500/20">
                  {step.number}
                </div>

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-[#0d9488] transition-all duration-300 group-hover:bg-cyan-100 group-hover:text-cyan-600">
                  <Icon size={27} strokeWidth={2} />
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-950">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {step.description}
                </p>

                <div className="mx-auto mt-5 h-1 w-8 rounded-full bg-cyan-100 transition-all duration-300 group-hover:w-12 group-hover:bg-[#0d9488]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdmissionProcess;