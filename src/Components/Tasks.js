import React, { useState } from "react";

function Tasks() {
  const [task, setTask] = useState("");
  const [tasksList, setTasksList] = useState([]);

  function handleChange(event){
    let inputTask = event.target.value;
    setTask(inputTask);
  };

  function addTask(event){
    event.preventDefault();
    if (task) {
      setTasksList([...tasksList, task]);
      setTask("");
  }
}

    return (
      <div>
        <h1>Agenda</h1>
      <form onSubmit={ addTask } >
        <input type="text" placeholder="Adicione uma tarefa" onChange={ handleChange }/>
        <button type="submit" onclick={ addTask } value={ task }>Adicionar</button>
      </form>

      <ul className="tasks-list" >
        <li>{}</li>
      </ul>
    </div>
  )
}

export default Tasks;
