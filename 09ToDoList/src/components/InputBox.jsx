import { useRef } from "react";
import { useToDo } from "../context/ToDoContext";


function InputBox() {
    const { addToDo } = useToDo();

    const taskRef = useRef();
    const dateRef = useRef();

    function add() {

        let task = taskRef.current.value;
        let date = dateRef.current.value;

        if (task && date) addToDo({ task, date, isCompleted: false });

        taskRef.current.value = "";
        dateRef.current.value = "";
    }

    return (
        <div className="flex ">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-1/2 border border-black/10 rounded-lg px-3 outline-none duration-150 bg-white/20 py-1.5 mx-2"
                ref={taskRef}
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

