import React,{useContext} from 'react'
import {ColorContext} from './Color'
const Text = () => {
  const { color } = useContext(ColorContext)
  return (
    <div style={{color: color}}>需要改变颜色的字体</div>
  )
}

export default Text