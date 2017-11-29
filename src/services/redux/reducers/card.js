const cardReducer = (state={}, action) => {
  switch(action.type) {
    case 'CHANGE_CARD':
      return Object.assign({}, state, action.payload)
      break
    default:
      return state
  }
}

export default cardReducer
