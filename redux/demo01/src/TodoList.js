import React, { Component } from 'react';
import store from './store'
import {
  changeInputAction, addItemAction, deleteItemAction,
  getMyListAction} from './store/actionCreators'

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
    // ! thunk 的方式 异步改变 store 中的数据
    // const action = getTodoList()
    // store.dispatch(action)
    // ! saga 的方式 异步改变 store 中的数据
    const action = getMyListAction()
    store.dispatch(action)
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