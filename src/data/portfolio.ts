export const navItems = [
  { label: "Обо мне", href: "#about" },
  { label: "Проекты", href: "#projects" },
  { label: "Стек", href: "#stack" },
  { label: "Контакты", href: "#contact" },
];

export const portfolio = {
  name: "Ilshat",
  role: "Frontend / Full-Stack разработчик",
  badge: "Разработчик с продуктовым мышлением",
  headline:
    "Создаю цифровые продукты, где сильный интерфейс держится на чистой реализации.",
  intro:
    "Проектирую и собираю web-интерфейсы, desktop-продукты и multi-platform системы с акцентом на ясную структуру, дорогую визуальную подачу и поддерживаемый код.",
  availability:
    "Открыт к стажировкам, junior/fullstack ролям и продуктовым заказам",
  location: "Россия, работаю удаленно",
  trustPoints: [
    "Frontend и fullstack интерфейсы",
    "Web, desktop, mobile и realtime",
    "От идеи и структуры до polished UI",
  ],
};

export const processIntro = {
  eyebrow: "От идеи к сайту",
  title:
    "Как продуктовая идея проходит путь от замысла до собранного интерфейса.",
  description:
    "В этом блоке показан мой рабочий подход: сначала формулируется цель и логика продукта, затем выстраивается структура, после чего решение переводится в код, интерфейсную систему и финальный polished result.",
};

export type ProcessStep = {
  id: "concept" | "structure" | "code" | "interface" | "final";
  label: string;
  title: string;
  description: string;
  accent: "ember" | "cobalt" | "linen" | "violet" | "glow";
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type PortfolioProject = {
  title: string;
  preview: "desktop" | "dashboard" | "messenger";
  meta: string;
  status: string;
  description: string;
  highlight: string;
  role: string;
  stack: string[];
  primaryLink: ProjectLink;
  secondaryLink?: ProjectLink;
};

export type AchievementMilestone = {
  title: string;
  meta: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    id: "concept",
    label: "Концепция",
    title: "Сформулировать идею и задать направление.",
    description:
      "Сначала фиксирую цель, продуктовый характер и ожидание пользователя. До визуала должна появиться ясность: что сайт должен объяснить, на что обратить внимание и какое впечатление оставить.",
    accent: "ember",
  },
  {
    id: "structure",
    label: "Структура",
    title: "Превратить идею в рабочую систему компоновки.",
    description:
      "На этом этапе появляется скелет интерфейса: иерархия контента, rhythm секций, логика блоков и порядок взаимодействия. Структура задает будущий темп всего продукта.",
    accent: "linen",
  },
  {
    id: "code",
    label: "Код",
    title: "Перевести решения в поддерживаемую frontend-логику.",
    description:
      "Собираю переиспользуемые компоненты, layout-примитивы и motion-слой так, чтобы продукт оставался чистым под капотом и спокойно выдерживал дальнейший рост.",
    accent: "cobalt",
  },
  {
    id: "interface",
    label: "Интерфейс",
    title: "Собрать UI-блоки в цельный продуктовый слой.",
    description:
      "Wireframe превращается в реальные поверхности, карточки, CTA, состояния и контентные блоки. Здесь сайт начинает ощущаться живым, собранным и уверенным.",
    accent: "violet",
  },
  {
    id: "final",
    label: "Финал",
    title: "Довести финальный макет до ощущения завершенности.",
    description:
      "На финише уточняю иерархию, плотность, motion и материалы, чтобы результат выглядел не просто готовым, а действительно отполированным и продуктово зрелым.",
    accent: "glow",
  },
];

export const heroMetrics = [
  { label: "Фокус", value: "Интерфейсы с product-first логикой" },
  { label: "Опыт", value: "Web, desktop, mobile, backend и realtime" },
  { label: "Формат", value: "Найм, стажировки и продуктовые заказы" },
];

export const about = {
  summary:
    "Я разработчик, которому важно не просто собрать экран, а выстроить понятную систему: от структуры и взаимодействия до качества реализации и ощущения продукта в работе.",
  points: [
    "Мой основной вектор — frontend и fullstack-разработка с сильной визуальной иерархией, аккуратной архитектурой и вниманием к реальному пользовательскому сценарию.",
    "Мне ближе интерфейсы, где чувствуется дисциплина: понятная сетка, точные отступы, сдержанный motion, ясные состояния и код, который можно масштабировать без боли.",
    "Я уже работал с web, desktop, mobile и realtime-продуктами, поэтому умею смотреть на систему шире одного экрана и собирать решения, которые держатся на логике, а не на эффектах.",
  ],
  principles: [
    "Ясность интерфейса важнее визуального шума",
    "Компонентная система важнее одноразовой верстки",
    "Motion должен помогать чтению, а не отвлекать",
  ],
};

