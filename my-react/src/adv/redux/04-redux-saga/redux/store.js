import {createStore,applyMiddleware} from 'redux'
import reduxSaga from 'redux-saga'
import reducer from './reducer'
import sagas from './saga'
const createSagaMiddle = reduxSaga()
const store = createStore(reducer,applyMiddleware(createSagaMiddle))
createSagaMiddle.run(sagas)
export default store