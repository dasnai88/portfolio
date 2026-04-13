import { LogoMark } from "@/components/portfolio/logo-mark";

type LogoVariant = "default" | "inverse" | "accent";

type LogoLockupProps = {
  name: string;
  className?: string;
  compact?: boolean;
  variant?: LogoVariant;
};

export function LogoLockup({
  name,
  className,
  compact = false,
  variant = "default",
}: LogoLockupProps) {
  const textColor =
    variant === "inverse" || variant === "accent"
      ? "text-[var(--process-text)]"
      : "text-[var(--foreground)]";
  const subColor =
    variant === "inverse" || variant === "accent"
      ? "text-[color:var(--process-muted)]"
      : "text-[var(--muted)]";

  return (
    <span className={`inline-flex items-center ${compact ? "gap-2.5" : "gap-3.5"} ${className ?? ""}`}>
      <LogoMark size={compact ? 34 : 42} variant={variant} />
      <span className="flex flex-col">
        <span
          className={`font-semibold tracking-[-0.04em] ${compact ? "text-base" : "text-lg"} ${textColor}`}
        >
          {name}
        </span>
        <span
          className={`font-mono uppercase tracking-[0.18em] ${compact ? "text-[0.62rem]" : "text-[0.68rem]"} ${subColor}`}
        >
          Разработчик с продуктовым мышлением
        </span>
      </span>
    </span>
  );
}