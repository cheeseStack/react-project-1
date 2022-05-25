import './NewEventForm.css'
import React, { useState } from 'react'


export default function NewEventForm({addEvent}) {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [location, setLocation] = useState('Manchester')

    const resetForm = () => {
        setTitle('')
        setDate('')
        setLocation('Manchester')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // below: new object to represent events once submitted
        const event = {
            title: title,
            date: date,
            location: location,
            id: Math.floor(Math.random()*10000) // this generates as random id between 1 and 10000
        }

        console.log(event);
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

        <label>
            <span>Event Location: </span>
            <select onChange={(e) => setLocation(e.target.value) }>
                <option value="Manchester">Manchester</option>
                <option value="London">London</option>
                <option value="Cardiff">Cardiff</option>
            </select>
        </label>

        <button>Submit</button>
    </form>
  )
}
