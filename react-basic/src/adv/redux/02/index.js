const {createStore}= require('redux')
const reducer = require('./reducer')
const store = createStore(reducer)
console.log(store.getState().count)
store.subscribe(()=>{
    console.log(store.getState().count)
})
// 模拟点击多次
store.dispatch({type:'increment'})
store.dispatch({type:'increment'})
store.dispatch({type:'increment'})
store.dispatch({type:'increment'})
store.dispatch({type:'increment'})
// console.log(store)