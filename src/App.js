import React, { useState } from 'react';
import './App.css';

export default function App() {

  let savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const [task, setTask] = useState('');
  // const [tasksList, setTasksList] = useState([]);

  function handleChange(event) {
    const inputTask = event.target.value;
    setTask(inputTask);
  }

  function handleAddTask(event) {
    event.preventDefault();
    if (task) {
      // setTasksList([...tasksList, task]);
      setTask("");
      savedTasks.push(task)
      localStorage.setItem('tasks', JSON.stringify(savedTasks));
    }
  }

  function clearTasks() {
    localStorage.clear('tasks');
    setTask([]);
  }

  function removeTask(event) {
    event.target.parentNode.remove();
    // console.log(savedTasks);
  }

  return (
    <div className="agenda">
      <form onSubmit={handleAddTask}>
        <h1>Agenda</h1>
        <input id="date" type="date"></input>
        {/* <MyCalendar /> */}
        <p></p>
        <input type="text" placeholder="Adicionar tarefa" onChange={(event) => handleChange(event)} value={task} />
        <button type="submit">Adicionar</button>
        <button type="button" onClick={clearTasks}>Limpar</button>
        <ul className="tarefas">
      {savedTasks.map((task, index) => (
        <li
        className="tarefa"
        key={index}
        >
          {task}
          {/* <button onclick={completeTask}>Check</button> */}
          <button className ="remove-button" onClick={removeTask}>Remove</button>
          </li>
      ))}
      </ul>
      </form>
    </div>
  )
}
