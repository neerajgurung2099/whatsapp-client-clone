import { SidebarLayout } from "@/features/sidebar";
import { ChatLayout } from "./ChatLayout";

export const MainLayout = () => {
  return (
    <div className=" h-screen flex  justify-center  bg-slate-900 overflow-auto">
      <div className="flex h-full max-w-[1700px] w-full min-w-[600px] xl:px-8 xl:py-4 relative overflow-hidden">
        <SidebarLayout />
        <ChatLayout />
      </div>
    </div>
  );
};
