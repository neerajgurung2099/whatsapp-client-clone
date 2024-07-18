import { storage } from "@/utils/storage";
import { redirect } from "react-router-dom";

export const authLoader = async () => {
  if (storage.getToken()) {
    return redirect("/app");
  }
  return null;
};
