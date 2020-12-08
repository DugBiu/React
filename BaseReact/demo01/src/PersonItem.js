import React, { Component } from 'react';
class PersonItem extends Component {

  constructor(props) {
    super(props)
    this.deleteItem = this.deleteItem.bind(this)
  }
  // state = {  }

  render() { 
    return ( 
      <div>
        {
          this.props.list.map((e, index) => {
            return (
              <li key={index} onClick={this.deleteItem.bind(this, index)}>{e}</li>
            )
          })
        }
      </div>
      // <li onClick={this.deleteItem}>{ this.props.content }</li>
    );
  }
  deleteItem(index) {
    // ! 子组件不可直接修改父组件中的数据 
    // TODO 需要通过调用父组件中的方法来操作数据从而更新DOM
    console.log(index)
    this.props.deleteServe(index)
  }
}
 
export default PersonItem;