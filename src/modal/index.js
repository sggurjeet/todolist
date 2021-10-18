import React, { useState } from "react";

function Modal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Toggle Modal</button>
      <div>
        <button value={modalIsOpen} onClick={() => setModalIsOpen(false)}>
          Close
        </button>
        <h2>Model is Open</h2>
      </div>
    </div>
  );
}

export default Modal;
