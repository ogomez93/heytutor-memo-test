'use client'

import clsx from 'clsx'
import Image from 'next/image'
import flipCard from './flipCard.module.css'

const lgDimensions = 'lg:m-2 lg:w-32 lg:h-32'
const mdDimensions = 'md:w-24 md:h-24'
const smDimensions = 'md:w-20 md:h-20'
const xsDimensions = 'm-1 w-16 h-16'
const dimensions = `${lgDimensions} ${mdDimensions} ${smDimensions} ${xsDimensions}`

export default function Card({ src, currentSelection, index, matched, onClick }) {
  const flipped = matched || currentSelection.includes(index)
  const handleClick = () => !flipped && onClick(index)
  const baseClassNames = clsx(flipCard.flipCard, dimensions, { [flipCard.flipped]: flipped, 'cursor-pointer': !flipped })
  const imgsrc = require(`../../public${src}`)

  return (
    <div className={baseClassNames} onClick={handleClick}>
      <div className={flipCard.flipCardInner}>
        <div className={flipCard.flipCardFront}>
          { index + 1 }
        </div>
        <div className={flipCard.flipCardBack}>
          <Image src={imgsrc} alt={src} width={150} height={150} className='h-full object-scale-down' />
        </div>
      </div>
    </div>
  )
}