import { capitalize } from 'lodash'
import DisplayHighestScore from '@/components/display_highest_score'
import PairsForm from './pairs_form'

export default function StartGame({ params }) {
  const { gameType } = params

  return (
    <section className='w-full text-center'>
      <h1>
        Starting game: {capitalize(gameType)}
      </h1>
        <DisplayHighestScore gameType={gameType} text={`Your highest score at ${capitalize(gameType)} was: `} />
      <div>
        Let's set the difficulty now.
        <br />
        How many pairs of cards do you want? (min: 4, max: 15)
      </div>
      <PairsForm gameType={gameType} />
    </section>
  )
}
