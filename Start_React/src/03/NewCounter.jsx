import React from 'react';

class NewCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.increaseCount = this.increaseCount.bind(this);
  }

  static getDerivedStateFromProps(props, state) { // 상위 컴포넌트(App 컴포넌트)로부터 갱신된 값을 동기화함.
    const {count} = props;
    return {
        count, // 상위 컴포넌트(App 컴포넌트)의 프로퍼티로부터 전달된 count 값을 보관함.
        newCount: count === state.count ? state.newCount : count
        // 프로퍼티가 변경되지 않았다면 기존 state값으로 설정함.
        // 프로퍼티가 변경되었다면 변경된 프로퍼티값으로 설정함.
    }
  }

  increaseCount() {
    this.setState(({newCount}) => ({
        newCount: newCount + 1
    }))
  }

  render() {
    return (
      <div>
        현재 카운트: {this.state.newCount}
      <button onClick={this.increaseCount}> 카운트 증가 </button>
      </div>
    )
  }
}

export default NewCounter;