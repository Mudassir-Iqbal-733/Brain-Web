import React from 'react'
import EventsBanner from './EventsBanner'
import EventsStats from './EventStats'
import UpcomingEvents from '@/components/UpcomingEvents'
import EventsCTA from './EventsCTA'

const EventsPage = () => {
  return (
    <div>
      <EventsBanner />
      <EventsStats />
      <UpcomingEvents showAll />
      <EventsCTA />
    </div>
  )
}

export default EventsPage