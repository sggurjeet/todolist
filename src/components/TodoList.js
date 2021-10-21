import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoModal from "./TodoModal";
import Todo from "./Todo";
import FilterButton from "./FilterButton";
import { addTodoAction, removeTodoAction } from "../redux/actions";
import { connect } from "react-redux";

const filterOBJ = { All: "", Active: false, Completed: true };

function TodoList(props) {
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState({
    id: "",
    value: "",
  });
  const [taskFilter, setTaskFilter] = useState("");
  // Add a new todo
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    props.addTodoAction(newTodos);
    //async function, useEffect to display the first data
    console.log(todo);
  };

  // Update a task
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };
  // Remove a task
  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
    props.removeTodoAction(removedArr);
  };

  //Edit a task open in a new modal
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
    <div>
      <div className="todoapp h1">
        <h1>Todos</h1>
      </div>
      <div>
        <TodoForm onSubmit={addTodo} />

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
        <div className="todo-task-btn">
          {todos.length
            ? Object.keys(filterOBJ).map((key) => (
                <FilterButton
                  key={key}
                  name={key}
                  onClick={() => setTaskFilter(filterOBJ[key])}
                />
              ))
            : null}
        </div>

        {edit.id && <TodoModal edit={edit} onSubmit={submitUpdate} />}
      </div>
    </div>
  );
}
const mapStateToProps = ({ reducer }) => {
  return {
    reducer: reducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTodoAction: (todos) => dispatch(addTodoAction(todos)),
    removeTodoAction: (id) => dispatch(removeTodoAction(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
