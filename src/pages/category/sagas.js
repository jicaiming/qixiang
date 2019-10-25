import { takeEvery, put } from 'redux-saga/effects'

import { INCREASE_NUM_SAGA, DECREASE_NUM_SAGA } from './actionTypes'
import { increaseNum, decreaseNum } from './actionCreator'

function increase() {
  return takeEvery(INCREASE_NUM_SAGA, function* (action) {
    yield setTimeout(function(){
        console.log('aa')
      },1000)
    yield put(increaseNum())
  })
}

function decrease() {
  return takeEvery(DECREASE_NUM_SAGA, function* (action) {
    yield setTimeout(function(){
        console.log('bb')
      },1000)
    yield put(decreaseNum())
  })
}

export {
  increase,
  decrease
}