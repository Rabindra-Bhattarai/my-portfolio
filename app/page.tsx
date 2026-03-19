'use client'

import Cursor from '../components/Cursor'
import Navbar from '../components/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Certificates from '@/components/sections/Certificates'
import Skills from '@/components/sections/Skills'
import Insights from '@/components/sections/Insights'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/ui/Footer'

export default function Home() {
  return (
    <>
      {/* Fixed overlays */}
      <Cursor />
      <div className="scanlines" aria-hidden="true" />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Certificates />
        <Skills />
        <Insights />
        <Contact />
      </main>

      <Footer />
    </>
  )
}