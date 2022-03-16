import React, { useState } from 'react';
import List from './Components/List';
import Form from './Components/Form';

export default function App() {
  const [itemsList, setItemsList] = useState([]);
  
  function addItemToList(newItem) {
    setItemsList([...itemsList, newItem])
  }
  
  return (
    <div>
      <h1>ToDo List</h1>
      <Form onAddItem={addItemToList}/>
      <List itemsList={itemsList} />
    </div>
  );
}
