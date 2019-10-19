import { INCREASE_NUM, DECREASE_NUM, CLEAR_NUM } from './actionTypes'

const defaultState = {
  allData: {
    buyList: [

    ],
    total: 0
  }
}

function calTotal(list) {
  let total = 0
  list.forEach(v => {
    total += v.count
  });
  return total
}

export default (state=defaultState, action) => {
  let newList = []
  // console.log(state.allData)
  switch(action.type) {
    case DECREASE_NUM:
<<<<<<< HEAD
      if (state.buyList.length === 0) {
=======
      if (state.allData.buyList.length === 0) {
>>>>>>> xxp
        return {
          allData: {
            buyList: [],
            total: 0
          }
        }
      }
      newList = state.allData.buyList.map(function(v) {
        if (v.id === action.data.value.id){
          v.count --
          return v
        } else{
          return v
        }
      })
<<<<<<< HEAD
      newList = state.buyList.filter((v)=> v.count!==0)
=======
      newList = state.allData.buyList.filter((v)=> v.count!==0)
      // console.log(newList)
      // console.log(calTotal(newList))
>>>>>>> xxp
      return {
        allData: {
          buyList: newList,
          total: calTotal(newList)
        }
      }
    case INCREASE_NUM:
      let hasIt = false
      newList = state.allData.buyList.map(function(v) {
        if (v.id === action.data.value.id){
          hasIt = true
          v.count ++
          return v
        } else{
          return v
        }
      })
      if (hasIt) {
        // console.log(newList)
        // console.log(calTotal(newList))
        return {
          allData: {
            buyList: newList,
            total: calTotal(newList)
          }
        }
      } else {
        // console.log(action.data.value)
        newList.push({
          ...action.data.value,
          count: 1
        })
        // console.log(newList)
        // console.log(calTotal(newList))
        return {
          allData: {
            buyList: newList,
            total: calTotal(newList)
          }
        }
      }
    case CLEAR_NUM:
      return {
        allData: {
          buyList: [],
          total: 0
        }
      }
    default:
      return state
  }
}