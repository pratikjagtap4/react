import { useState } from "react";
import { ToDoProvider } from "./context/ToDoContext";
import { useEffect } from "react";
import { InputBox, ToDoItem } from "./components";


function App() {
  const [toDos, setToDos] = useState([]);

  function addToDo(toDo) {
    setToDos((prev) => [...prev, { id: Date.now(), ...toDo }]);
    console.log(toDos)
  }
  function deleteToDo(id) {
    setToDos((prev) => prev.filter((singleToDo) => singleToDo.id !== id));
  }
  function updateToDo(id, task, date) {
    setToDos((prev) => prev.map((singleToDo) => singleToDo.id === id ? { ...singleToDo, task, date } : singleToDo))
  }
  function toggleComplete(id) {
    setToDos((prev) => prev.map((singleToDo) => singleToDo.id === id ? { ...singleToDo, isCompleted: !singleToDo.isCompleted } : singleToDo));
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("toDos"));

    if (data && data.length > 0) {
      setToDos(data);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos))
  }, [toDos])

  return (
    <ToDoProvider value={{ toDos, addToDo, deleteToDo, updateToDo, toggleComplete }}>
      <div className="bg-[#394549] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <InputBox></InputBox>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {
              toDos.map((singleToDo) => (<ToDoItem key={singleToDo.id} singleToDo={singleToDo} />))
            }
          </div>
        </div>
      </div>
    </ToDoProvider>
  )
}

export default App
