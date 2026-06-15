'use client'

import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import About from '@/components/about'
import Skills from '@/components/skills'
import Projects from '@/components/projects'
import Journey from '@/components/journey'
import BeyondTech from '@/components/beyondtech'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Particles from '../components/Particles'
import { useTheme } from '../context/ThemeContext'

const Divider = () => (
  <div className="gradient-divider" />
)
export default function Home() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

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
          particleColors={isDark ? ['#52525b', '#27272a'] : ['#c8c8c0', '#b8b8b0']}
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
