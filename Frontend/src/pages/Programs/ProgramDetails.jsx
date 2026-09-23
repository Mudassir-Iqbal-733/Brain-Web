
import { Link, useParams } from "react-router-dom";
import {
  FiHome,
  FiChevronRight,
  FiClock,
  FiAward,
  FiCheckCircle,
  FiDollarSign,
  FiArrowRight,
} from "react-icons/fi";

const programs = {
  dpt: {
    title: "Doctor of Physical Therapy (DPT)",
    shortTitle: "DPT",
    duration: "10 Semesters (5 Years)",
    eligibility: "60% Marks in F.Sc. Pre-Medical or Equivalent",
    ageLimit: "30 Years",
    affiliation: "University of Sargodha",
    recognition: "Allied Health Professionals Council of Pakistan (AHPC)",
    admissionFee: "Rs. 30,000",
    semesterFee: "Rs. 120,000",
  },

  "adp-cs": {
    title: "ADP CS",
    shortTitle: "ADP CS",
    duration: "4 Semesters (2 Years)",
    eligibility:
      "Intermediate (Pre-Med, Pre-Engr., ICS, Gen. Sc.) / A-Level or Equivalent with 50% Marks",
    ageLimit: "30 Years",
    affiliation: "University of Sargodha",
    admissionFee: "Rs. 20,000",
    semesterFee: "Rs. 90,000",
  },

  "adp-it": {
    title: "ADP IT",
    shortTitle: "ADP IT",
    duration: "4 Semesters (2 Years)",
    eligibility:
      "Intermediate (Pre-Med, Pre-Engr., ICS, Gen. Sc.) / A-Level or Equivalent with 50% Marks",
    ageLimit: "30 Years",
    affiliation: "University of Sargodha",
    admissionFee: "Rs. 20,000",
    semesterFee: "Rs. 90,000",
  },

  "pharmacy-technician": {
    title: "Pharmacy Technician",
    shortTitle: "Pharmacy Technician",
    duration: "2 Years",
    eligibility: "Matric with Science",
    ageLimit: "No Age Limit",
    affiliation: "Punjab Pharmacy Council, Lahore",
    recognition: "Punjab Pharmacy Council, Lahore",
    yearlyFee: "Rs. 75,000 per Year",
  },
};

const ProgramDetails = () => {
  const { slug } = useParams();

  const program = programs[slug];

  if (!program) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-5">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900">
            Program Not Found
          </h1>

          <p className="mt-3 text-sm text-slate-500">
            The program you are looking for does not exist.
          </p>

          <Link
            to="/programs"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0d9488] px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
          >
            <FiArrowRight size={15} />
            Back to Programs
          </Link>
        </div>
      </section>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-r from-[#062d3d] via-slate-900 to-[#3b080f]" />

        <div className="relative mx-auto flex min-h-[280px] max-w-7xl items-center justify-center px-5 py-16 sm:min-h-[320px] sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5">
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-300">
                Program Details
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {program.title}
            </h1>

            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
              <Link
                to="/"
                className="inline-flex items-center gap-1 transition-colors hover:text-cyan-400"
              >
                <FiHome size={13} />
                Home
              </Link>

              <FiChevronRight size={13} />

              <Link
                to="/programs"
                className="transition-colors hover:text-cyan-400"
              >
                Programs
              </Link>

              <FiChevronRight size={13} />

              <span className="text-cyan-400">
                {program.shortTitle}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-5 py-5 sm:px-6 lg:px-8">
          <div className="flex min-w-[180px] items-center gap-3 rounded-xl border border-slate-100 bg-white px-5 py-3 shadow-sm">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-50 text-[#0d9488]">
              <FiClock size={17} />
            </div>

            <div>
              <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                Duration
              </p>

              <p className="text-xs font-semibold text-slate-800">
                {program.duration}
              </p>
            </div>
          </div>

          <div className="flex min-w-[190px] items-center gap-3 rounded-xl border border-slate-100 bg-white px-5 py-3 shadow-sm">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-50 text-[#0d9488]">
              <FiAward size={17} />
            </div>

            <div>
              <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                Affiliation
              </p>

              <p className="text-xs font-semibold text-slate-800">
                {program.affiliation}
              </p>
            </div>
          </div>

          {program.recognition && (
            <div className="flex min-w-[190px] items-center gap-3 rounded-xl border border-slate-100 bg-white px-5 py-3 shadow-sm">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-50 text-[#0d9488]">
                <FiCheckCircle size={17} />
              </div>

              <div>
                <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                  Recognition
                </p>

                <p className="text-xs font-semibold text-slate-800">
                  {program.recognition}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="bg-slate-50 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[1fr_380px] lg:px-8">
          <div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0d9488]">
                  Program Information
                </span>

                <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
                  {program.title}
                </h2>

                <div className="mt-3 h-1 w-12 rounded-full bg-[#0d9488]" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Duration
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {program.duration}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Affiliation
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {program.affiliation}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4 sm:col-span-2">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Eligibility
                  </p>

                  <p className="mt-1 text-sm leading-6 font-semibold text-slate-800">
                    {program.eligibility}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Age Limit
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {program.ageLimit}
                  </p>
                </div>

                {program.recognition && (
                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Recognition
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-800">
                      {program.recognition}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <aside className="space-y-5">
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-[#0d9488]">
                  <FiDollarSign size={19} />
                </div>

                <h3 className="text-base font-bold text-slate-900">
                  Fee Structure
                </h3>
              </div>

              {program.yearlyFee ? (
                <div className="mt-5 rounded-xl bg-cyan-50 p-4">
                  <p className="text-xs font-medium text-slate-500">
                    Annual Fee
                  </p>

                  <p className="mt-1 text-xl font-bold text-[#0d9488]">
                    {program.yearlyFee}
                  </p>
                </div>
              ) : (
                <div className="mt-5 space-y-3">
                  <div className="rounded-xl bg-cyan-50 p-4">
                    <p className="text-xs font-medium text-slate-500">
                      Admission Fee
                    </p>

                    <p className="mt-1 text-xl font-bold text-[#0d9488]">
                      {program.admissionFee}
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-xs font-medium text-slate-500">
                      Semester Fee
                    </p>

                    <p className="mt-1 text-xl font-bold text-slate-800">
                      {program.semesterFee}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">
                Ready to Apply?
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Start your application for {program.title} today.
              </p>

              <Link
                to="/admission"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#0d9488] px-5 py-3 text-sm font-bold text-white transition-all hover:bg-teal-700"
              >
                Apply Now
                <FiArrowRight size={15} />
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default ProgramDetails;

