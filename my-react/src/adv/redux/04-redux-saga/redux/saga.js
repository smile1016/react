import {put,takeEvery} from 'redux-saga/effects'
import {INCREMENT} from './actionTypes'
function asyncIncrement(){
    console.log('saga')
    return new Promise((reslove,reject)=>{
        setTimeout(function(){
            reslove(2)
            
        }, 2000);
    })
}
function* add(){
    let result = yield asyncIncrement()
    yield put({type:INCREMENT,data:result})
}
function * sagas(){
    yield takeEvery('async_increment',add)
}
export default sagas