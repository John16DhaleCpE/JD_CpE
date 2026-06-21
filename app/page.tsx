'use client'

import { useMemo } from 'react'
import dynamic from 'next/dynamic'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import About from '@/components/about'
import Skills from '@/components/skills'
import Projects from '@/components/projects'
import Journey from '@/components/journey'
import BeyondTech from '@/components/beyondtech'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import { useTheme } from '../context/ThemeContext'

const Particles = dynamic(() => import('../components/Particles'), { ssr: false })

const Divider = () => (
  <div className="gradient-divider" />
)
export default function Home() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const particleColors = useMemo(
    () => (isDark ? ['#52525b', '#27272a'] : ['#c8c8c0', '#b8b8b0']),
    [isDark]
  )

  return (
    <>
      {/* Background particles — lighter in light mode */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <Particles
          particleColors={particleColors}
          particleCount={200}
          particleSpread={20}
          speed={0.08}
          particleBaseSize={200}
          moveParticlesOnHover
          alphaParticles
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <div className="navbar-spacer" />
        <main>
          <Hero />
          <Divider />
          <About />
          <Divider />
          <Skills />
          <Divider />
          <Projects />
          <Divider />
          <Journey />
          <Divider />
          <BeyondTech />
          <Divider />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
