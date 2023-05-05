'use client'

import { useEffect, useState } from "react";
import Link from 'next/link'
import { capitalize } from 'lodash'
import { COLLECTION, HIGHEST_SCORE } from "@/constants"
import { gameKeyBuilder } from "@/lib/key_builder"

export default function GameType({ gameType }) {
  const [collection, setCollection] = useState(null)
  const [highestScore, setHighestScore] = useState('...')

  const keyBuilder = gameKeyBuilder(gameType)
  const gameKeys = {
    collection: keyBuilder(COLLECTION),
    highestScore: keyBuilder(HIGHEST_SCORE)
  }

  useEffect(() => {
    setCollection(JSON.parse(localStorage.getItem(gameKeys.collection)))
    setHighestScore(localStorage.getItem(gameKeys.highestScore) || 0)
  }, [])

  return (
    <li className='py-2 px-6 border border-white rounded-lg my-4 flex justify-between items-center hover:bg-slate-900'>
      <div className='flex flex-col'>
        <div>{capitalize(gameType)}</div>
        <div className='text-slate-400'>Highest Score: {highestScore}</div>
      </div>
      <div>
        { (collection !== null) && <Link href={`${gameType}`}>Continue</Link> }
        <Link href={`${gameType}/start`}>Start</Link>
      </div>
    </li>
  )
}
