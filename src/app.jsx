import React, { Component } from 'react';
import Title from './components/title.jsx';
import NewToDo from './components/new_to_do.jsx';
import ToDoList from './components/to_do_list.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      todos: []
    };
  }

  render() {
    return (
      <div>
        <Title hello={ this.state.term }/>
        <NewToDo />
        <ToDoList />
      </div>
    );
  }
}

export default App;
