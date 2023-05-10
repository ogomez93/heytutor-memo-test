import clsx from 'clsx'
import Link from 'next/link'

export default function ButtonLink({ Tag = Link, className, ...props }) {
  return (
    <Tag {...props} className={clsx(className, 'px-3 py-1 border border-slate-950 dark:border-slate-50 rounded-sm bg-slate-50 hover:bg-slate-200 dark:bg-slate-950 dark:hover:bg-slate-800')} />
  )
}
