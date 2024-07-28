import { IoIosSearch } from "react-icons/io";

export const InputField = () => {
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
