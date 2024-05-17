import { Form, InputField } from "@/components/Form";
import * as z from "zod";
import { SignInCredentialsDTO } from "../api/signIn";
import { Button } from "@/components/Button";
import { Link, redirect, useActionData, useNavigate } from "react-router-dom";
import { UserResponse } from "../types";
import { useAuth } from "@/stores/auth";
import { useEffect } from "react";
const schema = z.object({
  email: z.string().email().min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
});
export const SignInForm = () => {
  const actionData = useActionData() as UserResponse;
  const { setUser } = useAuth();

  useEffect(() => {
    if (actionData) {
      setUser(actionData.user);
    }
  }, [actionData, setUser]);

  return (
    <Form<SignInCredentialsDTO, typeof schema>
      schema={schema}
      className="gap-2"
    >
      {({ register, formState }) => (
        <>
          <InputField
            label="Email"
            type="email"
            placeholder="Enter your email address"
            registration={register("email")}
            error={formState.errors["email"]}
          />
          <InputField
            label="Password"
            type="password"
            placeholder="Enter your password"
            registration={register("password")}
            error={formState.errors["password"]}
          />
          <Button type="submit">Sign In</Button>
          <p className="text-sm  mt-2">
            Don't have an account?{" "}
            <Link to={"/signup"} className="inline italic">
              Signup
            </Link>
          </p>
        </>
      )}
    </Form>
  );
};
