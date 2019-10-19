import {combineReducers} from 'redux-immutable'
import category from 'pages/category/reducer'
import order from 'pages/orders/reducer'

export default combineReducers({
    order ,
    category
})
