
/* 
import React from "react";
import PropTypes from "prop-types";


class ChildComponent2 extends React.Component {
    render() {
        const {
            objValue
        } = this.props;
        
    return (
            <div>
                <div>객체값: {String(Object.entries(objValue))} </div>
            </div> 
        ) 
    }
}

ChildComponent2.propTypes = {
    objValue: PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number,
    })
}
export default ChildComponent2; 

// 브라우저 출력
객체값: age,20 
*/

/*  
import React from "react";
import PropTypes from "prop-types";

class ChildComponent2 extends React.Component {
  render() {
    const { objValue, requiredStringValue } = this.props;

    return (
      <div>
        <div>객체값: {String(Object.entries(objValue))} </div>
        <div>필수값: {requiredStringValue}</div>
      </div>
    );
  }
}

ChildComponent2.propTypes = {
  objValue: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),
  requiredStringValue: PropTypes.string.isRequired,
};
export default ChildComponent2;

 // 브라우저 출력
객체값: age,20
필수값: 문자  
*/
