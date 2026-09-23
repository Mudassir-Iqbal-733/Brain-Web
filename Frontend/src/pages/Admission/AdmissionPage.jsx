import React from 'react'
import AdmissionsBanner from './AdmissionBanner'
import AdmissionProcess from './AdmissionProcess'
import AcademicPrograms from '@/components/AcademicPrograms'
import AdmissionRequirements from './AdmisssionRequirements'
import Apply from './Apply'
import FinalCTA from '@/components/common/FinalCTA'

const AdmissionPage = () => {
  return (
    <div>
        <AdmissionsBanner />
        <AdmissionProcess />
        <AdmissionRequirements />
        <AcademicPrograms />
        <Apply />
        <FinalCTA
                  badge="JOIN AIRS TODAY"
                  titleStart="READY TO JOIN"
                   titleHighlight="AIRS"
                   description="Take the first step towards a rewarding career. Apply now and become part of Pakistan's leading institute for rehabilitation sciences."
                   primaryText="Apply Now"
                   primaryLink="/admission"
                   secondaryText="Contact Us"
                   secondaryLink="/contact"
                />
    </div>
  )
}

export default AdmissionPage