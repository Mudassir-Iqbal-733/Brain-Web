import {
  FiClock,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
} from "react-icons/fi";

const ContactForm = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-100/40 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-teal-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.9fr] lg:gap-14">

          {/* FORM */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50 sm:p-8 lg:p-10">

            <div className="mb-8">
              <span className="inline-flex rounded-full bg-[#0d9488]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#0d9488]">
                Send Message
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Get in Touch
              </h2>

              <div className="mt-4 flex items-center gap-2">
                <span className="h-1 w-14 rounded-full bg-[#0d9488]" />
                <span className="h-1 w-6 rounded-full bg-cyan-200" />
              </div>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>
            </div>

            <form className="space-y-5">

              {/* FULL NAME + EMAIL */}
              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="fullName"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0d9488] focus:bg-white focus:ring-4 focus:ring-[#0d9488]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0d9488] focus:bg-white focus:ring-4 focus:ring-[#0d9488]/10"
                  />
                </div>

              </div>

              {/* PHONE + SUBJECT */}
              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0d9488] focus:bg-white focus:ring-4 focus:ring-[#0d9488]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Enter subject"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0d9488] focus:bg-white focus:ring-4 focus:ring-[#0d9488]/10"
                  />
                </div>

              </div>

              {/* PROGRAM */}
              <div>
                <label
                  htmlFor="program"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Interested Program
                </label>

                <select
                  id="program"
                  name="program"
                  defaultValue=""
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#0d9488] focus:bg-white focus:ring-4 focus:ring-[#0d9488]/10"
                >
                  <option value="" disabled>
                    Select a program (optional)
                  </option>

                  <option value="ADP CS">
                    ADP CS
                  </option>

                  <option value="ADP IT">
                    ADP IT
                  </option>

                  <option value="Doctor of Physical Therapy (DPT)">
                    Doctor of Physical Therapy (DPT)
                  </option>

                  <option value="Pharmacy Technician">
                    Pharmacy Technician
                  </option>
                </select>
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Message <span className="text-red-500">*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Write your message..."
                  required
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0d9488] focus:bg-white focus:ring-4 focus:ring-[#0d9488]/10"
                />
              </div>

              {/* PRIVACY */}
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  name="privacy"
                  required
                  className="mt-1 h-4 w-4 rounded border-slate-300 accent-[#0d9488]"
                />

                <span className="text-sm leading-6 text-slate-500">
                  I agree to the privacy policy and terms of service.
                </span>
              </label>

              {/* SEND BUTTON */}
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0d9488] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal-200 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0b7f75] hover:shadow-xl sm:w-auto"
              >
                <FiSend size={18} />
                Send Message
              </button>

            </form>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">

            {/* MAP */}
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-200/50">

              <div className="border-b border-slate-100 px-6 py-5">
                <h3 className="text-xl font-bold text-slate-900">
                  Find Us
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Visit Agile Institute of Rehabilitation Sciences
                </p>
              </div>

              <div className="h-72 w-full">
                <iframe
                  title="Agile Institute of Rehabilitation Sciences Location"
                  src="https://www.google.com/maps?q=Bahawalpur,Punjab,Pakistan&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

            </div>

            {/* QUICK CONTACT */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50 sm:p-7">

              <h3 className="text-xl font-bold text-slate-900">
                Quick Contact
              </h3>

              <div className="mt-6 space-y-5">

                {/* PHONE */}
                <a
                  href="tel:+923111111111"
                  className="group flex items-start gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0d9488]/10 text-[#0d9488] transition-all group-hover:bg-[#0d9488] group-hover:text-white">
                    <FiPhone size={19} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Phone
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-700 group-hover:text-[#0d9488]">
                      +92 311 1111111
                    </p>

                    <p className="text-sm font-semibold text-slate-700 group-hover:text-[#0d9488]">
                      +92 322 2222222
                    </p>
                  </div>
                </a>

                {/* EMAIL */}
                <a
                  href="mailto:info@brainsoftware.edu.pk"
                  className="group flex items-start gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0d9488]/10 text-[#0d9488] transition-all group-hover:bg-[#0d9488] group-hover:text-white">
                    <FiMail size={19} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Email
                    </p>

                    <p className="mt-1 break-all text-sm font-semibold text-slate-700 group-hover:text-[#0d9488]">
                      info@brainsoftware.edu.pk
                    </p>
                  </div>
                </a>

                {/* ADDRESS */}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Bahawalpur%2C%20Punjab%2C%20Pakistan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0d9488]/10 text-[#0d9488] transition-all group-hover:bg-[#0d9488] group-hover:text-white">
                    <FiMapPin size={19} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Address
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-700 group-hover:text-[#0d9488]">
                      Bahawalpur, Punjab, Pakistan
                    </p>
                  </div>
                </a>

                {/* WORKING HOURS */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0d9488]/10 text-[#0d9488]">
                    <FiClock size={19} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Working Hours
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-700">
                      Mon–Sat: 8:00 AM – 4:00 PM
                    </p>

                    <p className="text-sm text-slate-500">
                      Sunday: Closed
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;