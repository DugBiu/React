import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM} from './enum'
const defaultState = {
  inputValue: 'Hello World',
  list: []
}

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case CHANGE_INPUT:
      newState.inputValue = action.value
      return newState
    case ADD_ITEM:
      newState.inputValue && newState.list.push(newState.inputValue)
      newState.inputValue = ''
      return newState
    case DELETE_ITEM:
      newState.list.splice(action.index, 1)
      return newState
  }
  return state
}