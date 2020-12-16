// import { createStore, applyMiddleware, compose } from 'redux'
// import reducer from './reducer'
// import thunk from 'redux-thunk'

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//   ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
// const enhancer = composeEnhancers(applyMiddleware(thunk))

// const store = createStore(reducer, enhancer)
// export default store



// ! 方法二：saga
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import createSagaMiddleWare from 'redux-saga'
import mySaga from './sagas'

const saga = createSagaMiddleWare()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(applyMiddleware(saga))
const store = createStore(reducer, enhancer)
saga.run(mySaga)

export default store

// ! 说明
// ! redux 的两种中间键使用  redux-thunk、redux-sage

// TODO createStore 值接受2个参数，
// TODO 因此在存在多个中间键时 需要通过增强函数来合并多个中间键为一个
// ! 增强函数 增加 redux_devtools
// ! window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )