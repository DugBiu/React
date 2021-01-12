// import React,{useContext} from 'react'
// import {ColorContext} from './Color'
// const Text = () => {
//   const { color } = useContext(ColorContext)
//   return (
//     <div style={{color: color}}>需要改变颜色的字体</div>
//   )
// }

// export default Text

import React, {useContext} from 'react'
import { ColorContext } from './Color'


const Text = () => {
  const { color } = useContext(ColorContext)
  return (
    <h2 style={{ color: color }}>文字颜色</h2>
  )
}

export default Text