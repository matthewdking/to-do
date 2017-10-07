import React, { Component } from 'react';
import Title from './components/title.jsx';
import ToDoInput from './components/to_do_input.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hello: 'hi'
    };
  }

  render() {
    return (
      <div>
        <Title />
        <h1>{ this.state.hello }</h1>
        <ToDoInput />
      </div>
    );
  }
}

export default App;
