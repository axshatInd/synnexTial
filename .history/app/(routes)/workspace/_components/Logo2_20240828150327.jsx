import React from "react";
import Image from "next/image";
import { Dancing_Script } from "next/font/google";

const dancing_script = Dancing_Script({ subsets: ["latin"] });

function Logo2() {
  return (
    <div className="flex items-center gap-1">
      <Image src={"/logo1.svg"} alt="Logo" width={30} height={30} />
    </div>
  );
}

export default Logo2;