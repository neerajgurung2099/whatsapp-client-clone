import { AnimatePresence } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { BiMessageRoundedDots, BiSolidCommentAdd } from "react-icons/bi";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { MdOutlineGroups } from "react-icons/md";
import { PiBroadcast } from "react-icons/pi";
import { SlOptionsVertical } from "react-icons/sl";
import { Avatar } from "../../../components/Avatar";
import { SidebarDrawer } from "./SidebarDrawer";
import { useSidebarHistoryStore } from "@/stores/sidebarHistory";
import { Profile } from "@/features/profile";
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
  const { push } = useSidebarHistoryStore();
  return (
    <header className="w-full flex-shrink-0 bg-blackpearl h-16 flex justify-between items-center px-4">
      <Avatar
        onClick={() => {
          push(<Profile />);
        }}
      />
      <ul className="flex items-center  gap-x-4 ">
        {headerItems.map((item) => (
          <li
            key={item.name}
            className="group text-slate-300  cursor-pointer relative"
          >
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
export const SidebarLayout = () => {
  const { current } = useSidebarHistoryStore();
  let chatList = [];
  for (let i = 0; i < 100; i++) {
    chatList.push(`Neeraj${Math.floor(Math.random() * (10 - 1 + 1) + 1)}`);
  }
  return (
    <>
      <div className="bg-tangaroa flex flex-col w-[423px] shrink-0 h-full border-r border-gray-800  text-white relative overflow-hidden ">
        <AnimatePresence>
          {current() ? <SidebarDrawer /> : null}
        </AnimatePresence>
        <SidebarHeader />
        <div className="flex-shrink-0 flex gap-x-4  items-center p-2">
          <SearchInput />
        </div>
      </div>
    </>
  );
};
