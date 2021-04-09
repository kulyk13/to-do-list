import React, { createContext, useContext, useReducer } from "react";

const TodoContext = createContext();
export const useTodo = () => useContext(TodoContext);

const todoTags = [
  { label: "urgently", value: 1, color: "red" },
  { label: "not urgently", value: 2, color: "cyan" },
  { label: "important", value: 3, color: "gold" },
  { label: "not important", value: 4, color: "green" },
];

if (!window.localStorage.getItem("todos")) {
  window.localStorage.setItem("todos", JSON.stringify([]));
}
const initialTodos = JSON.parse(window.localStorage.getItem("todos"));

export default function TodoProvider({ children }) {
  function todoReducer(state, { type, payload }) {
    switch (type) {
      case "add":
        const tags = payload.todoTags.sort((a, b) => a - b);
        const todo = {
          id: Date.now(),
          title: payload.todoTitle,
          text: payload.todoText,
          tags: tags,
          done: false,
        };
        const newState = [todo, ...state];
        window.localStorage.setItem("todos", JSON.stringify(newState));
        return newState;
      case "delete":
        const slicedArray = [...state];
        const removedTodoIdx = slicedArray.findIndex(
          (todo) => todo.id === payload
        );
        slicedArray.splice(removedTodoIdx, 1);
        window.localStorage.setItem("todos", JSON.stringify(slicedArray));
        return slicedArray;
      case "edit":
        console.log(payload);
        return state;
      default:
        throw new Error("Action type is wrong!");
    }
  }
  const [todos, todosAction] = useReducer(todoReducer, initialTodos);

  return (
    <TodoContext.Provider value={{ todos, todosAction, todoTags }}>
      {children}
    </TodoContext.Provider>
  );
}
