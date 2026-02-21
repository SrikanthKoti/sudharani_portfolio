import { Icon } from "./Icon";

interface BadgeProps {
  icon?: string;
  label: string;
  className?: string;
  size?: "default" | "small";
}

export function Badge({
  icon,
  label,
  className = "",
  size = "default",
}: BadgeProps) {
  const isSmall = size === "small";
  return (
    <div
      className={`flex items-center justify-center gap-x-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary border border-primary/20 ${isSmall ? "px-3 py-1 text-[10px]" : "h-9 px-4"} font-bold uppercase tracking-wider ${className}`}
    >
      {icon ? (
        <Icon name={icon} className={isSmall ? "text-[10px]" : "text-[18px]"} />
      ) : null}
      <span>{label}</span>
    </div>
  );
}
