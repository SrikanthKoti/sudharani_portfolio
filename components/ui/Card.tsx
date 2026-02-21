interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({
  children,
  className = "",
  hover = false,
}: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-primary/10 bg-background-light dark:bg-background-dark flex flex-col gap-4 p-6 ${hover ? "hover:border-primary/50 transition-all group" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
