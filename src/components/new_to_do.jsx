import React, { Component } from 'react';

class NewToDo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };

    this.formSubmit = this.formSubmit.bind(this);
  }

  render() {
    return (
      <form onSubmit={ this.formSubmit }>
        <input value={ this.state.term }
          onChange = {event => this.onInputChange(event.target.value)} />
        <button type="submit">Add</button>
      </form>
    );
  }

  formSubmit(event) {
    event.preventDefault();
    this.props.add(this.state.term);
    this.setState({ term: '' });
  }

  onInputChange(term) {
    this.setState({ term });
  }
}

export default NewToDo;
