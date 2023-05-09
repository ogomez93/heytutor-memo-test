import { ATTEMPT_COUNTER } from '@/constants'
import { gameKeyBuilder } from './key_builder'

export default function initAttemptCounter(gameType) {
  const attemptCounterKey = getAttemptCounterKey(gameType)
  let attemptCounter = localStorage.getItem(attemptCounterKey)
  return attemptCounter || 0
}

export function persistAttemptCounter(gameType) {
  const attemptCounterKey = getAttemptCounterKey(gameType)
  return function(attemptCounter) {
    localStorage.setItem(attemptCounterKey, attemptCounter)
  }
}

function getAttemptCounterKey(gameType) {
  return gameKeyBuilder(gameType)(ATTEMPT_COUNTER)
}
