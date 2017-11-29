const cardsReducer = (state=[], action) => {
  switch(action.type) {

    case 'FETCH_CARDS_COMPLETE':
      return state.concat(action.payload)
      break

    case 'ADD_CARD':
      const arr = state
      arr.push(action.payload)
      localStorage.cards = JSON.stringify(arr)
      return arr
      break

    default:
      return state
  }
}

export default cardsReducer
