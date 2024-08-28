import React from "react";
import Logo2 from "./Logo2";
import { Bell } from "lucide-react";

function SideNav() {
  return (
    <div className="h-screen md:w-72 hidden md:block fixed bg-slate-50 rounded-xl">
      <div>
        <Logo2 />
        <Bell />
      </div>
    </div>
  );
}

export default SideNav;
