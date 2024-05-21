import { SlOptionsVertical } from "react-icons/sl";
import { Avatar } from "../Avatar";
import chatBackground from "@/assets/chat-background.png";
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
      <Avatar />
      <div className="flex-grow flex flex-col cursor-pointer">
        <span className="font-semibold">User name</span>
        <span className="text-xs ">last seen today at 6:30 PM</span>
      </div>
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
  return <footer className="w-full h-16 bg-blackpearl"></footer>;
};
export const ChatLayout = () => {
  return (
    <div className="text-white flex flex-col h-full grow">
      <Header />
      <div className="bg-[#0B141A] flex-grow relative">
        <img
          src={chatBackground}
          alt=""
          className="opacity-5 w-full h-full absolute object-cover"
        />
      </div>
      <Footer />
    </div>
  );
};
