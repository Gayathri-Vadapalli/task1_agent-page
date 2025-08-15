import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Insurge AI - Transform Your Website Into An Intelligent Assistant',
  description: 'Insurge AI builds autonomous sales agents that deliver personalised product demos paired with conversational AI. Transform static websites into intelligent, interactive experiences.',
  keywords: 'AI, conversational AI, sales agents, product demos, EM-CAN technology, website assistant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
