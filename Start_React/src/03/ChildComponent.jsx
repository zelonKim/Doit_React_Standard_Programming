import React from 'react';
import PropTypes from 'prop-types';

class ChildComponent extends React.Component {
  render() {
    // 객체 구조분해 할당을 통해 render()함수의 지역변수로 재정의함.
    const { boolValue, numValue, arrayValue, objValue, nodeValue, funcValue } = this.props;

    /* boolValue={true}
    numValue={1}
    arrayValue={[1,2,3]}
    objValue={{ name: '제목', age: 30}}
    nodeValue={<h1>노드</h1>}
    funcValue={()=> {console.log('메시지')}} */

    return (
      <div>
        <span> 불리언값: {boolValue}</span>
        <sapn> 숫자값: {numValue} </sapn>
        <span> 배열값: {arrayValue} </span>
        <span> 객체값: {String(objValue)} </span>
        <span> 노드값: {nodeValue} </span>
        <span> 함수값: {String(funcValue)} </span>
      </div>
    );
  }
}

ChildComponent.propTypes = {
  // 프로퍼티의 자료형을 지정해줌.
  boolValue: PropTypes.bool,
  numValue: PropTypes.number,
  arrayValue: PropTypes.arrayOf(PropTypes.number),
  objValue: PropTypes.object,
  nodeValue: PropTypes.node,
  funcValue: PropTypes.func,
};

export default ChildComponent;
