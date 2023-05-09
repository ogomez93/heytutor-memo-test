'use client'

import Link from 'next/link'
import useBoard from '@/custom_hooks/use_board'

export default function ContinueButton({ gameType }) {
  const [board, _setBoard] = useBoard(gameType)
  if (board === null || board.length === 0) return
  return <Link href={`${gameType}`}>Continue</Link>
}
