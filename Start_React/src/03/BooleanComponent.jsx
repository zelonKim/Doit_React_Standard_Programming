import React from "react";

class BooleanComponent extends React.Component {
  render() {
    const message = this.props.bored ? "Let`s play" : "Let`s work";
    return <div calssName="message-container">{message}</div>;
  }
}
export default BooleanComponent;
