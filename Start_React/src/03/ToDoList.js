/* import React from 'react'

class ToDoList extends React.PureComponent {
    render() {
        const todoList = [
            { taskName: "To wash", finished: false },
            { taskName: "To study", finished: true },
        ]
        return (
           todoList.map((todo, index) => 
                         <div key={index}>{todo.taskName}</div>)
             // key값으로 배열의 인덱스를 사용함.
        )
    }
}
export default ToDoList */

/////////////

/* import React from 'react'

class ToDoList extends React.PureComponent {
    render() {
        const todoList = [
            { taskName: "To wash", finished: false },
            { taskName: "To study", finished: true },
        ]
        return (
            <div>
                {todoList.map((todo) => 
                         <div key={todo.taskName}>{todo.taskName}</div>)}
            </div> // key값으로 고유한 배열 항목을 사용함.
        )
    }
}
export default ToDoList */

///////////////////

import React from 'react'

class ToDoList extends React.PureComponent {
    render() {
        const todoList = [
            { taskName: "To wash", finished: false },
            { taskName: "To study", finished: true },
        ]
        return (todoList.map((todo) => 
                    <div key={todo.taskName}>{todo.taskName}</div>)
        )
    }
}
export default ToDoList