import { useNotificationStore } from "@/stores/notification";
import { Notification } from "./Notification";
import { AnimatePresence } from "framer-motion";

export const Notifications = () => {
  const { notifications, dismissNotification } = useNotificationStore();
  return (
    <div
      className="z-50 fixed inset-0 flex flex-col space-y-4  py-6 px-4 items-end pointer-events-none"
      aria-live="assertive"
    >
      <AnimatePresence>
        {notifications.map((notification) => (
          <Notification
            key={notification.id}
            notification={notification}
            onDismiss={dismissNotification}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};
