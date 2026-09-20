import DigitalSkills from "@/components/DigitalSkills";
import Faculty from "@/components/Faculty";
import HeroSlider from "@/components/HeroSlider";
import MissionVision from "@/components/MissionVision";
import OwnerMessage from "@/components/OwnerMessage";
import StatsSection from "@/components/StatsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import UpcomingEvents from "@/components/UpcomingEvents";
import Testimonials from "@/components/Testinomials";
import FinalCTA from "@/components/FinalCTA";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <StatsSection />
      <OwnerMessage />
      <MissionVision />
      <DigitalSkills />
      <WhyChooseUs />
      <Faculty />
      <UpcomingEvents />
      <Testimonials />
      <FinalCTA />
    </div>
  );
};

export default Home;