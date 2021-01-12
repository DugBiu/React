// import React, { createContext, useReducer} from 'react'

// export const ColorContext = createContext()
// export const UPDATE_COLOR = 'updateColor'

// const reducer = (state, action) => {
//   switch (action.type) {
//     case UPDATE_COLOR: 
//       return action.color
//     default:
//       return state

//   }
// } 

// export const Color = (props) => {
//   const [color, dispatch] = useReducer(reducer)
//   return (
//     <ColorContext.Provider value={{color, dispatch}}>
//       {props.children}
//     </ColorContext.Provider>
//   )
// }


import React, {createContext, useReducer }from 'react'

export const UPDATE_COLOR = 'update-color'
export const ColorContext = createContext()
const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_COLOR:
      return action.color
    default:
      return state
  }
}

export const Color = (props) => {
  const [color, dispatch]= useReducer(reducer)
  return (
    <ColorContext.Provider value={{color, dispatch}}>
      {props.children}
    </ColorContext.Provider>
  )
}



