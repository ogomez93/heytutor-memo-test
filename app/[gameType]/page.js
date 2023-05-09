import fs from 'fs'
import { isNotJunk } from 'junk'
import { startCase } from 'lodash'
import path from 'path'

import { GAME_TYPES } from '@/constants'
import DisplayHighestScore from '@/components/display_highest_score'
import Board from './board'

export default function Game({ params }) {
  const { gameType } = params
  const imagePaths = getImagePaths()
  return (
    <div className='w-full relative grow flex flex-col'>
      <div className='text-center'>Playing {startCase(gameType)} game</div>
      <DisplayHighestScore className='text-center' gameType={gameType} />
      <Board gameType={gameType} imagePaths={imagePaths} />
    </div>
  )  
}

function getImagePaths() {
  return Object.values(GAME_TYPES).reduce((paths, gameType) => {
    const imagesDirectory = path.join(process.cwd(), `public/images/${gameType}/`)
    const imagePaths = [...fs.readdirSync(imagesDirectory)].reduce((fileNames, fileName) =>
      isNotJunk(fileName) ? [...fileNames, `/images/${gameType}/${fileName}`] : fileNames, [])

    return { ...paths, [gameType]: imagePaths }
  }, {})
}
