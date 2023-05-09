'use client'

import { useEffect, useState } from 'react'
import { BOARD } from '@/constants'
import { gameKeyBuilder } from '@/lib/key_builder'

export default function useBoard(gameType) {
  const [board, setBoard] = useState(null)
  const boardKey = gameKeyBuilder(gameType)(BOARD)

  useEffect(() => setBoard(JSON.parse(localStorage.getItem(boardKey))), [])

  return [board, setBoard]
}
