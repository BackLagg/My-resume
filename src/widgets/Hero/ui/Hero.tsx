import { ContactLink } from '@/entities/contact'
import { contacts } from '@/shared/config'
import styles from './Hero.module.scss'

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.avatarWrapper}>
          <div className={styles.avatarGlow}></div>
          <div className={styles.avatar}>АБ</div>
        </div>
        <h1 className={styles.title}>
          <span className={styles.wave}>👋</span> Арсений Бахур
        </h1>
        <p className={styles.subtitle}>Fullstack-разработчик</p>
        <p className={styles.description}>
          Frontend-специализация с уверенными знаниями backend на Node.js и FastAPI
        </p>
        
        <div className={styles.contacts}>
          {contacts.map((contact) => (
            <ContactLink key={contact.href} contact={contact} />
          ))}
        </div>
      </div>
    </section>
  )
}
