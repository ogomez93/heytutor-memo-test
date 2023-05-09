'use client'

import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react'

import ButtonLink from '@/components/button_link'
import { PAIRS_AMOUNT } from '@/constants'
import { gameKeyBuilder } from '@/lib/key_builder'
import resetGame from '@/lib/reset_game'

export default function PairsForm({ gameType }) {
  const router = useRouter()
  const [pairsAmount, setPairsAmount] = useState(7)
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
          <span>Easiest</span>
          <input className='text-black text-center mx-2' min={4} max={15} onChange={handleChange} step={1} type='range' value={pairsAmount} />
          <span>Hardest</span>
        </div>
        <div>(Number of cards: { pairsAmount * 2 })</div>
      </div>
      <div className='text-center'>
        <ButtonLink Tag='button' onClick={handleStartGame}>Start Game</ButtonLink>
      </div>
    </>
  )
}
