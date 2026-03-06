import { Card } from '@/shared/ui'
import styles from './About.module.scss'

export const About = () => {
  return (
    <section className={styles.section}>
      <Card hoverable>
        <h2 className={styles.title}>О себе</h2>
        <div className={styles.content}>
          <p>
            Fullstack-разработчик с уклоном в frontend, но с уверенными знаниями backend-части 
            на Node.js и FastAPI. За время работы в распределённых командах я реализовывал 
            полный цикл разработки — от планирования архитектуры до деплоя и CI/CD.
          </p>
          <p>
            Среди моих проектов — веб-сервисы с авторизацией, админками, Telegram-ботами 
            и интеграцией с внешними API. Умею работать как с React и Redux, так и с серверной логикой.
          </p>
          <p>
            Я внимательно подхожу к задачам, умею работать в сжатые сроки и быстро осваиваю 
            новые технологии.
          </p>
        </div>
      </Card>
    </section>
  )
}
