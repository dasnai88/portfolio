import type { SkillGroup as SkillGroupData } from "@/data/portfolio";

export function SkillGroup({ title, description, items, outcomes }: SkillGroupData) {
  return (
    <article className="stack-card group rounded-[2rem] p-6 sm:p-7">
      <div className="flex items-center justify-between gap-3">
        <p className="eyebrow">Стек</p>
        <span className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
          {items.length} инструментов
        </span>
      </div>

      <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[var(--foreground)]">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
        {description}
      </p>

      <ul className="stack-outcome-list mt-5">
        {outcomes.map((outcome) => (
          <li key={outcome}>{outcome}</li>
        ))}
      </ul>

      <ul className="mt-6 flex flex-wrap gap-2.5">
        {items.map((item) => (
          <li key={item} className="stack-chip">
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}