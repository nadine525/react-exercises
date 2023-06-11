import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class Form extends Component {
  state = {
    name: '',
    tag: '',
    experience: 'junior',
    licence: false,
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

  handleLicenceChange = event => {
    console.log(event.currentTarget.checked);

    this.setState({ licence: event.currentTarget.checked });
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
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handleChange}
            checked={this.state.experience === 'junior'}
          ></input>
          Junior
        </label>

        <label>
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.handleChange}
            checked={this.state.experience === 'middle'}
          ></input>
          Middle
        </label>

        <label>
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.handleChange}
            checked={this.state.experience === 'senior'}
          ></input>
          Senior
        </label>

        <br />

        <label>
          <input
            type="checkbox"
            name="licence"
            checked={this.state.licence}
            onChange={this.handleLicenceChange}
          />
          Погоджуюся з умовами
        </label>

        <button type="submit" disabled={!this.state.licence}>
          Відправити
        </button>
      </form>
    );
  }
}

export default Form;
