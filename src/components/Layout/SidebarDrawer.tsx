import { motion } from "framer-motion";
import { ReactNode } from "react";
type SidebarContentProps = {
  children: ReactNode;
};
export const SidebarDrawer = ({ children }: SidebarContentProps) => {
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
      className="absolute top-0 bottom-0 left-0  border-r border-slate-500 bg-tangaroa z-10  w-1/3 xl:w-[calc((100%-64px)*0.33333)] xl:ml-8 xl:my-4 text-white min-w-[350px]"
    >
      {children}
    </motion.div>
  );
};
