import React from 'react'
import FacultyBanner from './FacultyBanner'
import FacultyHero from './FacultyHero'
import Faculty from '@/components/Faculty'
import FinalCTA from '@/components/FinalCTA'

const FacultyPage = () => {
  return (
    <div>
      <FacultyBanner />
      <FacultyHero />
      <Faculty showAll={true} />
      <FinalCTA />
    </div>
  )
}

export default FacultyPage