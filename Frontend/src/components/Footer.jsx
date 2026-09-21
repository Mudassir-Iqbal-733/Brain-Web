import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiGlobe,
  FiArrowRight,
  FiFacebook,
  FiInstagram,
  FiYoutube,
} from "react-icons/fi";

import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-5 pt-12 pb-2 sm:px-6 lg:px-8 lg:pt-14 lg:pb-2">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.2fr_1.2fr] lg:gap-12">
          <div>
            <a href="/" className="inline-flex items-center">
              <img
                src={logo}
                alt="Agile Institute of Rehabilitation Sciences"
                className="h-12 w-auto object-contain"
              />
            </a>

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              Agile Institute of Rehabilitation Sciences is committed to
              providing quality education, practical learning, and
              career-focused programs in healthcare and technology.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-all duration-300 hover:border-[#0d9488] hover:bg-[#0d9488] hover:text-white"
              >
                <FiFacebook size={16} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-all duration-300 hover:border-[#0d9488] hover:bg-[#0d9488] hover:text-white"
              >
                <FiInstagram size={16} />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-all duration-300 hover:border-[#0d9488] hover:bg-[#0d9488] hover:text-white"
              >
                <FiYoutube size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Programs", "/programs"],
                ["Faculty", "/faculty"],
                ["Events", "/events"],
                ["Contact", "/contact"],
                ["Admissions", "/admission"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors duration-300 hover:text-[#0d9488]"
                  >
                    <FiArrowRight
                      size={12}
                      className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                    />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white">
              Our Programs
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="/programs"
                  className="text-sm text-slate-400 transition-colors duration-300 hover:text-[#0d9488]"
                >
                  Doctor of Physical Therapy (DPT)
                </a>
              </li>

              <li>
                <a
                  href="/programs"
                  className="text-sm text-slate-400 transition-colors duration-300 hover:text-[#0d9488]"
                >
                  ADP Computer Science
                </a>
              </li>

              <li>
                <a
                  href="/programs"
                  className="text-sm text-slate-400 transition-colors duration-300 hover:text-[#0d9488]"
                >
                  ADP Information Technology
                </a>
              </li>

              <li>
                <a
                  href="/programs"
                  className="text-sm text-slate-400 transition-colors duration-300 hover:text-[#0d9488]"
                >
                  Pharmacy Technician
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white">
              Contact Info
            </h3>

            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-3">
                <FiMapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-[#0d9488]"
                />

                <p className="text-sm leading-5 text-slate-400">
                  Bahawalpur, Punjab, Pakistan
                </p>
              </div>

              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                <a
                  href="tel:0622888596"
                  className="flex items-center gap-2 text-sm text-slate-400 transition-colors duration-300 hover:text-[#0d9488]"
                >
                  <FiPhone
                    size={15}
                    className="shrink-0 text-[#0d9488]"
                  />
                  0622-888596
                </a>

                <a
                  href="tel:0622888597"
                  className="flex items-center gap-2 text-sm text-slate-400 transition-colors duration-300 hover:text-[#0d9488]"
                >
                  <FiPhone
                    size={15}
                    className="shrink-0 text-[#0d9488]"
                  />
                  0622-888597
                </a>

                <a
                  href="tel:03212319576"
                  className="flex items-center gap-2 text-sm text-slate-400 transition-colors duration-300 hover:text-[#0d9488]"
                >
                  <FiPhone
                    size={15}
                    className="shrink-0 text-[#0d9488]"
                  />
                  0321-2319576
                </a>

                <a
                  href="tel:03314888596"
                  className="flex items-center gap-2 text-sm text-slate-400 transition-colors duration-300 hover:text-[#0d9488]"
                >
                  <FiPhone
                    size={15}
                    className="shrink-0 text-[#0d9488]"
                  />
                  0331-4888596
                </a>
              </div>

              <a
                href="mailto:info@airs.edu.pk"
                className="flex items-center gap-3 text-sm text-slate-400 transition-colors duration-300 hover:text-[#0d9488]"
              >
                <FiMail
                  size={16}
                  className="shrink-0 text-[#0d9488]"
                />
                info@airs.edu.pk
              </a>

              <a
                href="https://airs.edu.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-slate-400 transition-colors duration-300 hover:text-[#0d9488]"
              >
                <FiGlobe
                  size={16}
                  className="shrink-0 text-[#0d9488]"
                />
                www.airs.edu.pk
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-4">
          <div className="flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:justify-between">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Agile Institute of Rehabilitation
              Sciences. All rights reserved.
            </p>

            <p className="text-xs text-slate-600">
              Quality Education • Professional Excellence • Student Success
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;