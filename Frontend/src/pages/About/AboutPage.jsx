import React from 'react'
import AboutHero from './AboutHero'
import AboutBanner from './Aboutbanner'
import MissionVision from '@/components/MissionVision'
import CoreValues from './CoreValues'
import Faculty from '@/components/Faculty'
import DigitalSkills from '@/components/AcademicPrograms'
import CampusFacilities from './CampusFacilities'
import FinalCTA from '@/components/common/FinalCTA'


const AboutPage = () => {
  return (
    <div>
        <AboutBanner />
        <AboutHero />
        <CoreValues />
        <MissionVision />
        <DigitalSkills />
        <CampusFacilities />
        <Faculty />
        <FinalCTA
          badge="JOIN AIRS TODAY"
          titleStart="Ready to"
           titleHighlight="Start Your Journey?"
           description="Become part of Pakistan's leading institute for rehabilitation sciences and launch your career."
           primaryText="Apply Now"
           primaryLink="/admission"
           secondaryText="Contact Us"
           secondaryLink="/contact"
        />
    </div>
  )
}

export default AboutPage