import { ReactNode } from 'react'
import styles from './Card.module.scss'

interface CardProps {
  children: ReactNode
  className?: string
  hoverable?: boolean
}

export const Card = ({ children, className = '', hoverable = false }: CardProps) => {
  return (
    <div className={`${styles.card} ${hoverable ? styles.hoverable : ''} ${className}`}>
      {children}
    </div>
  )
}
