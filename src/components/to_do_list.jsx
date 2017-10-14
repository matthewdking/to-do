import React from 'react';
import PropTypes from 'prop-types';

const ToDoList = (props) => {
  const deleteSubmit = (event, index) => {
    event.preventDefault();
    props.deleteToDo(index);
  };

  const ToDoItems = props.todos.map((todo, i) => (
    <div key={ i }>
      <li>{ todo }</li>
      <button onClick={event => deleteSubmit(event, i) } >Delete</button>
    </div>
  ));

  return (
    <ul>
      { ToDoItems }
    </ul>
  );
};

ToDoList.propTypes = {
  deleteToDo: PropTypes.func,
  todos: PropTypes.array
};

export default ToDoList;
