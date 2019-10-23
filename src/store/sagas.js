import * as categorySaga from 'pages/category/sagas'
// import {sagas as myOrderSaga} from 'pages/myOrder/'
// import * as orderSaga from 'pages/order/sagas'

function* sagas(){
  yield categorySaga.increase()
  // yield myOrderSaga()
}

export default sagas