import React, { Component, Fragment } from 'react'
import PersonItem from './PersonItem'


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
  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="add">增加服务：</label>
          <input id="add" className="input-box" value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
          <button className="add-btn" onClick={this.addServe}>增加服务</button>
        </div>
        <ul>
          {
            <PersonItem
             list={this.state.list}
             deleteServe={this.deleteServe}
           />
            // return (
            // this.state.list.map((e, index) => {
            //   return (
            //     <PersonItem
            //       key={index}
            //       content={e}
            //       index={index}
            //       list={this.state.list}
            //       deleteServe={this.deleteServe}
            //     />
            //   )
            // })
            // )
          } 
        </ul>
      </Fragment>
    )
  }
  inputChange(e) {
    // ! 修改数据 需要通过setState 来修改
    this.setState({
      inputValue: e.target.value
    })
  }
  addServe() {
    let value = this.state.inputValue
    if (!this.state.inputValue) return
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
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