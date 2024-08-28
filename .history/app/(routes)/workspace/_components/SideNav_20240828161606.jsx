import React from "react";
import Logo2 from "./Logo2";
import { Bell } from "lucide-react";

function SideNav() {
  return (
    <div className="h-screen md:w-72 hidden md:block fixed bg-slate-50 dark:bg-slate-900 rounded-xl">
      <div className="flex justify-between items-center p-4">
        <Logo2 />
        <div className="relative">
          <Bell className="h-10 w-10 p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-md" />
        </div>
      </div>
      <hr className="my-1" />
    </div>
  );
}

export default SideNav;
