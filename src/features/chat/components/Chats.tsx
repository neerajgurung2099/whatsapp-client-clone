import { Avatar } from "@/components/Avatar";
import { AppLoaderData } from "@/types";
import { IoIosArrowDown } from "react-icons/io";
import { useRouteLoaderData } from "react-router-dom";

export const Chats = () => {
  const { chatList } = useRouteLoaderData("app") as AppLoaderData;
  return (
    <ul className="scrollbar flex-grow overflow-auto">
      {chatList.map((value, index) => (
        <li
          key={index}
          className="group flex items-center gap-x-3 p-2 hover:bg-oxfordblue cursor-pointer"
        >
          <Avatar />
          <div className=" flex flex-col gap-y-1 grow">
            <span className="text-semibold">User Name</span>
            <p className="text-sm text-slate-500">Last message </p>
          </div>
          <div className="flex flex-col items-end text-slate-500">
            <span className="text-sm">1:23 PM</span>
            <IoIosArrowDown
              className="opacity-0 invisible translate-x-2 group-hover:opacity-100 group-hover:visible group-hover:translate-x-0 transition-all "
              size={25}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};
