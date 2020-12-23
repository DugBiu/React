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
//  ! useState useEffect 的方式
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