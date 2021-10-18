import React from "react";
// import TodoForm from "./TodoForm";

const Todo = ({ todos, completeTodo, removeTodo, editOnClick, updateTodo }) => {
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      {/* <div>
        <input key={todo.id} type="checkbox" defaultChecked={false} />
      </div> */}
      <div key={todo.id} onDoubleClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
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
