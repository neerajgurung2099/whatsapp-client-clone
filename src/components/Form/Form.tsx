import { ReactNode } from "react";
import {
  FieldValues,
  UseFormProps,
  UseFormReturn,
  useForm,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { twMerge } from "tailwind-merge";
import { useSubmit } from "react-router-dom";
import { ZodType, ZodTypeDef } from "zod";

type FormProps<TFormValues extends FieldValues, Schema> = {
  children: (methods: UseFormReturn<TFormValues>) => ReactNode;
  className?: string;
  schema?: Schema;
  options?: UseFormProps<TFormValues>;
};
export const Form = <
  TFormValues extends FieldValues,
  Schema extends ZodType<unknown, ZodTypeDef, unknown>
>({
  children,
  className,
  schema,
  options,
}: FormProps<TFormValues, Schema>) => {
  const submit = useSubmit();
  const methods = useForm<TFormValues>({
    ...options,
    resolver: schema && zodResolver(schema),
  });
  return (
    <form
      onSubmit={methods.handleSubmit((values) =>
        submit(values, {
          method: "post",
        })
      )}
      className={twMerge("flex flex-col gap-y-1", className)}
    >
      {children(methods)}
    </form>
  );
};
