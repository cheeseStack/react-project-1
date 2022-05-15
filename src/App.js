// import logo from './logo.svg';
import './App.css';

function App() {

  let name = 'mario';

  const handelClick = () => {
    name = 'luigi';
    console.log(name);
  }

  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <button onClick={handelClick}>Change name</button>
    </div>
  );
}

export default App;
