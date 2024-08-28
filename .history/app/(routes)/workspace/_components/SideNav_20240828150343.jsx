import React from "react";
import Logo2 from "./Logo2";

function SideNav() {
  return (
    <div className="h-screen md:w-72 hidden md:block fixed bg-slate-50 rounded-lg">
      <div>
        <Logo2 />
      </div>
    </div>
  );
}

export default SideNav;
