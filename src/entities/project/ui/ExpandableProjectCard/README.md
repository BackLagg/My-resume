# ExpandableProjectCard

Переиспользуемый компонент для отображения проектов портфолио с раскрывающейся галереей изображений.

## Особенности

- 📸 **Превью изображение** - компактное отображение проекта
- 🖼️ **Галерея изображений** - стопка изображений под превью
- ⬇️ **Плавное раскрытие** - при клике карточка разворачивается со смещением остальных элементов
- 🎨 **Современный дизайн** - градиенты, размытие фона, анимации
- 📱 **Адаптивность** - корректное отображение на всех устройствах

## Использование

```tsx
import { ExpandableProjectCard } from '@/entities/project'

const project = {
  title: 'Название проекта',
  description: 'Описание проекта',
  tech: ['React', 'TypeScript', 'SCSS'],
  preview: '/images/project-preview.jpg',
  images: [
    '/images/project-1.jpg',
    '/images/project-2.jpg',
    '/images/project-3.jpg',
  ],
  link: 'https://project-url.com'
}

<ExpandableProjectCard project={project} index={0} />
```

## Props

### `project: Project`

Объект проекта со следующими полями:

- `title` (string) - Название проекта
- `description` (string) - Описание проекта
- `tech` (string[]) - Массив используемых технологий
- `preview?` (string) - URL превью изображения (опционально)
- `images?` (string[]) - Массив URL изображений для галереи (опционально)
- `link?` (string) - Ссылка на проект (опционально)

### `index: number`

Порядковый номер проекта (используется для отображения номера)

## Структура

```
ExpandableProjectCard/
├── ExpandableProjectCard.tsx       # Основной компонент
├── ExpandableProjectCard.module.scss # Стили
├── index.ts                        # Экспорт
└── README.md                       # Документация
```

## Поведение

1. **По умолчанию**: Карточка показывает превью, заголовок, описание и технологии
2. **При наведении**: Появляется оверлей с кнопкой раскрытия
3. **При клике**: Карточка раскрывается, показывая галерею изображений и ссылку на проект
4. **Повторный клик**: Карточка сворачивается обратно

## Кастомизация

Вы можете изменить стили компонента, редактируя переменные в `ExpandableProjectCard.module.scss`:

```scss
$card-bg: rgba(255, 255, 255, 0.03);
$card-border: rgba(255, 255, 255, 0.1);
$radius: 1.5rem;
$accent-from: #7c7cff;
$accent-to: #8affdf;
```

## Примеры

### Проект без изображений

```tsx
<ExpandableProjectCard 
  project={{
    title: 'CLI Tool',
    description: 'Консольная утилита',
    tech: ['Node.js', 'TypeScript']
  }}
  index={0}
/>
```

### Проект с полной информацией

```tsx
<ExpandableProjectCard 
  project={{
    title: 'E-commerce Platform',
    description: 'Полнофункциональная платформа электронной коммерции',
    tech: ['React', 'Redux', 'Node.js', 'PostgreSQL'],
    preview: '/images/ecommerce-preview.jpg',
    images: [
      '/images/ecommerce-home.jpg',
      '/images/ecommerce-product.jpg',
      '/images/ecommerce-cart.jpg',
      '/images/ecommerce-checkout.jpg'
    ],
    link: 'https://ecommerce-demo.com'
  }}
  index={0}
/>
```
