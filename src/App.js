import React from "react";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  return (
    <div className="todo-app">
      <TodoList />
    </div>
  );
}

export default App;
//auto focus to bring focus as soon as app open
//second method is useRef
