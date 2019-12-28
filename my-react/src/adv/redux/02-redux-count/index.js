const {createStore} = require('redux')
const reducer =require('./reducer') 

//走默认值
console.log(store.getState().count)
const store = createStore(reducer)
store.subscribe(()=>{
    console.log(store.getState().count)
})
// 模拟点击多次
store.dispatch({type:'increment'})
store.dispatch({type:'increment'})
store.dispatch({type:'increment'})
store.dispatch({type:'increment'})
// console.log(store)
