import { ReactNode } from "react";
import { FieldError } from "react-hook-form";

const variants = {
  row: "flex-row ",
  column: "flex-col",
};
type FieldWrapperProps = {
  variant?: keyof typeof variants;
  children: ReactNode;
  error: FieldError | undefined;
  label: string;
};
export type FieldWrapperPassThroughProps = Omit<FieldWrapperProps, "children">;

export const FieldWrapper = ({
  children,
  variant = "column",
  error,
  label,
}: FieldWrapperProps) => {
  return (
    <div className="flex flex-col gap-y-2">
      <div className={`flex ${variants[variant]}`}>
        <label>{label}</label>
        {children}
      </div>
      <span className="text-sm text-red-500"> {error?.message}</span>
    </div>
  );
};
