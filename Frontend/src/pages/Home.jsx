import DigitalSkills from "@/components/AcademicPrograms";
import Faculty from "@/components/Faculty";
import HeroSlider from "@/components/HeroSlider";
import MissionVision from "@/components/MissionVision";
import OwnerMessage from "@/components/OwnerMessage";
import StatsSection from "@/components/StatsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import UpcomingEvents from "@/components/UpcomingEvents";
import Testimonials from "@/components/Testinomials";
import FinalCTA from "@/components/common/FinalCTA";

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
      <FinalCTA 
        badge="START YOUR JOURNEY"
        title="Ready to Learn From the Best?"
        description="Join AIRS and learn from our expert faculty who are dedicated to your success."
        primaryText="Apply Now"
        primaryLink="/admission"
        secondaryText="Contact Us"
        secondaryLink="/contact"
        />
    </div>
  );
};

export default Home;