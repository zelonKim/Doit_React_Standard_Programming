import React from 'react'

class ForceUpdateExample extends React.Component {
    constructor(props) {
        super(props);
        this.loading = true; // 클래스 변수로 초기값을 지정함.
        this.formData = 'no data';
        this.handleData = this.handleData.bind(this);
        setTimeout(this.handleData, 3000);
    }

    handleData() {
        const data = 'new data';
        this.loading = false;
        this.formData = data + this.formData;
        this.forceUpdate(); // 내장 함수인 forceUpdate()를 호출하여 강제로 화면을 리프레쉬함.
    }

    render() {
        return (
            <div>
             <span> 로딩중: {String(this.loading)} </span>
            <span>결과: {this.formData} </span>
            </div>
        )
    }
}
export default ForceUpdateExample;

/* 
//처음 브라우저 화면
로딩중: true 결과: no data

// 3초후 브라우저 화면
로딩중: false 결과: new data no data
 */