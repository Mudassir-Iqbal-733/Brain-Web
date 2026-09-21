import ContactBanner from "./ContactBanner";
import ContactHero from "./ContactHero";
import ContactForm from "./ContactForm";
import FinalCTA from "@/components/common/FinalCTA";


const ContactPage = () => {
  return (
    <div>
      <ContactBanner />
      <ContactHero />
      <ContactForm />
      <FinalCTA
  badge="START YOUR JOURNEY"
  titleStart="Ready to"
  titleHighlight="Join AIRS?"
  description="Take the first step towards a rewarding career. Apply now and become part of Pakistan's leading institute for rehabilitation sciences."
  primaryText="Apply Now"
  primaryLink="/admission"
  secondaryText="Call Us"
  secondaryLink="tel:0622888596,0622888597,03212319576,03314888596"
/>
      
    </div>
  );
};

export default ContactPage;