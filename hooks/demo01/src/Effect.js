import React, { useEffect, useState, Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
// ! class 的方式来写生命周期 componentDidMount componentDidUpdate
// class Effect extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     }
//   }
//   render() {
//     return (
//       <div className="box">
//         <p>useEffect - 生命周期函数 </p>
//         <h2>{this.state.count}</h2>
//         <button onClick={this.addCount.bind(this)}>Click Me</button>
//       </div>
//     );
//   }
//   addCount() {
//     this.setState({
//       count: this.state.count + 1
//     })
//   }
  // componentDidMount() {
  //   console.log('componentDidMount: '+ this.state.count)
  // }
  // componentDidUpdate() {
  //   console.log('componentDidUpdate: '+ this.state.count)
  // }
// }
// // ? 组件一
// function Index() {
//   useEffect(() => {
//     console.log('index 进入首页')
//     // ! 解绑 相当于 componentwillunmount
//     // TODO解绑时可以做的操作
//     // TODO 状态发生变化时， 都会进入解绑函数
//     // TODO 解绑副作用：useEffect() 添加第二个参数
//     return () => {
//       console.log('index 离开首页')
//     }
//     // ? [count]: 只有count 发生变化时，进入这里
//     // ? []: 只有当前组件被解绑时 才执行
//   },[])
//   return(<h2>首页</h2>)
// }
// // ? 组件一
// function List() {
//   useEffect(() => {
//     console.log('进入列表')
//   })
//   return(<h2>列表页</h2>)
// }
// const Effect = () => {
//   const [count, setCount] = useState(0)
//   // TODO useEffect => componentDidMount、componentDidUpdate
//   useEffect(() => {
//     console.log('===================== '+count)
//   },[count])
//   return (
//     <div className="box">
//       <p>useEffect 可代替 componentDidMount、componentDidUpdate、componentwillunmount</p>
//       <h2>{count}</h2>
//       <button onClick={() => { setCount(count + 1) }}> Click Me</button>
      
//       <Router>
//         <ul>
//           <li><Link to="/index">首页</Link></li>
//           <li><Link to="/list">列表</Link></li>
//         </ul>
//         <Route path="/index" exact component={Index}></Route>
//         <Route path="/list"  component={List}></Route>
//       </Router>
//     </div>
//   )
// }
 
const Index = () => {
  useEffect(() => {
    console.log('index ==========> 进入')
    return () => {
      console.log('index ======> 退出')
    }
  }, [])
  return (<h2>首页</h2> )
}
const List = () => {
  useEffect(() => {
    console.log('list ==========> 进入')
    return () => {
      console.log('list ======> 退出')
    }
  }, [])
  return(<h2>列表页</h2>)
}

const Effect = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('effect')
  })
  return (
    <div>
      <p>Effect 生命周期函数</p>
      <h2>{count}</h2>
      <button onClick={() => { setCount(count + 1) }}>Click  Me</button>
      <Router>
        <ul>
          <li><Link to='/'>首页</Link></li>
          <li><Link to='/list'>列表页</Link></li>
        </ul>
        <Route path='/' exact component={Index} />
        <Route path='/list' component={List} />
      </Router>
    </div>
  )
}
export default Effect;