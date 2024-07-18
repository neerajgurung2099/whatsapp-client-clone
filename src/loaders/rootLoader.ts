import { storage } from "@/utils/storage";
import { redirect } from "react-router-dom";

export const rootLoader = () => {
  if (!storage.getToken()) {
    return redirect("/auth/signin");
  } else {
    return redirect("/app");
  }
};
