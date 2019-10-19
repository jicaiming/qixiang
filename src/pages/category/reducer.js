import { INCREASE_NUM, DECREASE_NUM, CLEAR_NUM } from './actionTypes'

const defaultState = {
  buyList: [

  ]
}

export default (state=defaultState, action) => {
  let newList = []
  switch(action.type) {
    case DECREASE_NUM:
      if (state.buyList.length === 0) {
        return {
          buyList: state.buyList
        }
      }
      newList = state.buyList.map(function(v) {
        if (v.id === action.data){
          v.count --
          return v
        } else{
          return v
        }
      })
      newList = state.buyList.filter((v)=> v.count!==0)
      return {
        buyList: newList
      }
    case INCREASE_NUM:
      let hasIt = false
      newList = state.buyList.map(function(v) {
        if (v.id === action.data){
          hasIt = true
          v.count ++
          return v
        } else{
          return v
        }
      })
      if (hasIt) {
        return {
          buyList: newList
        }
      } else {
        newList.push({
          id: action.data,
          count: 1
        })
        return {
          buyList: newList
        }
      }
    case CLEAR_NUM:
      return {
        buyList: []
      }
    default:
      return state
  }
}