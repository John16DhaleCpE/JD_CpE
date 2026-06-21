import type { Metadata } from 'next'
import { ThemeProvider } from '@/context/ThemeContext'
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
      <head>
        {/* ── Pre-hydration theme script ──
            Reads saved theme from localStorage BEFORE React renders,
            preventing a flash of the wrong theme on page load. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light')document.documentElement.classList.add('light');}catch(e){}})()`,
          }}
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
