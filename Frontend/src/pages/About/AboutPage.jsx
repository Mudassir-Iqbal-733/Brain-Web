import React from 'react'
import AboutHero from './AboutHero'
import AboutBanner from './Aboutbanner'
import MissionVision from '@/components/MissionVision'
import CoreValues from './CoreValues'
import Faculty from '@/components/Faculty'
import DigitalSkills from '@/components/DigitalSkills'
import CampusFacilities from './CampusFacilities'
import FinalCTA from '@/components/FinalCTA'

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
        <FinalCTA />
    </div>
  )
}

export default AboutPage