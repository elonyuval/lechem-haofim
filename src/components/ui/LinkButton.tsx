import { Link, type LinkProps } from "react-router-dom";
import { getButtonClasses, type ButtonVariant } from "./Button";

interface LinkButtonProps extends LinkProps {
  variant?: ButtonVariant;
}

export function LinkButton({ variant = "primary", className, ...props }: LinkButtonProps) {
  return <Link className={getButtonClasses(variant, className)} {...props} />;
}
