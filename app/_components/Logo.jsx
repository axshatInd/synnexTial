import React from "react";
import Image from "next/image";

function Logo() {
  return (
    <div className="flex items-center gap-1">
      <Image src={"/logo.svg"} alt="Logo" width={30} height={30} />
      <h2 className="font-semibold text-xl">synnex</h2>
    </div>
  );
}

export default Logo;
