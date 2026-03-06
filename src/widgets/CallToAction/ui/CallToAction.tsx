import { Button, AnimatedSection } from '@/shared/ui'
import styles from './CallToAction.module.scss'

export const CallToAction = () => {
  return (
    <AnimatedSection animation="fadeIn" delay={300}>
      <div className={styles.section}>
        <div className={styles.card}>
          <h2 className={styles.title}>Готов к новым проектам</h2>
          <p className={styles.text}>
            Буду рад обсудить, как мой опыт может принести ценность вашей команде
          </p>
          <div className={styles.buttons}>
            <Button href="mailto:shahnovich61@gmail.com" variant="primary">
              Написать письмо
            </Button>
            <Button href="https://t.me/ARSY_NN" variant="secondary" external>
              Telegram
            </Button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
