// import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  // name is the current default name; 
  // setName is to set a function to set the name to a different one
  const [events, setEvents] = useState([
    {title: "mario's birthday bash", id: 1 },
    {title: "bowser's live stream", id: 2 },
    {title: "race on moo moo farm", id: 3}
  ])

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
      {events.map( (event, index) => (
        <div key={event.id}>
          <h2>{index + 1}: {event.title}</h2>
          <button onClick={() => handelClick(event.id)}>delete event</button>
        </div>
      ))}
    </div>
  );
}

export default App;
