import React from 'react'
import AboutHero from './AboutHero'
import AboutBanner from './Aboutbanner'
import MissionVision from '@/components/MissionVision'
import CoreValues from './CoreValues'

const AboutPage = () => {
  return (
    <div>
        <AboutBanner />
        <AboutHero />
        <CoreValues />
        <MissionVision />
    </div>
  )
}

export default AboutPage