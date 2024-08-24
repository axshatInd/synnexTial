import React from "react";
import Image from "next/image";

function Logo() {
  return (
    <div className="flex items-center gap-1">
      <Image src={"/logo.svg"} alt="Logo" width={30} height={30} />
      <h2 className="font-semibold text-xl bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-700 bg-clip-text text-transparent">
        synnex
      </h2>
    </div>
  );
}

export default Logo;
