import React from 'react';

export default function List (props) {
  return(
    <ul>
      {props.itemsList.map(item => (<li>{item}</li> ))}
    </ul>
  )
}
