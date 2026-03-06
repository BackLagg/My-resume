import { Project } from '../types'

export const projects: Project[] = [
  {
    title: 'Веб-сервисы с авторизацией',
    description: 'Полный цикл разработки веб-приложений с системой аутентификации, админ-панелью и интеграцией внешних API',
    tech: ['React', 'Redux', 'Node.js', 'PostgreSQL', 'Docker'],
  },
  {
    title: 'Telegram-боты',
    description: 'Разработка интерактивных ботов с интеграцией баз данных и внешних сервисов',
    tech: ['Node.js', 'Telegram API', 'Redis', 'PostgreSQL'],
  },
  {
    title: 'CI/CD & Деплой',
    description: 'Настройка автоматизированных процессов развертывания и непрерывной интеграции',
    tech: ['Docker', 'GitHub Actions', 'Linux', 'Nginx'],
  },
]
