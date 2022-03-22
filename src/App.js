import React, { useState } from 'react';
import './App.css';

export default function App() {

  let savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const [task, setTask] = useState('');

  function handleChange(event) {
    const inputTask = event.target.value;
    setTask(inputTask);
  }

  function handleAddTask(event) {
    event.preventDefault();
    if (task) {
      setTask("");
      savedTasks.push(task)
      localStorage.setItem('tasks', JSON.stringify(savedTasks));
    }
  }

  function clearTasks() {
    localStorage.setItem('tasks', JSON.stringify([]));
    setTask([]);
  }

  function removeTask(event) {
    let auxArray = [];
    let liTasks = event.target.parentNode.parentNode.children;
    console.log(liTasks);
    for (let i = 0; i < liTasks.length; i++) {
      if (liTasks.length <= 1) {
        event.target.parentNode.remove();
        localStorage.setItem('tasks', JSON.stringify([]));
      } else {
      event.target.parentNode.remove();
      auxArray.push(liTasks[i].innerText)
      localStorage.setItem('tasks', JSON.stringify(auxArray));
    }
  }
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
          <input type="button" className ="remove-button" value="Delete" onClick={removeTask} />
          </li>
      ))}
      </ul>
      </form>
    </div>
  )
}
