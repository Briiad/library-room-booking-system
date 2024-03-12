'use client'

import React from 'react'
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

import "react-big-calendar/lib/css/react-big-calendar.css";

interface CalendarProps {
  data: any
}

const localizer = momentLocalizer(moment)

const customEvent = (event: any) => {
  return (
    <span>
      <strong>{event.event.room_name}</strong>
      {': ' + event.event.startSession}
      {/* <p>{event.event.user_name}</p> */}
    </span>
  )

}

export default function Calendar(props: CalendarProps) {

  return (
    <BigCalendar
      localizer={localizer}
      events={props.data}
      defaultDate={new Date()}
      defaultView='month'
      views={['month']}
      startAccessor={'startDate'}
      endAccessor={'startDate'}
      style={{ height: 500, width: 1200}}
      components={{
        event: customEvent
      }}
      popup={true}
    />
  )
}