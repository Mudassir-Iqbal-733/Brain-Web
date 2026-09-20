import {
  FiCalendar,
  FiClock,
  FiMapPin,
  FiArrowRight,
  FiStar,
} from "react-icons/fi";
import { useState } from "react";

const events = [
  {
    date: "25",
    month: "SEP",
    year: 2026,
    category: "Workshop",
    title: "Web Development Workshop",
    description:
      "Explore modern web development techniques and build practical skills with industry-focused guidance.",
    time: "10:00 AM - 1:00 PM",
    location: "Brain Software Campus",
    status: "upcoming",
  },
  {
    date: "03",
    month: "OCT",
    year: 2026,
    category: "Seminar",
    title: "Career & Technology Seminar",
    description:
      "Discover career opportunities, industry trends, and the skills needed to succeed in the digital world.",
    time: "11:00 AM - 2:00 PM",
    location: "Main Auditorium",
    status: "upcoming",
  },
  {
    date: "12",
    month: "OCT",
    year: 2026,
    category: "Competition",
    title: "Creative Design Competition",
    description:
      "Showcase your creativity and design skills in an exciting competition designed for aspiring professionals.",
    time: "10:00 AM - 3:00 PM",
    location: "Computer Lab",
    status: "upcoming",
  },
  {
    date: "18",
    month: "AUG",
    year: 2026,
    category: "Seminar",
    title: "Digital Skills Seminar",
    description:
      "An informative session focused on modern digital skills, career development, and professional growth.",
    time: "11:00 AM - 2:00 PM",
    location: "Main Auditorium",
    status: "past",
  },
  {
    date: "05",
    month: "JUL",
    year: 2026,
    category: "Workshop",
    title: "Graphic Design Workshop",
    description:
      "A practical workshop covering creative design concepts, visual communication, and professional design techniques.",
    time: "10:00 AM - 1:00 PM",
    location: "Computer Lab",
    status: "past",
  },
  {
    date: "20",
    month: "JUN",
    year: 2026,
    category: "Competition",
    title: "Student Creative Challenge",
    description:
      "Students participated in a creative challenge designed to showcase their skills and innovative ideas.",
    time: "10:00 AM - 3:00 PM",
    location: "Brain Software Campus",
    status: "past",
  },
];

const UpcomingEvents = ({ showAll = false }) => {
  const [filter, setFilter] = useState("upcoming");

  const filteredEvents = showAll
    ? events.filter((event) => event.status === filter)
    : events.filter((event) => event.status === "upcoming").slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-cyan-100/40 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-teal-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#0d9488]">
            <FiStar size={15} />
            What's Happening
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            {showAll ? (
              <>
                Events & <span className="text-[#0d9488]">Activities</span>
              </>
            ) : (
              <>
                Upcoming <span className="text-[#0d9488]">Events</span>
              </>
            )}
          </h2>

          <div className="mx-auto mt-4 flex items-center justify-center gap-1">
            <span className="h-1 w-14 rounded-full bg-[#0d9488]" />
            <span className="h-1 w-6 rounded-full bg-cyan-200" />
          </div>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Stay connected with our latest workshops, seminars, competitions,
            and educational activities.
          </p>
        </div>

        {showAll && (
          <div className="mb-10 flex justify-center">
            <div className="inline-flex rounded-full border border-cyan-100 bg-white p-1.5 shadow-sm">
              <button
                type="button"
                onClick={() => setFilter("upcoming")}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  filter === "upcoming"
                    ? "bg-[#0d9488] text-white shadow-md shadow-[#0d9488]/20"
                    : "text-slate-500 hover:bg-cyan-50 hover:text-[#0d9488]"
                }`}
              >
                Upcoming Events
              </button>

              <button
                type="button"
                onClick={() => setFilter("past")}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  filter === "past"
                    ? "bg-[#0d9488] text-white shadow-md shadow-[#0d9488]/20"
                    : "text-slate-500 hover:bg-cyan-50 hover:text-[#0d9488]"
                }`}
              >
                Past Events
              </button>
            </div>
          </div>
        )}

        <div className="grid gap-6 lg:grid-cols-3">
          {filteredEvents.map((event) => (
            <article
              key={`${event.title}-${event.date}`}
              className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#0d9488]/30 hover:shadow-xl hover:shadow-[#0d9488]/10"
            >
              <div className="flex items-center gap-4 border-b border-slate-100 px-6 py-5">
                <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-gradient-to-br from-[#0d9488] to-teal-600 text-white shadow-md shadow-[#0d9488]/20">
                  <span className="text-2xl font-bold leading-none">
                    {event.date}
                  </span>

                  <span className="mt-1 text-[10px] font-bold tracking-widest">
                    {event.month}
                  </span>
                </div>

                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-[#0d9488]">
                    <FiCalendar size={12} />
                    {event.category}
                  </span>

                  <h3 className="mt-2 text-xl font-bold text-slate-950 transition-colors duration-300 group-hover:text-[#0d9488]">
                    {event.title}
                  </h3>
                </div>
              </div>

              <div className="px-6 py-6">
                <p className="text-sm leading-6 text-slate-500">
                  {event.description}
                </p>

                <div className="mt-6 space-y-3 border-t border-slate-100 pt-5">
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-50 text-[#0d9488]">
                      <FiClock size={15} />
                    </span>
                    <span>{event.time}</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-50 text-[#0d9488]">
                      <FiMapPin size={15} />
                    </span>
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {showAll && filteredEvents.length === 0 && (
          <div className="rounded-2xl border border-cyan-100 bg-white px-6 py-12 text-center shadow-sm">
            <p className="text-sm font-medium text-slate-500">
              No {filter} events available at the moment.
            </p>
          </div>
        )}

        {!showAll && (
          <div className="mt-10 flex justify-center">
            <a
              href="/events"
              className="inline-flex items-center gap-2 rounded-full bg-[#0d9488] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0d9488]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0b7f75] hover:shadow-xl hover:shadow-[#0d9488]/25"
            >
              View All Events
              <FiArrowRight size={17} />
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default UpcomingEvents;