import {combineReducers} from 'redux-immutable'
import category from 'pages/category/reducer'
import time from 'pages/timer/reducer'

export default combineReducers({
    category,
    time
})
