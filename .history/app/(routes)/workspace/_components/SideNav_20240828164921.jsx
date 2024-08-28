import React from "react";
import Logo2 from "./Logo2";
import { Bell } from "lucide-react";

function SideNav() {
  return (
    <div className="h-screen md:w-72 hidden md:block fixed bg-slate-50 dark:bg-black rounded-3xl z-40 shadow-2xl">
      <div className="flex justify-between items-center p-4">
        <Logo2 />
        <div className="relative">
          <Bell className="h-8 w-8 p-2 rounded-full bg-gray-200 dark:bg-white text-gray-800 dark:text-gray-200 shadow-md" />
        </div>
      </div>
      <hr className=" mt-0.20rem mb-0.10rem" />
    </div>
  );
}

export default SideNav;
