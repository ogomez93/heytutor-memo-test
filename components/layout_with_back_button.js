import Link from 'next/link'

export default function LayoutWithBackButton({ children }) {
  return (
    <>
      <div className='absolute left-5 text-xs top-3.5'>
        <Link href='/'>← Back to home</Link>
      </div>
      { children }
    </>
  )
}