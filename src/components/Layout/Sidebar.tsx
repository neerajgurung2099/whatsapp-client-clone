import { AnimatePresence } from "framer-motion";
import { cloneElement } from "react";
import { BiMessageRoundedDots, BiSolidCommentAdd } from "react-icons/bi";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { MdOutlineGroups } from "react-icons/md";
import { PiBroadcast } from "react-icons/pi";
import { SlOptionsVertical } from "react-icons/sl";
import { Link, useLocation, useOutlet } from "react-router-dom";
import { Avatar } from "../Avatar";
const SearchInput = () => {
  return (
    <div className="w-full flex px-3 py-2 rounded-lg  gap-x-2 bg-blackpearl items-center ">
      <IoIosSearch size={20} />
      <input
        className="bg-transparent outline-none w-full "
        placeholder="Search"
      />
    </div>
  );
};

const SidebarHeader = () => {
  const headerItems = [
    {
      name: "Communities",
      icon: MdOutlineGroups,
      size: 25,
    },
    {
      name: "Status",
      icon: PiBroadcast,
      size: 25,
    },
    {
      name: "Channels",
      icon: BiMessageRoundedDots,
      size: 22,
    },
    {
      name: "New Chat",
      icon: BiSolidCommentAdd,
      size: 20,
    },
    {
      name: "Menu",
      icon: SlOptionsVertical,
      size: 15,
    },
  ];
  return (
    <header className="w-full flex-shrink-0 bg-blackpearl h-16 flex justify-between items-center px-4">
      <Link to={"/profile"}>
        <Avatar />
      </Link>
      <ul className="flex items-center  gap-x-4 ">
        {headerItems.map((item) => (
          <li className="group text-slate-300  cursor-pointer relative">
            <item.icon key={item.name} size={item.size} />
            <div className="invisible opacity-0 bg-black group-hover:visible group-hover:opacity-100 absolute top-full left-full  p-1 border border-slate-500  w-max transition-all group-hover:delay-500 ">
              <span className="text-xs ">{item.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </header>
  );
};
export const Sidebar = () => {
  const location = useLocation();
  const outlet = useOutlet();
  let chatList = [];
  for (let i = 0; i < 100; i++) {
    chatList.push(`Neeraj${Math.floor(Math.random() * (10 - 1 + 1) + 1)}`);
  }
  return (
    <>
      <AnimatePresence>
        {outlet && cloneElement(outlet, { key: location.pathname })}
      </AnimatePresence>
      <div className="bg-tangaroa flex flex-col min-w-[350px] w-1/4  h-full border-r border-slate-500 text-white relative ">
        <SidebarHeader />
        <div className="flex-shrink-0 flex gap-x-4  items-center p-2">
          <SearchInput />
        </div>
        <ul className="scrollbar flex-grow overflow-auto">
          {chatList.map((value) => (
            <li className="group flex items-center gap-x-3 p-2 hover:bg-oxfordblue cursor-pointer">
              <Avatar />
              <div className=" flex flex-col gap-y-1 grow">
                <span className="text-semibold">User Name</span>
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
    </>
  );
};
