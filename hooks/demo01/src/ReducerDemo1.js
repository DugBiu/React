import React from 'react'
import Text from './Reducer1/Text'
import Buttons from './Reducer1/Buttons'
import { Color } from './Reducer1/Color'
const ReducerDemo1 = () => {
  return (
    <div className="box">
      <Color>
        <Text />
        <Buttons />
      </Color>
    </div>
  )
}

export default ReducerDemo1