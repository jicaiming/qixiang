import {ADD_TIMELIST} from './actionTypes'
import {CLEAR_TIMELIST} from './actionTypes'

const defaultState = {
    timeList : [
        {
            id:1,
            sTime:0,
            eTime:0,
            dayCount:0
        }
    ] 
}

export default (state=defaultState,action) =>{
    let newList = []
    switch(action.type){
        case CLEAR_TIMELIST:
            return {
                timeList:[]
            }
        case ADD_TIMELIST :
            let isExit = false
            newList = state.timeList.map(function(value){

                if(value.id === action.data.id){
                    value.id = action.data.id
                    value.sTime = action.data.sTime
                    value.eTime = action.data.eTime
                    value.dayCount = action.data.dayCount
                    isExit = true
                    return value
                }else{
                    return value
                }
            })
            if(isExit) {
                return {timeList :newList}
            }else{
                newList.push({
                    id:action.data.id,
                    sTime:action.data.sTime,
                    eTime:action.data.eTime,
                    dayCount:action.data.dayCount
                })
                return {timeList:newList}
            }
        default:
            return state
    }
}