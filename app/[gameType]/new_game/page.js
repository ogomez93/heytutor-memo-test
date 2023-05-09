import { startCase } from 'lodash'
import DisplayHighestScore from '@/components/display_highest_score'
import PairsForm from './pairs_form'

export default function StartGame({ params }) {
  const { gameType } = params

  return (
    <section className='w-full text-center'>
      <h1 className='text-2xl my-4'>
        Starting <b>{startCase(gameType)}</b> game
      </h1>
      <DisplayHighestScore
        className='text-md my-4'
        gameType={gameType}
        highestScoreClassName='text-xl font-bold'
        text={<div>Highest Score</div>}
      />
      <div className='text-xl mt-6 mb-2'>
        Choose the difficulty
      </div>
      <PairsForm gameType={gameType} />
    </section>
  )
}
