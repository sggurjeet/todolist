import React, { useState, useRef, useEffect } from "react";

// import { MdAdd } from "react-icons/md";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const [errors, setError] = useState({});
  const inputRef = useRef(null);

  useEffect(() => {
    if (!input) {
      inputRef.current.focus();
    }
  });

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
            autoFocus //focus on input field using autofocus property of html element
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
            ref={inputRef} //focus on input field using useRef and useEffect hooks
            className="new-todo"
          />
          {/* <MdAdd onClick={handleSubmit} className="add-button" /> */}
          <br />
          <div className="todo-errors">{errors.text}</div>
        </>
      )}
    </form>
  );
}

export default TodoForm;
//connect(mapStateToProps, mapDispatchToProps)
//useRef is basically getelementdocumemntbyid
