import React, { Component } from 'react';
import PropTypes from 'prop-types'


class PersonItem extends Component {
  constructor(props) {
    super(props)
    this.deleteItem = this.deleteItem.bind(this)
  }
  // todo 当前函数第一次存于 DOM 中， 函数不会执行
  // todo 已经存在于 DOM 中，函数才会被执行
  // ! 渲染子组件第一改不会执行，发生变化 第二次执行时才会执行
  // componentWillReceiveProps() {
  //   console.log('child ----> componentWillReceiveProps')
  // }

  // 组件性能优化
  // ! 避免出现经常性 render 子组件
  shouldComponentUpdate(nextProp, nextState) {
    if (nextProp.content !== this.props.content) {
      return true
    } else {
      return false
    }
  }

  render() { 
    return ( 
      <li onClick={this.deleteItem}>
        {this.props.age}岁{this.props.name}:为你-{ this.props.content}
      </li>
    );
  }
  deleteItem(index) {
    // ! 子组件不可直接修改父组件中的数据 
    // TODO 需要通过调用父组件中的方法来操作数据从而更新DOM
    // this.props.deleteServe(index)
    this.props.deleteServe(this.props.index)
  }
}

// prop 校验
PersonItem.propTypes = {
  // isRequired 校验前必须传递 且为 string 类型
  name: PropTypes.string,
  content: PropTypes.string.isRequired,
  index: PropTypes.number,
  deleteItem: PropTypes.func, 
}
// props 可不传给出默认值，通过defaultProps 的方式
PersonItem.defaultProps = {
  age: '20'
}

 
export default PersonItem;