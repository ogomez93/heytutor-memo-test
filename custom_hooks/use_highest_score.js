'use client'

import { useEffect, useState } from 'react'
import { HIGHEST_SCORE } from '@/constants'
import { gameKeyBuilder } from '@/lib/key_builder'

export default function useHighestScore(gameType) {
  const [highestScore, setHighestScore] = useState('...')
  const highestScoreKey = gameKeyBuilder(gameType)(HIGHEST_SCORE)

  useEffect(() => setHighestScore(localStorage.getItem(highestScoreKey) || 0), [])

  return [highestScore, setHighestScore]
}
