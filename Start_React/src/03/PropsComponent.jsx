import React from 'react';
import PropTypes from 'prop-types'; // prop-types라이브러리를 PropTypes라는 이름으로 임포트함.

class PropsComponent extends React.Component {
  render() {
    return <div className="message-container">{this.props.name}</div>; // name 프로퍼티로 받은 문자열을 출력함.
  }
}

PropsComponent.propTypes = {
  // 특수변수인 propTypes를 이용함.
  name: PropTypes.string, // name 프로퍼티의 자료형을 문자열로 지정함.
};

export default PropsComponent;
