import { ReactNode } from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
  children: ReactNode
  href: string
  variant?: 'primary' | 'secondary'
  external?: boolean
}

export const Button = ({ children, href, variant = 'primary', external = false }: ButtonProps) => {
  const props = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  
  return (
    <a 
      href={href} 
      className={`${styles.button} ${styles[variant]}`}
      {...props}
    >
      {children}
    </a>
  )
}
