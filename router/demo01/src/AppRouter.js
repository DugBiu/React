// ! 无状态组件的格式写一下 路由
// import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// const Index = () => {
//   return (
//     <div>路由Index</div>
//   )
// }
// const ListPage = () => {
//   return (
//     <div>List Page</div>
//   )
// }
// const AppRouter = () => {
//   return (
//     <Router>
//       <ul>
//         <li><Link to="/">首页</Link></li>
//         <li><Link to="/list/">列表</Link></li>
//       </ul>
//       <Route path="/" exact component={Index} />
//       <Route path="/list/"  component={ListPage} />
//     </Router>
//   )
// }
// export default AppRouter

// ! 组件-页面 的格式 写路由 
// todo 动态路由
import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Index from './compoment'
import List from './compoment/List'
import Info from './compoment/Info'
import Home from './compoment/Home'

const AppRouter = () => {
  
  return (
    <Router>
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/list">列表</Link></li>
        <li><Link to="/info/123">详情</Link></li>
      </ul>
      <Route path='/' exact component={Index}></Route>
      <Route path='/list' component={List}></Route>
      <Route path='/info/:id' component={Info}></Route>
      <Route path='/home' component={Home}></Route>
   </Router>
  )
}
export default AppRouter

// ! exact：精确匹配 只有等于当前情况的 才路由到当前页面
// ! 设置规则 