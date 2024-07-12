import React, { useState, useRef, useEffect } from 'react';
import './ToDoList.css';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, [editIndex,tasks]);

  const addTask = () => {
    if (inputValue.trim()) {

      if (editIndex !== null) {

        const newTasks = tasks.map((task, index) => (index === editIndex ? inputValue.trim() : task));
        setTasks(newTasks);
        setEditIndex(null);
      } 
      else {
        setTasks(tasks.concat(inputValue.trim()));
      }
      setInputValue('');
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(newTasks);
  };

  const editTask = (index) => {
    setInputValue(tasks[index]);
    setEditIndex(index);
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task"
        ref={inputRef}
      />
      <button onClick={addTask}>{editIndex !== null ? 'Update Task' : 'Add Task'}</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>Delete</button>
            <button onClick={() => editTask(index)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
