import uuid from 'uuid'

const initialState = {
  id: uuid(),
}
const cardReducer = (state=initialState, action) => {
  switch(action.type) {

    case 'CREATE_CARD':
      return initialState
      break

    case 'UPDATE_CARD':
      return Object.assign({}, state, action.payload)
      break

    default:
      return state
  }
}

export default cardReducer
