import { LogoLockup } from "@/components/portfolio/logo-lockup";
import type { NavItem } from "@/data/portfolio";

type FooterProps = {
  name: string;
  items: NavItem[];
};

export function Footer({ name, items }: FooterProps) {
  return (
    <footer className="pb-8 pt-14 sm:pt-18">
      <div className="section-shell">
        <div className="footer-shell">
          <div className="max-w-xl">
            <LogoLockup name={name} variant="inverse" />
            <p className="mt-5 text-sm leading-7 text-[var(--muted)] sm:text-base">
              {new Date().getFullYear()} {name}. Портфолио для заказчиков и продуктовых команд,
              которым нужен ясный интерфейс, аккуратная реализация и спокойный визуальный
              язык без лишнего шума.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--muted)]">
            {items.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="transition-colors duration-200 hover:text-[var(--foreground)]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#top"
              className="text-[var(--foreground)] transition-colors duration-200 hover:text-[var(--accent)]"
            >
              К началу
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}