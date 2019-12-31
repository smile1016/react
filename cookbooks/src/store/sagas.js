import { loadData } from '../views/list/redux/saga'


function* sagas() {
  yield loadData();
}

export default sagas;