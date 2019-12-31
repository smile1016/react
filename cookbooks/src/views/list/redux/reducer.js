
const defaultState = {
  datalist: [],
  reachEnd: false
}


const reducer = (state = defaultState, action) => {
  let list = state.datalist;
  if (action.page === 1) {
    list = [];
  }
  switch (action.type) {
    case "ADD_LIST_DATA":
      return {
        reachEnd: action.data.length < action.limit ? true : false,
        datalist: list.concat(action.data)
      }
    default:
      return state;
  }

}

export default reducer;