import './NewEventForm.css'
import React, { useState } from 'react'


export default function NewEventForm() {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState(' ')

    // const handleChange = (e) => {
    //     setTitle(e.target.value)
    // }
    // instead of the above, use inline functions directly in the onChange function


  return (
    <form className="new-event-form">
        <label> 
            <span>Event Title: </span>
            <input type="text" onChange={(e) => setTitle(e.target.value)} />
        </label>

        <label>
            <span>Event Date: </span>
            <input type="date" onChange={(e) => setDate(e.target.value)}/>
        </label>
        <button>Submit</button>
        <p>Title: {title}</p>
        <p>Date: {date}</p>
    </form>
  )
}
