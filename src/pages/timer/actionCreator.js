import {ADD_TIMELIST} from './actionTypes'
import {CLEAR_TIMELIST} from './actionTypes'


export const addTimeList = (data) => {
    return {
        type : ADD_TIMELIST,
        data 
    }
}
export const clearTimeList = (data) =>{
    return {
        type:CLEAR_TIMELIST,
        data
    }
}