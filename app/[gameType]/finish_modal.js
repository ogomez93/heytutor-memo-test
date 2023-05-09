'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

import { HIGHEST_SCORE } from '@/constants'
import calculateScore from '@/lib/calculate_score'
import { gameKeyBuilder } from '@/lib/key_builder'
import resetGame from '@/lib/reset_game'

export default function FinishModal({ attemptCounter, gameType, pairsAmount }) {
  const score = calculateScore(attemptCounter, pairsAmount)
  const [newRecord, setNewRecord] = useState(false)

  useEffect(() => {
    const highestScore = localStorage.getItem(gameKeyBuilder(gameType)(HIGHEST_SCORE))
    if (score > highestScore) setNewRecord(true)
    return () => resetGame(gameType, score, highestScore)
  }, [])


  return (
    <div className='absolute top-0 bottom-0 left-0 right-0'>
      <div className='absolute top-0 left-0 right-0 mx-2 my-4 md:mx-8 md:my-16 px-4 py-8 border border-white rounded-xl flex flex-col justify-between text-center bg-black/[0.9]'>
        <h1 className='my-4'>Congrats! Your score was {score}</h1>
        { newRecord && <div className='my-4'>New Record!</div> }
        <Link href='/' className='my-4'>Home</Link>
      </div>
    </div>
  )
}