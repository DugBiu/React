import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      // ? JSX 语法 
      // ! 类 class => className
      <div>
        <ul className="list">
          <li>hello</li>
          <li>react</li>
        </ul>
        <p>{ false ? '这是正确地' : '这是错误的' }</p>

      </div>
    )
    // todo 传统React创造html写法
    // const l1 = React.createElement("li",null, 'hello')
    // const l2 = React.createElement("li", null, 'world')
    // const root = React.createElement('ul',{className:'list'}, l1,l2)
  }
}

export default App