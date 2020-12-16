import React from 'react';
import { connect } from 'react-redux'

import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM} from './store/enum'
// 无状态组件  提高性能
const TodoList = (props) => {
  let {inputValue, inputChange, clickButton, list, delItem} = props
  return (  
    <div>
      <input
        value={inputValue}
        onChange={inputChange}
      />
      <button onClick={clickButton}>提交</button>
      <ul>
        {
          list.map((e, index) => {
            return (<li key={index} onClick={() => { delItem(index) }}>{e}</li>)
          })
        }
      </ul>
    </div>
  );
}

//  todo connect 连接器 映射为 props
// 从外层的index.js 中的Provider 把 store 作为参数 传输过来 
// ! 下面的state  相当于 Provider 传的store
const stateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}
// ! 方法 改变 store
const dispatchToProps = (dispatch) => {
  return {
    inputChange(e) {
      let action = {
        type: CHANGE_INPUT,
        value: e.target.value
      }
      dispatch(action)
    },
    clickButton() {
      let action = {
        type: ADD_ITEM
      }
      dispatch(action)
    },
    delItem(index) {
      let action = {
        type: DELETE_ITEM,
        index: index
      }
      dispatch(action)
    }
  }
}

export default connect(stateToProps, dispatchToProps)(TodoList)