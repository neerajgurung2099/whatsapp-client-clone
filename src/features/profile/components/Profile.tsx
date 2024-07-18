import { Avatar } from "@/components/Avatar";
import { SidebarContent } from "@/components/Layout";
import { AppLoaderData } from "@/types";
import { useRouteLoaderData } from "react-router-dom";
export const Profile = () => {
  const { user } = useRouteLoaderData("app") as AppLoaderData;
  return (
    <SidebarContent title="Profile">
      <div className="flex flex-col gap-y-8 items-center">
        <Avatar size="lg" />
        <div className="w-full flex flex-col gap-y-3">
          <label className="text-sm text-green-600">Your name</label>
          <span>{user.name}</span>
        </div>
        <div className="w-full flex flex-col gap-y-3">
          <label className="text-sm text-green-600">About</label>
          <span>{user.status}</span>
        </div>
      </div>
    </SidebarContent>
  );
};
