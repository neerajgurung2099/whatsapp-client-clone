import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
export const ChatDrawer = () => {
  return (
    <div className="w-1/4 shrink-0 h-full border-l border-slate-500 ">
      <header className="w-full flex-shrink-0 bg-blackpearl h-16 flex gap-x-2  items-center px-4">
        <Link to={"/"}>
          <IoMdClose className="text-slate-400" size={25} />
        </Link>
        <span className="text-base text-white font-semibold">Contact info</span>
      </header>
    </div>
  );
};
