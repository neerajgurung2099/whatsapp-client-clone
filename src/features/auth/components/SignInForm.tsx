import { Form, InputField } from "@/components/Form";
import * as z from "zod";
import { SignInCredentialsDTO } from "../api/signIn";
import { Button } from "@/components/Button";
const schema = z.object({
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
  userName: z.string().min(1, "User name is required"),
});
export const SignInForm = () => {
  return (
    <Form<SignInCredentialsDTO, typeof schema> schema={schema}>
      {({ register, formState }) => (
        <>
          <InputField
            label="Email"
            type="email"
            placeholder="Enter your email address"
            registration={register("email")}
            error={formState.errors["email"]}
          />
          <Button type="submit">Sign In</Button>
        </>
      )}
    </Form>
  );
};
