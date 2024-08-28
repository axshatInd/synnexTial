import React from "react";
import Logo2 from "./Logo2";
import { Bell } from "lucide-react";

function SideNav() {
  return (
    <div className="h-screen md:w-72 hidden md:block fixed bg-slate-50 dark:bg-slate-900 rounded-xl">
      <div className="flex justify-between items-center">
        <Logo2 />
        <Bell className="h-10 w-10 p-3 m-2 rounded-full shadow-md text-gray-800 dark:text-gray-200" />
      </div>
    </div>
  );
}

export default SideNav;
