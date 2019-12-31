import { takeEvery, put } from 'redux-saga/effects'
import { get } from 'utils/http'


function loadData() {
  return takeEvery('LOAD_LIST_DATA', function* (params) {
    console.log(params)
    let { page, limit, keyword } = params.data;
    let result = yield get(`/data?_page=${page}&_limit=${limit}&q=${keyword}`)
    yield put({ type: 'ADD_LIST_DATA', data: result.data, limit, page })
  })

}



export {
  loadData
};