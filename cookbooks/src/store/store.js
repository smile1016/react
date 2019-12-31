import {createStore,applyMiddleware} from 'redux'
import reducer from './reducer'
import reduxSaga from 'redux-saga'
import sagas from './sagas'

const sagaMiddleware = reduxSaga()
const store = createStore(reducer,applyMiddleware(sagaMiddleware))

sagaMiddleware.run(sagas)
export default store;