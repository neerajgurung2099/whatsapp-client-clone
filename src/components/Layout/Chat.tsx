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
          <ul className="py-2  gap-y-2 z-20 relative w-full px-4 flex flex-col h-full overflow-hidden ">
            <li className="flex justify-center px-20">
              <span className="text-sm p-2 bg-slate-800 rounded-lg">
                6/3/2024
              </span>
            </li>
            <li className="flex px-4">
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 137 95"
                  fill="currentColor"
                  className="text-mosque absolute top-[-46%] left-[-10px]  "
                >
                  <path d="M136.296 92.2192C136.296 93.8254 134.498 94.7763 133.171 93.8725L1.367 4.15331C-0.260568 3.04542 0.523561 0.5 2.49241 0.5H134.296C135.401 0.5 136.296 1.39543 136.296 2.5V92.2192Z" />
                </svg>
                <span className="bg-mosque p-2 rounded-lg rounded-tl-none">
                  Hello world
                </span>
              </div>
            </li>
            <li className="flex px-4">
              <div className="relative p-2 rounded-tl-none text-sm bg-mosque flex flex-col rounded-lg max-w-[80%] w-fit ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 137 95"
                  fill="currentColor"
                  className="text-mosque absolute top-[-7%] left-[-10px] "
                >
                  <path d="M136.296 92.2192C136.296 93.8254 134.498 94.7763 133.171 93.8725L1.367 4.15331C-0.260568 3.04542 0.523561 0.5 2.49241 0.5H134.296C135.401 0.5 136.296 1.39543 136.296 2.5V92.2192Z" />
                </svg>
                <span className="">
                  THis is message This is long long long long long THis is
                  message
                  <span className="invisible inline-block w-20"></span>
                </span>
                <div className="-mt-1 -mb-1 flex items-center gap-x-1">
                  <span className="text-xs text-slate-400 ml-auto  -mt-1 -mb-1  ">
                    10:29AM
                  </span>
                  <LiaCheckDoubleSolid size={18} className="text-slate-400" />
                </div>
              </div>
            </li>
            <li className="flex px-4 justify-end">
              <div className="relative p-2 rounded-tr-none text-sm bg-mosque flex flex-col rounded-lg max-w-[80%] w-fit ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 137 95"
                  fill="currentColor"
                  className="text-mosque absolute top-[-7%] right-[-10px] "
                >
                  <path d="M0.851929 92.2192C0.851929 93.8254 2.64961 94.7763 3.97734 93.8725L135.781 4.15331C137.409 3.04542 136.625 0.5 134.656 0.5H2.85193C1.74736 0.5 0.851929 1.39543 0.851929 2.5V92.2192Z" />
                </svg>
                <span className="">
                  THis is message This is long long long long long THis is
                  message
                  <span className="invisible inline-block w-20"></span>
                </span>
                <div className="-mt-1 -mb-1 flex items-center gap-x-1">
                  <span className="text-xs text-slate-400 ml-auto  -mt-1 -mb-1  ">
                    10:29AM
                  </span>
                  <LiaCheckDoubleSolid size={18} className="text-slate-400" />
                </div>
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
