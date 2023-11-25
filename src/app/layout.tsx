import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dewey Mastery',
  description: 'A Fun Platform for the Mastering Dewey Decimal System'
}

type ChildrenProp = {
  children: React.ReactNode
}

export default function RootLayout({ children } : ChildrenProp) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
