import { shuffle } from 'lodash'
import { BOARD, PAIRS_AMOUNT } from '@/constants'
import { gameKeyBuilder } from './key_builder'

export default function initBoard(gameType, imagePaths) {
  const boardKey = gameKeyBuilder(gameType)(BOARD)
  const pairsAmountKey = gameKeyBuilder(gameType)(PAIRS_AMOUNT)
  let board = JSON.parse(localStorage.getItem(boardKey))
  if (Array.isArray(board) && board.length) return board // the current game hasn't been finished

  const pairsAmount = parseInt(localStorage.getItem(pairsAmountKey))
  const images = [...imagePaths[gameType].slice(0, pairsAmount)]
  const unshuffledBoard = [...images, ...images]
  board = shuffle(unshuffledBoard)
  localStorage.setItem(boardKey, JSON.stringify(board))
  return board
}
