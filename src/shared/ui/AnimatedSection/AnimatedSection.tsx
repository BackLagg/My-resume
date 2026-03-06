import { ReactNode } from 'react'
import { useScrollAnimation } from '@/shared/hooks'
import styles from './AnimatedSection.module.scss'

interface AnimatedSectionProps {
  children: ReactNode
  delay?: number
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'fadeIn'
}

export const AnimatedSection = ({ 
  children, 
  delay = 0,
  animation = 'fadeInUp' 
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section
      ref={ref}
      className={`${styles.section} ${isVisible ? styles.visible : ''} ${styles[animation]}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </section>
  )
}
