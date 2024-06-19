import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  AiOutlineCheckCircle,
  AiOutlineClose,
  AiOutlineCloseCircle,
  AiOutlineExclamationCircle,
  AiOutlineInfoCircle,
} from "react-icons/ai";

const icons = {
  info: <AiOutlineInfoCircle className="text-blue-500" size={25} />,
  success: <AiOutlineCheckCircle size={25} className="text-green-500" />,
  warning: <AiOutlineExclamationCircle className="text-yellow-500" size={25} />,
  error: <AiOutlineCloseCircle className="text-red-500" size={25} />,
};

type NotificationProps = {
  notification: {
    id: string;
    type: keyof typeof icons;
    title: string;
    message?: string;
  };
  onDismiss: (id: string) => void;
};
export const Notification = ({
  notification: { id, title, type, message },
  onDismiss,
}: NotificationProps) => {
  useEffect(() => {
    setTimeout(() => {
      onDismiss(id);
    }, 5000);
  }, [onDismiss, id]);
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: "0" }}
      exit={{ x: "110%" }}
      className="flex gap-x-2 w-full items-center max-w-sm bg-white p-4 rounded pointer-events-auto border border-gray-300] [box-shadow:1px_1px_5px_-1px_black]"
      role="alert"
      aria-label={title}
    >
      {icons[type]}
      <div className="flex-1 select-none">
        <h2 className="text-sm font-semibold">{title}</h2>
        <p className="text-sm">{message}</p>
      </div>
      <AiOutlineClose
        size={20}
        className="cursor-pointer text-gray-400 hover:text-black"
        onClick={() => onDismiss(id)}
      />
    </motion.div>
  );
};
