import{ takeEvery, put } from 'redux-saga/effects'
import { GET_MY_LIST } from './actionTypes'
import axios from 'axios'
import { getListAction } from './actionCreators'
const timeout = 2000
function* mySaga() {
  yield takeEvery(GET_MY_LIST, getList)
}

function* getList() {
  const data = yield axios( 'https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList', { timeout: timeout } )
  const action = getListAction(data)
  put(action)
}

export default mySaga