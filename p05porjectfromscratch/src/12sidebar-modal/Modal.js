import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'
const Modal = () => {
  const{showModal,closeModal} = useGlobalContext();
  return <div className={`${showModal?'show-modal modal-overlay':'modal-overlay'}`}>
    <div className="modal-container">
      <h3>modal content</h3>
      <button className="close-modal-btn" onClick={()=>closeModal()}>
        <FaTimes/>
      </button>
    </div>

  </div>
}

export default Modal
