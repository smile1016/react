import {createStore, applyMiddleware} from 'redux'
import reduxSaga from 'redux-saga'
import reducer from './reducer'
import sagas from './sagas'
const createSagaMiddleware = reduxSaga()
const store = createStore(reducer,applyMiddleware(createSagaMiddleware))
createSagaMiddleware.run(sagas)
export default store;