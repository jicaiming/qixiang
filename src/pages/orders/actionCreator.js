import {CLEAR_BUYLIST} from './actionTypes'
import {ADD_TIME} from './actionTypes'


export const clearBuylist = (data) =>{
    return {
        type:CLEAR_BUYLIST
    }
}
export const addTime = (data)=>{
    return {
        type:ADD_TIME
    }
}