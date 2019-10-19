import {CLEAR_BUYLIST} from './actionTypes'
import {ADD_TIME} from './actionTypes'

const defaultState = {
    TimeList:[]
  }

export default (state = defaultState,action) =>{
    switch(action.type){
        case CLEAR_BUYLIST :
                return {
                    buyList: []
                }

        case ADD_TIME :
            state.buyList.push({
                dayCount:action.data
            })
            return state
        default :
        return state
    }
}