import React, { Component } from 'react';
import store from './store'
import axios from 'axios'
import {changeInputAction, addItemAction, deleteItemAction, getListAction } from './store/actionCreators'

import TodoListUi from './TodoListUi'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.changeInputValue = this.changeInputValue.bind(this)
    this.clickBtn = this.clickBtn.bind(this)
    this.clickItem = this.clickItem.bind(this)
    this.storeChange = this.storeChange.bind(this)
    // ! 订阅模式 input value值得绑定
    store.subscribe(this.storeChange)
  }
  render() { 
    return ( 
      <TodoListUi
        inputValue={this.state.inputValue}
        changeInputValue={this.changeInputValue}
        clickBtn={this.clickBtn}
        list={this.state.list}
        clickItem={this.clickItem}
      />
     );
  }
  componentDidMount() {
    setTimeout(() => {
      let data = [
        '任务一',
        '任务二',
        '任务三',
        '任务四'
      ]
      let action = getListAction(data)
      store.dispatch(action)
      
    }, 1000)
    // axios.get(
    //   'https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList'
    // ).then((res) => {
    //   console.log(res)
    // }).catch((error) => {
    //   console.log(error)
    // })
  }
  changeInputValue(e) {
    const action = changeInputAction(e.target.value)
    store.dispatch(action)
  }
  storeChange() {
    this.setState(store.getState)
  }

  clickBtn() {
    const action = addItemAction()
    store.dispatch(action)
  }
  clickItem(index) {
    const action = deleteItemAction(index)
    store.dispatch(action)
  }
}
 
export default TodoList;