import React from "react";
import { MdDelete, MdEditNote } from "react-icons/md";

const Todo = ({ todos, removeTodo, editOnClick, changeStatus }) => {
  return todos.map((todo, index) => (
    <div className="new-todo" key={index}>
      <div className="edit">
        <input
          key={todo.id}
          type="checkbox"
          checked={todo.complete}
          onChange={() => changeStatus(todo.id)}
        />
        {todo.text}
        <MdDelete className="delete-icon" onClick={() => removeTodo(todo.id)} />
        <MdEditNote className="edit-icon" onClick={() => editOnClick(todo)} />
      </div>
      {/* <div key={todo.id} onDoubleClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div> */}
    </div>
  ));
};

export default Todo;
