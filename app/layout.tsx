import type { Metadata } from 'next'
import { ThemeProvider } from '../context/ThemeContext'
import './globals.css'

export const metadata: Metadata = {
  title: 'John Dhale Peralta | Computer Engineer & Web Developer',
  description:
    'Portfolio of John Dhale Peralta — Computer Engineering graduate bridging hardware roots with modern web development. Based in the Philippines.',
  keywords: [
    'John Dhale Peralta',
    'Computer Engineer',
    'Web Developer',
    'Next.js',
    'TypeScript',
    'React',
    'Arduino',
    'Embedded Systems',
    'Philippines',
  ],
  authors: [{ name: 'John Dhale Peralta' }],
  openGraph: {
    title: 'John Dhale Peralta | Computer Engineer & Web Developer',
    description:
      'Computer Engineering graduate bridging hardware roots with modern web development.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
