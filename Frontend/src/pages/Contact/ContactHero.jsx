import {
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const ContactHero = () => {
  const contactCards = [
    {
      title: "Call Us",
      value: "+92 311 1111111",
      description: "Speak directly with our team",
      icon: FiPhone,
      href: "tel:+923111111111",
    },
    {
      title: "WhatsApp",
      value: "+92 322 2222222",
      description: "Message us on WhatsApp",
      icon: FaWhatsapp,
      href: "https://wa.me/923222222222",
      external: true,
    },
    {
      title: "Email Us",
      value: "info@brainsoftware.edu.pk",
      description: "Send us your questions",
      icon: FiMail,
      href: "mailto:info@brainsoftware.edu.pk",
    },
    {
      title: "Visit Us",
      value: "Bahawalpur, Punjab",
      description: "Find our education center",
      icon: FiMapPin,
      href: "https://www.google.com/maps/search/?api=1&query=Bahawalpur%2C%20Punjab%2C%20Pakistan",
      external: true,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50">
      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-teal-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {contactCards.map((card) => {
            const Icon = card.icon;

            return (
              <a
                key={card.title}
                href={card.href}
                target={card.external ? "_blank" : undefined}
                rel={card.external ? "noopener noreferrer" : undefined}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#0d9488]/30 hover:shadow-xl hover:shadow-teal-100/50"
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-50 transition-all duration-300 group-hover:scale-150" />

                <div className="relative">

                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0d9488]/10 text-[#0d9488] transition-all duration-300 group-hover:bg-[#0d9488] group-hover:text-white">
                      <Icon size={21} />
                    </div>

                    <span className="text-xs font-medium text-slate-400 transition-colors group-hover:text-[#0d9488]">
                      Contact
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-slate-900">
                    {card.title}
                  </h3>

                  <p className="mt-2 break-words text-sm font-semibold text-[#0d9488]">
                    {card.value}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {card.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-slate-700 transition-colors group-hover:text-[#0d9488]">
                    Connect Now
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>

                </div>
              </a>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default ContactHero;