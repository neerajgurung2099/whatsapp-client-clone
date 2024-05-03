import { Outlet } from "react-router-dom";
import whatsAppLogo from "@/assets/whatsapp-logo.png";
export const Layout = () => {
  return (
    <>
      <header className=" h-56 bg-green-600 px-4 py-4 ">
        <div className="flex items-center gap-x-1 max-w-[800px] mx-auto ">
          <img src={whatsAppLogo} className="w-10 h-10" alt="WhatsApp Logo" />
          <h1 className="text-white font-semibold ">WHATSAPP WEB CLONE</h1>
        </div>
      </header>
      <main className="border shadow-lg mx-auto h-96 max-w-[800px] rounded-lg relative top-[-100px]  bg-white p-4">
        <Outlet />
      </main>
    </>
  );
};
