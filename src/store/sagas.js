import * as categorySaga from 'pages/category/sagas'
// import * as orderSaga from 'pages/order/sagas'

const sagas = function*(){
  yield categorySaga.increase()
}

export default sagas