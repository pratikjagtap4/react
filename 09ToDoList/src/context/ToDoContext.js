import { createContext, useContext } from "react";

const ToDoContext = createContext({
  toDos: [
    {
      id: 1,
      task: "learn React",
      date: "today",
      isCompleted: false,
    },
  ],
  addToDo: () => {},
  deleteToDo: () => {},
  updateToDo: () => {},
  toggleComplete: () => {},
});

const ToDoProvider = ToDoContext.Provider;

const useToDoContext = () => {
  return useContext(ToDoContext);
};

export { ToDoContext, ToDoProvider, useToDoContext };
