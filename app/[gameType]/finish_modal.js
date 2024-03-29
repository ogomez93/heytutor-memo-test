'use client'

import { useEffect, useState } from 'react'

import ButtonLink from '@/components/button_link'
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

  const tryAgainHref = {
    pathname: `/${gameType}/new_game`,
    query: { pairsAmount } 
  }

  return (
    <div className='absolute top-0 bottom-0 left-0 right-0'>
      <div className='absolute top-0 left-0 right-0 mx-2 my-4 md:mx-8 md:my-16 px-4 py-8 border dark:border-slate-50 border-slate-900 rounded-xl flex flex-col justify-between text-center bg-slate-100/[0.9] dark:bg-slate-950/[0.9]'>
        <h1 className='mb-8 text-2xl'>Congratulations!</h1>
        <div className='text-lg'>Your score was</div>
        <span className='font-bold text-xl'>{score}</span>
        { newRecord && <div className='my-4 font-bold text-2xl'>New Record!</div> }
        <div className='text-center flex justify-center mt-8'>
          <ButtonLink href={tryAgainHref} className='mr-4'>Play Again</ButtonLink>
          <ButtonLink href='/'>Home</ButtonLink>
        </div>
      </div>
    </div>
  )
}