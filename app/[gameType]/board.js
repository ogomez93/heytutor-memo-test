'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

import initAttemptCounter, { persistAttemptCounter } from '@/lib/init_attempt_counter'
import initBoard from '@/lib/init_board'
import initCurrentSelection, { persistCurrentSelection } from '@/lib/init_current_selection'
import initMatchedCards, { persistMatchedCards } from '@/lib/init_matched_cards'

import Card from './card'
import FinishModal from './finish_modal'

export default function Board({ gameType, imagePaths }) {
  const resetTimer = useRef(null)
  const board = useRef([])
  const [attemptCounter, setAttemptCounter] = useState(0)
  const [currentSelection, setCurrentSelection] = useState([])
  const [matchedCards, setMatchedCards] = useState([])
  const saveAttemptCounter = persistAttemptCounter(gameType)
  const saveCurrentSelection = persistCurrentSelection(gameType)
  const saveMatchedCards = persistMatchedCards(gameType)
  useEffect(() => {
    board.current = initBoard(gameType, imagePaths)
    setAttemptCounter(parseInt(initAttemptCounter(gameType)))
    setCurrentSelection(initCurrentSelection(gameType))
    setMatchedCards(initMatchedCards(gameType))
  }, [])

  useEffect(() => saveAttemptCounter(attemptCounter), [attemptCounter, saveAttemptCounter])
  useEffect(() => saveCurrentSelection(currentSelection), [currentSelection, saveCurrentSelection])
  useEffect(() => saveMatchedCards(matchedCards), [matchedCards, saveMatchedCards])

  const handleMatch = useCallback(selection => {
    const first = board.current[selection[0]]
    const second = board.current[selection[1]]
    if (first !== second) return false

    setMatchedCards([...matchedCards, first])
    true
  }, [board, matchedCards])

  const handleCardClick = index => {
    if (currentSelection.includes(index)) return

    let newSelection = currentSelection.length < 2 ? [...currentSelection, index] : []
    if (currentSelection.length === 2) {
      clearTimeout(resetTimer.current)
      newSelection = [index]
    }
    if (newSelection.length === 2) {
      const isMatch = handleMatch(newSelection)
      if (!isMatch) resetTimer.current = setTimeout(() => setCurrentSelection([]), 500)
      setAttemptCounter(attemptCounter + 1)
    }
    setCurrentSelection(newSelection)
  }

  const renderCard = (src, i) =>
    <Card
      key={i}
      index={i}
      currentSelection={currentSelection}
      matched={matchedCards.includes(src)}
      onClick={handleCardClick}
      src={src}
    />

  if (!board.current.length) return <div>Loading game...</div>

  return (
    <>
      <div className='flex flex-wrap justify-around grow align-center'>
        { board.current.map(renderCard) }
      </div>
      { matchedCards.length === (board.current.length / 2) &&
        <FinishModal attemptCounter={attemptCounter} gameType={gameType} pairsAmount={board.current.length / 2} /> }
    </>
  )
}