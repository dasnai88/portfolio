export type SectionId = "about" | "projects" | "stack" | "contact";

export type NavItem = {
  id: SectionId;
  label: string;
  href: `#${SectionId}`;
  ariaLabel: string;
};

export type HeroMetric = {
  label: string;
  value: string;
  detail: string;
};

export type HeroOffer = {
  label: string;
  value: string;
};

export type ProofCard = {
  meta: string;
  title: string;
  description: string;
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
  ariaLabel: string;
  variant: "primary" | "secondary";
  external?: boolean;
};

export type ProjectCaseStudy = {
  challenge: string;
  solution: string;
  outcome: string;
};

export type PortfolioProject = {
  slug: string;
  title: string;
  preview: "desktop" | "dashboard" | "messenger";
  meta: string;
  status: string;
  description: string;
  caseStudy: ProjectCaseStudy;
  role: string;
  stack: string[];
  links: ProjectLink[];
};

export type SkillGroup = {
  title: string;
  description: string;
  items: string[];
  outcomes: string[];
};

export type ContactMethod = {
  id: "email" | "github" | "telegram";
  label: string;
  value: string;
  href: string;
  note: string;
  ariaLabel: string;
  actionLabel: string;
  external: boolean;
  copyValue?: string;
  copyLabel?: string;
};

export const navItems: NavItem[] = [
  {
    id: "about",
    label: "Подход",
    href: "#about",
    ariaLabel: "Перейти к разделу Подход",
  },
  {
    id: "projects",
    label: "Кейсы",
    href: "#projects",
    ariaLabel: "Перейти к разделу Кейсы",
  },
  {
    id: "stack",
    label: "Что делаю",
    href: "#stack",
    ariaLabel: "Перейти к разделу Что делаю",
  },
  {
    id: "contact",
    label: "Контакты",
    href: "#contact",
    ariaLabel: "Перейти к разделу Контакты",
  },
];

export const portfolio = {
  name: "Ilshat",
  role: "Frontend / Full-Stack разработчик для сайтов, сервисов и продуктовых интерфейсов",
  badge: "Ясный UI и аккуратный frontend",
  headline:
    "Помогаю превратить задачу заказчика в понятный интерфейс, который выглядит уверенно и работает без лишней сложности.",
  intro:
    "Если нужно собрать сайт, личный кабинет, внутренний сервис или интерфейс продукта так, чтобы он быстро объяснял ценность и не разваливался после запуска, я закрываю это через структуру, UI и аккуратную реализацию.",
  availability:
    "Проектная работа и клиентские задачи, где важны понятная подача, сильный frontend и спокойный, зрелый UI",
  availabilityNote:
    "Подхожу там, где нужно не просто «сделать красиво», а объяснить продукт, удержать внимание пользователя и довести интерфейс до рабочего состояния.",
  location: "Россия, remote-first",
  trustPoints: [
    "От структуры и сценариев до production-ready интерфейса",
    "Web, desktop, mobile и realtime-проекты",
    "Смотрю одновременно на восприятие, код и дальнейшие доработки",
  ],
  offers: [
    {
      label: "Подходит если",
      value:
        "Нужно упаковать сложный продукт, услугу или внутренний процесс в понятный экран.",
    },
    {
      label: "Что беру на себя",
      value:
        "Структуру, UI-слой, адаптив, состояния интерфейса и аккуратную реализацию.",
    },
    {
      label: "На выходе",
      value:
        "Интерфейс, который помогает пользователю быстрее понять ценность и следующий шаг.",
    },
  ] satisfies HeroOffer[],
  primaryAction: {
    label: "Обсудить задачу",
    href: "#contact",
    ariaLabel: "Перейти к контактам для обсуждения задачи",
  },
  secondaryAction: {
    label: "Смотреть кейсы",
    href: "#projects",
    ariaLabel: "Перейти к разделу кейсов",
  },
};

export const heroMetrics: HeroMetric[] = [
  {
    label: "Для кого",
    value: "Клиентские сайты, кабинеты, MVP и продуктовые интерфейсы",
    detail:
      "Подхожу для задач, где экран должен продавать, объяснять услугу, упрощать работу пользователя или собирать продукт в цельную систему.",
  },
  {
    label: "Сильная сторона",
    value: "Ясная иерархия, аккуратный frontend и UI без визуального шума",
    detail:
      "Собираю интерфейсы так, чтобы ими было легко пользоваться сейчас и несложно дорабатывать после запуска.",
  },
  {
    label: "Формат работы",
    value: "Точечные задачи, проектная работа и усиление существующего продукта",
    detail:
      "Можно подключать меня как на отдельный экран или блок, так и на целый интерфейсный слой с адаптивом, состояниями и реализацией.",
  },
];

