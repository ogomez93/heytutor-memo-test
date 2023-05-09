import { ATTEMPT_COUNTER, BOARD, CURRENT_SELECTION, HIGHEST_SCORE, MATCHED_CARDS } from '@/constants'
import { gameKeyBuilder } from './key_builder'

export default function resetGame (gameType, score, highestScore) {
  const keyBuilder = gameKeyBuilder(gameType)
  localStorage.setItem(keyBuilder(ATTEMPT_COUNTER), 0)
  localStorage.setItem(keyBuilder(BOARD), JSON.stringify([]))
  localStorage.setItem(keyBuilder(CURRENT_SELECTION), JSON.stringify([]))
  localStorage.setItem(keyBuilder(MATCHED_CARDS), JSON.stringify([]))
  if (!isNaN(score) && !isNaN(highestScore) && score > highestScore) {
    localStorage.setItem(keyBuilder(HIGHEST_SCORE), score)
  }
}