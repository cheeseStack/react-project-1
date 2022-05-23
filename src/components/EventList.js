import React from 'react'

export default function EventList({events, handelClick}) { // this destructures rather than use props keyword
  return (
    <div>
        {events.map( (event, index) => (
        <React.Fragment key={event.id}>
          <h2>{index + 1}: {event.title}</h2>
          <button onClick={() => handelClick(event.id)}>delete event</button>
        </React.Fragment>
      ))}
    </div>
  )
}
