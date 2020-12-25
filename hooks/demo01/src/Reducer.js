// ! 传统的 reducer
// function Reducer(state, action) {
//   switch (aaction.type) {
//     case 'add':
//       return state + 1
//     case 'del':
//       return state - 1
//     default:
//       return state
//   }
// }

import React, { useReducer } from 'react'
const Reducer = () => {
  const [count, dispatch] = useReducer((state, action) => {
    switch (action) {
      case 'add':
        return state + 1
      case 'sub':
        return state - 1
      default:
        return state
    }
  }, 0)
  return (
    <div className="box">
      <p>use Reducer</p>
      <h2>{count}</h2>
      <button onClick={()=>{dispatch('add')}}> add</button>
      <button onClick={()=>{dispatch('sub')}}> sub</button>
    </div>
  )

} 

export default Reducer