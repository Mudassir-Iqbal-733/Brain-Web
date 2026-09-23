import {
  FiFileText,
  FiCreditCard,
  FiBookOpen,
  FiCamera,
  FiAward,
  FiHeart,
} from "react-icons/fi";

const requirements = [
  {
    icon: FiFileText,
    title: "Application Form",
    description: "Filled and signed application form",
  },
  {
    icon: FiCreditCard,
    title: "CNIC/B-Form",
    description: "Copy of CNIC (students) or B-Form (under 18)",
  },
  {
    icon: FiBookOpen,
    title: "Academic Documents",
    description: "Previous academic certificates and transcripts",
  },
  {
    icon: FiCamera,
    title: "Photographs",
    description: "Recent passport-size photographs",
  },
  {
    icon: FiAward,
    title: "Character Certificate",
    description: "Character certificate from last institution",
  },
  {
    icon: FiHeart,
    title: "Medical Certificate",
    description: "Medical fitness certificate",
  },
];

const AdmissionRequirements = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-[#0d9488]" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0d9488]">
              Requirements
            </span>
          </div>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Admission <span className="text-[#0d9488]">Requirements</span>
          </h2>

          <div className="mx-auto mt-4 flex items-center justify-center gap-2">
            <span className="h-1 w-14 rounded-full bg-[#0d9488]" />
            <span className="h-1 w-6 rounded-full bg-cyan-200" />
          </div>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Everything you need to know before applying
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {requirements.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-100 hover:shadow-[0_15px_35px_rgba(13,148,136,0.10)]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-[#0d9488] transition-all duration-300 group-hover:bg-[#0d9488] group-hover:text-white">
                    <Icon size={23} strokeWidth={2} />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-1.5 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdmissionRequirements;