import React from 'react';
import PropTypes from 'prop-types';

const ToDoList = (props) => {
  const deleteSubmit = (event, index) => {
    event.preventDefault();
    props.deleteToDo(index);
  };

  const ToDoItems = props.todos.map((todo, i) => (

    <li className="mdl-list__item" key={ i }>
      <span className="mdl-list__item-primary-content">
        { todo }
      </span>
      <span>
        <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" htmlFor="checkbox-2">
          <input type="checkbox" id="checkbox-2" className="mdl-checkbox__input" />
        </label>
      </span>
      <span className="mdl-list__item-secondary-action">
        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={event => deleteSubmit(event, i) } >Delete</button>
      </span>
    </li>
  ));

  return (
    <ul className="mdl-list list_container">
      { ToDoItems }
    </ul>
  );
};

ToDoList.propTypes = {
  deleteToDo: PropTypes.func,
  todos: PropTypes.array
};

export default ToDoList;
