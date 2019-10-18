import * as categorySaga from 'pages/category/sagas'

const sagas = function*(){
  yield categorySaga.increase()
}

export default sagas