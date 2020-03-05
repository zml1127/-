import learnReducer from '../components/learn/reducer'
import quanReducer from '../components/quan/reducer'
import wendaReducer from '../components/wenda/reducer'
import xiaowoReducer from '../components/xiaowo/reducer'
import loginphoneReducer from '@/components/login/loginphone/reducer'

import { combineReducers } from 'redux'

var reducer = combineReducers({
    learn:learnReducer,
    quan:quanReducer,
    wenda:wendaReducer,
    xiaowo:xiaowoReducer,
    loginphone:loginphoneReducer
})

export default reducer



