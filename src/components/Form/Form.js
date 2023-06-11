import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class Form extends Component {
  state = {
    name: '',
    tag: '',
  };

  nameInputId = nanoid();
  tagInputId = nanoid();

  handleChange = event => {
    // console.log(event.currentTarget);
    // console.log(event.currentTarget.name);
    // console.log(event.currentTarget.value);

    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  //   handleNameChange = event => {
  //     this.setState({ name: event.currentTarget.value });
  //   };

  //   handleTagChange = event => {
  //     this.setState({ tag: event.currentTarget.value });
  //   };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', tag: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Ім'я
          <input
            type="text"
            name="name"
            id={this.nameInputId}
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>

        <label htmlFor={this.tagInputId}>
          Нік
          <input
            type="text"
            name="tag"
            id={this.tagInputId}
            value={this.state.tag}
            onChange={this.handleChange}
          />
        </label>

        <p>Ваш рівень розробника</p>

        <label>
          Junior
          <input type="radio" name="" value="junior"></input>
        </label>

        <label>
          Middle
          <input type="radio" name="" value="middle"></input>
        </label>

        <label>
          Senior
          <input type="radio" name="" value="senior"></input>
        </label>

        <br />
        <button type="submit">Відправити</button>
      </form>
    );
  }
}

export default Form;
