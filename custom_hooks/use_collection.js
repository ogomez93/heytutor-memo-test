'use client'

import { useEffect, useState } from 'react'
import { COLLECTION } from '@/constants'
import { gameKeyBuilder } from '@/lib/key_builder'

export default function useCollection(gameType) {
  const [collection, setCollection] = useState(null)
  const collectionKey = gameKeyBuilder(gameType)(COLLECTION)

  useEffect(() => setCollection(JSON.parse(localStorage.getItem(collectionKey))), [])

  return [collection, setCollection]
}
