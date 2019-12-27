import {put,takeEvery} from 'redux-saga/effects'
import {INCREMENT,DECREMNET} from './actiontypes'

function* asyncIncrement(){
    console.log('saga')
    return new Promise((resolve,reject)=>{
        setTimeout(function() {
            resolve(2)
            // yield put({type:INCREMENT,data:2})//异步
        }, 2000);

    })
}
function* add(){
    let result= yield asyncIncrement()
    console.log(result)
    yield put({type:INCREMENT,data:result})//异步 
}
function* sagas(){
    // takeEvery第一个参数是事件的名字
    yield takeEvery('async_incremnet',add)
}
export default sagas