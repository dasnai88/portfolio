import {
  MotionLink,
  Reveal,
  StaggerGroup,
  StaggerItem,
} from "@/components/portfolio/reveal";
import { heroMetrics, portfolio } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section className="section-shell-wide pt-8 sm:pt-12 lg:pt-16">
      <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
        <Reveal className="hero-main-panel" y={22}>
          <span className="label-chip">{portfolio.badge}</span>

          <p className="mt-10 text-sm uppercase tracking-[0.32em] text-[var(--muted)]">
            {portfolio.role}
          </p>

          <h1 className="hero-title mt-5 max-w-5xl text-balance">
            {portfolio.headline}
          </h1>

          <p className="hero-copy mt-8 max-w-3xl text-pretty">{portfolio.intro}</p>

          <StaggerGroup
            as="ul"
            mode="load"
            delay={0.1}
            className="hero-proof-list mt-10"
          >
            {portfolio.trustPoints.map((point, index) => (
              <StaggerItem as="li" key={point} className="hero-proof-item">
                <span className="hero-proof-index">0{index + 1}</span>
                <span>{point}</span>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <StaggerGroup mode="load" delay={0.22} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <StaggerItem>
              <MotionLink
                href={portfolio.primaryAction.href}
                ariaLabel={portfolio.primaryAction.ariaLabel}
                className="button-primary"
                variant="primary"
              >
                {portfolio.primaryAction.label}
              </MotionLink>
            </StaggerItem>
            <StaggerItem>
              <MotionLink
                href={portfolio.secondaryAction.href}
                ariaLabel={portfolio.secondaryAction.ariaLabel}
                className="button-secondary"
              >
                {portfolio.secondaryAction.label}
              </MotionLink>
            </StaggerItem>
          </StaggerGroup>
        </Reveal>

        <div className="grid gap-5 lg:pt-8">
          <Reveal className="hero-side-panel" delay={0.08}>
            <div className="hero-artifact">
              <div className="hero-artifact__header">
                <span className="hero-artifact__eyebrow">Сейчас в фокусе</span>
                <span className="hero-artifact__status">Открыт</span>
              </div>

              <div className="hero-artifact__grid">
                <div className="hero-artifact__lead">
                  <p className="hero-artifact__title">{portfolio.availability}</p>
                  <p className="hero-artifact__copy">{portfolio.availabilityNote}</p>
                </div>
                {portfolio.offers.map((offer, index) => (
                  <article
                    key={offer.label}
                    className={`hero-artifact__surface hero-artifact__signal ${
                      index === 1 ? "hero-artifact__surface--tall" : ""
                    } ${index === 2 ? "hero-artifact__surface--accent" : ""}`}
                  >
                    <p className="hero-artifact__signal-label">{offer.label}</p>
                    <p className="hero-artifact__signal-value">{offer.value}</p>
                  </article>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <span className="hero-mini-pill">{portfolio.location}</span>
                <span className="hero-mini-pill">Клиентские сайты и сервисы</span>
              </div>
            </div>
          </Reveal>

          <StaggerGroup className="grid gap-4 md:grid-cols-3 lg:grid-cols-1" stagger={0.1}>
            {heroMetrics.map((metric) => (
              <StaggerItem key={metric.label}>
                <article className="hero-metric-card">
                  <p className="eyebrow">{metric.label}</p>
                  <h2 className="mt-4 text-[1.45rem] font-semibold tracking-[-0.04em] text-[var(--foreground)]">
                    {metric.value}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                    {metric.detail}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}