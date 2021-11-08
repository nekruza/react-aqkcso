import React from 'react';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  doIncrement = () => {
    this.setState(() => {
      return this.state.counter++;
    });
  };

  doDecrement = () => {
    this.setState(() => {
      return this.state.counter--;
    });
  };

  render() {
    return (
      <>
        <button class="increment" onClick={this.doIncrement}>
          increment
        </button>
        <button class="decrement" onClick={this.doDecrement}>
          decrement
        </button>
        <h1>{this.state.counter}</h1>
      </>
    );
  }
}

export default Counter;
