interface SectionHeadingProps {
  label: string;
  title: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeading({
  label,
  title,
  className = "",
  centered = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col gap-2 ${centered ? "text-center" : ""} ${className}`}
    >
      <h2 className="text-primary font-bold text-sm tracking-[0.2em] uppercase">
        {label}
      </h2>
      <h3 className="text-[#111418] dark:text-white text-3xl font-bold tracking-tight">
        {title}
      </h3>
    </div>
  );
}
