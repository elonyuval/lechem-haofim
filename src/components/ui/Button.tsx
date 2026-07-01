import { forwardRef, type ButtonHTMLAttributes } from "react";
import clsx from "clsx";

export type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-crust-500 text-white hover:bg-crust-600 shadow-lg shadow-crust-500/30",
  secondary:
    "bg-white text-crust-700 border border-crust-300 hover:bg-crust-50",
  ghost: "bg-transparent text-crust-700 hover:bg-crust-100",
};

export function getButtonClasses(variant: ButtonVariant = "primary", className?: string) {
  return clsx(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
    variantClasses[variant],
    className,
  );
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className, ...props }, ref) => (
    <button ref={ref} className={getButtonClasses(variant, className)} {...props} />
  ),
);
Button.displayName = "Button";
