import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
type SidebarContentProps = {
  children: ReactNode;
};
export const SidebarContent = ({ children }: SidebarContentProps) => {
  return (
    <motion.div
      key={"sideBarContentLayout"}
      initial={{ x: "-100%" }}
      animate={{ x: "0" }}
      exit={{
        x: "-100%",
        transition: {
          duration: 0.1,
        },
      }}
      transition={{
        ease: "easeOut",
        duration: 0.2,
      }}
      className="absolute top-0 bottom-0 left-0  bg-tangaroa z-10 w-full "
    >
      {children}
    </motion.div>
  );
};
