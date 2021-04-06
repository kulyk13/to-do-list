import React, { createContext, useContext, useReducer } from "react";

const TodoContext = createContext();
export const useTodo = () => useContext(TodoContext);

export default function TodoProvider({ children }) {
  function todoReducer(state, { type, payload }) {
    switch (type) {
      case "add":
        return [{ title: payload.todoTitle, text: payload.todoText }, ...state];
      default:
        throw new Error("Action type is wrong!");
    }
  }
  const [todos, todosAction] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={{ todos, todosAction }}>
      {children}
    </TodoContext.Provider>
  );
}
