import React from "react";
import Logo2 from "./Logo2";
import { Bell } from "lucide-react";

function SideNav() {
  return (
    <div className="h-screen md:w-72 hidden md:block fixed bg-slate-50 rounded-xl">
      <div className="flex justify-between items-center">
        <Logo2 />
        <Bell className="h-5 w-5 pr-3" />
      </div>
    </div>
  );
}

export default SideNav;
