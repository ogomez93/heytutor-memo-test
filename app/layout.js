import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import { capitalize } from 'lodash'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Memo Test',
  description: 'HeyTutor\'s Memo Test challenge by Oswaldo Gomez',
}

export default function RootLayout({ children, home = true, gameType = '' }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} max-h-screen min-h-screen flex flex-col justify-between`}>
        <header className='text-center p-2 relative'>
          { !home &&
            <div className='absolute left-5 text-xs bottom-1/2 translate-y-1/2'>
              <Link href='/'>← Back to home</Link>
            </div>
          }
          <h1 className='text-lg'>Memo Test{ gameType && `: ${capitalize(gameType)}` }</h1>
        </header>
        <main className='flex flex-col items-center grow justify-between p-8'>
          {children}
        </main>
        <footer className='text-xs p-1 text-center'>
          Memo Test made by Oswaldo Gomez with Next.js as a coding challenge for
          {` `}<a href='https://heytutor.com/' target='_blank'>HeyTutor</a>, May of 2023.
          See the <a href='https://github.com/ogomez93/heytutor-memo-test' target='_blank'><b>source code</b></a>.
        </footer>
      </body>
    </html>
  )
}
