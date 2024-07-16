import { useSidebarHistoryStore } from "@/stores/sidebarHistory";
import { AnimatePresence, motion } from "framer-motion";
export const SidebarDrawer = () => {
  const { current } = useSidebarHistoryStore();
  return (
    <motion.div
      key={"sideBarContentLayout"}
      initial={{ x: "-100%" }}
      animate={{ x: "0" }}
      exit={{
        x: "-100%",
        transition: {
          duration: 0.3,
        },
      }}
      transition={{
        ease: "easeOut",
        duration: 0.2,
      }}
      className="absolute top-0 bottom-0 left-0  right-0  bg-tangaroa z-10   text-white  overflow-hidden"
    >
      <div className="relative w-full h-full">
        <AnimatePresence initial={false}>{current()}</AnimatePresence>
      </div>
    </motion.div>
  );
};