export const proofCards: ProofCard[] = [
  {
    meta: "Смысл до визуала",
    title: "Сначала выясняю, что именно экран должен объяснить.",
    description:
      "Сильный интерфейс начинается с ответа на вопрос, что пользователь должен понять, почувствовать и сделать после первого взгляда.",
  },
  {
    meta: "Решение, а не декор",
    title: "Дизайн и разработка работают вместе, а не спорят между собой.",
    description:
      "Мне важно, чтобы визуальная подача усиливала продуктовую логику, а код не мешал ни запуску, ни следующим итерациям.",
  },
  {
    meta: "Рабочая система",
    title: "Собираю интерфейс так, чтобы он выдерживал реальные доработки.",
    description:
      "Думаю не только о первом вау-эффекте, но и о поддерживаемости, переиспользовании компонентов и стабильном развитии проекта.",
  },
];

export const aboutSection = {
  eyebrow: "Подход",
  title:
    "Работаю не от декора, а от задачи: интерфейс должен объяснять ценность, направлять пользователя и быть удобным в развитии.",
  description:
    "Заказчику нужен не просто красивый экран. Нужен экран, который помогает продавать, объяснять, управлять сценарием и не создает технический долг после запуска.",
  narrative: [
    "Я начинаю с того, что разбираю задачу на смысл: что именно нужно донести пользователю, где должен стоять главный акцент и какое действие должно быть самым естественным.",
    "После этого собираю структуру экрана, контентный ритм и UI-иерархию так, чтобы интерфейс выглядел уверенно, читался быстро и не перегружал человека лишними решениями.",
    "Только затем довожу это до кода: через аккуратную верстку, компоненты, адаптив, состояния и реализацию, которую можно развивать дальше без ощущения временного компромисса.",
  ],
  principles: [
    "Сначала смысл и сценарий, потом декор",
    "Экран должен объяснять ценность, а не прятать ее",
    "Реализация должна выдерживать доработки после запуска",
    "Motion и детали должны усиливать доверие, а не отвлекать",
  ],
};

export const processIntro = {
  eyebrow: "Как работаю",
  title: "Понятный процесс, если проект нужно довести от задачи до аккуратного интерфейса.",
  description:
    "Обычно двигаюсь через пять этапов: быстро фиксируем цель, собираем структуру, превращаем ее в систему экранов, доводим реализацию и полируем результат перед запуском.",
};

export const processSteps: ProcessStep[] = [
  {
    id: "concept",
    label: "Бриф",
    title: "Выяснить, что продукт должен объяснить и какое действие мы ожидаем от пользователя.",
    description:
      "На старте фиксируется суть задачи: кто пользователь, что важно показать сразу, где находится ключевая ценность и что должно случиться после первого экрана.",
    accent: "ember",
  },
  {
    id: "structure",
    label: "Сценарий",
    title: "Разложить задачу на смысловые блоки, навигацию и ритм экрана.",
    description:
      "Здесь появляется каркас: порядок секций, иерархия, контентные акценты и то, как пользователь будет читать, понимать и двигаться по интерфейсу.",
    accent: "linen",
  },
  {
    id: "code",
    label: "Система",
    title: "Собрать основу из компонентов и состояний, чтобы проект не рассыпался после первой правки.",
    description:
      "Интерфейс переводится в поддерживаемую структуру: reusable-блоки, адаптивная логика, состояния и связки, которые удобны в дальнейшей работе.",
    accent: "cobalt",
  },
  {
    id: "interface",
    label: "Реализация",
    title: "Довести UI, адаптив, контент и интеграцию до рабочего состояния.",
    description:
      "На этом этапе макет превращается в продуктовый слой: выверяются поверхности, CTA, контраст, плотность, анимация и связь с данными или готовым контентом.",
    accent: "violet",
  },
  {
    id: "final",
    label: "Полировка",
    title: "Проверить детали, мобильный опыт и финальное ощущение качества перед запуском.",
    description:
      "Финальный проход нужен, чтобы убрать шероховатости, усилить доверие к продукту и сделать интерфейс собранным не только на скриншоте, но и в живом использовании.",
    accent: "glow",
  },
];

export const projectsSection = {
  eyebrow: "Кейсы",
  title: "Проекты, где интерфейс решает конкретную задачу, а не просто выглядит современно.",
  description:
    "В этих кейсах важны сценарии, системность и реализация: от локального desktop-инструмента до multi-platform и realtime-продуктов.",
};

