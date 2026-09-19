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
                alt="Brain Software"
                className="h-12 w-auto object-contain"
              />
            </a>

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              Brain Software is committed to providing quality education,
              practical digital skills, and career-focused training to help
              students build a successful future.
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
                ["About Us", "/about"],
                ["Programs", "/programs"],
                ["Faculty", "/faculty"],
                ["Events", "/events"],
                ["Contact", "/contact"],
                ["Admissions", "/admissions"],
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
                  Web Development
                </a>
              </li>

              <li>
                <a
                  href="/programs"
                  className="text-sm text-slate-400 transition-colors duration-300 hover:text-[#0d9488]"
                >
                  Software Development
                </a>
              </li>

              <li>
                <a
                  href="/programs"
                  className="text-sm text-slate-400 transition-colors duration-300 hover:text-[#0d9488]"
                >
                  Graphic Designing
                </a>
              </li>

              <li>
                <a
                  href="/programs"
                  className="text-sm text-slate-400 transition-colors duration-300 hover:text-[#0d9488]"
                >
                  Digital Marketing
                </a>
              </li>

              <li>
                <a
                  href="/programs"
                  className="text-sm text-slate-400 transition-colors duration-300 hover:text-[#0d9488]"
                >
                  Professional IT Courses
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

              <a
                href="tel:+923000000000"
                className="flex items-center gap-3 text-sm text-slate-400 transition-colors duration-300 hover:text-[#0d9488]"
              >
                <FiPhone
                  size={16}
                  className="shrink-0 text-[#0d9488]"
                />
                +92 300 0000000
              </a>

              <a
                href="mailto:info@brainsoftware.edu.pk"
                className="flex items-center gap-3 text-sm text-slate-400 transition-colors duration-300 hover:text-[#0d9488]"
              >
                <FiMail
                  size={16}
                  className="shrink-0 text-[#0d9488]"
                />
                info@brainsoftware.edu.pk
              </a>

              <a
                href="/"
                className="flex items-center gap-3 text-sm text-slate-400 transition-colors duration-300 hover:text-[#0d9488]"
              >
                <FiGlobe
                  size={16}
                  className="shrink-0 text-[#0d9488]"
                />
                www.brainsoftware.edu.pk
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-4">
          <div className="flex justify-center text-center">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Brain Software. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;