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

import React from 'react';
import PropComponent from './03/PropsComponent';

class App extends React.Component {
  render() {
    return <PropComponent name="DOIT 리액트" />;
  }
}
export default App;
