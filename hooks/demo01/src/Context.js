import React, { useState, useContext, createContext } from 'react'

// !创建一个上下文
let ComponentContext = createContext()

// //! 子组件
const Component1 = () => {
  let num = useContext(ComponentContext)
  return (<h3>子组件获取的值：{num}</h3>)
}

const Context = () => {
  let [count, setCount] = useState(0)
  return (
    <div className='box'>
      <p>useContext</p>
      <h2>{count}</h2>
      <button onClick={() => { setCount(count + 1) }}>Click Me</button>
       {/* 父组件传值 给子组件 */}
      <ComponentContext.Provider value={count}>
        <Component1 />
      </ComponentContext.Provider>
    </div>
  )

  
}  

export default Context