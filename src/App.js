// import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  // name is the current default name; 
  // setName is to set a function to set the name to a different one
  const [name, setName] = useState('mario');

  const handelClick = () => {
    setName('luigi')
    console.log(name)
  }

  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <button onClick={handelClick}>Change name</button>
    </div>
  );
}

export default App;
