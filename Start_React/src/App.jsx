/* 
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title"> DOIT 리액트 시작하기 </h1>
      </div>
    );
  }
}

export default App; 
*/

/* 
import React from 'react'

class App extends React.Component {
  render() {
    return ( // JSX로 표현함.
      <div>
        <img src="http://www.easyspub.co.kr/images/logo_footer.png"/>
        <div>Hello</div>
      </div>
    );
  }
}
export default App;
 */

/* 
  return(
    React.createElement(
      "div",
      null,

      React.createElement(
        "img", 
        {src: "http://www.easyspub.co.kr/images/logo_footer.png"}
        ),

      React.createElement (
        "div",
        null,
        "Hello"
      )
    )
); 
*/

/* 
import React from 'react';
import TodaysPlan from './03/TodaysPlan'; // 컴포넌트를 불러들임.

class App extends React.Component {
  render () {
    return (
      <div className="body">
        <TodaysPlan />
      </div>
    ) // 컴포넌트를 JSX안에 마크업 형식으로 추가함.
  }
}
export default App;
 */

/* 
import React from 'react';
import MyComponent from './03/MyComponent';

class App extends React.Component {
  render() {
    return (
      <div className="body">
        <MyComponent name="hello" />
      </div>
    )
  }
}
export default App; 
*/

/* 
import React from 'react';
import PropComponent from './03/PropsComponent';

class App extends React.Component {
  render() {
    return <PropComponent name="DOIT 리액트" />;
  }
}
export default App; 
*/

/* 
import React from 'react';
import ChildComponent from './03/ChildComponent';

class App extends React.Component {
  render() {
    return (
      <ChildComponent
        boolValue={true}
        numValue={1}
        arrayValue={[1, 2, 3]}
        objValue={{ name: '제목', age: 30 }}
        nodeValue={<h1>노드</h1>}
        funcValue={() => {
          console.log('메시지');
        }}
      />
    );
  }
}
export default App; 
*/

/* import React from "react";
import ChildComponent from "./03/ChildComponent";

// 실수를 줄이기 위해 변수에 객체를 담아 전달함.
class App extends React.Component {
  render() {
    const arr = [1, 2, 3];
    const obj = { name: "제목", age: 30 };
    const node = <h1>노드</h1>;
    const func = () => {
      console.log("메시지");
    };

    return (
      <ChildComponent
        boolValue={true}
        numValue={1}
        arrayValue={arr}
        objValue={obj}
        nodeValue={node}
        funcValue={func}
      />
    );
  }
}
export default App; */

/* 
import React from "react";
import BooleanComponent from "./03/BooleanComponent";

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <b>when you are bored:</b>
          <BooleanComponent bored /> // 프로퍼티명만 선언하여 true를 전달할 수도
          있음.
        </div>
        <div>
          <b>when you are enjoyed:</b>
          <BooleanComponent /> // 프로퍼티명을 생략하여 false를 전달할 수도
          있음.
        </div>
      </div>
    );
  }
}
export default App; 
*/

/* 
import React from "react";
import ChildComponent2 from "./03/ChildComponent2";


class App extends React.Component {
  render() {
    return (
      <div>
        <ChildComponent2 objValue={{ age: 20 }} />
      </div>
    );
  }
}
export default App; 
*/

/* 
import React from "react";
import ChildComponent2 from "./03/ChildComponent2";

class App extends React.Component {
  render() {
    return (
      <div>
        <ChildComponent2 objValue={{ age: 20 }} requiredStringValue="문자"/>
      </div>
    );
  }
}
export default App; 
*/

/* import React from 'react';
import DefaultPropsComponent from './03/DefulatPropsComponent'

class App extends React.Component {
  render() {
    return (
      <div>
        <DefaultPropsComponent />
      </div>
    );
  }
}
export default App;  */

/*
 import React from "react";
import ChildProperty from "./03/ChildProperty";

class App extends React.Component {
  render() {
    return (
      <div>
        <ChildProperty>
          <div>
            <span>자식 노드</span>
          </div>
        </ChildProperty>
      </div>
    );
  }
}
export default App; */

/* import React from "react";
import StateExample from "./03/StateExample";

class App extends React.Component {
  render() {
    return (
      <div>
        <StateExample />
      </div>
    );
  }
}
export default App; */

/* 
import React from "react";
import ForceUpdateExample from "./03/ForceUpdateExample";

class App extends React.Component {
  render() {
    return (
      <div>
        <ForceUpdateExample />
      </div>
    );
  }
}
export default App;
 */

import React from "react";
import Counter from "./03/Counter";

class App extends React.Component {
  render() {
    return (
      <div>
        <Counter />
      </div>
    );
  }
}
export default App;
