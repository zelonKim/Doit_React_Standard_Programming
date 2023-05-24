import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 10,
    };
    this.increase = this.increase.bind(this);
  }

  increase() {
    const { value } = this.state;

    this.setState({
      value: value + 1,
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.increase}>plus</button>
        <span>결과: {this.state.value} </span>
      </div>
    );
  }
}
export default Counter;
