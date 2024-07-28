import { Chats } from "@/features/chat";
import { useSidebarHistoryStore } from "@/stores/sidebarHistory";
import { AnimatePresence } from "framer-motion";
import { SidebarDrawer } from "./SidebarDrawer";
import { SidebarHeader } from "./SidebarHeader";
import { InputField } from "./InputField";

export const SidebarLayout = () => {
  const { current } = useSidebarHistoryStore();
  let chatList = [];
  for (let i = 0; i < 100; i++) {
    chatList.push(`Neeraj${Math.floor(Math.random() * (10 - 1 + 1) + 1)}`);
  }
  return (
    <>
      <AnimatePresence>{current() ? <SidebarDrawer /> : null}</AnimatePresence>
      <div className="bg-tangaroa flex flex-col w-[423px] shrink-0 h-full border-r border-gray-800  text-white relative  ">
        <SidebarHeader />
        <div className="flex-shrink-0 flex gap-x-4  items-center p-2">
          <InputField />
        </div>
        <Chats />
      </div>
    </>
  );
};
