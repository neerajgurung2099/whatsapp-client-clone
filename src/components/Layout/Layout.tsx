import { AiOutlineUser } from "react-icons/ai";
import { PiBroadcast } from "react-icons/pi";
const Sidebar = () => {
  return (
    <div className="min-w-[350px] w-1/3  h-full border-r border-slate-500">
      <div className="bg-blackpearl h-14 flex justify-between items-center px-4 text-white">
        <div className="bg-gray-500 rounded-3xl p-2">
          <AiOutlineUser size={20} />
        </div>
        <div className="">
          <PiBroadcast size={25} />
        </div>
      </div>
      <div></div>
    </div>
  );
};
export const Layout = () => {
  return (
    <div className=" xl:py-4  h-screen flex  justify-center  bg-slate-900 overflow-auto">
      <div className="flex h-full max-w-[1700px] w-full min-w-[600px] xl:px-8">
        <Sidebar />
        <div className=" h-full grow"></div>
      </div>
    </div>
  );
};
