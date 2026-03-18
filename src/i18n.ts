import i18n, { type Resource } from "i18next";
import { initReactI18next } from "react-i18next";

const resources: Resource = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
        cta: "Let's Talk"
      },
      hero: {
        title: "Building next-generation digital experiences",
        subtitle:
          "I design and engineer interfaces that feel fast, intuitive, and delightful for modern products.",
        primaryCta: "View Projects",
        secondaryCta: "Download CV"
      },
      about: {
        sectionLabel: "About Me",
        title:
          "Bridging the gap between <highlight>design & engineering</highlight>",
        paragraph1:
          "I'm a multidisciplinary developer who believes that great software requires both robust architecture and an obsession with the user experience.",
        paragraph2:
          "I'm a fullstack developer with a strong frontend focus and a solid backend foundation on Node.js. My core stack is MERN (MongoDB, Express, React, Node.js). In distributed teams, I've delivered end-to-end—from architecture and implementation to deployment and CI/CD—building services with authentication, admin panels, Telegram bots, and external API integrations.",
        statusLabel: "Status",
        statusValue: "Available",
        stats: {
          years: "Years Experience",
          projects: "Projects Completed",
          clients: "Happy Clients"
        },
        cards: {
          engineering: {
            title: "Engineering",
            description: "Clean, modern, and scalable code architecture."
          },
          design: {
            title: "Design",
            description: "Pixel-perfect interfaces with smooth interactions."
          }
        }
      },
      skills: {
        sectionLabel: "Expertise",
        title: "My Tech Stack"
      },
      projects: {
        sectionLabel: "Selected Work",
        title: "Featured Projects",
        archiveLink: "View Full Archive",
        readCaseStudy: "Read Case Study",
        items: {
          1: {
            title: "Telegram Mini‑App: Salon Admin Training",
            description:
              "A Telegram mini app that teaches salon administration through game-like mechanics: tasks, lessons, progress tracking, leaderboards, and an admin mode. Bot: @ElitLegionBot."
          },
          2: {
            title: "Finn — Expense Planning & Analytics",
            description:
              "An open-source app for expense planning and personal finance analytics: income/expense tracking, category insights, and clear visualizations. Stack: MERN + Redux, MongoDB, Redis. Deployed on Render. Bot: @MuFinnBot."
          },
          3: {
            title: "Furnai — Interior eCommerce + AI Builder",
            description:
              "An eCommerce app for selling interior items with an AI-powered configurator: catalog, filters, favorites, cart, and product recommendations. Stack: MERN + Redux, MongoDB, Redis. Deployed on Render."
          }
        }
      },
      contact: {
        sectionLabel: "Get In Touch",
        titlePrefix: "Let's create something",
        titleHighlight: "awesome.",
        description:
          "Have a project in mind or just want to chat? Feel free to reach out. I'm currently open to new opportunities.",
        emailLabel: "Email Me",
        locationLabel: "Location",
        form: {
          name: "Name",
          namePlaceholder: "John Doe",
          email: "Email",
          emailPlaceholder: "john@example.com",
          subject: "Subject",
          subjectPlaceholder: "Project Inquiry",
          message: "Message",
          messagePlaceholder: "Tell me about your project...",
          sending: "Sending...",
          submit: "Send Message"
        },
        toast: {
          title: "Message sent successfully!",
          description: "I'll get back to you as soon as possible."
        },
        locationValue: "Minsk, Belarus"
      },
      footer: {
        rights: "All rights reserved."
      }
    }
  },
  ru: {
    translation: {
      nav: {
        home: "Главная",
        about: "Обо мне",
        skills: "Навыки",
        projects: "Проекты",
        contact: "Контакты",
        cta: "Связаться"
      },
      hero: {
        title: "Создаю цифровые продукты нового поколения",
        subtitle:
          "Проектирую и разрабатываю интерфейсы, которые ощущаются быстрыми, понятными и приятными в использовании.",
        primaryCta: "Смотреть проекты",
        secondaryCta: "Скачать CV"
      },
      about: {
        sectionLabel: "Обо мне",
        title:
          "Соединяю <highlight>дизайн и инженерию</highlight>",
        paragraph1:
          "Я мультидисциплинарный разработчик, который верит, что великое ПО требует и надёжной архитектуры, и одержимости пользовательским опытом.",
        paragraph2:
          "Я fullstack‑разработчик с уклоном в frontend и уверенной backend‑частью на Node.js. Мой основной стек — MERN (MongoDB, Express, React, Node.js). В распределённых командах вёл полный цикл — от проектирования архитектуры до деплоя и CI/CD; делал сервисы с авторизацией, админками, Telegram‑ботами и интеграциями с внешними API.",
        statusLabel: "Статус",
        statusValue: "Свободен для проектов",
        stats: {
          years: "Лет опыта",
          projects: "Завершённых проектов",
          clients: "Довольных клиентов"
        },
        cards: {
          engineering: {
            title: "Инженерия",
            description: "Чистая, современная и масштабируемая архитектура."
          },
          design: {
            title: "Дизайн",
            description: "Пиксель‑перфект интерфейсы с плавными анимациями."
          }
        }
      },
      skills: {
        sectionLabel: "Экспертиза",
        title: "Мой стек технологий"
      },
      projects: {
        sectionLabel: "Избранные работы",
        title: "Лучшие проекты",
        archiveLink: "Смотреть все проекты",
        readCaseStudy: "Подробнее о проекте",
        items: {
          1: {
            title: "Telegram Mini‑App: обучение администратора салона",
            description:
              "Мини‑приложение в Telegram для обучения администрированию салонов в формате игры: задания, вводные уроки, прогресс, рейтинг и режим админа. Бот: @ElitLegionBot."
          },
          2: {
            title: "Finn — планирование расходов и аналитика",
            description:
              "Open‑source приложение для планирования расходов и финансовой аналитики: учёт доходов/расходов, категории, инсайты и наглядные отчёты. Стек: MERN + Redux, MongoDB, Redis. Деплой на Render. Бот: @MuFinnBot."
          },
          3: {
            title: "Furnai — eCommerce для предметов интерьера + AI‑конструктор",
            description:
              "Ecommerce‑проект по продаже предметов интерьера с AI‑конструктором: каталог, фильтры, избранное, корзина и рекомендации. Стек: MERN + Redux, MongoDB, Redis. Деплой на Render."
          }
        }
      },
      contact: {
        sectionLabel: "Связаться",
        titlePrefix: "Давайте создадим что‑то",
        titleHighlight: "крутое.",
        description:
          "Есть идея проекта или просто хотите пообщаться? Пишите. Сейчас я открыт к новым возможностям.",
        emailLabel: "Почта",
        locationLabel: "Локация",
        form: {
          name: "Имя",
          namePlaceholder: "Иван Иванов",
          email: "Email",
          emailPlaceholder: "ivan@example.com",
          subject: "Тема",
          subjectPlaceholder: "Новый проект",
          message: "Сообщение",
          messagePlaceholder: "Расскажите о своём проекте...",
          sending: "Отправка...",
          submit: "Отправить"
        },
        toast: {
          title: "Сообщение отправлено!",
          description: "Я свяжусь с вами в ближайшее время."
        },
        locationValue: "Республика Беларусь, г. Минск"
      },
      footer: {
        rights: "Все права защищены."
      }
    }
  }
};

void i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

