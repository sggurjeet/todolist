import React, { useState } from "react";
import Modal from "react-modal";
import TodoForm from "./TodoForm";
// { edit, submitUpdate, modalIsOpen }
const TodoModal = ({ edit, onSubmit: submitUpdate }) => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <TodoForm edit={edit} onSubmit={submitUpdate} />
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
    </div>
  );
};

export default TodoModal;
