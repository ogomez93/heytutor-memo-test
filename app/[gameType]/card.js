'use client'

import Image from 'next/image'

const lgDimensions = 'lg:m-2 lg:w-32 lg:h-32'
const mdDimensions = 'md:w-24 md:h-24'
const smDimensions = 'md:w-20 md:h-20'
const xsDimensions = 'm-1 w-16 h-16'
const dimensions = `${lgDimensions} ${mdDimensions} ${smDimensions} ${xsDimensions}`

export default function Card({ src, currentSelection, index, matched, onClick }) {
  const flipped = matched || currentSelection.includes(index)
  const handleClick = () => onClick(index)
  return (
    <div
      className={`border border-white ${dimensions} overflow-hidden relative`}
      onClick={handleClick}
    >
      { flipped
          ? <Image src={src} alt={src} width={150} height={150} className='object-center object-cover object-scale-down' />
          : index + 1
      }
    </div>
  )
}