import clsx from 'clsx'
import Link from 'next/link'

export default function ButtonLink({ Tag = Link, className, ...props }) {
  return (
    <Tag {...props} className={clsx(className, 'px-3 py-1 border border-white rounded-sm hover:bg-gray-800')} />
  )
}
