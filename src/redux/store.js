import {applyMiddleware, combineReducers, createStore} from 'redux'
import userReducer from './userReducer'
import { devToolsEnhancer } from 'redux-devtools-extension'


const rootReducer= combineReducers({
    userReducer:userReducer
})

export default createStore(rootReducer,devToolsEnhancer())