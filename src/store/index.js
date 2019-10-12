import {createStore,applyMiddleware} from 'redux'
import reducer from './reducer'
import sagas from './sagas'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()


const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(sagas)

export default store