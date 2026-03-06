import { Project } from '../types'
import portfolio1Image1 from '@/assets/portfolio1/Снимок экрана 2026-03-06 231852.png'
import portfolio1Image2 from '@/assets/portfolio1/Снимок экрана 2026-03-06 231926.png'
import portfolio1Image3 from '@/assets/portfolio1/Снимок экрана 2026-03-06 231950.png'
import portfolio1Image4 from '@/assets/portfolio1/Снимок экрана 2026-03-06 232022.png'
import portfolio2Image1 from '@/assets/portfolio2/Снимок экрана 2026-03-06 233132.png'
import portfolio2Image2 from '@/assets/portfolio2/Снимок экрана 2026-03-06 233158.png'
import portfolio2Image3 from '@/assets/portfolio2/Снимок экрана 2026-03-06 233220.png'
import portfolio2Image4 from '@/assets/portfolio2/Снимок экрана 2026-03-06 233251.png'
import portfolio2Image5 from '@/assets/portfolio2/Снимок экрана 2026-03-06 233316.png'

export const projects: Project[] = [
  {
    title: 'MuFinn - Финансовый менеджер',
    description: 'Мобильное приложение для управления личными финансами с планировщиком, статистикой расходов, категориями и визуализацией данных',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'NestJS', 'Python', 'Aiogram 3.x', 'RTK Query', 'React Query', 'Redis', 'MongoDB', 'Redux', 'Docker', 'Nginx', 'VPS'],
    preview: portfolio2Image1,
    images: [
      portfolio2Image1,
      portfolio2Image2,
      portfolio2Image3,
      portfolio2Image4,
      portfolio2Image5,
    ],
    link: 'https://t.me/MuFinnBot',
  },
  {
    title: 'Образовательная платформа "Futurion"',
    description: 'Интерактивная платформа обучения с модульной системой уроков, прогрессом студентов, видео-контентом и Telegram-ботом для уведомлений',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'Python', 'Aiogram 3.x', 'MongoDB', 'Redux', 'Docker', 'Nginx', 'VPS'],
    preview: portfolio1Image1,
    images: [
      portfolio1Image1,
      portfolio1Image2,
      portfolio1Image3,
      portfolio1Image4,
    ],
    link: 'https://t.me/ElitLegionBot',
  },
  {
    title: 'File Manager Service',
    description: 'Универсальный файловый сервис с автоматическим выбором между S3 и локальным хранилищем, потоковой передачей данных, валидацией файлов и защитой от атак',
    tech: ['TypeScript', 'NestJS', 'AWS S3', 'Node.js', 'Jest', 'Docker'],
    preview: 'https://images.unsplash.com/photo-1544396821-4dd40b938ad3?w=400&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1544396821-4dd40b938ad3?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=500&fit=crop',
    ],
    link: 'https://github.com/BackLagg/File_manager_Service',
  },
  {
    title: 'Telegram-боты',
    description: 'Разработка интерактивных ботов с интеграцией баз данных и внешних сервисов',
    tech: ['Python', 'Aiogram 3.x', 'PostgreSQL', 'Redis', 'MongoDB'],
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
