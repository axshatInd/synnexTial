import React from "react";
import Image from "next/image";

function Logo2() {
  return (
    <div className="flex items-center gap-1 ml-4">
      <Image src={"/logo.svg"} alt="Logo" width={50} height={50} />
    </div>
  );
}

export default Logo2;
