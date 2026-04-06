import { Footer } from "@/components/portfolio/footer";
import { ProcessSection } from "@/components/portfolio/process-section";
import { ProjectCard } from "@/components/portfolio/project-card";
import {
  HoverSurface,
  MotionLink,
  Reveal,
  StaggerGroup,
  StaggerItem,
} from "@/components/portfolio/reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { SiteHeader } from "@/components/portfolio/site-header";
import { SkillGroup } from "@/components/portfolio/skill-group";
import {
  about,
  achievementMilestones,
  achievements,
  contacts,
  heroMetrics,
  navItems,
  portfolio,
  processIntro,
  processSteps,
  projects,
  skillGroups,
} from "@/data/portfolio";

export default function Home() {
  return (
    <div id="top" className="relative overflow-x-clip">
      <SiteHeader name={portfolio.name} items={navItems} />

      <main className="pb-10">
        <section className="section-shell-wide anchor-section pt-10 sm:pt-14">
          <div className="grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-end">
            <StaggerGroup
              className="surface-panel relative overflow-hidden rounded-[2rem] p-8 sm:p-10 lg:p-12"
              mode="load"
            >
              <div className="pointer-events-none absolute inset-x-[46%] top-[-18%] h-48 rounded-full bg-[radial-gradient(circle,rgba(189,95,65,0.16)_0%,transparent_72%)] blur-3xl" />
              <div className="pointer-events-none absolute bottom-[-20%] right-[-6%] h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(141,162,255,0.12)_0%,transparent_72%)] blur-3xl" />

              <StaggerItem>
                <span className="label-chip">{portfolio.badge}</span>
              </StaggerItem>

              <StaggerItem className="mt-8">
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">
                  {portfolio.role}
                </p>
              </StaggerItem>

              <StaggerItem className="mt-5">
                <h1 className="max-w-3xl text-5xl font-semibold leading-[0.96] tracking-[-0.06em] text-[var(--foreground)] sm:text-6xl lg:text-[5.5rem]">
                  {portfolio.headline}
                </h1>
              </StaggerItem>

              <StaggerItem className="mt-7">
                <p className="max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                  {portfolio.intro}
                </p>
              </StaggerItem>

              <StaggerItem className="mt-8">
                <div className="flex flex-wrap gap-3">
                  {portfolio.trustPoints.map((point) => (
                    <span
                      className="rounded-full border border-[var(--line)] bg-white/70 px-4 py-2 text-sm text-[var(--muted-strong)]"
                      key={point}
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </StaggerItem>

              <StaggerItem className="mt-10">
                <div className="flex flex-col gap-4 sm:flex-row">
                  <MotionLink
                    href="#contact"
                    variant="primary"
                    className="inline-flex items-center justify-center rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-white hover:bg-[var(--accent-deep)]"
                  >
                    Обсудить сотрудничество
                  </MotionLink>
                  <MotionLink
                    href="#projects"
                    variant="secondary"
                    className="inline-flex items-center justify-center rounded-full border border-[var(--line-strong)] bg-white/70 px-6 py-3 text-sm font-medium text-[var(--foreground)] hover:border-[var(--accent)] hover:bg-white"
                  >
                    Смотреть проекты
                  </MotionLink>
                </div>
              </StaggerItem>
            </StaggerGroup>

            <StaggerGroup className="grid gap-4" delay={0.08} mode="load" stagger={0.1}>
              <StaggerItem y={14}>
                <HoverSurface className="surface-panel rounded-[2rem] p-7 sm:p-8" scale={1.006} y={-2}>
                  <p className="eyebrow">Сейчас</p>
                  <p className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)]">
                    {portfolio.availability}
                  </p>
                  <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                    {portfolio.location}
                  </p>
                </HoverSurface>
              </StaggerItem>

              <StaggerItem y={18}>
                <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                  {heroMetrics.map((metric, index) => (
                    <HoverSurface
                      className={`surface-panel motion-card rounded-[1.6rem] p-5 ${
                        index === 0 ? "lg:translate-x-5" : index === 2 ? "lg:-translate-x-5" : ""
                      }`}
                      key={metric.label}
                      scale={1.008}
                      y={-4}
                      shadow="0 22px 42px rgba(32, 22, 16, 0.12)"
                    >
                      <p className="text-sm text-[var(--muted)]">{metric.label}</p>
                      <p className="mt-3 text-lg font-semibold tracking-[-0.03em] text-[var(--foreground)]">
                        {metric.value}
                      </p>
                    </HoverSurface>
                  ))}
                </div>
              </StaggerItem>

              <StaggerItem y={18}>
                <HoverSurface className="surface-panel rounded-[1.7rem] p-6" scale={1.004} y={-3}>
                  <p className="eyebrow">Визуальный ориентир</p>
                  <div className="mt-4 overflow-hidden rounded-[1.35rem] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(255,255,255,0.62))] p-4">
                    <div className="flex items-center gap-2 border-b border-[var(--line)] pb-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-[rgba(23,20,17,0.14)]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[rgba(23,20,17,0.1)]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[rgba(23,20,17,0.08)]" />
                      <p className="ml-2 text-[0.62rem] uppercase tracking-[0.16em] text-[var(--muted)]">
                        Product vignette
                      </p>
                    </div>
                    <div className="mt-4 grid gap-3">
                      <div className="grid grid-cols-[0.36fr_0.64fr] gap-3">
                        <div className="grid gap-2">
                          <div className="h-8 rounded-[0.9rem] bg-white/90" />
                          <div className="h-8 rounded-[0.9rem] bg-white/72" />
                          <div className="h-8 rounded-[0.9rem] bg-[rgba(242,157,118,0.14)]" />
                        </div>
                        <div className="rounded-[1rem] border border-[var(--line)] bg-white/74 p-3">
                          <div className="h-3 w-20 rounded-full bg-[rgba(23,20,17,0.16)]" />
                          <div className="mt-3 h-16 rounded-[0.9rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(246,238,230,0.7))]" />
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="h-12 rounded-[0.95rem] border border-[var(--line)] bg-white/76" />
                        <div className="h-12 rounded-[0.95rem] border border-[var(--line)] bg-white/68" />
                        <div className="h-12 rounded-[0.95rem] border border-[var(--line)] bg-white/68" />
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                    Работаю на стыке product UI, архитектурной аккуратности и реальной реализации, поэтому думаю не
                    только о визуале, но и о том, как интерфейс будет жить дальше.
                  </p>
                </HoverSurface>
              </StaggerItem>
            </StaggerGroup>
          </div>
        </section>

        <ProcessSection
          description={processIntro.description}
          eyebrow={processIntro.eyebrow}
          steps={processSteps}
          title={processIntro.title}
        />

        <section id="about" className="anchor-section section-shell pt-24 sm:pt-28">
          <Reveal>
            <SectionHeading
              eyebrow="Обо мне"
              title="Подхожу к разработке как к сборке продукта: интерфейс, логика и визуальная дисциплина должны работать вместе."
              description={about.summary}
            />
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal className="surface-panel rounded-[2rem] p-7 sm:p-8">
              <div className="space-y-5">
                {about.points.map((point) => (
                  <p key={point} className="text-base leading-8 text-[var(--muted)] sm:text-lg">
                    {point}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08} className="surface-panel rounded-[2rem] p-7 sm:p-8">
              <p className="eyebrow">Принципы работы</p>
              <StaggerGroup as="ul" className="mt-6 space-y-4" stagger={0.06}>
                {about.principles.map((principle) => (
                  <StaggerItem as="li" key={principle} y={10}>
                    <span className="motion-card block rounded-[1.3rem] border border-[var(--line)] bg-white/70 px-5 py-4 text-base text-[var(--muted-strong)] hover:border-[rgba(189,95,65,0.22)] hover:bg-white/90 hover:shadow-[0_16px_30px_rgba(32,21,15,0.08)]">
                      {principle}
                    </span>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </Reveal>
          </div>
        </section>

        <section className="section-shell pt-24 sm:pt-28">
          <Reveal>
            <SectionHeading
              eyebrow={achievements.eyebrow}
              title={achievements.title}
              description={achievements.description}
            />
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-[0.72fr_0.28fr]">
            <StaggerGroup className="grid gap-5 md:grid-cols-2" stagger={0.08}>
              {achievementMilestones.map((item) => (
                <StaggerItem key={item.title} y={18}>
                  <HoverSurface className="surface-panel rounded-[1.85rem] p-6 sm:p-7" scale={1.006} y={-3}>
                    <p className="eyebrow">{item.meta}</p>
                    <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[var(--foreground)]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                      {item.description}
                    </p>
                  </HoverSurface>
                </StaggerItem>
              ))}
            </StaggerGroup>

            <Reveal delay={0.08} className="surface-panel rounded-[1.85rem] p-6 sm:p-7">
              <p className="eyebrow">Trust block</p>
              <p className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[var(--foreground)]">
                Ориентируюсь на роли и проекты, где интерфейс — это часть продукта, а не декоративный слой.
              </p>
              <p className="mt-5 text-base leading-7 text-[var(--muted)]">{achievements.trust}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-[var(--line)] bg-white/70 px-3.5 py-2 text-sm text-[var(--muted-strong)]">
                  Найм
                </span>
                <span className="rounded-full border border-[var(--line)] bg-white/70 px-3.5 py-2 text-sm text-[var(--muted-strong)]">
                  Стажировки
                </span>
                <span className="rounded-full border border-[var(--line)] bg-white/70 px-3.5 py-2 text-sm text-[var(--muted-strong)]">
                  Product UI
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="projects" className="anchor-section section-shell pt-24 sm:pt-28">
          <Reveal>
            <SectionHeading
              eyebrow="Проекты"
              title="Реальные работы, которые показывают мой уровень не по обещаниям, а по продуктовой сборке."
              description="Каждый проект здесь показывает разный тип инженерной задачи: desktop workflow, multi-platform система и realtime-продукт с несколькими клиентами."
            />
          </Reveal>

          <StaggerGroup className="mt-10 grid gap-5 lg:grid-cols-3" stagger={0.09}>
            {projects.map((project) => (
              <StaggerItem key={project.title} y={20}>
                <ProjectCard {...project} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

        <section id="stack" className="anchor-section section-shell pt-24 sm:pt-28">
          <Reveal>
            <SectionHeading
              eyebrow="Стек"
              title="Инструменты, через которые я собираю интерфейсы, системы и стабильную продуктовую основу."
              description="Стек выстроен вокруг реальной разработки: от качественного frontend-слоя до backend, desktop/mobile-клиентов и инженерной дисциплины."
            />
          </Reveal>

          <StaggerGroup className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3" stagger={0.08}>
            {skillGroups.map((group) => (
              <StaggerItem key={group.title} y={18}>
                <SkillGroup {...group} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

        <section id="contact" className="anchor-section section-shell pt-24 sm:pt-28">
          <StaggerGroup className="surface-panel motion-card rounded-[2.25rem] p-8 sm:p-10 lg:p-12" stagger={0.08}>
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
              <StaggerGroup className="gap-0" mode="scroll" stagger={0.07}>
                <StaggerItem>
                  <div>
                    <p className="eyebrow">Контакты</p>
                    <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.05em] text-[var(--foreground)] sm:text-5xl">
                      Давай соберем продукт, где сильный интерфейс поддержан сильной реализацией.
                    </h2>
                    <p className="mt-6 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                      Мне интересны стажировки, frontend/fullstack роли и проекты, где важно не просто “сделать экран”,
                      а довести продукт до чистого, уверенного и поддерживаемого состояния.
                    </p>

                    <div className="mt-6 rounded-[1.4rem] border border-[var(--line)] bg-white/72 p-5">
                      <p className="eyebrow">Сейчас ищу</p>
                      <p className="mt-3 text-base leading-7 text-[var(--muted-strong)]">
                        Команды и задачи, где ценятся product UI, системное мышление, аккуратный motion и инженерная
                        дисциплина на уровне реализации.
                      </p>
                    </div>

                    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                      <MotionLink
                        href={`mailto:${contacts[0]?.value}`}
                        variant="primary"
                        className="inline-flex items-center justify-center rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-white hover:bg-[var(--accent-deep)]"
                      >
                        Написать мне
                      </MotionLink>
                      <MotionLink
                        href={contacts[1]?.href ?? "#projects"}
                        variant="secondary"
                        className="inline-flex items-center justify-center rounded-full border border-[var(--line-strong)] bg-white/70 px-6 py-3 text-sm font-medium text-[var(--foreground)] hover:border-[var(--accent)] hover:bg-white"
                      >
                        Открыть GitHub
                      </MotionLink>
                    </div>
                  </div>
                </StaggerItem>
              </StaggerGroup>

              <div className="grid gap-4">
                <StaggerGroup className="flex flex-wrap gap-3" stagger={0.04}>
                  {["Открыт к найму", "Открыт к заказам", "Remote-first"].map((item) => (
                    <StaggerItem key={item} y={10}>
                      <span className="inline-flex rounded-full border border-[var(--line)] bg-white/72 px-4 py-2 text-sm text-[var(--muted-strong)]">
                        {item}
                      </span>
                    </StaggerItem>
                  ))}
                </StaggerGroup>

                <StaggerGroup className="grid gap-4 sm:grid-cols-2" stagger={0.06}>
                  {contacts.map((contact) => (
                    <StaggerItem key={contact.label} y={14}>
                      <HoverSurface
                        className="rounded-[1.5rem] border border-[var(--line)] bg-white/70 p-5 transition-colors duration-300 hover:border-[rgba(189,95,65,0.22)] hover:bg-white/92"
                        scale={1.008}
                        y={-3}
                      >
                        <p className="text-sm uppercase tracking-[0.16em] text-[var(--muted)]">{contact.label}</p>
                        <a
                          href={contact.href}
                          target={contact.href.startsWith("http") ? "_blank" : undefined}
                          rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                          className="mt-3 block text-lg font-medium tracking-[-0.03em] text-[var(--foreground)] hover:text-[var(--accent-deep)]"
                        >
                          {contact.value}
                        </a>
                      </HoverSurface>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </div>
            </div>
          </StaggerGroup>
        </section>
      </main>

      <Footer name={portfolio.name} />
    </div>
  );
}
