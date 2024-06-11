import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, cloneElement } from "react";
import { useLocation, useOutlet } from "react-router-dom";
type SidebarContentProps = {
  children?: ReactNode;
};
export const SidebarDrawer = ({ children }: SidebarContentProps) => {
  const outlet = useOutlet();
  const location = useLocation();
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
      className="absolute top-0 bottom-0 left-0  border-r border-slate-500 bg-tangaroa z-10  xl:ml-8 xl:my-4 text-white w-[350px]  overflow-hidden"
    >
      <div className="relative w-full h-full">
        <AnimatePresence initial={false}>
          {outlet && cloneElement(outlet, { key: location.pathname })}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
