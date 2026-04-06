type FooterProps = {
  name: string;
};

export function Footer({ name }: FooterProps) {
  return (
    <footer className="border-t border-[var(--line)] py-8">
      <div className="section-shell flex flex-col gap-3 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>
          {new Date().getFullYear()} {name}. Собрано внимательно, с запасом для роста и
          продуктового развития.
        </p>
        <a href="#top" className="w-fit text-[var(--foreground)] hover:text-[var(--accent-deep)]">
          Наверх
        </a>
      </div>
    </footer>
  );
}
