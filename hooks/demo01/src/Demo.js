import React from 'react'
import Buttons from './ReplaceRedux/Buttons'
import ShowArea from './ReplaceRedux/ShowArea'
import { Color } from './ReplaceRedux/Color'

const Demo = () => {
  return (
    <div className="box">
      <Color>
        <ShowArea />
        <Buttons />
      </Color>
     
    </div>
  )
}

export default Demo