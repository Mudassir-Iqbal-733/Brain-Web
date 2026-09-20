import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutPage from "./pages/About/AboutPage";
import ProgramsPage from "./pages/Programs/Programspage";
import FacultyPage from "./pages/Faculty/FacultyPage";
import EventsPage from "./pages/Events/EventsPage";
import ContactPage from "./pages/Contact/ContactPage";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import WhatsAppButton from "./components/WhatsappButton";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading && (
        <div className="fixed inset-0 z-[99999]">
          <div className="flex min-h-screen items-center justify-center overflow-hidden bg-slate-950">
            <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />

            <div className="relative flex flex-col items-center px-6 text-center">
              <div className="relative flex h-20 w-20 items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-cyan-400/10" />
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-cyan-400/20 border-t-cyan-400" />
              </div>

              <h1 className="mt-8 max-w-2xl text-xl font-bold tracking-wide text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.55)] sm:text-2xl lg:text-3xl">
                Brain Inspire System Of Education PVT LTD
              </h1>

              <div className="mt-5 flex items-center justify-center gap-2">
                <span className="h-1 w-14 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.7)]" />
                <span className="h-1 w-6 rounded-full bg-teal-400/60" />
              </div>

              <p className="mt-5 text-xs font-medium uppercase tracking-[0.25em] text-slate-500">
                Loading
              </p>
            </div>
          </div>
        </div>
      )}

      <ScrollProgress />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/faculty" element={<FacultyPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />

      {!loading && <WhatsAppButton />}
    </div>
  );
};

export default App;