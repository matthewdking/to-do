import React, { Component } from 'react';

class ToDoInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    };
  }

  render() {
    return (
      <div>
        <input
          value={ this.state.input }
          onChange = { event => this.onInputChange(event.target.value) }/>
      </div>
    );
  }

  onInputChange(input) {
    this.setState({ input });
    console.log(this.state.input);
  }
}

export default ToDoInput;
