import React, { Component } from 'react';
import Title from './components/title.jsx';
import NewToDo from './components/new_to_do.jsx';
import ToDoList from './components/to_do_list.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };

    this.addToDo = this.addToDo.bind(this);
    this.deleteToDo = this.deleteToDo.bind(this);
  }

  addToDo(newToDo) {
    const newToDoList = this.state.todos;
    newToDoList.push(newToDo);
    this.setState({ todos: newToDoList });
  }

  deleteToDo(deleteIndex) {
    const newToDoList = this.state.todos;
    newToDoList.forEach((todo, i) => {
      if (i === deleteIndex) {
        newToDoList.splice(i, 1);
      }
    });
    this.setState({ todos: newToDoList });
  }

  render() {
    return (
      <div>
        <Title />
        <NewToDo add={ this.addToDo }/>
        <ToDoList
          todos={ this.state.todos }
          deleteToDo={ this.deleteToDo }
        />
      </div>
    );
  }
}

export default App;
