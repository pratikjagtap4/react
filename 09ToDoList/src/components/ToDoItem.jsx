import { useState } from "react";
import { useToDo } from "../context/ToDoContext";


function TodoItem({ singleToDo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [toDoMsg, setToDoMsg] = useState(singleToDo.task);
    const [toDoDate, setToDoDate] = useState(singleToDo.date);

    const { deleteToDo, updateToDo, toggleComplete } = useToDo()

    function deleteItem(id) {
        deleteToDo(id);
    }

    function update(id, task, date) {
        updateToDo(id, task, date);
    }

    function toggler(id) {
        toggleComplete(id);
    }

    return (
        <div className={`flex w-full border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${singleToDo.isCompleted ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}>
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={singleToDo.isCompleted}
                onChange={() => toggler(singleToDo.id)}
            />
            <input
                type="text"
                className={`border outline-none w-1/2 bg-transparent rounded-lg ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                    } ${singleToDo.isCompleted ? "line-through" : ""}`}
                value={singleToDo.isCompleted ? toDoMsg + " (complete) " : toDoMsg}
                onChange={(e) => setToDoMsg(e.target.value)}
            />
            <input
                type="date"
                readOnly={!isTodoEditable}
                className={`border outline-none w-1/2 bg-transparent rounded-lg ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                    } ${singleToDo.isCompleted ? "text-lime-200" : ""}`}
                value={toDoDate}
                onChange={(e) => setToDoDate(e.target.value)}


            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    setIsTodoEditable((prev) => !prev)
                    update(singleToDo.id, toDoMsg, toDoDate)
                }}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteItem(singleToDo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
