import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoModal from "./TodoModal";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState({
    id: "",
    value: "",
  });

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos); //async function, useEffect to display the first data
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };
  const editOnClick = (todo) => {
    setEdit({ id: todo.id, value: todo.text });
  };
 

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        editOnClick={editOnClick}
      />
      {edit.id && <TodoModal edit={edit} onSubmit={submitUpdate} />}
    </>
  );
}

export default TodoList;
