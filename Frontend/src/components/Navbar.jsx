import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  FiHome,
  FiInfo,
  FiBookOpen,
  FiUsers,
  FiCalendar,
  FiMail,
  FiMenu,
  FiX,
  FiPhone,
  FiMapPin,
  FiChevronRight,
  FiAward,
  FiSend,
} from "react-icons/fi";
import logo from "../assets/logo.png";

const navLinks = [
  { name: "Home", path: "/", icon: FiHome },
  { name: "About", path: "/about", icon: FiInfo },
  { name: "Programs", path: "/programs", icon: FiBookOpen },
  { name: "Faculty", path: "/faculty", icon: FiUsers },
  { name: "Events", path: "/events", icon: FiCalendar },
  { name: "Contact", path: "/contact", icon: FiMail },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname.startsWith(path);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="bg-white">
        <div className="bg-[#0d9488] text-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2.5 text-xs sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:py-2 lg:text-sm">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
              <div className="flex items-center gap-1.5 font-medium">
                <FiAward size={15} />
                <span>Pakistan's Leading Institute</span>
              </div>

              <div className="hidden h-4 w-px bg-white/30 sm:block" />

              <div className="hidden items-center gap-1.5 text-white/90 lg:flex">
                <FiMapPin size={14} />
                <span>Bahawalpur, Punjab</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-white/95">
              <a
                href="tel:+923001234567"
                className="flex items-center gap-1.5 transition hover:text-cyan-100"
              >
                <FiPhone size={14} />
                <span>0300-1234567</span>
              </a>

              <a
                href="tel:+923017654321"
                className="flex items-center gap-1.5 transition hover:text-cyan-100"
              >
                <FiPhone size={14} />
                <span>0301-7654321</span>
              </a>

              <a
                href="mailto:info@brain.edu.pk"
                className="hidden items-center gap-1.5 transition hover:text-cyan-100 lg:flex"
              >
                <FiMail size={14} />
                <span>info@brain.edu.pk</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="sticky top-0 z-50 bg-white shadow-sm">
        <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-6">
          <a
            href="/"
            onClick={closeMenu}
            aria-label="Brain Software Home"
            className="flex shrink-0 items-center"
          >
            <img
              src={logo}
              alt="Brain Software"
              className="h-11 w-auto object-contain sm:h-12"
            />
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const active = isActive(link.path);

              return (
                <a
                  key={link.path}
                  href={link.path}
                  className={`relative px-4 py-2 text-sm font-medium transition ${
                    active
                      ? "text-[#0d9488]"
                      : "text-slate-700 hover:text-[#0d9488]"
                  }`}
                >
                  {link.name}

                  {active && (
                    <span className="absolute bottom-0 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full bg-[#0d9488]" />
                  )}
                </a>
              );
            })}
          </div>

          <a
            href="/contact"
            className="hidden items-center gap-2 rounded-full bg-[#0d9488] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0f766e] lg:flex"
          >
            <FiSend size={16} />
            <span>Apply Now</span>
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:border-[#0d9488] hover:bg-cyan-50 hover:text-[#0d9488] lg:hidden"
          >
            {isOpen ? <FiX size={23} /> : <FiMenu size={23} />}
          </button>
        </nav>

        {isOpen && (
          <div className="border-t border-slate-100 bg-white lg:hidden">
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
              <div className="space-y-1">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const active = isActive(link.path);

                  return (
                    <a
                      key={link.path}
                      href={link.path}
                      onClick={closeMenu}
                      className={`flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-medium transition ${
                        active
                          ? "bg-cyan-50 text-[#0d9488]"
                          : "text-slate-700 hover:bg-cyan-50 hover:text-[#0d9488]"
                      }`}
                    >
                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                          active
                            ? "bg-cyan-100 text-[#0d9488]"
                            : "bg-slate-50 text-slate-500"
                        }`}
                      >
                        <Icon size={18} />
                      </span>

                      <span className="flex-1">{link.name}</span>

                      <FiChevronRight
                        size={17}
                        className={
                          active ? "text-[#0d9488]" : "text-slate-300"
                        }
                      />
                    </a>
                  );
                })}
              </div>

              <a
                href="/contact"
                onClick={closeMenu}
                className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#0d9488] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0f766e]"
              >
                <FiSend size={17} />
                <span>Apply Now</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;