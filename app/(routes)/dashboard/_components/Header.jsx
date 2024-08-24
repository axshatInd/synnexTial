import Logo from "@/app/_components/Logo";
import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div>
      <Image src={"/logo.svg"} alt="Logo" width={30} height={30} />
    </div>
  );
}

export default Header;
