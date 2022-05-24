import React from 'react'
import styles from './EventList.module.css'

export default function EventList({events, handelClick}) { // this destructures rather than use props keyword
  return (
    <div>
        {events.map( (event, index) => (
        <div className={styles.card} key={event.id}>
          <h2>{index + 1}: {event.title}</h2>
          <button onClick={() => handelClick(event.id)}>delete event</button>
        </div>
      ))}
    </div>
  )
}
