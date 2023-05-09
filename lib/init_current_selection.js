import { CURRENT_SELECTION } from '@/constants'
import { gameKeyBuilder } from './key_builder'

export default function initCurrentSelection(gameType) {
  const currentSelectionKey = getCurrentSelectionKey(gameType)
  let currentSelection = JSON.parse(localStorage.getItem(currentSelectionKey))
  if (Array.isArray(currentSelection) && currentSelection.length) return currentSelection

  return []
}

export function persistCurrentSelection(gameType) {
  const currentSelectionKey = getCurrentSelectionKey(gameType)
  return function(currentSelection) {
    localStorage.setItem(currentSelectionKey, JSON.stringify(currentSelection))
  }
}

function getCurrentSelectionKey(gameType) {
  return gameKeyBuilder(gameType)(CURRENT_SELECTION)
}
