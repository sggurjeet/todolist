import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const [errors, setError] = useState({});
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 100),
      text: input,
      complete: false,
    });
    setInput("");
  };

  //Validate Function, when input field is left empty it will prompt to add a task
  function validate() {
    let localError = "";
    let isValid = true;
    if (!input) {
      isValid = false;
      localError = "Please enter a task";
    } else {
      localError = "";
    }
    setError((state) => ({
      ...state,
      text: localError,
    }));
    return isValid;
  }
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
            autoFocus
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
            onBlur={validate}
            onChange={handleChange}
            name="text"
            autoFocus
            className="todo-input"
          />
          <br />
          <div>{errors.text}</div>
          <button onClick={handleSubmit} className="todo-button">
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
