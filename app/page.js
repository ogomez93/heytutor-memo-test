import { GAME_TYPES } from '@/constants'
import GameType from './game_type'

export default function Home() {
  return (
    <section className='w-full'>
      <ul>
        { Object.values(GAME_TYPES).map(gameType => <GameType key={gameType} gameType={gameType} />) }
      </ul>
    </section>
  )
}
