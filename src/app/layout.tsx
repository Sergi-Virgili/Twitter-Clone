import './globals.css'
import type { Metadata } from 'next'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Clon de Twitter',
  description: 'Un pequeño clon de Twitter'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className='dark'>
      <body>
        <Providers>
            {children}
        </Providers>
      </body>
    </html>
  )
}
