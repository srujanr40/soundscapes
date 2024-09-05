import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { Analytics } from '@vercel/analytics/react'

import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'Soundscapes',
  description: 'Create and listen to custom ambient sound mixes',
  keywords: [
    'ambience',
    'ambient',
    'ambient sound',
    'ambient sounds',
    'soundscapes',
    'background sound',
    'background music',
    'audio',
    'sound',
    'sounds',
    'noise',
    'music',
    'ambient music',
    'environmental',
    'environmental sound',
    'environmental sounds',
    'environmental noise',
    'nature sound',
    'nature sounds',
    'nature noise',
    'wilderness sound',
    'wilderness sounds',
    'wilderness noise',
    'forest sound',
    'forest sounds',
    'forest noise',
    'city sound',
    'city sounds',
    'city noise', 
    'urban sound',
    'urban sounds',
    'urban noise',  
    'background noise',
    'background noises',
    'background ambience',
    'background tone',
    'comfort noise',
  ],
}

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <meta name="keywords" content="keyword1, keyword2, keyword3" />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
