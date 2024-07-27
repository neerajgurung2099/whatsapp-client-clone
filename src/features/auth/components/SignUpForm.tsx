import { Button } from "@/components/Button";
import { Form, InputField } from "@/components/Form";
import { Link, useNavigation } from "react-router-dom";
import * as z from "zod";
import { SignUpCredentialsDTO } from "../api/signUp";
const schema = z
  .object({
    email: z.string().email().min(1, "Email is required"),
    password: z
      .string()
      .min(1, "Password is required")
      .regex(
        /^(?=.*[!@#$%^&*])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        "Password must contain 1 uppercase, lowercase, special character & number"
      ),
    confirmPassword: z.string(),
    name: z.string().min(1, "Username is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password doesn't match",
    path: ["confirmPassword"],
  });
type SignUpValues = SignUpCredentialsDTO & {
  confirmPassword: string;
};
export const SignUpForm = () => {
  const navigation = useNavigation();
  return (
    <Form<SignUpValues, typeof schema> schema={schema}>
      {({ register, formState }) => (
        <>
          <InputField
            type="email"
            label="Email"
            placeholder="Enter your email address"
            registration={register("email")}
            error={formState.errors["email"]}
          />
          <InputField
            label="UserName"
            placeholder="Enter your name"
            registration={register("name")}
            error={formState.errors["name"]}
          />
          <InputField
            type="password"
            label="Password"
            placeholder="Enter your password"
            registration={register("password")}
            error={formState.errors["password"]}
          />
          <InputField
            type="password"
            label="Confirm Password"
            placeholder="Enter your password"
            registration={register("confirmPassword")}
            error={formState.errors["confirmPassword"]}
          />
          <Button loading={navigation.state === "loading"} type="submit">
            SignUp
          </Button>
          <p className="text-sm mt-2">
            Already have an account?{" "}
            <Link to={"../signin"} className="italic inline">
              SignIn
            </Link>
          </p>
        </>
      )}
    </Form>
  );
};
