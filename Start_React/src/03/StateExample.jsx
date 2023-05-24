import React from "react";

class StateExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {// state의 초기값을 객체 형태로 정의함.
      loading: true,
      formData: " no data ",
    };
    this.handleData = this.handleData.bind(this); // 함수로 넘어갈 this는 생성자에서 bind()함수로 묶어줘야 함.
    setTimeout(this.handleData, 3000); // 3초후 handleData함수를 호출함.
  }

  handleData() {
    const data = "new data ";
    const { formData } = this.state; // state값에 접근함.

    this.setState({
      // 내장 함수인 setState()를 사용하여 state 값을 변경함. (& 리렌더링)
      loading: false,
      formData: data + formData,
    });
    console.log("loading값", this.state.loading);
  }

  render() {
    return (
      <div>
        <span> 로딩중: {String(this.state.loading)} </span>
        <span>결과: {this.state.formData} </span>
      </div>
    );
  }
}
export default StateExample;

/* 
//처음 브라우저 화면
로딩중: true 결과: no data

// 3초후 브라우저 화면
로딩중: false 결과: new data no data
 */