'use client'

import useBoard from '@/custom_hooks/use_board'
import ButtonLink from '@/components/button_link'

export default function ContinueButton({ gameType }) {
  const [board, _setBoard] = useBoard(gameType)
  if (board === null || board.length === 0) return
  return <ButtonLink href={`${gameType}`}>Continue</ButtonLink>
}
