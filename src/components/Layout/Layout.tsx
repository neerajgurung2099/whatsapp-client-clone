import { AiOutlineUser } from "react-icons/ai";
import { PiBroadcast } from "react-icons/pi";
import { IoFilterSharp } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
const SearchInput = () => {
  return (
    <div className="w-full flex p-2 rounded-lg  gap-x-2 bg-blackpearl items-center ">
      <IoIosSearch size={20} />
      <input
        className="bg-transparent outline-none w-full "
        placeholder="Search"
      />
    </div>
  );
};
const Sidebar = () => {
  let chatList = [];
  for (let i = 0; i < 100; i++) {
    chatList.push(`Neeraj${Math.floor(Math.random() * (10 - 1 + 1) + 1)}`);
  }
  return (
    <div className="flex flex-col min-w-[350px] w-1/3  h-full border-r border-slate-500 text-white">
      <div className="flex-shrink-0 bg-blackpearl h-16 flex justify-between items-center px-4">
        <div className="bg-gray-500 rounded-3xl p-2">
          <AiOutlineUser size={25} />
        </div>
        <div className="">
          <PiBroadcast size={25} />
        </div>
      </div>
      <div className="flex-shrink-0 flex gap-x-4  items-center p-2">
        <SearchInput />
        <IoFilterSharp className="text-slate-500" size={20} />
      </div>
      <ul className="scrollbar flex-grow overflow-auto  ">
        {chatList.map((value) => (
          <li className="flex items-center gap-x-2 p-2 hover:bg-oxfordblue">
            <div className="bg-gray-500 rounded-3xl p-2">
              <AiOutlineUser size={25} />
            </div>
            <div className=" flex flex-col gap-y-1">
              <span className="text-lg">User Name</span>
              <p className="text-sm">Last message </p>
            </div>
          </li>
        ))}
      </ul>
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
