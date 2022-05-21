// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import Title from './components/Title'
import Modal from './components/Modal'

function App() {
  // //s.22: conditional Templates: show based on true or false
  const [showEvents, setShowEvents] = useState(true)
  // setName is to set a function to set the name to a different one
  const [events, setEvents] = useState([
    {title: "mario's birthday bash", id: 1 },
    {title: "bowser's live stream", id: 2 },
    {title: "race on moo moo farm", id: 3}
  ])

  // below: Modal useState 
  const [showModal, setShowModal] = useState(false);

  console.log(showModal);

  const handelClick = (id) => {
    setEvents ((previousEvents) => {
        return previousEvents.filter((event) => {
        return id !== event.id
      })
    })
    console.log(id);
  }

  // below: modal handleClose function
  const handleClose = () => {
    setShowModal(false)
  }

  // below: open the modal with a button:
  // const handleOpen = () => {
  //   setShowModal(true)
  // } 

  const subtitle = "All the latest events in Marioland"
  const subtitle2 = "Another subtitle"

  return (
    <div className="App">
    
      <Title title="Events in Your Area" subtitle={subtitle}/>
      {/* <Title title="another title" subtitle={subtitle2}/> */}
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
        <React.Fragment key={event.id}>
          <h2>{index + 1}: {event.title}</h2>
          <button onClick={() => handelClick(event.id)}>delete event</button>
        </React.Fragment>
      ))}

    {/* Modal from part 28 goes below */}
    {/* <Modal> 
      <h2>10% Off Coupon Code!!</h2>
      <p>Use the code NINJA10 at the checkout</p>
    </Modal> */}

    {showModal && <Modal handleClose={handleClose}> 
      <h2>Terms and Conditions</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, eum. Incidunt necessitatibus saepe, nihil architecto quis labore corporis omnis alias expedita ipsam corrupti cupiditate, doloribus ex aliquid minima numquam! Eaque!</p>
      <a href="#">find out more . . .</a>
    </Modal>}

    <div>
      <button onClick={() => setShowModal(true)}>Show your special offer</button>
    </div>

    </div>
  );
}

export default App;
