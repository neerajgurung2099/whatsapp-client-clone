import { Dropdown } from "@/components/Dropdown";
import { Profile } from "@/features/profile";
import { useSidebarHistoryStore } from "@/stores/sidebarHistory";
import { auth } from "@/utils/auth";
import { motion } from "framer-motion";
import { ReactElement, useEffect, useRef, useState } from "react";
import {
  MdMoreVert,
  MdOutlineChat,
  MdOutlineGroups,
  MdOutlineWifiTethering,
} from "react-icons/md";
import { Avatar } from "../../../components/Avatar";
import { NewChat } from "@/features/chat";
const headerItems = [
  {
    name: "Communities",
    icon: MdOutlineGroups,
    size: 25,
  },
  {
    name: "Status",
    icon: MdOutlineWifiTethering,
    size: 25,
  },
  {
    name: "New Chat",
    icon: MdOutlineChat,
    size: 20,
    component: <NewChat />,
  },
  {
    name: "Menu",
    icon: MdMoreVert,
    size: 15,
  },
];

const dropDownMenuItems = [
  {
    name: "Logout",
    onClick: () => {
      auth.signOut();
    },
  },
];
const variants = {
  open: {
    backgroundColor: "#334155",
    transition: {
      delayChildren: 0.2,
    },
  },
  closed: {
    backgroundColor: "#00000000",
  },
};

export const SidebarHeader = () => {
  const { push } = useSidebarHistoryStore();
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const handleClick = (index: number) => {
    // if the active element is clicked set activeItem to null
    if (headerItems[index].component) {
      push(headerItems[index].component as ReactElement);
    }
    if (activeItem === index) {
      setActiveItem(null);
    } else {
      setActiveItem(index);
    }
  };
  const dropDownMenuRef = useRef<HTMLUListElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropDownMenuRef.current &&
      !dropDownMenuRef.current.contains(event.target as Node)
    ) {
      setActiveItem(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <header className="w-full flex-shrink-0 bg-blackpearl h-16 flex justify-between items-center px-4 relative">
      <Avatar
        onClick={() => {
          push(<Profile />);
        }}
      />
      <ul ref={dropDownMenuRef} className="flex items-center  gap-x-4 ">
        {headerItems.map((item, index) => (
          <motion.li
            variants={variants}
            animate={
              activeItem === index
                ? activeItem === headerItems.length - 1
                  ? "open"
                  : "closed"
                : "closed"
            }
            key={item.name}
            onClick={() => handleClick(index)}
            className={` text-slate-300  cursor-pointer relative rounded-[50%] p-2 `}
          >
            <div className="group">
              <item.icon key={item.name} size={22} />
              <div
                onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
                  e.stopPropagation()
                }
                className="invisible select-none z-50 opacity-0 bg-black group-hover:visible group-hover:opacity-100 absolute top-full left-full  p-1 border border-slate-500  w-max transition-all group-hover:delay-500 "
              >
                <span className="text-xs ">{item.name}</span>
              </div>
            </div>
            {index === headerItems.length - 1 ? (
              <Dropdown items={dropDownMenuItems} />
            ) : null}
          </motion.li>
        ))}
      </ul>
    </header>
  );
};

// resusable drop down
// when click on the set the state to show.
