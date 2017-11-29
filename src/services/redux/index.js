import {combineReducers, createStore} from 'redux'
import {cardReducer, userReducer, cardsReducer} from './reducers'

const reducers = combineReducers({ cardReducer, userReducer, cardsReducer })

const store = createStore(reducers)

export default store
