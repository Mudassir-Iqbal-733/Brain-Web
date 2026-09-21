import React from 'react'
import EventsBanner from './EventsBanner'
import EventsStats from './EventStats'
import UpcomingEvents from '@/components/UpcomingEvents'
import FinalCTA from '@/components/common/FinalCTA'


const EventsPage = () => {
  return (
    <div>
      <EventsBanner />
      <EventsStats />
      <UpcomingEvents showAll />
      <FinalCTA
  badge="STAY CONNECTED"
  titleStart="Stay Connected"
  titleHighlight="with AIRS"
  description="Follow us on social media and subscribe to our newsletter to stay updated on all upcoming events and activities."
  primaryText="Subscribe"
  primaryLink="/contact"
  secondaryText="Follow Us"
  secondaryLink="/events"
/>
    </div>
  )
}

export default EventsPage