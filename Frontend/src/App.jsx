import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgress from "./components/loaders/ScrollProgress";
import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./pages/Home";
import AboutPage from "./pages/About/AboutPage";
import ProgramsPage from "./pages/Programs/ProgramsPage";
import FacultyPage from "./pages/Faculty/FacultyPage";
import EventsPage from "./pages/Events/EventsPage";
import ContactPage from "./pages/Contact/ContactPage";
import AdmissionPage from "./pages/Admission/AdmissionPage";
import ProgramDetails from "./pages/Programs/ProgramDetails";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <ScrollProgress />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/programs/:slug" element={<ProgramDetails />} />
        <Route path="/faculty" element={<FacultyPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admission" element={<AdmissionPage />} />
      </Routes>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;