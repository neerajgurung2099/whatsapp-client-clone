import { SidebarDrawer } from "@/components/Layout";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const navigate = useNavigate();
  return (
    <SidebarDrawer>
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>Profile</h1>
    </SidebarDrawer>
  );
};
