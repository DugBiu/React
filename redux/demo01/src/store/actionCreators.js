import {CHANGE_INPUT, ADD_ITEM, DEL_ITEM, GET_LIST, GET_MY_LIST} from './actionTypes'
import axios from 'axios'
const timeout = 1000
export const changeInputAction= (value)=> ({
  type: CHANGE_INPUT,
  value
})

export const addItemAction = () => ({
  type: ADD_ITEM
})

export const deleteItemAction = (index) => ({
  type: DEL_ITEM,
  index: index
})

export const getListAction = (data) => ({
  type: GET_LIST,
  data: data
})

export const getTodoList = () => {
  return (dispatch) => {
    axios(
      'https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList',
      { timeout: timeout }
    ).then(res => {
      console.timeLog(res)
    }).catch(() => {
      let data = [
        '任务一',
        '任务二',
        '任务三',
        '任务四'
      ]
      const action = getListAction(data)
      dispatch(action)
    })
  }
}

export const getMyListAction = () =>({
  type: GET_MY_LIST,
})