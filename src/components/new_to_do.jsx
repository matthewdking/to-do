import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        <div className="mdl-textfield mdl-js-textfield">
          <input className="mdl-textfield__input" type="text" id="todoinput" value={ this.state.term }
            onChange = {event => this.onInputChange(event.target.value)} />
          <label className="mdl-textfield__label" htmlFor="todoinput">New to do...</label>
        </div>
        <button type="submit" className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored mdl-js-ripple-effect">
          <i classList="material-icons">+</i>
        </button>
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

NewToDo.propTypes = {
  add: PropTypes.func
};

export default NewToDo;
