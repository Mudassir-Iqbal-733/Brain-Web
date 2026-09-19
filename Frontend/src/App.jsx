import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutPage from "./pages/About/AboutPage";
import ProgramsPage from "./pages/Programs/Programspage";
import FacultyPage from "./pages/Faculty/FacultyPage";
import EventsPage from "./pages/Events/EventsPage";
import ContactPage from "./pages/Contact/ContactPage";
import Footer from "./components/Footer";


const App = () => {
  return (
   <div>
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
    </div>
  );
};

export default App;