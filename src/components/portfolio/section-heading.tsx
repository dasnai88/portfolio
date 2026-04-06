type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div
      className={`max-w-3xl ${isCentered ? "mx-auto text-center" : ""}`}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)] sm:text-4xl lg:text-[3.15rem]">
        {title}
      </h2>
      <p className="mt-5 text-base leading-7 text-[var(--muted)] sm:text-lg">
        {description}
      </p>
    </div>
  );
}
