import React, { Component } from 'react';

// const App = () => <h1 className="app"> Hey I&lsquo;m React&lsquo;s setup </h1>;

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
        <h1 className="app"> Hey I&lsquo;m React&lsquo;s setup </h1>
        <h1>{ this.state.hello }</h1>
      </div>
    );
  }
}

export default App;
