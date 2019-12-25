import {createStore} from 'redux'
import reducer from './reducer'
// 创建store
const store = createStore(reducer)
//导出store
export default store;