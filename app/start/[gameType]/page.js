import { capitalize } from 'lodash'
import { GAME_TYPES } from '@/constants/index';

export default function StartGame({ params }) {
  const { gameType } = params
  return `Starting game: ${capitalize(gameType)}`
}

export function getStaticPaths() {
  const paths = Object.values(GAME_TYPES).map(gameType => ({ params: { gameType } }))
  return { paths, fallback: false }
}
