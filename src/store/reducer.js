import {combineReducers} from 'redux-immutable'
import category from 'pages/category/reducer'
import time from 'pages/timer/reducer'
// import {reducer as myOrder}from 'pages/myOrder/'


export default combineReducers({
    category,
    time
})
