import React from 'react'
import ProgramsBanner from './ProgramsBanner'
import ProgramsCards from './ProgramsCards'
import FinalCTA from '@/components/common/FinalCTA'


const ProgramsPage = () => {
  return (
    <div>
      <ProgramsBanner />
      <ProgramsCards />
       <FinalCTA
        badge="START YOUR JOURNEY"
        titleStart="Ready to"
        titleHighlight="Apply for Your Program?"
        description="Take the first step towards a rewarding career. Apply now and join Pakistan's leading institute for rehabilitation sciences."
        primaryText="Apply Now"
        primaryLink="/admission"
        secondaryText="Contact Us"
        secondaryLink="/contact"
/>
    </div>
  )
}

export default ProgramsPage