export const achievements = {
  eyebrow: "Достижения и путь",
  title: "Расту через реальные продукты, а не через учебные шаблоны.",
  description:
    "Мой путь — это постепенный переход от интереса к визуальному слою к полноценной продуктовой разработке, где важно держать и интерфейс, и архитектуру, и качество реализации.",
  trust:
    "Открыт к frontend/fullstack ролям и проектам, где ценятся точный интерфейс, инженерная дисциплина и умение доводить продукт до чистого финального состояния.",
};

export const achievementMilestones: AchievementMilestone[] = [
  {
    meta: "Frontend foundation",
    title: "Собрал базу на React, Next.js и системном UI.",
    description:
      "Сфокусировался на интерфейсах, компонентной архитектуре и визуальной дисциплине, чтобы не просто верстать экраны, а собирать устойчивые продуктовые слои.",
  },
  {
    meta: "Multi-platform products",
    title: "Вышел за пределы web и начал собирать экосистемы.",
    description:
      "Работал с web, desktop и mobile-сценариями, поэтому привык думать о продукте как о системе, а не как о наборе независимых страниц.",
  },
  {
    meta: "Realtime и backend",
    title: "Добавил в стек серверную логику, данные и realtime.",
    description:
      "Это усилило мой подход: теперь я увереннее проектирую не только визуальный слой, но и поведение продукта под реальной нагрузкой и ростом.",
  },
  {
    meta: "Текущий фокус",
    title: "Ищу сильные продуктовые задачи и команды роста.",
    description:
      "Сейчас мне особенно интересны роли и проекты, где можно сочетать frontend-качество, системное мышление и аккуратную реализацию на уровне production UI.",
  },
];

export const projects: PortfolioProject[] = [
  {
    title: "Zakas Desk",
    preview: "desktop",
    meta: "Desktop app / Windows / local-first",
    status: "Release",
    description:
      "Локальный desktop-продукт для учета остатков, продаж, сервисных обращений и администрирования данных. Проект показывает, что я умею собирать не showcase-экран, а реальный рабочий инструмент.",
    highlight:
      "Один продукт закрывает операции, учет и сервисный workflow без зависимости от внешней инфраструктуры.",
    role: "Продумал продуктовую структуру интерфейса и desktop-ориентированную реализацию на Rust.",
    stack: ["Rust", "egui", "eframe", "serde", "chrono"],
    primaryLink: {
      label: "GitHub",
      href: "https://github.com/dasnai88/zakas-desk",
    },
    secondaryLink: {
      label: "Release",
      href: "https://github.com/dasnai88/zakas-desk/releases/latest",
    },
  },
  {
    title: "SMART EDU JOURNAL",
    preview: "dashboard",
    meta: "EdTech platform / web + desktop + mobile",
    status: "Docs",
    description:
      "Мультиплатформенная образовательная система с web-панелью, backend API, desktop-клиентом для преподавателей, mobile-клиентом для студентов и Telegram-ботом.",
    highlight:
      "Сильный кейс на тему архитектуры: несколько клиентов, единая логика продукта и связанная экосистема вокруг учебного процесса.",
    role: "Full-stack вклад в продуктовую систему с несколькими интерфейсами и общей backend-основой.",
    stack: ["FastAPI", "Next.js", "PySide6", "Flutter", "PostgreSQL", "Redis"],
    primaryLink: {
      label: "GitHub",
      href: "https://github.com/dasnai88/moodle-new",
    },
    secondaryLink: {
      label: "Docs",
      href: "https://github.com/dasnai88/moodle-new#readme",
    },
  },
  {
    title: "KTK Messenger",
    preview: "messenger",
    meta: "Realtime product / web + mobile + backend",
    status: "Веб-клиент",
    description:
      "Realtime-мессенджер с web-клиентом, backend-сервисом и mobile-приложением. Проект хорошо показывает работу с живым обменом данными, клиент-серверным взаимодействием и production-oriented структурой.",
    highlight:
      "Основная сила проекта — связка realtime-коммуникации, нескольких клиентов и уверенной product-сборки внутри одной системы.",
    role: "Собираю интерфейсный слой и техническую связку продукта, где важны скорость, стабильность и ясность взаимодействия.",
    stack: ["React", "Vite", "Node.js", "Express", "Socket.IO", "PostgreSQL", "Flutter"],
    primaryLink: {
      label: "GitHub",
      href: "https://github.com/dasnai88/KTK-messedger",
    },
    secondaryLink: {
      label: "Веб-клиент",
      href: "https://configcorner.online",
    },
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
  },
  {
    title: "Backend и данные",
    items: ["FastAPI", "Node.js", "Express", "PostgreSQL", "Redis", "REST APIs"],
  },
  {
    title: "Платформы и продукт",
    items: ["Rust", "Flutter", "PySide6", "Figma", "Vercel", "UI Architecture"],
  },
];

export const contacts = [
  {
    label: "Почта",
    value: "dasnai888@gmail.com",
    href: "mailto:dasnai888@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/dasnai88",
    href: "https://github.com/dasnai88",
  },
  {
    label: "Telegram",
    value: "@iamsnowdc",
    href: "https://t.me/iamsnowdc",
  },
];
