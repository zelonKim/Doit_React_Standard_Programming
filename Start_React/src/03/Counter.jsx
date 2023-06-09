/*
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
export default Counter; */

import React from "react";
import PropTypes from "prop-types";

export default class Counter extends React.Component {
  render() {
    return (
      <div>
        현재 카운트: {this.props.count}
        <button onClick={this.props.onAdd()}> 카운트 증가 </button>
      </div>
    );
  }
}

Counter.propTypes = {
  count: PropTypes.number,
  onAdd: PropTypes.func,
};
