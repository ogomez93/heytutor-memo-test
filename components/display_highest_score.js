'use client'

import useHighestScore from '@/custom_hooks/use_highest_score'

export default function DisplayHighestScore({ className, gameType, text = 'Highest Score: ' }) {
  const [highestScore, _setHighestScore] = useHighestScore(gameType)

  return <div className={className}>{text}{highestScore}</div>
}
