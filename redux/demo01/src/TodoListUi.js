import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

// ? 无状态组件 不存在业务逻辑,只有UI
// ! 性能 比有状态组件要高
const TodoListUi = (props) => {
  return ( 
    <div style={{ margin: '10px' }}>
      <div >
        <Input
          placeholder={props.inputValue}
          style={{ width: '250px', marginRight: '10px' }}
          onChange={props.changeInputValue}
          value={props.inputValue}
        />
        <Button type="primary" onClick={props.clickBtn}> 增加</Button>
      </div>
      <div style={{margin: '10px', width:'300px'}}>
        <List
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (
            <List.Item onClick={() => {props.clickItem(index)}}>
              {`${index}- ${item}`}
            </List.Item>)}
        ></List>
      </div>
    </div>
   );
}

// class TodoListUi extends Component {
//   render() { 
//     return ( 
//       <div style={{ margin: '10px' }}>
//         <div >
//           <Input
//             placeholder={this.props.inputValue}
//             style={{ width: '250px', marginRight: '10px' }}
//             onChange={this.props.changeInputValue}
//             value={this.props.inputValue}
//           />
//           <Button type="primary" onClick={this.props.clickBtn}> 增加</Button>
//         </div>
//         <div style={{margin: '10px', width:'300px'}}>
//           <List
//             bordered
//             dataSource={this.props.list}
//             renderItem={(item, index) => (
//               <List.Item onClick={() => {this.props.clickItem(index)}}>
//                 {`${index}- ${item}`}
//               </List.Item>)}
//           ></List>
//         </div>
//       </div>
//      );
//   }
// }
 
export default TodoListUi;