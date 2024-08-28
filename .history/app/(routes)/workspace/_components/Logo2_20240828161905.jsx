import React from "react";
import Image from "next/image";

function Logo2() {
  return (
    <div className="flex items-center gap-1 p-1">
      <Image src={"/logo.svg"} alt="Logo" width={40} height={40} />
    </div>
  );
}

export default Logo2;
