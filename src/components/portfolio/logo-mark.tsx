type LogoVariant = "default" | "inverse" | "accent";

type LogoMarkProps = {
  className?: string;
  size?: number;
  variant?: LogoVariant;
};

const palette = {
  default: {
    primary: "#171411",
    secondary: "#bd5f41",
    frame: "rgba(23, 20, 17, 0.14)",
  },
  inverse: {
    primary: "#f6efe7",
    secondary: "#f29d76",
    frame: "rgba(246, 239, 231, 0.2)",
  },
  accent: {
    primary: "#f6efe7",
    secondary: "#bd5f41",
    frame: "rgba(189, 95, 65, 0.28)",
  },
} as const;

export function LogoMark({
  className,
  size = 40,
  variant = "default",
}: LogoMarkProps) {
  const colors = palette[variant];

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      viewBox="0 0 56 56"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        height="47"
        rx="15"
        stroke={colors.frame}
        strokeWidth="1.5"
        width="47"
        x="4.5"
        y="4.5"
      />
      <path
        d="M19 14V42"
        stroke={colors.primary}
        strokeLinecap="round"
        strokeWidth="4.5"
      />
      <path
        d="M19 28L37 14"
        stroke={colors.secondary}
        strokeLinecap="round"
        strokeWidth="4.5"
      />
      <path
        d="M19 42H37"
        stroke={colors.primary}
        strokeLinecap="round"
        strokeWidth="4.5"
      />
      <circle cx="37" cy="14" fill={colors.secondary} r="3.25" />
    </svg>
  );
}
