import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import events from './event'
import task from './task'
import notifications from './notifications'

import options from './options'
import poll from './poll'

const reducer = combineReducers({
  user,
  events,
  task,
  notifications
  options,
  poll
})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './task'
