'use client'

import Link from "next/link"
import useCollection from "@/custom_hooks/use_collection"

export default function ContinueButton({ gameType }) {
  const [collection, _setCollection] = useCollection(gameType)
  if (collection === null) return
  return <Link href={`${gameType}`}>Continue</Link>
}
