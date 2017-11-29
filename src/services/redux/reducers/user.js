const userReducer = (state={name: 'Torbjørn Angeltveit'}, action) => {
  switch(action.type) {
    case 'CHANGE_USER':
      return Object.assign({}, state, action.payload)
      break
    default:
      return state
  }
}

export default userReducer
