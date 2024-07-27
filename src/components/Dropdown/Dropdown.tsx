import { motion } from "framer-motion";

const variants = {
  open: {
    scale: 1,
  },
  closed: {
    scale: 0,
    display: "hidden",
  },
};

type MenuItem = {
  name: string;
  onClick: () => void;
};
type DropDownProps = {
  items: MenuItem[];
};
export const Dropdown = ({ items }: DropDownProps) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      variants={variants}
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
        e.stopPropagation()
      }
      className="w-52  h-auto py-4 flex flex-col gap-y-2 bg-blackpearl rounded-sm absolute top-[110%] right-[50%] z-50 origin-top-right "
    >
      {items.map((item) => (
        <div
          key={item.name}
          className="bg-blackpearl hover:bg-tangaroa p-3 pl-5 "
          onClick={item.onClick}
        >
          <span className="text-md select-none">{item.name}</span>
        </div>
      ))}
    </motion.div>
  );
};
