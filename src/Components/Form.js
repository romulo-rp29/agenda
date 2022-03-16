import React, { useState } from 'react';

export default function Form(props) {
  const [task, setTask] = useState("");

  const handleChangeInput = (event) => {
    let inputTask = event.target.value;
    
    setTask(inputTask);
  }

  const handleAddItemToList = (event) => {
    event.preventDefault();
    
    if(task) {
      props.handleAddItemToList(task)
      setTask("");
    }
  }
  
  return (
    <form >
      <input type="text" onChange={handleChangeInput} value={task} />
      <button type="submit" onClick={handleAddItemToList}>Adiciona</button>
    </form>
  )
}
