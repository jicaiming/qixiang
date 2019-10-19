import {INCREATE} from './actionType'
const defaultState = {
    value  : 0
}
export const counter = (state=defaultState,action)=>{
    switch (action.type){
        case INCREATE :
            return state+1
        default : return state
    }
}
export default counter