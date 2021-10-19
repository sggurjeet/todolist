import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //const count = Math.floor(Math.random * 100);
    props.onSubmit({
      id: Math.floor(Math.random() * 100),
      text: input,
      complete: false,
    });
    setInput("");
  };
  // const alertAway = () => {
  //   console.log("enter what todo bro");
  // };
  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <>
          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="text"
            className="todo-input edit"
          />
          <button onClick={handleSubmit} className="todo-button edit">
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Add a todo"
            value={input}
            // onBlur={alertAway}
            onChange={handleChange}
            name="text"
            className="todo-input"
          />
          <button onClick={handleSubmit} className="todo-button">
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
