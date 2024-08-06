import { useEffect, useState } from "react"
import { ToDoProvider } from "./context/ToDoContext"
import { InputBox, ToDoItem } from "./components"

function App() {
  const [toDos, setTodos] = useState([])

  function addToDo(todo) {
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }])
    console.log(toDos);

  }
  function deleteToDo(id) {
    setTodos((prev) => prev.filter((singleToDo) => singleToDo.id !== id))
  }
  function updateToDo(id, task, date) {
    setTodos((prev) => prev.map((singleToDo) => singleToDo.id === id ? { ...singleToDo, task, date } : singleToDo))
  }
  function toggleComplete(id) {
    setTodos((prev) => prev.map((singleToDo) => singleToDo.id === id ? { ...singleToDo, isCompleted: !singleToDo.isCompleted } : singleToDo))
  }


  useEffect(() => {
    const toDoList = JSON.parse(localStorage.getItem("toDos"));

    if (toDoList && toDoList.length > 0) {
      setTodos(toDoList)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos))
  }, [toDos])

  return (
    <ToDoProvider value={{ toDos, addToDo, deleteToDo, updateToDo, toggleComplete }}>
      <div className="bg-[#232931] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <InputBox></InputBox>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {
              toDos.map((singleToDo) => (<ToDoItem key={singleToDo.id} singleToDo={singleToDo}></ToDoItem>))
            }
          </div>
        </div>
      </div>
    </ToDoProvider>
  )
}

export default App
