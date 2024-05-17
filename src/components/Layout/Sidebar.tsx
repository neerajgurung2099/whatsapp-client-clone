import { AiOutlineUser } from "react-icons/ai";
import { PiBroadcast } from "react-icons/pi";
import { IoFilterSharp } from "react-icons/io5";
import { IoIosSearch, IoIosArrowDown } from "react-icons/io";
import { useAuth } from "@/stores/auth";
import { Link, Outlet, useLocation, useOutlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { cloneElement } from "react";

const SearchInput = () => {
  const { removeUser } = useAuth();
  return (
    <div className="w-full flex p-2 rounded-lg  gap-x-2 bg-blackpearl items-center ">
      <IoIosSearch size={20} />
      <input
        className="bg-transparent outline-none w-full "
        placeholder="Search"
      />
      <button onClick={() => removeUser()}>Logout</button>
    </div>
  );
};
export const SidebarLayout = () => {
  const location = useLocation();
  const outlet = useOutlet();
  let chatList = [];
  for (let i = 0; i < 100; i++) {
    chatList.push(`Neeraj${Math.floor(Math.random() * (10 - 1 + 1) + 1)}`);
  }
  return (
    <div className="bg-tangaroa flex flex-col min-w-[350px] w-1/3  h-full border-r border-slate-500 text-white relative overflow-hidden">
      <AnimatePresence>
        {outlet && cloneElement(outlet, { key: location.pathname })}
      </AnimatePresence>
      <div className="flex-shrink-0 bg-blackpearl h-16 flex justify-between items-center px-4">
        <Link to={"/profile"} className="bg-gray-500 rounded-3xl p-2">
          <AiOutlineUser size={25} />
        </Link>
        <div className="">
          <PiBroadcast size={25} />
        </div>
      </div>
      <div className="flex-shrink-0 flex gap-x-4  items-center p-2">
        <SearchInput />
        <IoFilterSharp className="text-slate-500" size={20} />
      </div>
      <ul className="scrollbar flex-grow overflow-auto">
        {chatList.map((value) => (
          <li className="group flex items-center gap-x-3 p-2 hover:bg-oxfordblue cursor-pointer">
            <div className="bg-gray-500 rounded-3xl p-2">
              <AiOutlineUser size={25} />
            </div>
            <div className=" flex flex-col gap-y-1 grow">
              <span className="text-lg">User Name</span>
              <p className="text-sm text-slate-500">Last message </p>
            </div>
            <div className="flex flex-col items-end text-slate-500">
              <span className="text-sm">1:23 PM</span>
              <IoIosArrowDown
                onClick={() => console.log("clicked")}
                className="opacity-0 invisible translate-x-2 group-hover:opacity-100 group-hover:visible group-hover:translate-x-0 transition-all "
                size={25}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
