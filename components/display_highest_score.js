'use client'

import useHighestScore from '@/custom_hooks/use_highest_score'

export default function DisplayHighestScore(props) {
  const { className, gameType, highestScoreClassName = '', text = 'Highest Score: ' } = props
  const [highestScore, _setHighestScore] = useHighestScore(gameType)

  return <div className={className}>{text}<span className={highestScoreClassName}>{highestScore}</span></div>
}
