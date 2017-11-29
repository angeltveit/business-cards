const cardsReducer = (state=[], action) => {
  switch(action.type) {
    case 'LOAD':
      return JSON.parse(localStorage.cards || '[]')
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
