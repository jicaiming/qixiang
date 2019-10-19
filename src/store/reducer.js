import {combineReducers} from 'redux-immutable'
import {reducer as cart } from 'pages/order/index'
import category from 'pages/category/reducer'

export default combineReducers({
    cart,
    category
})
