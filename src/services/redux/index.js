import {combineReducers, createStore} from 'redux'
import {card, user, cards} from './reducers'

const reducers = combineReducers({ card, user, cards })

const store = createStore(reducers)

export default store
