import {CHANGE_INPUT, ADD_ITEM, DEL_ITEM, GET_LIST} from './actionTypes'

const defaultState = {
  inputValue: 'write something',
  list: []
}
export default (state = defaultState, action) => {
  // ! reducer 中只能接受state 不可改变state
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case CHANGE_INPUT:
      newState.inputValue = action.value
      return newState
    case ADD_ITEM:
      newState.inputValue && newState.list.push(newState.inputValue)
      newState.inputValue = ''
      return newState
    case DEL_ITEM:
      newState.list.splice(action.index, 1)
      return newState   
    case GET_LIST: 
      newState.list = action.data
      return newState  
  }    
  return state
}