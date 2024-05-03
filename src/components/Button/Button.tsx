import { ButtonHTMLAttributes, ReactElement } from "react";
import { twMerge } from "tailwind-merge";

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
  md: "",
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
  };
export const Button = ({
  type = "button",
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) => {
  return (
    <button className={twMerge(variant, size, "")} type={type} {...props}>
      {props.children}
    </button>
  );
};
