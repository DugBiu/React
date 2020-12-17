import React from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'
import Index from './component/index'
import Video from './component/videoNav'
import Tench from './component/tench'
import './style.css'

const AppRouter = () => {
  return (
    <Router>
      <div className="mainDiv">  
        <div className="leftNav">
          <h3>一级导航</h3>
          <ul>
            <li><Link to="/">博客首页</Link></li>
            <li><Link to="/video">视频教程</Link></li>
            <li><Link to="/tench">职场技能</Link></li>
          </ul>
        </div>

        <div className="rightMain">
          <Route path="/" exact component={Index}></Route>
          <Route path="/video" component={Video}></Route>
          <Route path="/tench" component={Tench}></Route>
        </div>
      </div>
    </Router>
  )
}
export default AppRouter;