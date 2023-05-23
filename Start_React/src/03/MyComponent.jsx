import React from 'react';

class MyComponent extends React.Component {
  render() {
    const name = this.props.name;
    return <span>{name}</span>;
  }
}
export default MyComponent;
