import { MATCHED_CARDS } from '@/constants'
import { gameKeyBuilder } from './key_builder'

export default function initMatchedCards(gameType) {
  const matchedCardsKey = getMatchedCardsKey(gameType)
  let matchedCards = JSON.parse(localStorage.getItem(matchedCardsKey))
  if (Array.isArray(matchedCards) && matchedCards.length) return matchedCards

  return []
}

export function persistMatchedCards(gameType) {
  const matchedCardsKey = getMatchedCardsKey(gameType)
  return function(matchedCards) {
    localStorage.setItem(matchedCardsKey, JSON.stringify(matchedCards))
  }
}

function getMatchedCardsKey(gameType) {
  return gameKeyBuilder(gameType)(MATCHED_CARDS)
}
