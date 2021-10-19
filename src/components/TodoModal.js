import React from "react";
import Modal from "react-modal";
import TodoForm from "./TodoForm";

const TodoModal = ({ edit, onSubmit: submitUpdate }) => {
  return (
    <div>
      <Modal isOpen={true} ariaHideApp={false} onRequestClose={submitUpdate}>
        <TodoForm edit={edit} onSubmit={submitUpdate} />
        <button onClick={submitUpdate}>Close</button>
      </Modal>
    </div>
  );
};

export default TodoModal;