export const projects: PortfolioProject[] = [
  {
    slug: "zakas-desk",
    title: "Zakas Desk",
    preview: "desktop",
    meta: "Desktop app / Windows / local-first",
    status: "Release",
    description:
      "Desktop-система для продаж, учета и сервисных операций, где ежедневная работа должна оставаться быстрой и понятной без сложной внешней инфраструктуры.",
    caseStudy: {
      challenge:
        "Нужно было собрать локальный рабочий инструмент, который закрывает продажи, остатки и сервисные обращения в одном интерфейсе.",
      solution:
        "Сфокусировался на ясной desktop-навигации, коротких сценариях и структуре, которая помогает выполнять частые действия без лишних шагов.",
      outcome:
        "Получился рабочий продукт, который закрывает операционный цикл в одном приложении и ощущается как инструмент, а не демонстрационный макет.",
    },
    role:
      "Продуктовая структура интерфейса, UX-сценарии и desktop-ориентированная реализация на Rust.",
    stack: ["Rust", "egui", "eframe", "serde", "chrono"],
    links: [
      {
        label: "Код",
        href: "https://github.com/dasnai88/zakas-desk",
        ariaLabel: "Открыть репозиторий проекта Zakas Desk на GitHub",
        variant: "secondary",
        external: true,
      },
      {
        label: "Релиз",
        href: "https://github.com/dasnai88/zakas-desk/releases/latest",
        ariaLabel: "Открыть релизы проекта Zakas Desk",
        variant: "primary",
        external: true,
      },
    ],
  },
  {
    slug: "smart-edu-journal",
    title: "SMART EDU JOURNAL",
    preview: "dashboard",
    meta: "EdTech platform / web + desktop + mobile",
    status: "Документация",
    description:
      "Мультиплатформенная образовательная система с web-панелью, backend API, desktop-клиентом для преподавателей, mobile-клиентом для студентов и Telegram-ботом.",
    caseStudy: {
      challenge:
        "Проект требовал единой логики для нескольких клиентов, чтобы web, desktop и mobile не выглядели разрозненными частями одного продукта.",
      solution:
        "Собирал систему как связанную экосистему: выстраивал общий продуктовый каркас, интерфейсную логику и full-stack основу под разные сценарии.",
      outcome:
        "Кейс хорошо показывает способность удерживать сложный multi-platform контекст и собирать продукт не отдельными экранами, а целостной системой.",
    },
    role:
      "Full-stack вклад в архитектуру, продуктовую структуру и интерфейсные слои нескольких клиентов.",
    stack: ["FastAPI", "Next.js", "PySide6", "Flutter", "PostgreSQL", "Redis"],
    links: [
      {
        label: "Код",
        href: "https://github.com/dasnai88/moodle-new",
        ariaLabel: "Открыть репозиторий проекта SMART EDU JOURNAL на GitHub",
        variant: "secondary",
        external: true,
      },
      {
        label: "Документация",
        href: "https://github.com/dasnai88/moodle-new#readme",
        ariaLabel: "Открыть документацию проекта SMART EDU JOURNAL",
        variant: "primary",
        external: true,
      },
    ],
  },
  {
    slug: "ktk-messenger",
    title: "KTK Messenger",
    preview: "messenger",
    meta: "Realtime product / web + mobile + backend",
    status: "Веб-клиент",
    description:
      "Realtime-мессенджер с web-клиентом, backend-сервисом и mobile-приложением, где важны скорость обмена данными, связность сценариев и ясность взаимодействия.",
    caseStudy: {
      challenge:
        "Нужно было собрать интерфейс и связку нескольких клиентов для продукта, где коммуникация происходит в реальном времени.",
      solution:
        "Сделал упор на ясный flow общения, стабильную структуру интерфейса и техническую связку web, mobile и backend внутри одной продуктовой логики.",
      outcome:
        "Проект показывает работу с realtime-сценариями и способность держать одновременно UX, скорость взаимодействия и системность продукта.",
    },
    role:
      "Интерфейсный слой, продуктовая логика взаимодействия и техническая связка realtime-системы.",
    stack: ["React", "Vite", "Node.js", "Express", "Socket.IO", "PostgreSQL", "Flutter"],
    links: [
      {
        label: "Код",
        href: "https://github.com/dasnai88/KTK-messedger",
        ariaLabel: "Открыть репозиторий проекта KTK Messenger на GitHub",
        variant: "secondary",
        external: true,
      },
      {
        label: "Веб-клиент",
        href: "https://configcorner.online",
        ariaLabel: "Открыть веб-клиент проекта KTK Messenger",
        variant: "primary",
        external: true,
      },
    ],
  },
];

