import { CopyContactButton } from "@/components/portfolio/copy-contact-button";
import { MotionLink, Reveal, StaggerGroup, StaggerItem } from "@/components/portfolio/reveal";
import { contactMethods, contactSection } from "@/data/portfolio";

export function ContactSection() {
  const [primaryContact, ...secondaryContacts] = contactMethods;

  return (
    <section id="contact" className="anchor-section section-shell pt-28 sm:pt-32">
      <Reveal className="contact-shell">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <p className="eyebrow">{contactSection.eyebrow}</p>
            <h2 className="section-title mt-5 max-w-xl text-balance">
              {contactSection.title}
            </h2>
            <p className="section-copy mt-6 max-w-xl text-pretty">
              {contactSection.description}
            </p>

            <div className="contact-availability mt-8">
              <p className="eyebrow">{contactSection.availabilityLabel}</p>
              <p className="mt-4 text-base leading-7 text-[var(--foreground-soft)]">
                {contactSection.availabilityText}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {contactSection.statusTags.map((tag) => (
                  <span key={tag} className="stack-chip">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="contact-expectations mt-5">
              <p className="eyebrow">Хороший старт для диалога</p>
              <ul className="contact-checklist mt-5">
                {contactSection.expectations.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <MotionLink
                href={contactSection.primaryAction.href}
                ariaLabel={contactSection.primaryAction.ariaLabel}
                className="button-primary"
                variant="primary"
              >
                {contactSection.primaryAction.label}
              </MotionLink>
              <MotionLink
                href={contactSection.secondaryAction.href}
                ariaLabel={contactSection.secondaryAction.ariaLabel}
                className="button-secondary"
              >
                {contactSection.secondaryAction.label}
              </MotionLink>
            </div>
          </div>

          <div className="grid gap-4">
            <article className="contact-method-card contact-method-card-primary">
              <p className="eyebrow">{primaryContact.label}</p>
              <p className="mt-4 text-[2rem] font-semibold tracking-[-0.05em] text-[var(--foreground)]">
                {primaryContact.value}
              </p>
              <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
                {primaryContact.note}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <MotionLink
                  href={primaryContact.href}
                  ariaLabel={primaryContact.ariaLabel}
                  className="button-primary"
                  variant="primary"
                >
                  {primaryContact.actionLabel}
                </MotionLink>
                {primaryContact.copyValue && primaryContact.copyLabel ? (
                  <CopyContactButton
                    value={primaryContact.copyValue}
                    label={primaryContact.copyLabel}
                  />
                ) : null}
              </div>
            </article>

            <StaggerGroup className="grid gap-4 md:grid-cols-2" stagger={0.08}>
              {secondaryContacts.map((contact) => (
                <StaggerItem key={contact.id}>
                  <article className="contact-method-card">
                    <p className="eyebrow">{contact.label}</p>
                    <p className="mt-4 text-xl font-semibold tracking-[-0.04em] text-[var(--foreground)]">
                      {contact.value}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
                      {contact.note}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      <MotionLink
                        href={contact.href}
                        ariaLabel={contact.ariaLabel}
                        className="button-secondary"
                      >
                        {contact.actionLabel}
                      </MotionLink>
                      {contact.copyValue && contact.copyLabel ? (
                        <CopyContactButton
                          value={contact.copyValue}
                          label={contact.copyLabel}
                        />
                      ) : null}
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </Reveal>
    </section>
  );
}