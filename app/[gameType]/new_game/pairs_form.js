'use client'

import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react'

import ButtonLink from '@/components/button_link'
import { PAIRS_AMOUNT } from '@/constants'
import { gameKeyBuilder } from '@/lib/key_builder'
import resetGame from '@/lib/reset_game'
import difficultyLabels from './difficulty_labels.module.css'

export default function PairsForm({ gameType, pairs = 7 }) {
  const router = useRouter()
  const [pairsAmount, setPairsAmount] = useState(pairs)
  const handleChange = e => setPairsAmount(e.target.value)
  const keyBuilder = useRef(gameKeyBuilder(gameType))

  const handleStartGame = () => {
    resetGame(gameType)
    localStorage.setItem(keyBuilder.current(PAIRS_AMOUNT), pairsAmount)
    router.push(`/${gameType}`)
  }

  return (
    <>
      <div>
        <div className='flex justify-center'>
          <span className={difficultyLabels.easy}>Easiest</span>
          <input className='mx-2' min={4} max={15} onChange={handleChange} step={1} type='range' value={pairsAmount} />
          <span className={difficultyLabels.hard}>Hardest</span>
        </div>
        <div>(Number of cards: { pairsAmount * 2 })</div>
      </div>
      <div className='text-center mt-12'>
        <ButtonLink Tag='button' onClick={handleStartGame}>Start Game</ButtonLink>
      </div>
    </>
  )
}
