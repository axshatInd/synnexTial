import Logo from "@/app/_components/Logo";
import React from "react";

function SideNav() {
  return (
    <div className="h-screen md:w-72 hidden md:block fixed bg-slate-50 rounded-lg">
      <Logo />
    </div>
  );
}

export default SideNav;
