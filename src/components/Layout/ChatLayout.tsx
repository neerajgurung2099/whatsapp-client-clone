import { FaMicrophone } from "react-icons/fa";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { IoIosAdd } from "react-icons/io";
import { LiaCheckDoubleSolid } from "react-icons/lia";
import { SlOptionsVertical } from "react-icons/sl";
import { Link } from "react-router-dom";
import { Avatar } from "../Avatar";
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
          <li
            key={item.name}
            className="group text-slate-300  cursor-pointer relative"
          >
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
          <HiOutlineEmojiHappy size={25} className="text-slate-400 " />
        </li>
        <li>
          <IoIosAdd size={35} className="text-slate-400" />
        </li>
        <li className="flex-grow">
          <input
            className="py-2 px-3 text-sm w-full  rounded-lg bg-slate-700 outline-none"
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
const ChatBox = () => {
  return (
    <div className="bg-[#0B141A] flex-grow relative">
      <div className="z-10 opacity-5 bg-repeat  absolute top-0  w-full h-full bg-chat-background"></div>
      <ul className="py-2  gap-y-2 z-20 relative w-full px-4 flex flex-col h-full overflow-hidden ">
        <li className="flex justify-center px-20">
          <span className="text-sm p-2 bg-slate-800 rounded-lg">6/3/2024</span>
        </li>
        <li className="flex px-4">
          <div className="relative p-2 rounded-tl-none text-sm bg-mosque flex flex-col rounded-lg max-w-[80%] w-fit ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="10"
              viewBox="0 0 11 6"
              fill="currentColor"
              className="text-mosque absolute top-0 -left-[10px]"
              preserveAspectRatio="none"
            >
              <path d="M11 4.48346C11 5.20138 10.2659 5.68541 9.60608 5.40261L1.47801 1.91915C0.478481 1.49078 0.784471 0 1.87193 0H10C10.5523 0 11 0.447715 11 1L11 4.48346Z" />
            </svg>
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
          </div>
        </li>
        <li className="flex px-4 justify-end">
          <div className="relative p-2 rounded-tr-none text-sm bg-mosque flex flex-col rounded-lg max-w-[80%] w-fit ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="6"
              viewBox="0 0 11 6"
              fill="currentColor"
              className="text-mosque absolute top-0 right-[-10px] "
              preserveAspectRatio="none"
            >
              <path d="M0 4.48346C0 5.20138 0.734051 5.68541 1.39392 5.40261L9.52199 1.91915C10.5215 1.49078 10.2155 0 9.12807 0H1C0.447716 0 0 0.447715 0 1L0 4.48346Z" />
            </svg>
            <span className="">
              THis is message This is long long long long long THis is message
              sdaf jkl dasdfas ds faa sdfasdf asd fsd f sdaf sdfaaf sdasdf sdf s
              df sdf asdf sdaf f asdf s adf asdfasdf asdf ;lkjsadf a sdfaasdf sd
              afsdf a asdf sdf sdfas dfa sdfasd f asdf sdaf sdf a sdfasdf a sdfa
              sdfasd f sdf sdf sdf sdf sdf sdf sdf
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
              width="11"
              height="6"
              viewBox="0 0 11 6"
              fill="currentColor"
              className="text-mosque absolute top-0 right-[-10px] "
              preserveAspectRatio="none"
            >
              <path d="M0 4.48346C0 5.20138 0.734051 5.68541 1.39392 5.40261L9.52199 1.91915C10.5215 1.49078 10.2155 0 9.12807 0H1C0.447716 0 0 0.447715 0 1L0 4.48346Z" />
            </svg>
            <span className="">
              THis is message This is long long long long long THis is message
              sdaf jkl dasdfas ds faa sdfasdf asd fsd f sdaf sdfaaf sdasdf sdf s
              df sdf asdf sdaf f asdf s adf
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
              width="11"
              height="6"
              viewBox="0 0 11 6"
              fill="currentColor"
              className="text-mosque absolute top-0 right-[-10px] "
              preserveAspectRatio="none"
            >
              <path d="M0 4.48346C0 5.20138 0.734051 5.68541 1.39392 5.40261L9.52199 1.91915C10.5215 1.49078 10.2155 0 9.12807 0H1C0.447716 0 0 0.447715 0 1L0 4.48346Z" />
            </svg>
            <span className="">
              THis is message This is long long long long long THis is message
              sdaf jkl dasdfas ds faa sdfasdf asd fsd f sdaf sdfaaf sdasdf sdf s
              df sdf asdf sdaf f asdf s adf
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
  );
};
export const ChatLayout = () => {
  return (
    <>
      <div className="text-white flex flex-col h-full grow transition-all">
        <Header />
        <ChatBox />
        <Footer />
      </div>
    </>
  );
};
