type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div
      className={[
        "max-w-3xl",
        isCentered ? "mx-auto text-center" : "",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title mt-5 text-balance">{title}</h2>
      <p className="section-copy mt-6 max-w-2xl text-pretty">{description}</p>
    </div>
  );
}
