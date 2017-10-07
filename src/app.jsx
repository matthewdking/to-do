import React, { Component } from 'react';
import Title from './components/title.jsx';

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
      </div>
    );
  }
}

export default App;
