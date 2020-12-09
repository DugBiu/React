import React, { Component, Fragment } from 'react'
import PersonItem from './PersonItem'
import axios from 'axios'

import './style.css'
class Person extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: ['基础按摩','精油推背']
    }
    this.addServe = this.addServe.bind(this)
    this.deleteServe = this.deleteServe.bind(this)
  }
  // TODO 生命周期
  // ? 组件挂载之前
  // componentWillMount() {
  // }
  // ? 组件挂载结束
  componentDidMount() {
    console.log(axios)
    // ! 一般在dom 挂载结束之后 加载异步数据
    // axios.post(url, ) 
    axios.post('https://baidu.com')
      .then(res => { console.log(`获取成功${res}`) })
      .catch((error) => { console.log(`获取失败${error}`)})
  }
  // ? 是否可以更新 需要返回一个 boolean 
  //   todo 返回 true:更新之后继续执行 false: 更新停止 
  // shouldComponentUpdate() {
  //   return true
  // }
  // ?开始更新
  // componentWillUpdate() {
  // }
  // ? 更新结束
  // componentDidUpdate() {
  // }
  render() {
    // console.log('render ---------> 组件挂载中')
    return (
      <Fragment>
        <div>
          <label htmlFor="add">增加服务：</label>
          <input
            id="add"
            className="input-box"
            value={this.state.inputValue}
            onChange={this.inputChange.bind(this)}
            ref= {(input)=>{this.input = input}}
          />
          <button className="add-btn" onClick={this.addServe}>增加服务</button>
        </div>
        <ul ref={(ul)=>{this.ul = ul}}>
          {
          //   <PersonItem
          //    list={this.state.list}
          //    deleteServe={this.deleteServe}
          //  />
            this.state.list.map((e, index) => {
              return (
                <PersonItem
                  key={index}
                  content={e}
                  index={index}
                  list={this.state.list}
                  deleteServe={this.deleteServe}
                  name="Jack"
                />
              )
            })
          } 
        </ul>
      </Fragment>
    )
  }
  inputChange(e) {
    // ! 修改数据 需要通过setState 来修改
    this.setState({
      inputValue: this.input.value
    })
  }
  addServe() {
    let value = this.state.inputValue
    if (!this.state.inputValue) return
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    }, () => {
      // TODO dom 更新是异步的因此需要通过回调来获取最新值
        console.log(this.state.list.length)
        // ? 通过 ref 来获取 ul 下 li 的个数
      console.log(this.ul.querySelectorAll('li').length)
    })    
  }
  deleteServe(index) {
    // ! 不可以直接操作 this 里面的数据 
    // TODO 建议使用声明变量来操作源数据
    let list = this.state.list
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
}
export default Person