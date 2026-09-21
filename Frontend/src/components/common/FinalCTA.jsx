import { FiPhoneCall } from "react-icons/fi";

const FinalCTA = ({
  badge = "START YOUR JOURNEY",
  titleStart = "Ready to",
  titleHighlight = "Shape Your Future?",
  description,
  primaryText = "Explore Programs",
  primaryLink = "/programs",
  secondaryText = "Contact Us",
  secondaryLink = "/contact",
}) => {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_75%,rgba(207,250,254,0.9),transparent_38%),radial-gradient(circle_at_100%_75%,rgba(204,251,241,0.85),transparent_38%),linear-gradient(to_bottom,#ffffff,#f8ffff)]" />

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
          <span className="text-base leading-none text-teal-600">
            ☆
          </span>

          <span className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700 sm:text-sm">
            {badge}
          </span>
        </div>

        <h2 className="mx-auto mt-7 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
          {titleStart}{" "}
          <span className="text-teal-600">
            {titleHighlight}
          </span>
        </h2>

        <div className="mt-5 flex items-center justify-center gap-1.5">
          <span className="h-1 w-14 rounded-full bg-teal-600" />
          <span className="h-1 w-6 rounded-full bg-cyan-200" />
        </div>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
          {description}
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={primaryLink}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-teal-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-teal-700 sm:w-auto"
          >
            {primaryText}

            <span className="text-lg leading-none">
              →
            </span>
          </a>

          <a
            href={secondaryLink}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-teal-200 bg-white px-7 py-3.5 text-sm font-bold text-teal-700 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-teal-300 hover:bg-teal-50 sm:w-auto"
          >
            <FiPhoneCall className="text-lg" />

            {secondaryText}
          </a>
        </div>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-4 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <span className="font-bold text-teal-600">
              ✓
            </span>

            <span>Quality Education</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-bold text-teal-600">
              ✓
            </span>

            <span>Expert Faculty</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-bold text-teal-600">
              ✓
            </span>

            <span>Practical Skills</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-bold text-teal-600">
              ✓
            </span>

            <span>Career Focused</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;