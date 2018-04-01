import React from 'react';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  add = () => {
    this.setState({ count: this.state.count + 1 });
  };

  subtract = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h1>Counter Component</h1>
        <p>current count: {this.state.count}</p>
        <button onClick={this.add}>plus</button>
        <button onClick={this.subtract}>minus</button>
      </div>
    );
  }
}

export default Counter;
