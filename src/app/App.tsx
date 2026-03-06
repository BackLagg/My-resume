import { useEffect, useState } from 'react'
import { Hero } from '@/widgets/Hero'
import { About } from '@/widgets/About'
import { Skills } from '@/widgets/Skills'
import { Projects } from '@/widgets/Projects'
import { CallToAction } from '@/widgets/CallToAction'
import { Footer } from '@/widgets/Footer'
import { GridBackground } from '@/shared/ui/GridBackground'
import styles from './App.module.scss'

export const App = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100)
  }, [])

  return (
    <>
      <GridBackground />
      <main className={`${styles.app} ${isVisible ? styles.visible : ''}`}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CallToAction />
        <Footer />
      </main>
    </>
  )
}
