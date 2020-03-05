import { createStore,applyMiddleware } from 'redux'
// import { createStore } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'  //redux-thunk没用上

var store = createStore(reducer,applyMiddleware(thunk))
// var store = createStore(reducer)

export default store