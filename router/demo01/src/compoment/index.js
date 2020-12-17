import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom'
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      list: [
        {cid: 123, title: '任务一'},
        {cid: 456, title: '任务二'},
        {cid: 789, title: '任务三'}
      ]
    }
    // !编程方式 重定向
    this.props.history.push('/home')
  }
  render() { 
    return ( 
      <div>
        {/* 标签式 重定向 */}
        {/* <Redirect to="/home"> */}
          Index Page
          <ul>
            {
              this.state.list.map((e, index)=>{
                return (
                  <li key={index}>
                    { e.title}
                  </li>
                )
              })

            }
        </ul>
        {/* </Redirect> */}
      </div>
     );
  }
}
 
export default Index;


// ! tip 关于重定向的说明
// 1：编程式 —— 复杂的业务逻辑跳转 
    // TODO constructor 中修改 this.props.history.push('/xxx')

// 2：标签式 —— 类似推广活动 整个页面换成某一个活动页 
    // TODO <Redirect to="/xxx"> 整个内容体 </Redirect>