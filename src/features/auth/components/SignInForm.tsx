import { Button } from "@/components/Button";
import { Form, InputField } from "@/components/Form";
import { Link, useNavigation } from "react-router-dom";
import * as z from "zod";
import { SignInCredentialsDTO } from "../api/signIn";
const schema = z.object({
  email: z.string().email().min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
});
export const SignInForm = () => {
  const navigation = useNavigation();
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
          <Button loading={navigation.state === "submitting"} type="submit">
            Sign In
          </Button>
          <p className="text-sm  mt-2">
            Don't have an account?{" "}
            <Link to={"../signup"} className="inline italic">
              Signup
            </Link>
          </p>
        </>
      )}
    </Form>
  );
};
