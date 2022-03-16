import React, { useState } from 'react';

export default function App() {
  let savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const [task, setTask] = useState('');
  const [tasksList, setTasksList] = useState([]);

  function handleChange(event) {
    const inputTask = event.target.value;
    
    setTask(inputTask);
  }

  function handleAddTask(event) {
    event.preventDefault();
    if (task) {

      setTasksList([...tasksList, task]);

      setTask("");

      savedTasks.push(task)
      localStorage.setItem('tasks', JSON.stringify(savedTasks));
    }
  }

  return (
    <div>
      <form onSubmit={handleAddTask}>
        <h1>Agenda</h1>

        <input type="text" onChange={(event) => handleChange(event)} value={task} />
        <button type="submit">Adicionar</button>
      </form>

      {savedTasks.map((task, index) => (
        <div key={index} >{task}</div>
      ))}
    </div>
  )
}
