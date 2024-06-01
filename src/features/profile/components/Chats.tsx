import { SidebarContent } from "@/components/Layout";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
export const Chats = () => {
  const navigate = useNavigate();
  return (
    <SidebarContent title="Chats">
      <motion.div
        initial={{ x: "1000" }}
        animate={{ x: "0" }}
        className="w-10 h-10  bg-red-500"
      ></motion.div>
      <button onClick={() => navigate(-1)}>Go back</button>
      <h1>Chats</h1>
    </SidebarContent>
  );
};
