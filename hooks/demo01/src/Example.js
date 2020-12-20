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

const Example = function () {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h2>count {count}</h2>
      <button onClick={()=>setCount(count+1)}>click Me</button>
    </div>
  )
}
export default Example;