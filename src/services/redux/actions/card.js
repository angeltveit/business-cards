import uuid from 'uuid'

export function newCard() {
  return {
    type: 'CREATE_CARD',
    payload: {
      id: uuid(),
      key: uuid(),
      image: null,
    }
  }
}

export function getCards() {
  return {
    type: 'FETCH_CARDS_COMPLETE',
    payload: JSON.parse(localStorage.cards || '[]').map(e=> {
      if(!e.id) e.id = uuid()
      if(!e.key) e.key = uuid()
      return e
    }),
  }
}

export function updateCard(card) {
  return {
    type: 'UPDATE_CARD',
    payload: card,
  }
}

export function saveCard(card) {
  const payload = JSON.parse(localStorage.cards || '[]')
  payload.push(card)
  localStorage.cards = JSON.stringify(payload)
  return {
    type: 'SAVED_CARD_COMPLETE',
    payload: card,
  }
}
