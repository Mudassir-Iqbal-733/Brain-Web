import {
  FiBell,
  FiChevronDown,
  FiMenu,
  FiUser,
} from "react-icons/fi";

const Header = ({ setMobileSidebarOpen }) => {
  return (
    <header className="sticky top-0 z-30 h-20 border-b border-slate-200 bg-white">
      <div className="flex h-full items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setMobileSidebarOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-[#0d9488] hover:text-[#0d9488] lg:hidden"
            aria-label="Open menu"
          >
            <FiMenu size={21} />
          </button>

          <div className="hidden md:block">
            <h1 className="text-lg font-bold text-slate-800">
              Website Design Management
            </h1>

            <p className="mt-0.5 text-xs text-slate-400">
              Agile Institute of Rehabilitation Sciences
            </p>
          </div>

          <div className="md:hidden">
            <h1 className="text-base font-bold text-slate-800">
              Website Design Management
            </h1>

            <p className="text-xs text-slate-400">
              AIRS Admin
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:border-[#0d9488] hover:text-[#0d9488]"
            aria-label="Notifications"
          >
            <FiBell size={19} />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#0d9488]" />
          </button>

          <div className="hidden h-8 w-px bg-slate-200 sm:block" />

          <button
            type="button"
            className="flex items-center gap-2 rounded-xl px-1.5 py-1.5 transition hover:bg-slate-50 sm:px-2"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0d9488] text-white shadow-sm">
              <FiUser size={19} />
            </div>

            <div className="hidden text-left sm:block">
              <p className="text-sm font-semibold text-slate-800">
                Admin
              </p>

              <p className="text-xs text-slate-400">
                Administrator
              </p>
            </div>

            <FiChevronDown
              size={16}
              className="hidden text-slate-400 sm:block"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;