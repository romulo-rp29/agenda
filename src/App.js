import React, { useState } from 'react';
import './App.css';

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

  function clearTasks() {
    localStorage.clear('tasks');
    setTask([]);
  }

  return (
    <div className="agenda">
      <form onSubmit={handleAddTask}>
        <h1>Agenda</h1>

        <input type="text" onChange={(event) => handleChange(event)} value={task} />
        <button type="submit">Adicionar</button>
        <button type="button" onClick={clearTasks}>Limpar</button>
        <ul className="tarefas">
      {savedTasks.map((task, index) => (
        <li
        className="tarefa"
        key={index}
        >
          {task}
          </li>
      ))}
      </ul>
      </form>
    </div>
  )
}
