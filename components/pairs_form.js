'use client'

import { useState } from 'react'

export default function PairsForm() {
  const [pairsAmount, setPairsAmount] = useState(7)
  const increase = () => pairsAmount !== 15 && setPairsAmount(pairsAmount + 1)
  const decrease = () => pairsAmount !== 4 && setPairsAmount(pairsAmount - 1)

  return (
    <>
      <div className='flex justify-center'>
        <button onClick={decrease}>-</button>
        <input className='text-black text-center' type="number" value={pairsAmount} readOnly />
        <button onClick={increase}>+</button>
      </div>
      <div className='text-center'>
        <button>Start Game</button>
      </div>
    </>
  )
}
