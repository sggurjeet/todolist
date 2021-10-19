import React from "react";

const Todo = ({ todos, removeTodo, editOnClick, changeStatus }) => {
  return todos.map((todo, index) => (
    <div key={index}>
      <div>
        <input
          key={todo.id}
          type="checkbox"
          checked={todo.complete}
          onChange={() => changeStatus(todo.id)}
        />
        {todo.text}
      </div>
      {/* <div key={todo.id} onDoubleClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div> */}
      <div className="icons">
        <button onClick={() => removeTodo(todo.id)} className="delete-icon">
          Delete
        </button>
        <button onClick={() => editOnClick(todo)} className="edit-icon">
          Edit
        </button>
      </div>
    </div>
  ));
};

export default Todo;
