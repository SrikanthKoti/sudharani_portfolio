import Link from "next/link";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "primary-sm" | "primary-compact";
  className?: string;
  type?: "button" | "submit";
  fullWidth?: boolean;
}

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  type = "button",
  fullWidth = false,
}: ButtonProps) {
  const base =
    "flex cursor-pointer items-center justify-center font-bold transition-all";
  const variants = {
    primary:
      "min-w-[180px] h-14 px-6 rounded-xl bg-primary text-white text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1",
    secondary:
      "min-w-[180px] h-14 px-6 rounded-xl bg-white dark:bg-gray-800 border-2 border-primary/20 text-[#111418] dark:text-white hover:bg-primary/5",
    "primary-sm":
      "min-w-[120px] h-10 px-4 rounded-lg text-sm bg-primary text-white hover:bg-primary/90",
    "primary-compact":
      "px-8 py-3 rounded-xl bg-primary text-white hover:bg-primary/90",
  };
  const width = fullWidth ? "w-full" : "";
  const combined = `${base} ${variants[variant]} ${width} ${className}`;

  if (href) {
    return <Link href={href} className={combined}>{children}</Link>;
  }
  return (
    <button type={type} className={combined}>
      {children}
    </button>
  );
}
