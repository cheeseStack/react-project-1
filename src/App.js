// import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  // //s.22: conditional Templates: show based on true or false
  const [showEvents, setShowEvents] = useState(true)
  // setName is to set a function to set the name to a different one
  const [events, setEvents] = useState([
    {title: "mario's birthday bash", id: 1 },
    {title: "bowser's live stream", id: 2 },
    {title: "race on moo moo farm", id: 3}
  ])

  console.log(showEvents);

  const handelClick = (id) => {
    setEvents ((previousEvents) => {
        return previousEvents.filter((event) => {
        return id !== event.id
      })
    })
    console.log(id);
  }

  return (
    <div className="App">
      {/* below: s22: https://netninja.dev/courses/1546635/lectures/35757442 
      Button to show or hide the template below, showing the object ddata  */}
      {showEvents && (
        <div>
          <button onClick ={() => setShowEvents(false)}>hide events</button>
        </div>
      )}
      
      {!showEvents && (
        <div>
          <button onClick ={() => setShowEvents(true)}>show events</button>
        </div>
      )}

      {/* use logical AND && to sow or hide the template, only showing the RHS of the code if the LHS is true */}
      {showEvents && events.map( (event, index) => (
        <div key={event.id}>
          <h2>{index + 1}: {event.title}</h2>
          <button onClick={() => handelClick(event.id)}>delete event</button>
        </div>
      ))}
    </div>
  );
}

export default App;
