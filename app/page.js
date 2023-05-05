import GameType from './GameType'
import { GAME_TYPES } from '@/constants'

export default function Home() {
  return (
    <section className='w-full'>
      <ul>
        <GameType gameType={GAME_TYPES.clothes} />
        <GameType gameType={GAME_TYPES.sports} />
        <GameType gameType={GAME_TYPES.animals} />
      </ul>
    </section>
  )
}
