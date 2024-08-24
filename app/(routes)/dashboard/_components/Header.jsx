import Logo from "@/app/_components/Logo";
import { UserButton } from "@clerk/nextjs";
import React from "react";

function Header() {
  return (
    <div className="flex justify-between items-center">
      <Logo />

      <UserButton />
    </div>
  );
}

export default Header;
