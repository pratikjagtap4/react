import { useContext } from "react";
import { createContext } from "react";
const ToDoContext = createContext({
  toDos: [],
  addToDo: () => {},
  deleteToDo: () => {},
  updateToDo: () => {},
  toggleComplete: () => {},
});

const ToDoProvider = ToDoContext.Provider;

const useToDo = () => useContext(ToDoContext);

export { ToDoContext, ToDoProvider, useToDo };
