import React from 'react'
import FacultyBanner from './FacultyBanner'
import FacultyHero from './FacultyHero'
import Faculty from '@/components/Faculty'
import FinalCTA from '@/components/common/FinalCTA'


const FacultyPage = () => {
  return (
    <div>
      <FacultyBanner />
      <FacultyHero />
      <Faculty showAll={true} />
      <FinalCTA
  badge="START YOUR JOURNEY"
  titleStart="Ready to"
  titleHighlight="Learn from the Best?"
  description="Join AIRS and learn from our expert faculty who are dedicated to your success."
  primaryText="Apply Now"
  primaryLink="/admission"
  secondaryText="Contact Us"
  secondaryLink="/contact"
/>
    </div>
  )
}

export default FacultyPage