import { HiOutlineEmojiHappy } from "react-icons/hi";
import { SlOptionsVertical } from "react-icons/sl";
import { Avatar } from "../Avatar";
import { IoIosAdd } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import { Link, useLocation, useOutlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { cloneElement } from "react";
import { LiaCheckDoubleSolid } from "react-icons/lia";
const Header = () => {
  const headerItems = [
    {
      name: "Menu",
      icon: SlOptionsVertical,
      size: 18,
    },
  ];
  return (
    <header className="px-4 flex gap-x-2 items-center justify-between w-full h-16 bg-blackpearl">
      <Link to={"contactinfo"} className="flex gap-x-2 cursor-pointer">
        <Avatar />
        <div className="flex-grow flex flex-col ">
          <span className="font-semibold">User name</span>
          <span className="text-xs ">last seen today at 6:30 PM</span>
        </div>
      </Link>
      <ul>
        {headerItems.map((item) => (
          <li className="group text-slate-300  cursor-pointer relative">
            <item.icon key={item.name} size={item.size} />
            <div className="invisible opacity-0 bg-black group-hover:visible group-hover:opacity-100 absolute top-full   p-1 border border-slate-500  w-max transition-all group-hover:delay-500 ">
              <span className="text-xs ">{item.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </header>
  );
};
const Footer = () => {
  return (
    <footer className="w-full h-16 bg-blackpearl">
      <ul className="flex items-center h-full gap-x-2 px-3 ">
        <li>
          <HiOutlineEmojiHappy size={28} className="text-slate-400 " />
        </li>
        <li>
          <IoIosAdd size={35} className="text-slate-400" />
        </li>
        <li className="flex-grow">
          <input
            className="py-2 px-3 text-sm w-full bg-transparent rounded-lg bg-slate-700 outline-none"
            placeholder="Type a message"
          />
        </li>
        <li>
          <FaMicrophone className="text-slate-400" size={20} />
        </li>
      </ul>
    </footer>
  );
};
export const ChatLayout = () => {
  const outlet = useOutlet();
  const location = useLocation();
  return (
    <>
      <div className="text-white flex flex-col h-full grow transition-all">
        <Header />
        <div className="bg-[#0B141A] flex-grow relative">
          <div className="z-10 opacity-5 bg-repeat  absolute top-0  w-full h-full bg-chat-background"></div>
          <ul className="py-2 z-20 relative w-full px-4 flex flex-col h-full overflow-hidden ">
            <li className="text-sm bg-mosque p-2 flex flex-col rounded-lg  max-w-[80%] w-fit">
              <span className="">
                THis is message This is long long long long long THis is message
                <span className="invisible inline-block w-20"></span>
              </span>
              <div className="-mt-1 -mb-1 flex items-center gap-x-1">
                <span className="text-xs text-slate-400 ml-auto  -mt-1 -mb-1  ">
                  10:29AM
                </span>
                <LiaCheckDoubleSolid size={18} className="text-slate-400" />
              </div>
            </li>
          </ul>
        </div>
        <Footer />
      </div>
      <AnimatePresence>
        {outlet && cloneElement(outlet, { key: location.pathname })}
      </AnimatePresence>
    </>
  );
};
