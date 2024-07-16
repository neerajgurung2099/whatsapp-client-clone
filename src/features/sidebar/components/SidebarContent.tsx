import { useSidebarHistoryStore } from "@/stores/sidebarHistory";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { HiArrowLeft } from "react-icons/hi";
type SidebarContentProps = {
  children: ReactNode;
  title: string;
};
const variants = {
  enter: {
    x: 100,
  },
  center: {
    zIndex: 1,
    x: 0,
  },
  exit: {
    zIndex: 0,
    x: -100,
  },
};
export const SidebarContent = ({ children, title }: SidebarContentProps) => {
  const { pop } = useSidebarHistoryStore();
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: "0" }}
      exit={{ x: "100%" }}
      transition={{
        type: "tween",
      }}
      className="absolute top-0 left-0 right-0 bottom-0"
    >
      <header className="w-full h-28 bg-blackpearl flex items-end p-4">
        <div className="flex gap-x-9 w-full items-center ">
          <HiArrowLeft
            size={22}
            className="cursor-pointer"
            onClick={() => pop()}
          />
          <h1 className="text-xl font-semibold">{title}</h1>
        </div>
      </header>
      <div className="h-full p-4">{children}</div>
    </motion.div>
  );
};
