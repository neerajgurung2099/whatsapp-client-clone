import { AiOutlineUser } from "react-icons/ai";
import { IoMdPeople } from "react-icons/io";
import { twMerge } from "tailwind-merge";
const sizes = {
  sm: "h-10 w-10",
  md: "",
  lg: "",
};
type AvatarProps = {
  src?: string;
  isGroup?: boolean;
  size?: keyof typeof sizes;
};
export const Avatar = ({ src, isGroup, size = "sm" }: AvatarProps) => {
  if (src) {
    return (
      <img src={src} className={twMerge("rounded-3xl", sizes[size])} alt="" />
    );
  }
  return (
    <div className={twMerge(sizes[size], "p-2 bg-slate-500 rounded-3xl")}>
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
