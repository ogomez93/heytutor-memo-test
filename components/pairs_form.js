'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { PAIRS_AMOUNT } from '@/constants'
import { gameKeyBuilder } from '@/lib/key_builder'

export default function PairsForm({ gameType }) {
  const router = useRouter()
  const [pairsAmount, setPairsAmount] = useState(7)
  const increase = () => pairsAmount !== 15 && setPairsAmount(pairsAmount + 1)
  const decrease = () => pairsAmount !== 4 && setPairsAmount(pairsAmount - 1)

  const handleStartGame = () => {
    const pairsAmountKey = gameKeyBuilder(gameType)(PAIRS_AMOUNT)
    localStorage.setItem(pairsAmountKey, pairsAmount)
    router.push(`/${gameType}`)
  }

  return (
    <>
      <div className='flex justify-center'>
        <button onClick={decrease}>-</button>
        <input className='text-black text-center' type="number" value={pairsAmount} readOnly />
        <button onClick={increase}>+</button>
      </div>
      <div className='text-center'>
        <button onClick={handleStartGame}>Start Game</button>
      </div>
    </>
  )
}
