export function newCard() {
  return {
    type: 'CREATE_CARD',
    payload: {
      image: null,
    }
  }
}

export function getCards() {
  return {
    type: 'FETCH_CARDS_COMPLETE',
    payload: JSON.parse(localStorage.cards || '[]'),
  }
}

export function createCard(card) {
  const payload = JSON.parse(localStorage.cards || '[]')
  payload.push(card)
  localStorage.cards = JSON.stringify(payload)
  return {
    type: 'SAVED_CARD_COMPLETE',
    payload: card,
  }
}
