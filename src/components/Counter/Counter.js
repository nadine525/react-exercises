import React, { Component } from 'react';
import Controls from './Controls';
import Value from './Value';
import './Counter.css';

class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = event => {
    // this.setState({
    //   value: 123, // якщо треба просто перезаписати значення -обєкт
    // });
    // console.log('Клікнули в збільшити');
    // console.log(event.target);

    this.setState(prevState => ({
      value: prevState.value + 1, //якщо треба змінити значення від попереднього - функція
    }));
  };

  handleDecrement = event => {
    // console.log('Клікнули в зменшити');
    // console.log(event.target);
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    return (
      <div>
        <Value value={this.state.value} />
        {/* <span className="Counter__value">{this.state.value}</span> */}

        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
        {/* <div className="Counter__controls">
          <button type="button" onClick={this.hendleIncrement}>
            Збільшити на 1
          </button>
          <button type="button" onClick={this.hendleDecrement}>
            Зменшити на 1
          </button>
        </div> */}
      </div>
    );
  }
}

export default Counter;
