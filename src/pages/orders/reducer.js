import {CLEAR_BUYLIST} from './actionTypes'
import {ADD_TIME} from './actionTypes'


// import store from 'store'

// let allData = store.getState()
// const defaultState = {
//     ...allData
//   }
const defaultState = {
    timeList:[]
}

export default (state = defaultState,action) =>{
    switch(action.type){
        case CLEAR_BUYLIST :
                return {
                    allData: ''
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