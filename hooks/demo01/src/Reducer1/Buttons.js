import React, {useContext} from 'react'
import {UPDATE_COLOR, ColorContext} from './Color'
const Buttons = () => {
  const {dispatch} = useContext(ColorContext)
  return (
    <div>
      <button onClick={()=>{dispatch({type: UPDATE_COLOR, color:'green'})}}>绿色</button>
      <button onClick={()=>{dispatch({type: UPDATE_COLOR, color:'orange'})}}>橙色</button>
    </div>
  )
}

export default  Buttons