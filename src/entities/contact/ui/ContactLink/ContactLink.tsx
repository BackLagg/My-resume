import { ContactLink as ContactLinkType } from '@/shared/types'
import styles from './ContactLink.module.scss'

interface ContactLinkProps {
  contact: ContactLinkType
}

export const ContactLink = ({ contact }: ContactLinkProps) => {
  const props = contact.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  
  return (
    <a href={contact.href} className={styles.link} {...props}>
      <span className={styles.icon}>{contact.icon}</span>
      {contact.label}
    </a>
  )
}
