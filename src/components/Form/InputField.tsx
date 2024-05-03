import { UseFormRegisterReturn } from "react-hook-form";
import { FieldWrapper, FieldWrapperPassThroughProps } from "./FieldWrapper";
import { HTMLInputTypeAttribute } from "react";
import { twMerge } from "tailwind-merge";

type InputFieldProps = FieldWrapperPassThroughProps & {
  className?: string;
  registration: Partial<UseFormRegisterReturn>;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
};
export const InputField = ({
  className,
  label,
  variant,
  error,
  placeholder,
  registration,
  type = "text",
}: InputFieldProps) => {
  return (
    <FieldWrapper error={error} label={label} variant={variant}>
      <input
        className={twMerge(
          "border p-2 text-sm outline-none rounded ",
          className
        )}
        type={type}
        placeholder={placeholder}
        {...registration}
      />
    </FieldWrapper>
  );
};
