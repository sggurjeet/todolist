import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //const count = Math.floor(Math.random * 100);
    props.onSubmit({
      id: Math.floor(Math.random() * 100),
      text: input,
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
            ref={inputRef}
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
            ref={inputRef}
            className="todo-input"
          />
          <button onClick={handleSubmit} className="todo-button">
            Add todo
          </button>
          <div className="todo-filter">
            <button>All Tasks</button>
            <button>Active Tasks</button>
            <button>Completed Tasks</button>
          </div>
        </>
      )}
    </form>
  );
}

export default TodoForm;
