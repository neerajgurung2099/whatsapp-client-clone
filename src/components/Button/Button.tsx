import { ButtonHTMLAttributes, ReactElement } from "react";
import { twMerge } from "tailwind-merge";
import { Spinner } from "../spinner";

const variants = {
  primary: "",
  secondary: "",
  success: "",
  danger: "",
  error: "",
  info: "",
};
const sizes = {
  sm: "",
  md: "p-2",
  lg: "",
};
type IconsProps =
  | { startIcon: ReactElement; endIcon?: never }
  | { startIcon?: never; endIcon: ReactElement }
  | { startIcon?: undefined; endIcon?: undefined };
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  IconsProps & {
    variant?: keyof typeof variants;
    className?: string;
    size?: keyof typeof sizes;
    loading?: boolean;
  };
export const Button = ({
  type = "button",
  variant = "primary",
  size = "md",
  loading = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "text-sm border rounded",
        variants[variant],
        sizes[size]
      )}
      type={type}
      {...props}
    >
      <div className="flex items-center justify-center gap-x-2">
        {loading ? <Spinner size="sm" /> : null} {props.children}
      </div>
    </button>
  );
};
