import { Navbar } from '@/components/navbar'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tuzi - The Moon\'s Unexpected Inhabitants',
  description: 'Discover the magical world of Tuzi, where moon bunnies evolved into an advanced civilization.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

