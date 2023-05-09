'use client'

import clsx from 'clsx'
import Image from 'next/image'
import flipCard from './flipCard.module.css'

const SMALL_CARD_DIMENSIONS = 'w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32'
const BIG_CARD_DIMENSIONS = 'w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40'
const SPACING = 'm-1 lg:m-2'
function cardDimensions(pairsAmount) {
  return pairsAmount < 10 ? BIG_CARD_DIMENSIONS : SMALL_CARD_DIMENSIONS
}

export default function Card({ currentSelection, index, matched, onClick, pairsAmount, src }) {
  const flipped = matched || currentSelection.includes(index)
  const handleClick = () => !flipped && onClick(index)
  const baseClassNames = clsx(
    flipCard.flipCard, SPACING, cardDimensions(pairsAmount),
    { [flipCard.flipped]: flipped, 'cursor-pointer': !flipped }
  )
  const imgsrc = require(`../../public${src}`)

  return (
    <div className={baseClassNames} onClick={handleClick}>
      <div className={flipCard.flipCardInner}>
        <div className={clsx(flipCard.flipCardFront, 'hover:bg-gray-800 relative')}>
          <span className='absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2'>{ index + 1 }</span>
        </div>
        <div className={flipCard.flipCardBack}>
          <Image src={imgsrc} alt={src} width={150} height={150} className='h-full object-scale-down' />
        </div>
      </div>
    </div>
  )
}