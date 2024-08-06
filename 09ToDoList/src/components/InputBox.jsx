import { useRef } from "react";
import { useToDoContext } from "../context/ToDoContext";

function InputBox() {
    const inputRef = useRef();
    const dateRef = useRef();

    const { addToDo } = useToDoContext()

    function add() {
        let task = inputRef.current.value;
        let date = dateRef.current.value;
        if (task && date) {
            addToDo({ task, date, isCompleted: false })
        }

        inputRef.current.value = "";
        dateRef.current.value = "";
    }

    return (
        <div className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-1/2 border border-black/10 rounded-lg px-3 outline-none duration-150 bg-white/20 py-1.5 mx-2"
                ref={inputRef}
            />
            <input
                type="date"
                className="w-1/2 border border-black/10 rounded-lg px-3 outline-none duration-150 bg-white/20 py-1.5 mx-2"
                ref={dateRef}
            />
            <button
                type="submit"
                className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
                onClick={add}
            >
                Add
            </button>
        </div>
    );
}

export default InputBox;

