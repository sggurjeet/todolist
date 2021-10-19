import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoModal from "./TodoModal";
import Todo from "./Todo";
import FilterButton from "./FilterButton";

const filterOBJ = { All: "", Active: false, Completed: true };

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState({
    id: "",
    value: "",
  });
  const [taskFilter, setTaskFilter] = useState("");

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos); //async function, useEffect to display the first data
    console.log(todo);
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
  const changeStatus = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const localTodos = [...todos];
    localTodos[todoIndex] = {
      ...localTodos[todoIndex],
      complete: !localTodos[todoIndex].complete,
    };
    setTodos(localTodos);
  };
  const formatTodo = (filter) => {
    if (filter) {
      return todos.filter((todo) => todo.complete);
    }
    if (filter === false) {
      return todos.filter((todo) => !todo.complete);
    }
    return todos;
  };

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      {Object.keys(filterOBJ).map((key) => (
        <FilterButton
          key={key}
          name={key}
          onClick={() => setTaskFilter(filterOBJ[key])}
        />
      ))}
      {/* <FilterButton name="All" onClick={() => setTaskFilter("")} />
      <FilterButton name="Active" onClick={() => setTaskFilter(false)} />
      <FilterButton name="Complete" onClick={() => setTaskFilter(true)} /> */}
      <Todo
        todos={formatTodo(taskFilter)}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        editOnClick={editOnClick}
        changeStatus={changeStatus}
      />
      {edit.id && <TodoModal edit={edit} onSubmit={submitUpdate} />}
    </>
  );
}

export default TodoList;
