import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { SidebarContent } from "@/components/Layout";
export const Profile = () => {
  const navigate = useNavigate();
  return (
    <SidebarContent title="Profile">
      <span>This is profile page </span>
      <button onClick={() => navigate("../chats")}>Go to chat</button>
    </SidebarContent>
  );
};
