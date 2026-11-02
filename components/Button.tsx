
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "text";
  className?: string;
};

const variants = {
  primary:
    "bg-brand text-white hover:bg-brand-hover border border-brand",
  secondary:
    "border border-border text-foreground hover:bg-surface-muted",
  text:
    "border-b border-current text-foreground hover:text-brand",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center px-6 py-3 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
