import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Index = () => {
  return (
    <div>路由Index</div>
  )
}
const ListPage = () => {
  return (
    <div>List Page</div>
  )
}
const AppRouter = () => {
  return (
    <Router>
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/list/">列表</Link></li>
      </ul>
      <Route path="/" exact component={Index} />
      <Route path="/list/"  component={ListPage} />
    </Router>
  )
}



export default AppRouter