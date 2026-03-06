import { Project } from '../types'

export const projects: Project[] = [
  {
    title: 'Веб-сервисы с авторизацией',
    description: 'Полный цикл разработки веб-приложений с системой аутентификации, админ-панелью и интеграцией внешних API',
    tech: ['React', 'Redux', 'Node.js', 'PostgreSQL', 'Docker'],
    preview: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    ],
    link: '#',
  },
  {
    title: 'Telegram-боты',
    description: 'Разработка интерактивных ботов с интеграцией баз данных и внешних сервисов',
    tech: ['Node.js', 'Telegram API', 'Redis', 'PostgreSQL'],
    preview: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=400&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=500&fit=crop',
    ],
    link: '#',
  },
  {
    title: 'CI/CD & Деплой',
    description: 'Настройка автоматизированных процессов развертывания и непрерывной интеграции',
    tech: ['Docker', 'GitHub Actions', 'Linux', 'Nginx'],
    preview: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&h=500&fit=crop',
    ],
    link: '#',
  },
]
