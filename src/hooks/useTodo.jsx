import React, { createContext, useContext, useReducer } from "react";

const TodoContext = createContext();
export const useTodo = () => useContext(TodoContext);

const options = [
  { value: "urgently" },
  { value: "not urgently" },
  { value: "important" },
  { value: "not important" },
];

export default function TodoProvider({ children }) {
  function todoReducer(state, { type, payload }) {
    switch (type) {
      case "add":
        return [{ title: payload.todoTitle, text: payload.todoText }, ...state];
      case "delete":
        state.splice(0, 1);
        return [...state];
      default:
        throw new Error("Action type is wrong!");
    }
  }
  const [todos, todosAction] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={{ todos, todosAction, options }}>
      {children}
    </TodoContext.Provider>
  );
}
