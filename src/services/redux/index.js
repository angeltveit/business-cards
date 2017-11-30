import {combineReducers, createStore, applyMiddleware} from 'redux'
import { createLogger } from 'redux-logger'
import {card, user, cards} from './reducers'

const reducer = combineReducers({ card, user, cards })
const middleware = applyMiddleware(createLogger())
const store = createStore(reducer, middleware)

export default store
