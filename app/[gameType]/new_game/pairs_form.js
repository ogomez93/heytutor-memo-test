'use client'

import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react'

import { PAIRS_AMOUNT } from '@/constants'
import { gameKeyBuilder } from '@/lib/key_builder'
import resetGame from '@/lib/reset_game'

export default function PairsForm({ gameType }) {
  const router = useRouter()
  const [pairsAmount, setPairsAmount] = useState(7)
  const increase = () => pairsAmount !== 15 && setPairsAmount(pairsAmount + 1)
  const decrease = () => pairsAmount !== 4 && setPairsAmount(pairsAmount - 1)
  const keyBuilder = useRef(gameKeyBuilder(gameType))

  const handleStartGame = () => {
    resetGame(gameType)
    localStorage.setItem(keyBuilder.current(PAIRS_AMOUNT), pairsAmount)
    router.push(`/${gameType}`)
  }

  return (
    <>
      <div className='flex justify-center'>
        <button onClick={decrease}>-</button>
        <input className='text-black text-center' type='number' value={pairsAmount} readOnly />
        <button onClick={increase}>+</button>
      </div>
      <div className='text-center'>
        <button onClick={handleStartGame}>Start Game</button>
      </div>
    </>
  )
}
