// import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  // name is the current default name; 
  // setName is to set a function to set the name to a different one
  const [name, setName] = useState('mario');
  const [events, setEvents] = useState([
    {title: "mario's birthday bash", id: 1 },
    {title: "bowser's live stream", id: 2 },
    {title: "race on moo moo farm", id: 3}
  ])

  const handelClick = () => {
    setName('luigi')
    console.log(name)
  }

  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <button onClick={handelClick}>Change name</button>
      {events.map( (event, index) => (
        <div key={event.id}>
          <h2>{index + 1}: {event.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
