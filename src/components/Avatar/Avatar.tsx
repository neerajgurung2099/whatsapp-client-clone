import { AiOutlineUser } from "react-icons/ai";
import { IoMdPeople } from "react-icons/io";
import { twMerge } from "tailwind-merge";
const sizes = {
  sm: "h-10 w-10",
  md: "h-20 w-20 ",
  lg: "h-40 w-40",
};
type AvatarProps = {
  src?: string;
  isGroup?: boolean;
  size?: keyof typeof sizes;
  onClick?: () => void;
};
export const Avatar = ({ src, isGroup, size = "sm", onClick }: AvatarProps) => {
  if (src) {
    return (
      <img src={src} className={twMerge("rounded-[50%]", sizes[size])} alt="" />
    );
  }
  return (
    <div
      className={twMerge(
        "p-2  bg-slate-500 hover:cursor-pointer rounded-[50%]",
        sizes[size]
      )}
      onClick={onClick}
    >
      {isGroup ? (
        <IoMdPeople className="w-full h-full" />
      ) : (
        <AiOutlineUser className="w-full h-full" />
      )}
    </div>
  );
};

// should show a profile picture
// should show a group or person icon if no profile picture is provided
