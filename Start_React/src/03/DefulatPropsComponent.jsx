import React from "react";
import PropTypes from "prop-types";

class DefaultPropsComponent extends React.Component {
  render() {
    let message1 = "";
    if (this.props.boolValue === false) {
      message1 = "boolValue 기본값이 false 입니다";
    }
    let message2 = "";
    if (this.props.boolValueWithoutDefault === false) {
      message2 = "boolValueWithoutDefault 기본값이 false 입니다";
    }
    return (
      <div className="message-container">
        {message1}
        {message2}
      </div>
    );
  }
}

DefaultPropsComponent.propTypes = {
  boolValue: PropTypes.bool,
  boolValueWithoutDefault: PropTypes.bool,
};

DefaultPropsComponent.defaultProps = {
  // boolValue 프로퍼티의 기본값을 false로 지정함.
  boolValue: false,
  
  // boolValueWithoutDefault 프로퍼티의 기본값은 지정되지 않았으므로 undefined 임.
 
};

export default DefaultPropsComponent;

// 브라우저 화면 출력: boolValue 기본값이 false 입니다
