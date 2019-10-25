import * as categorySaga from 'pages/category/sagas'
<<<<<<< HEAD
// import * as orderSaga from 'pages/order/sagas'

const sagas = function*(){
  yield categorySaga.increase()
=======
// import {sagas as myOrderSaga} from 'pages/myOrder/'
// import * as orderSaga from 'pages/order/sagas'

function* sagas(){
  yield categorySaga.increase()
  // yield myOrderSaga()
>>>>>>> guangruixiao
}

export default sagas