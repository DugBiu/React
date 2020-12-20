import React from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'
import Index from './component/index'
import Video from './component/videoNav'
import Tench from './component/tench'
import DynamicRoute from './component/DynamicRoute'
import DynamicRoute2 from './component/DynamicRoute2'
import './style.css'

// ! 动态路由
const AppRouter = () => {
  let routerConfig = [
    { path: '/dynamic', title:'后端动态路由一', exact: true, component:DynamicRoute},
    { path: '/dynamic2', title:'后端动态路由二', exact: true, component:DynamicRoute2}
  ]
  return (
    <Router>
      <div className="mainDiv">  
        <div className="leftNav">
          <h3>一级导航</h3>
          <ul>
            <li><Link to="/">博客首页</Link></li>
            <li><Link to="/video">视频教程</Link></li>
            <li><Link to="/tench">职场技能</Link></li>
            <li><Link to="/dynamics">路由</Link></li>
          </ul>
          <ul>
            {
              routerConfig.map((e, index) => {
                return (
                  <li key={index}>
                    <Link to={e.path}>{ e.title}</Link>
                  </li>
                )
              })
           }
          </ul>
        </div>

        <div className="rightMain">
          <Route path="/" exact component={Index}></Route>
          <Route path="/video" component={Video}></Route>
          <Route path="/tench" component={Tench}></Route>
          <Route path="/dynamics" component={DynamicRoute}></Route>
        </div>
        <div>
          {
            routerConfig.map((e, index) => {
              return (
                <Route key={index} path={e.path} exact={e.exact} component={e.component}></Route>
              )
            })
          }
        </div>
      </div>
    </Router>
  )
}
export default AppRouter;