import './NewEventForm.css'
import React, { useState, useRef } from 'react'




export default function NewEventForm({addEvent}) {
    // const [title, setTitle] = useState('')
    // const [date, setDate] = useState('')

    const title = useRef()
    const date = useRef()

    const resetForm = () => {
        title.current.value = ""        
        date.current.value = "dd/mm/yyyy"        
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(title, date);
        
        // below: new object to represent events once submitted
        const event = {
            title: title.current.value,
            date: date.current.value,
            id: Math.floor(Math.random()*10000) // this generates as random id between 1 and 10000
        }
        addEvent(event);
        resetForm();
    }

    // const handleChange = (e) => {
    //     setTitle(e.target.value)
    // }
    // instead of the above, use inline functions directly in the onChange function


  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
        <label> 
            <span>Event Title: </span>
            <input 
            type="text" 
            ref = {title}
            // onChange={(e) => setTitle(e.target.value)} 
            // value={title}
            />
        </label>

        <label>
            <span>Event Date: </span>
            <input 
            type="date" 
            ref = {date}
            // onChange={(e) => setDate(e.target.value)}
            // value={date}
            />
        </label>
        <button>Submit</button>
    </form>
  )
}
