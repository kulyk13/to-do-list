import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoProvider from "./hooks/useTodo";

function App() {
  return (
    <TodoProvider>
      <div className="container">
        <h1>ToDo List</h1>
        <AddTodo />
        <TodoList />
      </div>
    </TodoProvider>
  );
}
export default App;
