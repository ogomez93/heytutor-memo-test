import Link from 'next/link'
import { startCase } from 'lodash'
import DisplayHighestScore from '@/components/display_highest_score'
import ContinueButton from './continue_button'

export default function GameType({ gameType }) {
  return (
    <li className='py-2 px-6 border border-white rounded-lg my-4 flex justify-between items-center hover:bg-slate-900'>
      <div className='flex flex-col'>
        <div>{startCase(gameType)}</div>
        <DisplayHighestScore className='text-slate-400' gameType={gameType} />
      </div>
      <div>
        <ContinueButton gameType={gameType} />{' '}
        <Link href={`/${gameType}/new_game`}>Start</Link>
      </div>
    </li>
  )
}
