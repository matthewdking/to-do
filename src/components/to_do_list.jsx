import React from 'react';

const ToDoList = (props) => {
  const ToDoItems = props.todos.map((todo, i) => {
    return (
      <li key={ i }>{ todo }</li>
    );
  });


  return (
    <ul>
      { ToDoItems }
    </ul>
  );
};

export default ToDoList;
