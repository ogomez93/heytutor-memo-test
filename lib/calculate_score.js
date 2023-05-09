import { round } from 'lodash'

export default function calculateScore(attempts, pairsAmount) {
  if (attempts === 0) return '-'

  return round(100 * (pairsAmount / attempts), 2)
}
