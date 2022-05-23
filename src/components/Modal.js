import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

export default function Modal(props) {
  return ReactDOM.createPortal ( (
    <div className="modal-page">
        <div className='modal-backdrop'>
            <div className="modal" style={{
                border: "4px solid",
                borderColor: "#ff4500",
                textAlign: "center"
            }}>
                {props.children}
                <button onClick={props.handleClose}>close</button>
            </div>
        </div>
    </div>
  ), document.body )
}