export const stackSection = {
  eyebrow: "Что делаю",
  title: "Стек нужен мне не сам по себе, а как способ быстро и аккуратно собирать клиентские продукты.",
  description:
    "Эти инструменты я использую там, где нужно одновременно держать качество интерфейса, устойчивость логики и удобство дальнейшей поддержки.",
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend и UI",
    description:
      "Собираю экраны, лендинги, кабинеты и продуктовые интерфейсы с вниманием к структуре, типографике, адаптиву и состояниям.",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    outcomes: [
      "Лендинги, презентационные страницы и клиентские сайты",
      "Личные кабинеты, панели управления и внутренние сервисы",
      "Адаптив, UI-состояния, animation polish и clean frontend",
    ],
  },
  {
    title: "Backend и интеграция",
    description:
      "Подключаю интерфейс к устойчивой серверной логике там, где проекту нужны API, хранение данных и внятная техническая опора.",
    items: ["FastAPI", "Node.js", "Express", "PostgreSQL", "Redis", "REST APIs"],
    outcomes: [
      "API для клиентских интерфейсов и продуктовых сценариев",
      "Интеграция данных, логики и пользовательских состояний",
      "Основа, на которую можно спокойно наращивать функциональность",
    ],
  },
  {
    title: "Multi-platform и продукт",
    description:
      "Умею думать системой, когда один продукт живет сразу в нескольких клиентах и требует не только фронтенда, но и общей продуктовой логики.",
    items: ["Rust", "Flutter", "PySide6", "Figma", "Vercel", "UI Architecture"],
    outcomes: [
      "Проекты с web, desktop и mobile-сценариями",
      "Сборка интерфейсных систем вокруг одного продукта",
      "Связка дизайна, реализации и дальнейшего delivery",
    ],
  },
];

export const contactSection = {
  eyebrow: "Контакты",
  title:
    "Если вам нужен разработчик, который может упаковать задачу в ясный интерфейс и довести ее до рабочего состояния, напишите мне.",
  description:
    "Подхожу для клиентских сайтов, интерфейсных доработок, личных кабинетов, MVP и продуктовых экранов, где важны и подача, и реализация.",
  availabilityLabel: "Что можно обсудить",
  availabilityText:
    "Можно прийти с готовым ТЗ, наброском структуры, референсами или просто описанием задачи. Я помогу собрать решение и предложу, как лучше упаковать его в интерфейс.",
  statusTags: ["Клиентские сайты", "Кабинеты и сервисы", "Frontend / full-stack", "Remote"],
  expectations: [
    "Сайт или лендинг, которому не хватает структуры и уверенной подачи.",
    "Личный кабинет, сервис или внутренний интерфейс, который нужно сделать чище и понятнее.",
    "Существующий продукт, где нужно усилить frontend без лишнего визуального шума.",
  ],
  primaryAction: {
    label: "Написать на почту",
    href: "mailto:dasnai888@gmail.com",
    ariaLabel: "Открыть письмо на адрес dasnai888@gmail.com",
  },
  secondaryAction: {
    label: "Написать в Telegram",
    href: "https://t.me/iamsnowdc",
    ariaLabel: "Открыть Telegram-профиль Ilshat",
  },
};

export const contactMethods: ContactMethod[] = [
  {
    id: "email",
    label: "Почта",
    value: "dasnai888@gmail.com",
    href: "mailto:dasnai888@gmail.com",
    note: "Лучший канал для обсуждения задачи, деталей проекта, сроков и формата сотрудничества.",
    ariaLabel: "Написать на почту dasnai888@gmail.com",
    actionLabel: "Открыть почту",
    external: false,
    copyValue: "dasnai888@gmail.com",
    copyLabel: "Скопировать адрес электронной почты",
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/dasnai88",
    href: "https://github.com/dasnai88",
    note: "Репозитории, рабочие кейсы и практический контекст того, как я собираю проекты.",
    ariaLabel: "Открыть GitHub-профиль Ilshat",
    actionLabel: "Открыть профиль",
    external: true,
  },
  {
    id: "telegram",
    label: "Telegram",
    value: "@iamsnowdc",
    href: "https://t.me/iamsnowdc",
    note: "Удобно для быстрого первого контакта, если хотите коротко описать задачу и сверить формат работы.",
    ariaLabel: "Открыть Telegram-профиль Ilshat",
    actionLabel: "Открыть Telegram",
    external: true,
    copyValue: "@iamsnowdc",
    copyLabel: "Скопировать Telegram-ник",
  },
];
