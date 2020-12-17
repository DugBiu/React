import React from 'react'
import {BorswerRouter as Router, Route, Link} from 'react-router-dom'
import Java from './tench/Java'
import Php from './tench/Php'
import Python from './tench/Python'
const Tench = () => {
  return (
    <div>
      <div className="topNav">
        <ul>
          <li><Link to='/tench/java'>Java </Link></li>
          <li><Link to='/tench/php'>Php </Link></li>
          <li><Link to='/tench/python'>Python </Link></li>
        </ul>
      </div>
      <div className="videoContent">
        <h3>技能学习</h3>
        <Route path='/tench/java' exact component={Java}></Route>
        <Route path='/tench/php' component={Php}></Route>
        <Route path='/tench/python' component={Python}></Route>
      </div>
    </div>
    
  )
}

export default Tench