// ! class 方法
// import React, { Component } from 'react';
// class Example extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
//       count: 0
//      }
//   }
//   render() { 
//     return ( 
//       <div>
//         <h2>count {this.state.count}</h2>
//         <button onClick={this.addCount.bind(this)}>click Me</button>
//       </div>
//       );
//   }
//   addCount() {
//     this.setState({
//       count: ++this.state.count 
//     })
//   }
// }
 
// export default Example;


// ! hooks 方法 
import React, { useState } from 'react';
const Example = () => {
  const [count, setCount] = useState(0)
    const [sum, setSum] = useState(3)
  return (
    <div className="box">
      <p>useState - 修改数据</p>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <h2>{sum}</h2>
      <button onClick={()=>setSum(sum *2)}>Click Sum</button>
    </div>
  )
}
export default Example;
