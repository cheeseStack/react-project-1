import './NewEventForm.css'
import React, { useState } from 'react'


export default function NewEventForm() {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState(' ')

    const resetForm = () => {
        setTitle('')
        setDate('')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // below: new object to represent events once submitted
        const event = {
            title: title,
            date: date,
            id: Math.floor(Math.random()*10000) // this generates as random id between 1 and 10000
        }
        console.log(event);
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
            onChange={(e) => setTitle(e.target.value)} 
            value={title}
            />
        </label>

        <label>
            <span>Event Date: </span>
            <input 
            type="date" 
            onChange={(e) => setDate(e.target.value)}
            value={date}
            />
        </label>
        <button>Submit</button>
    </form>
  )
}
